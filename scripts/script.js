const button = document.querySelector('.simple-button');
  const icon = document.getElementById('icon');
  const textElement = document.getElementById('button-text');
  const textToCopy = 'https://t.me/hirundos'; // Текст, который нужно скопировать



  icon.addEventListener('click', function () {
    event.stopPropagation(); // Игнорируем нажатие на кнопку при нажатии на иконку
    event.preventDefault(); // Предотвращаем переход по ссылке
      navigator.clipboard.writeText(textToCopy).then(() => {
          icon.innerHTML = '<span class="fa-solid fa-check"></span>'; // Замена на иконку галочки
          textElement.innerText = 'Скопировано'; // Изменяем текст кнопки

          // Изменение стилей
          textElement.style.color = '#198754'; // Задаем цвет текста
          icon.style.color = "#198754";
          icon.classList.add('show-icon'); // Показать иконку

          // Обновление через 2 секунды
          setTimeout(() => {
            icon.classList.remove('show-icon'); // Скрыть иконку обратно
              icon.innerHTML = '<i class="fa-regular fa-copy"></i>'; // Вернуть иконку "Копировать"
              textElement.innerText = 'Telegram'; // Вернуть первоначальный текст

              // Сброс стилей


              icon.style.color = ""; // Сброс цвета иконки
textElement.style.color = ''; // Сброс цвета текста
}, 1500); // Задержка 2000 мс
      }).catch(err => {
          console.error('Ошибка копирования: ', err);
      });
  });
