var ldoor = document.getElementById("ldoor");
var rdoor = document.getElementById("rdoor");
ldoor.style.transition = "1s";
rdoor.style.transition = "1s";

function load(){
    ldoor.style.width = "50%";
    rdoor.style.width = "50%";
}

function opendoor(){
    ldoor.style.width = "0";
    rdoor.style.width = "0";
}