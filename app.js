(() => {
  const EXPENSE_KEY = "scd_expenses_v1";
  const CHECK_KEY = "scd_quality_check_v1";

  const qualityItems = [
    { id: "Q01", title: "Campos obrigatórios validados", evidence: "Tentar salvar sem descrição, valor, categoria ou data." },
    { id: "Q02", title: "Valores negativos e zero bloqueados", evidence: "Testar -50,00, 0 e valores positivos." },
    { id: "Q03", title: "Somatório atualizado corretamente", evidence: "Cadastrar R$ 10,00 e R$ 15,00 e conferir R$ 25,00." },
    { id: "Q04", title: "Cadastro, edição e exclusão funcionam", evidence: "Executar o fluxo completo pela interface." },
    { id: "Q05", title: "Exclusão exige confirmação", evidence: "Cancelar e confirmar uma exclusão." },
    { id: "Q06", title: "Dados persistem após recarregar", evidence: "Cadastrar uma despesa e atualizar o navegador." },
    { id: "Q07", title: "Mensagens de retorno são claras", evidence: "Provocar operações válidas e inválidas." },
    { id: "Q08", title: "Interface responsiva e consistente", evidence: "Revisar rótulos, navegação e layout em tela estreita." },
    { id: "Q09", title: "Filtro por descrição ou categoria funciona", evidence: "Pesquisar termos existentes e inexistentes." }
  ];
  const risks = [
    ["Perda de dados no LocalStorage", "Média", "Alta", "Testar recarregamento e tratar erros de parsing."],
    ["Interface incompatível em telas móveis", "Média", "Média", "Usar CSS responsivo e validar no simulador."],
    ["Complexidade do escopo exceder o prazo", "Média", "Alta", "Manter somente o núcleo das funcionalidades."]
  ];
  const nonConformities = [
    { id: "NC01", description: "O sistema aceitava valores negativos ou zero.", severity: "Alta", status: "Corrigida" },
    { id: "NC02", description: "Dados não permaneciam após recarregar a página.", severity: "Alta", status: "Corrigida" }
  ];

  const form = document.getElementById("expense-form");
  const list = document.getElementById("expense-list");
  const feedback = document.getElementById("feedback");
  const search = document.getElementById("search");
  const idField = document.getElementById("expense-id");
  const formTitle = document.getElementById("form-title");
  const saveButton = document.getElementById("save-button");
  const cancelEdit = document.getElementById("cancel-edit");

  let expenses = loadJSON(EXPENSE_KEY, []);
  let checklistState = loadJSON(CHECK_KEY, {});

  function loadJSON(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "null");
      return value ?? fallback;
    } catch {
      return fallback;
    }
  }
  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      showMessage("Não foi possível salvar no armazenamento local.", "error");
      console.error(error);
    }
  }
  function val(id) { return document.getElementById(id).value.trim(); }
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  }
  function showMessage(message, type = "success") {
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
  }
  function clearMessage() {
    feedback.textContent = "";
    feedback.className = "feedback";
  }

  function getExpense() {
    return { description: val("description"), amount: val("amount"), category: val("category"), date: val("date") };
  }
  function validateExpense(expense, editingId = null) {
    const errors = [];
    if (!expense.description) errors.push("Informe a descrição.");
    const amount = Number(expense.amount);
    if (!expense.amount || !Number.isFinite(amount) || amount <= 0) {
      errors.push("Informe um valor maior que zero.");
    }
    if (!expense.category) errors.push("Selecione uma categoria.");
    if (!expense.date) {
      errors.push("Informe a data.");
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(expense.date)) {
      errors.push("Informe uma data válida.");
    }
    return errors;
  }
  function formatMoney(amount) {
    return Number(amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  function formatDate(date) {
    const parts = date.split("-");
    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : date;
  }

  function renderExpenses() {
    const term = search.value.trim().toLowerCase();
    const filtered = expenses.filter(expense =>
      expense.description.toLowerCase().includes(term) ||
      expense.category.toLowerCase().includes(term));

    document.getElementById("expense-count").textContent = String(filtered.length);
    if (!filtered.length) {
      list.innerHTML = `<tr><td colspan="5" class="empty">${expenses.length ? "Nenhum resultado para a busca." : "Nenhuma despesa cadastrada."}</td></tr>`;
    } else {
      list.innerHTML = filtered.map(expense => `
        <tr>
          <td><strong>${escapeHTML(expense.description)}</strong></td>
          <td>${formatMoney(expense.amount)}</td>
          <td>${escapeHTML(expense.category)}</td>
          <td>${formatDate(expense.date)}</td>
          <td><div class="row-actions">
            <button class="action-btn" data-action="edit" data-id="${expense.id}">Editar</button>
            <button class="action-btn delete" data-action="delete" data-id="${expense.id}">Excluir</button>
          </div></td>
        </tr>`).join("");
    }

    const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
    document.getElementById("expense-total").textContent = formatMoney(total);
    renderMetrics();
  }
  function resetForm() {
    form.reset();
    idField.value = "";
    formTitle.textContent = "Nova despesa";
    saveButton.textContent = "Salvar despesa";
    cancelEdit.hidden = true;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    clearMessage();
    const expense = getExpense();
    const editingId = idField.value || null;
    const errors = validateExpense(expense, editingId);
    if (errors.length) { showMessage(errors.join(" "), "error"); return; }

    if (editingId) {
      expenses = expenses.map(item => item.id === editingId
        ? { ...item, description: expense.description, amount: Number(expense.amount), category: expense.category, date: expense.date }
        : item);
      showMessage("Despesa atualizada com sucesso.");
    } else {
      const id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      expenses.push({ id, ...expense, amount: Number(expense.amount) });
      showMessage("Despesa cadastrada com sucesso.");
    }
    saveJSON(EXPENSE_KEY, expenses);
    resetForm();
    renderExpenses();
  });

  list.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const expense = expenses.find(item => item.id === button.dataset.id);
    if (!expense) return;

    if (button.dataset.action === "edit") {
      idField.value = expense.id;
      document.getElementById("description").value = expense.description;
      document.getElementById("amount").value = expense.amount;
      document.getElementById("category").value = expense.category;
      document.getElementById("date").value = expense.date;
      formTitle.textContent = "Editar despesa";
      saveButton.textContent = "Salvar alterações";
      cancelEdit.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (button.dataset.action === "delete") {
      if (!confirm(`Deseja realmente excluir a despesa "${expense.description}"?`)) return;
      expenses = expenses.filter(item => item.id !== expense.id);
      saveJSON(EXPENSE_KEY, expenses);
      resetForm();
      clearMessage();
      renderExpenses();
      showMessage("Despesa excluída com sucesso.");
    }
  });
  cancelEdit.addEventListener("click", () => { resetForm(); clearMessage(); });
  document.getElementById("clear-form").addEventListener("click", () => setTimeout(() => { resetForm(); clearMessage(); }, 0));
  search.addEventListener("input", renderExpenses);

  function renderQuality() {
    document.getElementById("quality-checklist").innerHTML = qualityItems.map(item => `
      <label class="check-item">
        <input type="checkbox" data-check="${item.id}" ${checklistState[item.id] ? "checked" : ""}>
        <span><b>${item.id} - ${item.title}</b><small>Evidência: ${item.evidence}</small></span>
      </label>`).join("");

    document.getElementById("quality-checklist").addEventListener("change", event => {
      const input = event.target.closest("input[data-check]");
      if (!input) return;
      checklistState[input.dataset.check] = input.checked;
      saveJSON(CHECK_KEY, checklistState);
      renderMetrics();
    });

    document.getElementById("risk-list").innerHTML = risks.map(risk =>
      `<tr><td>${risk[0]}</td><td>${risk[1]}</td><td>${risk[2]}</td><td>${risk[3]}</td></tr>`).join("");

    document.getElementById("nc-list").innerHTML = nonConformities.map(nc => {
      const statusOptions = ["Aberta", "Em tratamento", "Corrigida"].map(status =>
        `<option ${nc.status === status ? "selected" : ""}>${status}</option>`).join("");
      return `<tr><td>${nc.id}</td><td>${nc.description}</td><td>${nc.severity}</td>
        <td><select class="nc-status" aria-label="Status ${nc.id}" data-nc="${nc.id}">${statusOptions}</select></td></tr>`;
    }).join("");

    document.getElementById("nc-list").addEventListener("change", event => {
      const select = event.target.closest("select[data-nc]");
      if (!select) return;
      const nc = nonConformities.find(item => item.id === select.dataset.nc);
      nc.status = select.value;
      renderMetrics();
    });
  }

  function renderMetrics() {
    const completed = qualityItems.filter(item => checklistState[item.id]).length;
    document.getElementById("metric-expenses").textContent = String(expenses.length);
    document.getElementById("metric-checklist").textContent = `${Math.round(completed / qualityItems.length * 100)}%`;
    document.getElementById("metric-risks").textContent = String(risks.length);
    document.getElementById("metric-nc").textContent = String(nonConformities.filter(nc => nc.status !== "Corrigida").length);
  }

  document.querySelectorAll(".tab").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab === button));
    document.querySelectorAll(".tab-panel").forEach(panel =>
      panel.classList.toggle("active", panel.id === button.dataset.tab));
  }));

  renderQuality();
  renderExpenses();
})();
