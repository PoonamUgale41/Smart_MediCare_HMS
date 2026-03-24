let doctors = document.querySelectorAll(".team");
let card = document.querySelectorAll(".serviceCard");

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

//serviceCard

card.forEach(function(curCard){
    curCard.addEventListener("click", function(){
        console.log(curCard);
    })
})