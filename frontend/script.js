const API_URL = "http://localhost:5000";

class CustomForm extends HTMLElement {
  constructor() {
    super();
    this.form = this.querySelector("form");
    this.endpoint = this.getAttribute("endpoint");
    this.tableId = this.getAttribute("table-id");
    if (this.form) {
      this.handleSubmit = this.handleSubmit.bind(this);
      this.form.addEventListener("submit", this.handleSubmit);
    }
  }
  async handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(this.form);

    const payload = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => {
        const input = this.form.querySelector(`[name="${key}"]`);

        if (input?.type === "number") {
          return [key, value === "" ? null : Number(value)];
        }

        return [key, value];
      }),
    );
    try {
      const res = await fetch(`${API_URL}${this.endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("Created successfully");
        appendRow(this.tableId, Object.keys(data.data), data.data);
        this.form.reset();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
customElements.define("custom-form", CustomForm);

class CustomTable extends HTMLElement {
  constructor() {
    super();
    this.isOpen = false;
    this.endpoint = this.getAttribute("endpoint");
    this.table = this.querySelector("table");
    this.button = this.querySelector(".button");
    if (this.button) {
      this.button.addEventListener("click", this.handleClick.bind(this));
    }
  }
  async handleClick(e) {
    if (this.isOpen) {
      this.table.classList.add("hidden");
      this.isOpen = false;
      return;
    }

    await this.fetchData();

    this.table.classList.remove("hidden");
    this.isOpen = true;
  }

  async fetchData() {
    try {
      const res = await fetch(`${API_URL}${this.endpoint}`);
      const data = await res.json();

      if (data.success) {
        const rows = this.table.querySelectorAll("tbody tr");
        rows.forEach((row) => row.remove());
        data.data.forEach((item) => {
          appendRow(this.table.id, Object.keys(item), item);
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
}
customElements.define("custom-table", CustomTable);

const appendRow = (tableId, columns, data) => {
  const table = document.getElementById(tableId);
  const tbody = table.querySelector("tbody");

  const tr = document.createElement("tr");

  columns.forEach((col) => {
    const td = document.createElement("td");
    if (col === "approve") {
      if (data.approve === "Pending") {
        const btn = document.createElement("button");
        btn.textContent = data.approve;
        btn.addEventListener("click", () => approveLeave(data.id, tr));
        td.appendChild(btn);
      } else {
        td.textContent = data.approve;
      }
    } else {
      td.textContent = data[col] ?? "";
    }

    tr.appendChild(td);
  });

  tbody.appendChild(tr);
};

const approveLeave = async (id, rowElement) => {
  try {
    const res = await fetch(`${API_URL}/leave/${id}/approve`, {
      method: "PATCH",
    });

    const data = await res.json();

    if (data.success) {
      alert("Approved successfully");

      const lastCell = rowElement.lastElementChild;
      lastCell.textContent = "Approved";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};
