//This function collects the input parameters and the related data of the quadratic polynomial.
function getData(){
  let qPolynomial = {}
    qPolynomial.a = document.modulo.a.value;
    qPolynomial.b = document.modulo.b.value;
    qPolynomial.c = document.modulo.c.value;
    qPolynomial.d = Math.pow(qPolynomial.b, 2)- 4*qPolynomial.a*qPolynomial.c;
    qPolynomial.x1 = (-qPolynomial.b - Math.sqrt(qPolynomial.d))/(2*qPolynomial.a);
    qPolynomial.x2 =  (-qPolynomial.b + Math.sqrt(qPolynomial.d))/(2*qPolynomial.a);
  return qPolynomial;
}

//This function clears all the fields of the form.
function clearFields() {
  document.modulo.a.value = "";
  document.modulo.b.value = "";
  document.modulo.c.value = "";
  document.modulo.delta.value = "";
  document.modulo.messageSolutions.value = "";
  document.modulo.messageSign.value = "";
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
    document.modulo.delta.value = "";
  }
  else {
  if (qPolynomial.a==0){
    risultato = `Attention! A quadratic polynomial must have a\u22600`;
    risultatoSegno = `Attention! A quadratic polynomial must have a\u22600`;
    document.modulo.delta.value = "";
  }
  else {
    document.modulo.delta.value = qPolynomial.d;
    if (qPolynomial.a>0){
      signOfa = "positive";
      inverseSign = "negative"
    }
    else {
      signOfa = "negative";
      inverseSign = "positive";
    }
    if (qPolynomial.d<0) {
      risultato = "The polynomial has got no real solutions, because \u0394 is negative";
      risultatoSegno = `The polynomial is ${signOfa} for every value of x, i.e. it always has got the sign of a, because \u0394 is negative`;
    }
    else if (qPolynomial.d==0) {
      risultato = `The polynomial has got two coincident real solutions, which are x\u2081=x\u2082=${qPolynomial.x1}`;
      risultatoSegno = `The polynomial is 0 for x=${qPolynomial.x1} (value of the two coincident real solutions), for every other value of x its sign is ${signOfa}`;
    }
    else {
      let min = Math.min(qPolynomial.x1, qPolynomial.x2);
      let max = Math.max(qPolynomial.x1, qPolynomial.x2);
      risultatoSegno = `The sign of the polynomial is ${signOfa} in the outer intervals x<${min} and x>${max}, whereas its sign is ${inverseSign} in the middle interval ${min}<x<${max}`;
      if (qPolynomial.b==0 && qPolynomial.c!=0) {
        risultato = `The polynomial has got two real and opposite solutions, which are x\u2081=${qPolynomial.x1} and x\u2082=${qPolynomial.x2}`;
      }
      else {
        risultato = `The polynomial has got two separate real solutions, which are x\u2081=${qPolynomial.x1} and x\u2082=${qPolynomial.x2}`;
      }
    }
  }
}
document.modulo.messageSolutions.value = risultato;
document.modulo.messageSign.value = risultatoSegno;
}
