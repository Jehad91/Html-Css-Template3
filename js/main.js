let goDownBtn = document.querySelector(".go-down");
let articlesSection = document.getElementById("articles");
goDownBtn.onclick = function(){
  window.scrollTo(articlesSection.offsetTop);
}
let skillSection = document.getElementById('our-skills');
let progressSpan = document.querySelectorAll(".the-progress span");
let spanArray = [...progressSpan]

window.onscroll = function () {
  if(window.scrollY >= skillSection.offsetTop - 100){
    spanArray.forEach(function(e){
        e.style.width = e.getAttribute("data-width"),500
    })
  }else{
    spanArray.forEach(function(e){
      e.style.width = 0
    })
  }
}

let time = new Date()
document.querySelector('.hours').innerHTML = "0-" + time.getHours();
document.querySelector('.minutes').innerHTML = "0-" + time.getMinutes();
document.querySelector('.seconds').innerHTML = "0-" + time.getSeconds();

let numbers = document.querySelectorAll('.amount');
let arrNums = [...numbers];
arrNums.forEach(function (e) {
  e.innerHTML = 0;
})


let statSection = document.getElementById('stats');
window.onscroll = function () {
  if(window.scrollY >= statSection.offsetTop - 200){
    arrNums.forEach(function(e){
      setInterval(function(){
         if(e.innerHTML < parseInt(e.getAttribute('data-num'))){
           e.innerHTML++;
         }
       }, 10)
   })
  }
}