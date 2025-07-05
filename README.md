Full stack Order details  Application
Technologies Used:

React.js (Frontend)

Spring Boot (Backend)

MySQL (Database)

Axios (API Calls)

Bootstrap (Styling)

Project Structure
order-management-demo
├── frontend (React project)
│ ├── src
│ │ ├── components
│ │ │ ├── OrderTable.jsx
│ │ │ ├── StatusTabs.jsx
│ │ │ ├── SearchBar.jsx
│ │ │ └── Dropdown.jsx
│ │ ├── App.jsx
│ │ └── index.js
│ ├── package.json
│ └── public
│
├── backend (Spring Boot project)
│ ├── src
│ │ ├── main
│ │ │ ├── java/com/example/orderapp
│ │ │ │ ├── controller/OrderController.java
│ │ │ │ ├── entity/OrderDetails.java
│ │ │ │ ├── repository/OrderRepository.java
│ │ │ │ └── service/OrderService.java
│ │ │ └── resources/application.properties
│ ├── pom.xml
│
└── README.txt

Step-by-Step Execution
Step 1: MySQL Setup
Install MySQL Server

Open MySQL Command Line or Workbench

Create Database:

CREATE DATABASE orderdb;

In backend, update the file:
backend/src/main/resources/application.properties

Example:

spring.datasource.url=jdbc:mysql://localhost:3306/orderdb
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update

Replace YOUR_PASSWORD with your MySQL password

Step 2: Run the Backend (Spring Boot)
Open terminal or command prompt

Go to the backend folder:

cd backend

Build and Run the project:

mvn clean install
mvn spring-boot:run

API should be accessible at:

http://localhost:8080/api/orders

Step 3: Run the Frontend (React)
Open another terminal

Go to the frontend folder:

cd frontend

Install project dependencies:

npm install

Install Bootstrap:

npm install bootstrap

Install Axios:

npm install axios

Start the React app:

npm start

Open browser and visit:

http://localhost:3000

Quick Commands Summary
MySQL Setup:
CREATE DATABASE orderdb;

Backend:
cd backend
mvn clean install
mvn spring-boot:run

Frontend:
cd frontend
npm install
npm install bootstrap
npm install axios
npm start

Features
Display orders in table format

Status tabs for All, Completed, Continuing, etc.

Dropdown filters beside column names

Global search bar

Responsive layout using Bootstrap

Backend API Endpoints
GET /api/orders -> Get all orders
GET /api/orders/status/{status} -> Get orders by status
POST /api/orders -> Add new order

Troubleshooting
If React doesn't start:
npm install
npm start

If backend fails to connect to database:

MySQL is running

Database credentials correct

application.properties configured properly

Requirements
Node.js and npm for frontend

Java 17 or higher and Maven for backend

MySQL server

Enjoy the Order Management Demo Application!
