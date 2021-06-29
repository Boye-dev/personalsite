var d=new Date();
var hours=d.getHours();
var min=d.getMinutes();
var sec=d.getSeconds();

if(hours>=0&&hours<=9){
  $(".time").html("0"+hours+" :"+min);
  if(min>=0&&min<=9){
    $(".time").html("0"+hours+" :0"+min);
  }
  else{
      $(".time").html("0"+hours+" :"+min);
  }
}else{
  $(".time").html(hours+" : "+min);
}
$(".navbar-toggler").click(function(event, c){
    $(event.target).addClass("disabled");
        $("nav").toggleClass("navbar-color");
    setTimeout(()=>{
        $(event.target).removeClass("disabled");
    },500);
})
$(".nav-link").click(function(event, c){
    $(event.target).addClass("disabled");
        $("nav").toggleClass("navbar-color");
    setTimeout(()=>{
        $(event.target).removeClass("disabled");
    },500);
})
var nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 150) { // Just an example
        nav.style.backgroundColor = ' #66000000'; // or default color
    } else {
        nav.style.backgroundColor = 'rgba(85.5, 0, 21.6, 0.99)';

    }
});

// if(hours>=0&&hours<12){
//   $("video").html('<source src="header3.mp4" type="video/mp4"></source>');
//   $(".btn").removeClass("bio");
//   $(".btn").addClass("bio-morning");
// $(".time-text").html("Good Morning From Boye");
//
//
// }
// else if(hours>=12&&hours<18){
//   $("video").html('<source src="header3.mp4" type="video/mp4"></source>');
//   $(".btn").removeClass("bio");
//   $(".btn").addClass("bio-morning");
//   $(".time-text").html("Good Afternoon From Boye");
// }
// else
 if(hours>=0&&hours<24){
  $("video").html('<source src="night.mp4" type="video/mp4"></source>');
  $(".video-text").css("color","white");
  $(".talk").removeClass("bot");
    $(".talk").addClass("bot-night");
  $(".border-text").css({'color':'white','border-bottom': '2px solid black'});
  $(".time-text").html("Good Evening From Boye");
}
var app = document.getElementById('mytext');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('<strong>Web Developer</strong> ')
  .pauseFor(200)
  .deleteChars(14)
  .typeString('<strong>Phytoneer</strong>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<strong>Data Scientist</strong>')
  .start();
