var randomNumber1 = Math.floor(Math.random()*6) +1; //1-6

var diceImg1 = "dice"+randomNumber1+".png"; //dice1-6.png

var diceImgSrc1 = "images/"+diceImg1; //images/dice1-6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",diceImgSrc1);

// dice2 link

var randomNumber2 = Math.floor(Math.random()*6)+1;

var diceImg2 = "dice"+randomNumber2+".png";

var diceImgSrc2 = "images/"+diceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",diceImgSrc2);

// title change
var titleSelector = document.querySelector("h1");

if(randomNumber1>randomNumber2)
{
  titleSelector.innerHTML ="🏳️‍🌈 Player1 wins!" ;
}
else if (randomNumber1<randomNumber2) {
  titleSelector.innerHTML = "🏳️‍🌈 Player2 wins!";
}
else
{
  titleSelector.innerHTML = "⚔️Draw!";
}
