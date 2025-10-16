const apiUrl = "http://localhost:5000/api/employees";

// Load employees
async function loadEmployees() {
    const res = await fetch(apiUrl);
    const data = await res.json();
    const tbody = document.querySelector("#employeeTable tbody");
    tbody.innerHTML = "";
    data.forEach(emp => {
        const row = `<tr>
      <td>${emp.employee_id}</td>
      <td>${emp.first_name} ${emp.last_name}</td>
      <td>${emp.email}</td>
      <td>${emp.department}</td>
      <td>${emp.position}</td>
      <td>
        <button onclick="deleteEmployee(${emp.employee_id})">Delete</button>
      </td>
    </tr>`;
        tbody.innerHTML += row;
    });
}

// Add employee
document.querySelector("#employeeForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const employee = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        gender: document.getElementById("gender").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        hire_date: document.getElementById("hire_date").value,
        department: document.getElementById("department").value,
        position: document.getElementById("position").value,
        salary: document.getElementById("salary").value,
        status: "Active"
    };
    await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    });
    alert("Employee Added!");
    e.target.reset();
    loadEmployees();
});

// Delete employee
async function deleteEmployee(id) {
    if (confirm("Are you sure?")) {
        await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
        loadEmployees();
    }
}

loadEmployees();
