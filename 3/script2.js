// Отримуємо посилання на форму входу за її ідентифікатором
const loginForm = document.getElementById("loginForm");

// Додаємо прослуховувач події подання форми
loginForm.addEventListener("submit", function(event) {
  // Забороняємо стандартну поведінку форми (перезавантаження сторінки)
  event.preventDefault();

  // Отримуємо значення введених даних з полів форми
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Перевіряємо введені дані з зареєстрованими даними
  if (username === "зареєстроване_ім'я" && password === "зареєстрований_пароль") {
    // Виконуємо дії, якщо вхід успішний
    alert("Успішний вхід!");
  } else {
    // Виконуємо дії, якщо вхід невдалося
    alert("Невірне ім'я користувача або пароль. Спробуйте ще раз.");
  }

  // Очищаємо поля форми після подання
  loginForm.reset();
});
