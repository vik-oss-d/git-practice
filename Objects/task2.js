// Завдання 2
// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: рядок, представляє ім'я власника автомобіля
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: "John Doe"
};

const { title, author } = book;
console.log(title);
console.log(author);
console.log(book.year);


