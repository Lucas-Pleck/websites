const open = document.getElementById('side-open');
const close = document.getElementById('side-close');
const sidebar = document.getElementById('sidebar');

open.onclick = () => {
  sidebar.style.left=0;
  open.style.display = 'none';
  close.style.display = 'block';
  
};
close.onclick = () => {
  sidebar.style.left='-28rem';
  close.style.display = 'none';
  open.style.display = 'block';
};