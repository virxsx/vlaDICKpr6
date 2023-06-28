const quizForm = document.getElementById("quizForm");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Перешкоджаємо перезавантаженню сторінки при натисканні кнопки "Перевірити"
 const selectedOption = document.querySelector('input[name="question1"]:checked');

  if (selectedOption) {
    const answer = selectedOption.value;

    if (answer === "b") {
      alert("Відповідь правильна!");
    } else {
      alert("Відповідь неправильна. Спробуйте ще раз.");
    }

    // Очистити вибір користувача
    selectedOption.checked = false;
  } else {
    alert("Будь ласка, виберіть один з варіантів відповіді.");
  }
});