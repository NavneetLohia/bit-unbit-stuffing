const btn = document.querySelector('.apply')
const stuff_answer = document.getElementById('stuff-answer')
const unstuff_answer = document.getElementById('unstuff-answer')

function output() {
  const bin_string = document.getElementById('input-value').value
  bitStuffing(bin_string)
}

function bitStuffing(bin_string) {
  var cnt = 0; 
  var ans = "";
  for(var i = 0; i < bin_string.length; i++) {
      if(bin_string[i] === '1') cnt++;
      else cnt = 0;
      ans += bin_string[i];
      if(cnt === 5) {
          ans += '0'
          cnt = 0;
      }
  }
  stuff_answer.innerText = ans
  bitUnstuffing(bin_string)
}

function bitUnstuffing(bin_string) {
  var cnt = 0; 
  var ans = "";
  for(var i = 0; i < bin_string.length; i++) {
      if(bin_string[i] === '1') cnt++;
      else cnt = 0;
      ans += bin_string[i];
      if(cnt === 5) {
          i++
          cnt = 0;
      }
  }
  unstuff_answer.innerText = ans
}