document.addEventListener('DOMContentLoaded', function() {
    var form = $('#contactForm');
    var action = form.attr('action');
    form.on('submit',function(event) {
        var formData = {
            contactMail: document.getElementById("contactMail").value,
            contactName: document.getElementById("contactName").value,
            contactNumber: document.getElementById("contactNumber").value
        }
    
        $.ajax({
            url: action, // URL-адрес, на который будет отправлен запрос
            method: "POST", // метод запроса (GET, POST, PUT, DELETE и т.д.)
            data: formData, // данные, которые будут отправлены на сервер (может быть объектом, строкой, FormData и т.д.)
            // dataType: "json", // тип данных, которые ожидаются от сервера (html, xml, json и т.д.)
            success: function(response) { // функция, которая будет выполнена при успешном выполнении запроса
              console.log(response); // выводим полученные данные в консоль
              console.log('Email has sended from ' + formData.contactMail);
              form.html('Successe');
            },
            error: function(xhr, status, error) { // функция, которая будет выполнена при ошибке выполнения запроса
              console.log("Error:", error); // выводим сообщение об ошибке в консоль
              form.html("Error status " + status);
            }
          });
        });
      });
    