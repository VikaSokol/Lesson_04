function sayHello() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dynamicSection = document.getElementById('dynamicSection');

    if (firstName && lastName) {
        // Додаємо текст привітання
        const resultBox = document.createElement('div');
        resultBox.textContent = `Привіт, ${firstName} ${lastName}!`;
        dynamicSection.innerHTML = ''; // Очищаємо попередній вміст
        dynamicSection.appendChild(resultBox);

        // Додаємо секцію "Магія"
        dynamicSection.innerHTML += `
            <div class="input-group">
                <label for="amount">Введіть суму, яку хочете подвоїти</label>
                <input type="number" id="amount" value="0">
            </div>
            <button onclick="doubleAmount()">Магія</button>
            <div class="result">
                <strong>Результат: </strong>
                <div id="magic" class="result-output"></div>
                <div class="image-container" id="imageContainer"></div>
            </div>
        `;
    } else {
        alert('Будь ласка, введіть ім\'я та прізвище!');
    }
}

function doubleAmount() {
    const amount = parseFloat(document.getElementById('amount').value);
    const resultBox = document.getElementById('magic');
    const imageContainer = document.getElementById('imageContainer');

    if (!isNaN(amount)) {
        if (amount > 0) {
            resultBox.textContent = `Подвоєна сума: ${amount * 2}`;

            // Додаємо зображення
            const img = document.createElement('img');
            img.src = 'assets/Cat.jpg'; // Шлях до вашого зображення
            img.alt = 'Магічне зображення';

            // Очищаємо попередні зображення
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        } else {
            resultBox.textContent = 'Не можна подвоїти борг';
            imageContainer.innerHTML = ''; // Очищаємо зображення, якщо є
        }
    } else {
        resultBox.textContent = 'Будь ласка, введіть число!';
        imageContainer.innerHTML = ''; // Очищаємо зображення, якщо є
    }
}

