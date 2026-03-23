let doctors = document.querySelectorAll(".team");
let count = 0;

doctors.forEach(function(card,index){
    card.style.left=`${index*100}%`;
});

function myFun(){
    doctors.forEach(function(card){
        card.style.transform=`translatex(-${count * 100}%)`;
    });
}

setInterval(function(){
    count++;
    if(count == doctors.length){
        count=0;
    }
    myFun();
}, 3000);