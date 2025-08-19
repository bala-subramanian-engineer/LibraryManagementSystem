// src/main/resources/static/js/app.js
document.addEventListener('DOMContentLoaded', () => {
    loadBooks();
    loadMembers();
    loadActiveLoans();

    // Book Form Submission
    document.getElementById('bookForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const book = {
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            isbn: document.getElementById('isbn').value,
            quantity: parseInt(document.getElementById('quantity').value)
        };
        addBook(book);
    });

    // Borrow Form Submission
    document.getElementById('borrowForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const bookId = document.getElementById('bookSelect').value;
        const memberId = document.getElementById('memberSelect').value;
        borrowBook(bookId, memberId);
    });
});

// API Functions
async function loadBooks() {
    const response = await fetch('/api/books');
    const books = await response.json();
    const tableBody = document.querySelector('#bookTable tbody');
    tableBody.innerHTML = '';
    books.forEach(book => {
        const row = `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td>${book.quantity}</td>
                <td><button class="btn btn-sm btn-danger" onclick="deleteBook(${book.id})">Delete</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

async function addBook(book) {
    await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
    loadBooks();
    document.getElementById('bookForm').reset();
}

async function deleteBook(id) {
    await fetch(`/api/books/${id}`, { method: 'DELETE' });
    loadBooks();
}

async function loadActiveLoans() {
    const response = await fetch('/api/borrow/active');
    const loans = await response.json();
    const tableBody = document.querySelector('#loanTable tbody');
    tableBody.innerHTML = '';
    loans.forEach(loan => {
        const row = `
            <tr>
                <td>${loan.book.title}</td>
                <td>${loan.member.name}</td>
                <td>${loan.dueDate}</td>
                <td><button class="btn btn-sm btn-warning" onclick="returnBook(${loan.id})">Return</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

async function returnBook(recordId) {
    await fetch(`/api/borrow/return/${recordId}`, { method: 'POST' });
    loadActiveLoans();
}