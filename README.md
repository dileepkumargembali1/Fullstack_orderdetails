Full stack Order details  Application
Technologies Used:

React.js (Frontend)

Spring Boot (Backend)

MySQL (Database)

Axios (API Calls)

Bootstrap (Styling)

How to Run the Application
Step 1: MySQL Setup
Install MySQL Server

Open MySQL Command Line or MySQL Workbench

Create Database by running:

CREATE DATABASE orderdb;

In the backend project, open application.properties file and update:

spring.datasource.url=jdbc:mysql://localhost:3306/orderdb
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update

(Replace YOUR_PASSWORD with your MySQL password)

Step 2: Run the Backend (Spring Boot)
Open terminal or command prompt

Go to the backend folder:

cd backend

Build and run the project:

mvn clean install
mvn spring-boot:run

The backend API should be accessible at:

http://localhost:8080/api/orders

Step 3: Run the Frontend (React)
Open a new terminal

Go to the frontend folder:

cd frontend

Install required dependencies:

npm install

Install Bootstrap for styling:

npm install bootstrap

Install Axios for API calls:

npm install axios

Start the React app:

npm start

Open browser and visit:

http://localhost:3000

Quick Commands Summary
MySQL Database:
CREATE DATABASE orderdb;

Backend (Spring Boot):
cd backend
mvn clean install
mvn spring-boot:run

Frontend (React):
cd frontend
npm install
npm install bootstrap
npm install axios
npm start

Features
View orders in table format

Status tabs for filtering orders (All, Completed, Continuing, etc.)

Dropdown filters beside column headers

Global search bar to search orders

Responsive layout with Bootstrap

Backend API Endpoints
GET /api/orders -> Get all orders
GET /api/orders/status/{status} -> Get orders by delivery status
POST /api/orders -> Add new order

Troubleshooting
If React app doesn't start:
npm install
npm start

If backend fails to connect to database:

Ensure MySQL is running

Check database name and credentials

Verify application.properties configuration

Requirements
Node.js and npm for frontend

Java 17 or higher and Maven for backend

MySQL Server
