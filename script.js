var buttons = document.querySelector("button");
buttons.addEventListener("click",function(){
    var height = document.querySelector("#height").value;
    var weight = document.querySelector("#weight").value;
    height = parseInt(height);
    weight = parseInt(weight);
    var dis = document.querySelector("#display");
    var result ;
    if ( height === '' || height <= 0 || isNaN(height) ){
        dis.innerHTML = "invalid input try again! "
    }
    else if ( weight === '' || weight <= 0 || isNaN(weight) ){
        dis.innerHTML = "invalid input try again! "
    }
    else {
        result = ( weight / ((height * height) / 10000)).toFixed(2);
        dis.innerHTML = result;
    }
  
})