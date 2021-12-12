var a = 1,
      b =1,
        temp;

function fibonacci() {
  temp = b;
  b = a + b;
  a = temp;
  
  postMessage(b);
  
  setTimeout("fibonacci()", 500);
}

fibonacci();