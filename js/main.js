// $(".rec-contain").click(function(){
//     $(`${this} .sub-contain`).toggleClass("px-5 py-5")
//     console.log($(this));
// })

$('.rec-contain').on('click', function() {
    $(".rec-contain .sub-contain").hide(400)
    $(this).find(".sub-contain").toggle(400)
    console.log(this);
  });


let countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();
    

  let distance = countDownDate - now;
    

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML =  hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m " 
  document.getElementById("seconds").innerHTML =+ seconds + "s ";

}, 1000);

$(".arrow-contain").click(function(){
    $("aside").animate({left:"0px"})
})

$(".icon-contain").click(function(){
    $("aside").animate({left:"-200px"})
})

let uMessage = document.getElementById("uMessage");
let msg = document.getElementById("msg");

function count(num){
    if(num < 100){
        return 100 - num;
    }
    else{
        return "YOU HAVE REACHED THE LIMIT"
    }
}

uMessage.addEventListener("input",function(){
    let val = uMessage.value;
    let num = val.length;
    msg.innerHTML = count(num);
})