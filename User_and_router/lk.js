<?php session_start(); ?>
<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <style>
      .edit-btn{
        color:blue;
        cursor:pointer;
      }
      .edit-btn:hover{
        color:navy;
      }
      .save-btn{
        color:green;
        cursor:pointer;
      }
      .save-btn:hover{
        color:lime;
      }
      .cancel-btn{
        color:maroon;
        cursor:pointer;
      }
      .cancel-btn:hover{
        color:red;
      }
    </style>
    <title>Личный кабинет</title>
  </head>
  <body>
    <div class="container my-5">
      <p>
        Имя: <span><?=$_SESSION['name'] ?></span> 
        <span class="edit-btn">[Изменить]</span>
        <span class="save-btn" hidden data-item="name">[Сохранить]</span>
        <span class="cancel-btn" hidden>[Отменить]</span>
      </p>
      <p>
        Фамилия: <span><?=$_SESSION['lastname'] ?></span> 
        <span class="edit-btn">[Изменить]</span>
        <span class="save-btn" hidden data-item="lastname">[Сохранить]</span>
        <span class="cancel-btn" hidden>[Отменить]</span>
      </p>
      <p>E-mail: <?=$_SESSION['email'] ?></p>
      <p>ID: <?=$_SESSION['id'] ?></p>
    </div>
    
    <script>
      let editBtns = document.querySelectorAll('.edit-btn');
      let saveBtns = document.querySelectorAll('.save-btn');
      let cancelBtns = document.querySelectorAll('.cancel-btn');
     
      for(let i=0; i<editBtns.length;i++){
        let value = editBtns[i].previousElementSibling.innerText;
        editBtns[i].addEventListener("click",()=>{
          
          editBtns[i].previousElementSibling.innerHTML = `<input value="${value}">`;
          editBtns[i].hidden = true;
          saveBtns[i].hidden = false;
          cancelBtns[i].hidden = false;
          
          cancelBtns[i].addEventListener("click",()=>{
            editBtns[i].previousElementSibling.innerHTML = `${value}`;
            editBtns[i].hidden = false;
            saveBtns[i].hidden = true;
            cancelBtns[i].hidden = true;
          });
        });
          saveBtns[i].addEventListener("click",()=>{
            value = editBtns[i].previousElementSibling.firstChild.value;
            let formData = new FormData();
            let item = saveBtns[i].dataset.item;
            formData.append("item",item);
            formData.append("value",value);
            fetch("changeUserData",{
              method: "POST",
              body: formData
            })
            editBtns[i].previousElementSibling.innerHTML = value;
            editBtns[i].hidden = false;
            saveBtns[i].hidden = true;
            cancelBtns[i].hidden = true;
          });
      }
    </script>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>
