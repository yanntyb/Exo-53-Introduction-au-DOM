document.getElementById("para1").style.color = "red";
document.getElementById("para2").style.color = "red";
document.getElementById("para3").style.color = "red";
document.getElementById("para4").style.color = "red";
document.getElementById("para5").style.color = "red";

span = document.getElementsByTagName("span");

for(let i=0; i < 10; i++){
    span[i].style.backgroundColor = "red";
}

document.getElementById("para1").style.animationName = "animText";
document.getElementById("para1").style.animationDuration= "2s";

lien = document.getElementsByTagName("a");

for(let i=0; i < 5; i++){
    lien[i].innerHTML += i
}

span[0].dir = "rtl"

document.getElementById("para5").innerHTML = "text"