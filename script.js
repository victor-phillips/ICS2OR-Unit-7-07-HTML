// setup variables
let in1 = 0
let in2 = 0
let out = 0
let loopnum = 0
// event listener
document.getElementById('button').addEventListener('click', calculate)
// main function
function calculate () {
  in1 = document.getElementById('in1').value
  in1 = parseInt(in1)
  in2 = document.getElementById('in2').value
  in2 = parseInt(in2)
  out = 0
  loopnum = 0
  while (loopnum !== in2) {
    out = (in1 + out)
    loopnum = (loopnum + 1)
  }
  document.getElementById('output').innerHTML = out
}
