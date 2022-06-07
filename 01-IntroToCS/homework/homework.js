'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
    sum = sum + num[i] * Math.pow(2, num.length -1 -i);
    }
    return sum;

}

function DecimalABinario(num) {
  // tu codigo aca
  if (num === 0) return "0";
  var resultado = [];
  while (num>=1){
      resultado.unshift(num % 2);
      num = Math.floor(num / 2);
      
  }
 return resultado.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

