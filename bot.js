alert("Simple Chat bot nothing special for now:( say Hi");
function clicked(){
var ab= document.getElementById("ab").value
var ac= document.getElementById("ac").value
   if(ab==""||ac==""){
       alert("Please enter something")
   }
   else{
    document.getElementById('login').style='display:none';
    }
}
$(function() {

    $("#add").on("click", function    () {
        var val = $("#inp").val();
        var value= $("#inp").val().toLowerCase();
        if(val !== '') {
            var elem = $("<p align='right' class='a'></p>").text(val);
            $("#chat").append(elem);
            $("#inp").val("");
        }
           setTimeout(function(){
           $("#chat").append(to);

           if(value == "hi"|value == "hello"|value=="hey"){
           var to = $("<div class='b'>Hello😊</div>");
           $("#chat").append(to);

           }

           else if(value == "where are you from"|value=="where are you"){
           var to = $("<div class='b'>I am from the universe, milky way, solar system, planet earth, Asia, India.</div>");
           $("#chat").append(to);
           }
           else if(value == "what is your dob"){
           var to = $("<div class='b'>It is 8/12/2006</div>");
           $("#chat").append(to);
           }
           else if(value == "in which class do you read"){
           var to = $("<div class='b'>I am in class 8</div>");
           $("#chat").append(to);
           }
           else if(value == "can you come to my house tonight"){
           var to = $("<div class='b'>Simple answer = No 😂</div>");
           $("#chat").append(to);
           }
           else if(value == "nice"|value=="good"|value=="great"|value=="excellent"|value=="fabulous"|value=="splendid"|value=="marvellous"|value=="awesome"|value=="wow"|value=="superb"){
           var to = $("<div class='b'>Thanks😊</div>");
           $("#chat").append(to);
           }
           else if(value == "third-rate"|value=="worst one"|value=="really bad"|value=="useless"|value=="so dirty"|value=="very shabby"|value=="second-rate"|value=="substandard"|value=="poor"|value=="inferior"){
           var to = $("<div class='b'>😔</div>");
           $("#chat").append(to);
           }
           else if(value=="how are you"){
              var to = $("<div class='b'>Very fine...!</div>");
           $("#chat").append(to);
           }
           else if(value == "what are you doing"){
           var to = $("<div class='b'>Chatting with you ;-)</div>");
           $("#chat").append(to);
           }
           else if(value == "are you kind and studious"){
           var to = $("<div class='b'>Both answers are no...</div>");
           $("#chat").append(to);
           }
           else if(value == "what are your hobbies"){
           var to = $("<div class='b'>To code, to sing, to eat, to irritate others, etc. etc.</div>");
           $("#chat").append(to);
           }
           else if(value == "who is your biggest inspiration"){
           var to = $("<div class='b'>My father.😉</div>");
           $("#chat").append(to);
           }
           else if(value == "can you call me up"){
           var to = $("<div class='b'>😑Never</div>");
           $("#chat").append(to);
           }
           else if(value == "are you a human or a bot"){
           var to = $("<div class='b'>I am a bot acting like my owner(Bartika)</div>");
           $("#chat").append(to);
           }
           else if(value == "bye"|value == "see ya"|value=="talk to you later"){
           var to = $("<div class='b'>Ok bye😄... TC</div>");
           $("#chat").append(to);
           }
           else if(value == "what is your age"){
           var to = $("<div class='b'>I am 13</div>");
           $("#chat").append(to);
           }
           else if(value == ""){
           }
           else{
               var to = $("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzAQNSKhYYZHnJLWqsgKIvgenaIPL_pVtoUR3M-AuQcw8etXn0&usqp=CAU' id='j'><div class='b'>Sorry but I don't understand what you are saying.😅</div>");
           $("#chat").append(to);
           }
           },1000);
    });
});
