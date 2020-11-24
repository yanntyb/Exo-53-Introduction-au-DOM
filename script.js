para = document.getElementsByTagName("p");

for(let i = 0; i < 5; i++){
    para[i].style.color = "red"
}

para[0].style.width = "300px"

span = document.getElementsByTagName("span");

for(let i=0; i < 10; i++){
    span[i].style.backgroundColor = "red";
    span[i].style.display = "block"
    span[i].dir = "rtl";
}

para[0].style.animationName = "animText";
para[0].style.animationDuration= "5s";
para[0].style.animationDirection= "alternate"
para[0].style.animationIterationCount= "infinite";

lien = document.getElementsByTagName("a");

for(let i=0; i < 5; i++){
    lien[i].innerHTML = "lien " + i
}




document.getElementById("para5").innerHTML = "text"