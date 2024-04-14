<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Calculate me! - A calculator made my me</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link href="utils.css" rel="stylesheet" type="text/css" />
<style>
.text-center{
    text-align: center;
    color: solid black;
  }
  
  .bg-red{
    background: red;
  }
  
  .mx-auto{
    margin: auto;
  }
  
  .flex{
    display:flex;
  } 
  .flex-col{
    flex-direction: column;
  }
  
  .items-center{
    align-items: center;
  }

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Ubuntu:wght@300&display=swap');
html, body {
  height: 200%;
  width: 100%;
  font-family: 'Roboto', sans-serif; 
}

.button{
  width: 80px;
  padding: 50px;
  margin: 0 3px;
  border: 5px solid black;
  border-radius: 20px;
  cursor: pointer;
}

.row{
  margin: 8px 0;
}
.row input{
  width: 291px;
  font-size: 100px;
    margin: 0;
    padding: 10px 0px;
    border: 5px solid black;
}

// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
</style>
</head>

<body>
  <h1 class="text-center">Welcome to Calculate me!</h1>
  <div class="container flex flex-col items-center mx-auto m-w-20">
    <div class="row">
      <input class="input" type="text"/>
    </div>
    <div class="row">
      <button class="button">C</button>
      <button class="button">%</button>
      <button class="button">M+</button>
      <button class="button">M-</button>
    </div>
    <div class="row">
      <button class="button">7</button>
      <button class="button">8</button>
      <button class="button">9</button>
      <button class="button">*</button>
    </div>
    <div class="row">
      <button class="button">4</button>
      <button class="button">5</button>
      <button class="button">6</button>
      <button class="button">/</button>
    </div>
    <div class="row">
      <button class="button">1</button>
      <button class="button">2</button>
      <button class="button">3</button>
      <button class="button">3</button>
      <button class="button">+</button>
    </div>
    <div class="row">
      <button class="button">0</button>
      <button class="button">.</button>
      <button class="button">=</button>
      <button class="button">-</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>

</html>
