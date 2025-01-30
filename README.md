# Employee Management System (Full Stack)

This project is a **Full Stack Employee Management System** built with:

- **Backend:** Spring Boot (Java, REST API, JPA, Hibernate)
- **Frontend:** React.js (JavaScript, Axios, React Router)
- **Database:** H2 (In-memory) or MySQL

## 🚀 Features

- Add, update, delete, and list employees
- Fully functional RESTful API
- Frontend and backend structured separately
- Modern UI with React and Axios for API calls
- Uses **Maven** for backend and **npm** for frontend dependencies

## 🖼 Screenshots

Here are some screenshots of the application:

### 1. Homepage
![image](https://github.com/user-attachments/assets/a2f5a7e0-a604-4b31-abfc-c29758d3cd29)

### 2. Add Employee Page
![image](https://github.com/user-attachments/assets/8475e7d7-31cd-44c8-a66b-6cf0eb8de8cf)

### 3. Update Employee Page
![image](https://github.com/user-attachments/assets/4efb834e-ddd1-4810-8ae5-cdcb4c48e136)

## 🛠 Technologies Used

| Technology  | Description                      |
|------------|-----------------------------------|
| Java 17+ | Backend Programming Language        |
| Spring Boot | REST API & Business Logic        |
| Spring Data JPA | ORM for Database Management  |
| H2 / MySQL | Database Support                  |
| React.js | Frontend UI Framework               |
| Axios | API Communication                      |
| React Router | Frontend Navigation             |
| Maven | Backend Dependency Management          |
| Node.js & npm | Frontend Dependency Management |


## 📝 API Documentation

| HTTP Method | Endpoint                 | Description                              | Request Body         | Response Body                     |
|-------------|--------------------------|------------------------------------------|----------------------|-----------------------------------|
| POST        | `/api/employee`          | Add a new employee                       | Employee JSON Object | Added Employee JSON Object        |
| GET         | `/api/employees`         | Retrieve all employees                   | N/A                  | List of Employee JSON Objects     |
| GET         | `/api/employee/{id}`     | Get details of a specific employee       | N/A                  | Employee JSON Object (if found)   |
| DELETE      | `/api/employee/{id}`     | Delete a specific employee by ID         | N/A                  | Success/Failure Message           |
| PATCH       | `/api/employee/{id}`     | Update specific employee details by ID   | Employee JSON Object | Updated Employee JSON Object      |



