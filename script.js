function sayHello() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const resultBox = document.getElementById('result');

    resultBox.textContent = ` Привіт, ${firstName} ${lastName}!`;
}

function doubleAmount() {
    const amount = parseFloat(document.getElementById('amount').value);
    const resultBox = document.getElementById('magic');
    
    if (!isNaN(amount)) {
        resultBox.textContent = `Подвоєна сума: ${amount * 2}`;

        const img = document.createElement('img');
        img.src = 'assets/Cat.jpg';
        img.alt = 'Магічне зображення';

        // Очищаємо попередні зображення
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
    } else {
        resultBox.textContent = 'Будь ласка, введіть число!';
    }
}