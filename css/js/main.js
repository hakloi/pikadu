// Создаем переменную в которую положим кнопку менб
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменую в которую положим меню 
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
 //
  event.preventDefault ();
  //
  menu.classList.toggle('visable');
})