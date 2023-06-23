function displayArray(){
    var arr1 = [1, 2, 3];
    var arr2 = new Array(4, 5, 6);
    var arr3 = [];
    arr3[0] = 7;
    arr3[1] = 8;
    arr3[2] = 9;
  
    document.getElementById('result').innerHTML = 
      "Массив 1: " + arr1 + "<br>" +
      "Массив 2: " + arr2 + "<br>" +
      "Массив 3: " + arr3;
  }