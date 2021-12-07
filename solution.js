function squareDigits(num){
   return parseInt((num.toString().split('').map((numx)=> {
    return Math.pow(parseInt(numx), 2)
  }).join(''))
)
}
