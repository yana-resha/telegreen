
document.addEventListener('DOMContentLoaded', () => {
  jQuery(document).ready(function($){

    const form = $('form')[0];
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const inputValid = false;

      const allInput = Array.from($(form).find('.important__form-input'));
      console.log(allInput)
      allInput.forEach(el => {
        if (el.classList.contains('tel')) {
          console.log(el.value)
        }
      })


      

      // Работа с виджетом recaptcha
      // 1. Получить ответ гугл капчи
     var captcha = grecaptcha.getResponse();
   
   // 2. Если ответ пустой, то выводим сообщение о том, что пользователь не прошёл тест.
   // Такую форму не будем отправлять на сервер.
   if (!captcha.length) {
     // Выводим сообщение об ошибке
     $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
   } else {
     // получаем элемент, содержащий капчу
     $('#recaptchaError').text('');
   }
   
   // 3. Если форма валидна и длина капчи не равно пустой строке, то отправляем форму на сервер (AJAX)
   if ((formValid) && (captcha.length) && (inputValid)) {
    
     // добавить в formData значение 'g-recaptcha-response'=значение_recaptcha
     formData.append('g-recaptcha-response', captcha);
   
   }
   
   // 4. Если сервер вернул ответ error, то делаем следующее...
   // Сбрасываем виджет reCaptcha
   grecaptcha.reset();
   // Если существует свойство msg у объекта $data, то...
   if ($data.msg) {
     // вывести её в элемент у которого id=recaptchaError
     $('#recaptchaError').text($data.msg);
   }
       })
       
     });
})