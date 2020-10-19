<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://kit.fontawesome.com/a57e64ffa8.js" crossorigin="anonymous"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <style>
      body{
        height:100%;
        background: url(https://wallpaperaccess.com/full/632692.jpg) no-repeat;
        background-position:center center;
        background-attachment: fixed;
        background-size: cover;
      }
      .col-sm-5{
        margin-top:25%;
        box-shadow: 0 0 5px rgb(255,255,255,.9);
        padding:1rem;
        background: rgb(255,255,255,.5);
        border-radius:15px;
      }
    </style>
    <title>Reg</title>
  </head>
  <body>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-sm-5">
          <h1 class="text-center text-light mb-4">Регистрация</h1>
          <form onsubmit="sendForm(this); return false;">
            <div class="form-group">
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>
                <input name="name" class="form-control" type="text" placeholder="Имя">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>
                <input name="lastname" class="form-control" type="text" placeholder="Фамилия">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-at" aria-hidden="true"></i></i>
                  </div>
                </div>
                <input name="email" class="form-control" type="email" placeholder="E-mail">
              </div>
                <p id="info" style="color:red;"></p>
            </div>
            <div class="form-group">
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
                <input name="pass" class="form-control" type="password" placeholder="Password">
              </div>
            </div>
            <input class="form-control btn btn-primary" type="submit" value="Зарегистрироваться">
          </form>
        </div>
      </div>
    </div>
    <script>
      async function sendForm(form){
        let formData = new FormData(form);
        let response = await fetch("addUser",{
          method: "POST",
          body: formData
        });
        let result = await response.text();
        if(result=="success"){
          location.href="auth.php";
        }else if(result=="exist"){
          info.innerText = `Такой пользователь уже есть`;
        }else{
          console.log("Неизвестная ошибка!");
        }
      }
    </script>
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>
