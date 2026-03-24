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
        
        
        let oldCard = document.querySelector(".detailCard");
        if (oldCard){
            oldCard.remove();
        }
        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <img src="${curCard.querySelector("img").src}" alt="">
        <h2>${curCard.querySelector("p").innerText}</h2>
        <p>services are available 24 hours a day,7 days a week,without interruption and no waiting for hours. Contact : tel-108</p>
        `;
        document.querySelector("body").appendChild(div);

    });
});