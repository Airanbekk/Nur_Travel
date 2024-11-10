const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Обработчик для переключения между формами
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Обработчик регистрации
document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();  // Останавливаем отправку формы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Валидация
    if (name && email && password.length >= 8) {
        // Сохранение данных в localStorage
        localStorage.setItem('username', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('Registration successful!');
        // Перенаправление на страницу профиля или главную
        window.location.href = 'file:///C:/Users/Admin/Documents/index.html';  // Убедитесь, что такая страница существует
    } else {
        alert('Please fill all fields correctly.');
    }
});

// Обработчик входа
document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();  // Останавливаем отправку формы

    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Валидация
    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');


        
        // Перенаправление на страницу профиля
        window.location.href = 'file:///C:/Users/Admin/Documents/index.html';  // Убедитесь, что такая страница существует
    } else {
        alert('Invalid email or password.');
    }
});


