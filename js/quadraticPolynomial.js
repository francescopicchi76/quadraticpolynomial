//This function collects the input parameters and the related data of the quadratic polynomial.
function getData(){
  let qPolynomial = {}
    qPolynomial.a = document.getElementById("a").value;
    qPolynomial.b = document.getElementById("b").value;
    qPolynomial.c = document.getElementById("c").value;
    qPolynomial.d = Math.pow(qPolynomial.b, 2)- 4*qPolynomial.a*qPolynomial.c;
    qPolynomial.x1 = (-qPolynomial.b - Math.sqrt(qPolynomial.d))/(2*qPolynomial.a);
    qPolynomial.x2 =  (-qPolynomial.b + Math.sqrt(qPolynomial.d))/(2*qPolynomial.a);
  return qPolynomial;
}

//This function clears all the fields of the form.
function clearFields() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("delta").value = "";
  document.getElementById("messageSolutions").value = "";
  document.getElementById("messageSign").value = "";
}

//This function analyses the parameters and the discriminant through conditional statements to define
//solutions (if existing) and the sign of the quadratic polynomial.
function giveSolutions(){
  let qPolynomial = getData();
  let risultato;
  let risultatoSegno;
  let signOfa;
  let inverseSign;

  if ((isNaN(qPolynomial.a)) || (isNaN(qPolynomial.b)) || (isNaN(qPolynomial.c))) {
    risultato = "Attention! Only numeric values are admitted as parameters!";
    risultatoSegno = "Attention! Only numeric values are admitted as parameters!";
    document.getElementById("delta").value = "";
  }
  else {
  if (qPolynomial.a==0){
    risultato = `A quadratic polynomial must have a\u22600!`;
    risultatoSegno = `A quadratic polynomial must have a\u22600!`;
    document.getElementById("delta").value = "";
  }
  else {
    document.getElementById("delta").value = qPolynomial.d;
    if (qPolynomial.a>0){
      signOfa = "positive";
      inverseSign = "negative"
    }
    else {
      signOfa = "negative";
      inverseSign = "positive";
    }
    if (qPolynomial.d<0) {
      risultato = "no real solutions, because \u0394 is negative";
      risultatoSegno = `${signOfa} (i.e. sign of a) for every value of x, because \u0394 is negative`;
    }
    else if (qPolynomial.d==0) {
      risultato = `two coincident real solutions \u2192 x\u2081=x\u2082=${qPolynomial.x1}`;
      risultatoSegno = `${signOfa} (i.e. sign of a) for every value of x except x=${qPolynomial.x1}, when the polymomial is zero`;
    }
    else {
      let min = Math.min(qPolynomial.x1, qPolynomial.x2);
      let max = Math.max(qPolynomial.x1, qPolynomial.x2);
      risultatoSegno = `${signOfa} (i.e. sign of a) in the outer intervals x<${min} and x>${max}; ${inverseSign} in the middle interval ${min}<x<${max}`;
      if (qPolynomial.b==0 && qPolynomial.c!=0) {
        risultato = `two real and opposite solutions \u2192 x\u2081=${qPolynomial.x1} and x\u2082=${qPolynomial.x2}`;
      }
      else {
        risultato = `two separate real solutions \u2192 x\u2081=${qPolynomial.x1} and x\u2082=${qPolynomial.x2}`;
      }
    }
  }
}
document.getElementById("messageSolutions").value = risultato;
document.getElementById("messageSign").value = risultatoSegno;
}
