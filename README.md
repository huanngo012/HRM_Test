# HRM_Test

This project is a simple Human Resource Management (HRM) system built with:

- Node.js + Express (Backend)
- HTML + Vanilla JavaScript (Frontend)
- In-memory data storage (no database)

---

How to Run Backend

Install dependencies:

npm install

Start the server:

npm start

If successful, the server will run at:

http://localhost:5000

Note: Data is stored in memory. Restarting the server will reset all data.

How to Open Frontend

After starting the backend, open the file:

index.html

You can:

Double click the file

Or use VSCode Live Server

Make sure the backend is running before using the frontend.

Example API Usage
Get All Employees

Endpoint:

GET /employees

Example:

curl http://localhost:5000/employees

Example response:

{
"success": true,
"data": [
{
"id": 1,
"name": "John Doe",
"department": "IT",
"leaveBalance": 12
}
]
}

Create Employee

Endpoint:

POST /employees

Request body:

{
"name": "Jane Smith",
"department": "HR",
"leaveBalance": 10
}

Example:

curl -X POST http://localhost:5000/employees
 -H "Content-Type: application/json" -d '{"name":"Jane Smith","department":"HR","leaveBalance":10}'

Example response:

{
"success": true,
"data": {
"id": 2,
"name": "Jane Smith",
"department": "HR",
"leaveBalance": 10
}
}
