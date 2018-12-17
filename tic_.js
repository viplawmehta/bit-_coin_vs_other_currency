function myalert(){
  alert("Are you sure you want to quit?");
}

var name1=window.localStorage.getItem('key1');
var name2=window.localStorage.getItem('key2');
document.getElementById("player1").value=name1;
document.getElementById("player2").value=name2;
var c=document.getElementById("player1").value;
console.log(c);
window.localStorage.setItem("username1","0");
window.localStorage.setItem("username2","0");
var p=0,q=0;
var name;
function startGame(){
    for(var i=1;i<=9;i++)
    {
     clearBox(i);
     document.turn="X";
     name=name1;
     
     document.winner=null;
     setMessage(name+" get's to start.")
    }
    document.getElementById("score1").value=p;
    document.getElementById("score2").value=q;
}
function setMessage(msg){
    document.getElementById("message").innerText=msg;
}
function nextMove(square){
    if(document.winner!=null){

        setMessage(name+" already won.");
        
    }
    else if(square.innerText=='')
    {

        square.innerText=document.turn;
        switchTurn();
    }
    else{
        setMessage("Pick another square");
    }
}
function switchTurn(){
    if(checkForWinner(document.turn)){
    
        setMessage("Congrats "+name+" you won!")
        document.winner=document.turn;

        if(document.turn=="X")
        {

               p=parseInt(window.localStorage.getItem("username1"));
              p++;

               q=parseInt(window.localStorage.getItem("username2"));
           window.localStorage.setItem("username1",p);
           window.localStorage.setItem("username2",q);
        }
        else
        {
                 q=parseInt(window.localStorage.getItem("username2"));
              q++;

               p=parseInt(window.localStorage.getItem("username1"));
           window.localStorage.setItem("username2",q);
           window.localStorage.setItem("username1",p);
        }
    }
    else if(document.turn=='X')
    {
        document.turn="O";
        name=name2;
        setMessage("It's "+name+"'s turn")
    }
    else{
        document.turn="X";
        name=name1;
        setMessage("It's "+name+"'s turn")
    }
}
function checkForWinner(move){
    var result=false;
    if(checkRow(1,2,3,move)||
    checkRow(4,5,6,move)||
    checkRow(7,8,9,move)||
    checkRow(1,4,7,move)||
    checkRow(2,5,8,move)||
    checkRow(3,6,9,move)||
    checkRow(1,5,9,move)||
    checkRow(3,5,7,move)){
        result=true;
    }
return result;
}
function checkRow(a,b,c,move){
    var result=false;
    if(getBox(a)==move && getBox(b)==move && getBox(c)==move){
        result=true;
    }
    return result;
}
function getBox(number){
    return document.getElementById("s"+number).innerText;
}
function clearBox(number){
    return document.getElementById("s"+number).innerText="";
}
