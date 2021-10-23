var toTop = 0;
function autoPlay(){
  timer = setTimeout(function(){
    var row = document.getElementById('portfolio-row');
    toTop = toTop - 490;
    if (toTop < -2152){
      toTop = 0;
      clearTimeout(timer);
      row.onmouseover = clearTimeout(timer);
      }
  row.style.top = toTop +'px';
  autoPlay();
  }, 3000);
}
autoPlay();
