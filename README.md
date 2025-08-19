# LibraryManagementSystem

📖 Overview
A full-stack web application for managing library operations including book cataloging, member management, and borrowing/returning books with due date tracking.

🚀 Features
Book Management: Add, view, and manage books with ISBN tracking

Member Management: Library member registration and management

Borrowing System: Track book loans with due dates

Overdue Alerts: Automatic detection of overdue books

Responsive UI: Bootstrap 5 mobile-friendly interface

RESTful API: Complete CRUD operations for all entities

🛠️ Tech Stack
Backend: Spring Boot 3.x, Spring Data JPA, PostgreSQL

Frontend: HTML5, CSS3, JavaScript, Bootstrap 5

Database: PostgreSQL

Build Tool: Maven

📋 Prerequisites
Java 17 or higher

PostgreSQL 12+

Maven 3.6+

Web browser with JavaScript support

🗄️ Database Setup
sql
CREATE DATABASE library_management;

📁 Project Structure
text
src/
├── main/
│   ├── java/com/example/library/
│   │   ├── entity/          # JPA entities (Book, Member, BorrowRecord)
│   │   ├── repository/      # Spring Data repositories
│   │   ├── service/         # Business logic layer
│   │   ├── controller/      # REST API controllers
│   │   └── LibraryApplication.java
│   └── resources/
│       ├── static/          # Frontend files
│       │   ├── js/app.js
│       │   └── index.html
│       └── application.properties
⚙️ Configuration
Update src/main/resources/application.properties:

properties
spring.datasource.url=jdbc:postgresql://localhost:5432/library_management
spring.datasource.username=lib_admin
spring.datasource.password=admin123
spring.jpa.hibernate.ddl-auto=update
🚀 Running the Application
Start PostgreSQL service

Run the Spring Boot application:

bash
mvn spring-boot:run
Open browser and navigate to: http://localhost:8080

📚 API Endpoints
Method	Endpoint	Description
GET	/api/books	Get all books
POST	/api/books	Add new book
DELETE	/api/books/{id}	Delete book
POST	/api/borrow/{bookId}/{memberId}	Borrow book
POST	/api/borrow/return/{recordId}	Return book
GET	/api/borrow/overdue	Get overdue books
🎯 Usage Guide
Add Books: Use the book form to add new books to inventory

Manage Members: Add library members through the interface

Borrow Books: Select book and member to create loans

Track Returns: View active loans and process returns

Monitor Overdue: Check overdue books in reports section

🔧 Troubleshooting
Database connection issues: Verify PostgreSQL is running and credentials are correct

Port conflicts: Change server port in application.properties

CORS errors: Ensure frontend is served from same origin or configure CORS
