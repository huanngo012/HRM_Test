# HRM Test Project

A simple HR Management system including Backend API and Frontend UI.

---

# 📁 Project Structure

```
HRM_Test/
│
├── backend/
│   ├── package.json
│   └── src/
│
├── frontend/
│   ├── index.html
│   └── script.js
│
└── README.md
```

---

# 🚀 How to Run Backend

## 1. Navigate to backend folder

```bash
cd backend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Start server

```bash
npm start
```

Server will run at:

```
http://localhost:5000
```

---

# 🌐 How to Open Frontend

1. Navigate to `frontend` folder
2. Open:

```
index.html
```

You can:
- Double click `index.html`
- OR use Live Server extension in VS Code

Frontend will connect to:

```
http://localhost:5500
```

---

# 📡 Example API Usage

---

## 🔹 Get All Employees

### Endpoint

```
GET /employees
```

### Example

```
GET http://localhost:5000/employees
```

### Example using fetch

```javascript
fetch("http://localhost:5000/employees")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```
---

## 🔹 Get Employee By ID

### Endpoint

```
GET /employees/:id
```

### Example

```
GET http://localhost:5000/employees/123
```

---

## 🔹 Create Employee

### Endpoint

```
POST /employees
```

### Example

```
POST http://localhost:5000/employees
```

### Request Body Example

```json
{
  "name": "Ngô Công Huân",
  "department": "IT",
  "leaveBalance": 10
}
```

### Example using fetch

```javascript
fetch("http://localhost:5000/employees", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Ngô Công Huân",
    department: "IT",
    leaveBalance: 10
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

---

## 🔹 Delete Employee

### Endpoint

```
DELETE /employees/:id
```

### Example

```
DELETE http://localhost:5000/employees/123
```

---

## 🔹 Get All Leave Requests

### Endpoint

```
GET /leave
```

### Example

```
GET http://localhost:5000/leave
```

### Example using fetch

```javascript
fetch("http://localhost:5000/leave")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## 🔹 Create Leave Request

### Endpoint

```
POST /leave
```

### Example

```
POST http://localhost:5000/leave
```

### Request Body

```json
{
  "employeeId": "123",
  "startDate": "2026-03-01",
  "endDate": "2026-03-02",
  "reason": "Personal leave"
}
```

### Example using fetch

```javascript
fetch("http://localhost:5000/leave", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    employeeId: "123",
    startDate: "2026-03-01",
    endDate: "2026-03-02",
    reason: "Personal leave"
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

---

## 🔹 Approve Leave Request

### Endpoint

```
PATCH /leave/:id/approve
```

### Example

```
PATCH http://localhost:5000/leave/987654321/approve
```
---


# 🛠 Tech Stack

- Node.js
- Express.js
- HTML
- CSS
- Vanilla JavaScript

---

# 📌 Notes

- Make sure backend is running before opening frontend.
- If port 5000 is busy, change it in backend config.
- Ensure CORS is enabled in backend if needed.
