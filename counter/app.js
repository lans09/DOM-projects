// set initial count
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
const styles = e.currentTarget.classList;
if(styles.contains('decrease')){
  value.style.color = 'red'
  count--;  
}
else if(styles.contains('increase')){
    value.style.color = 'green';
    count++;
}
else {
    count = 0;
    value.style.color = 'black';
}
value.textContent = count;
    })
});