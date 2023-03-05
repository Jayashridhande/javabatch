function fact(){

    document.write("javascript")
}

function abc(){
    console.log('Good Evening')
}
abc();

function o (number ){
    return number * 3;
}

  let u =[4,7,3,2];
  let th =u.map(o);
  console.log(th);

  function binary(n) {
    if (n < 12) {
        return Math.abs(n).toString(2);
    }
    return 0;
  }
  console.log(binary(9));


  function hexColour(c) {
    if (c < 256) {
      return Math.abs(c).toString(16);
    }
    return 0;
  }
  
  console.log(hexColour(234));
 
  
  