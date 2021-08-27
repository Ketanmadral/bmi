function Calculate(){
      var height = document.getElementById("height").value;
      var weight = document.getElementById("weight").value;
   var bmi = (weight / ((height * height) / 10000)).toFixed(2); 

     document.getElementById("result").innerHTML = bmi;
  }