//Grouped with Abbie, Divya, Sam, Angelica, Miggie, Chi

document.getElementById("initiate").addEventListener("click", spinReel)


const minBet = 5;
const maxBet = 50;
let balance = 1000;

let slotOne = document.getElementById("slot1");
let slotTwo = document.getElementById("slot2");
let slotThree = document.getElementById("slot3");

const snorlax = "<img src='images/snorlax.png'>";
const pikachu = "<img src='images/pikachu.png'>";
const charizard = "<img src='images/charizard.png'>";
const magikarp = "<img src='images/magikarp.png'>";
const puff = "<img src='images/puff.png'>"

let images = [snorlax, puff, charizard, pikachu, magikarp];

document.getElementById("payout").innerHTML = balance;

function spinReel() {
  let randomSpin1 = Math.floor(Math.random() * images.length);
  let randomSpin2 = Math.floor(Math.random() * images.length);
  let randomSpin3 = Math.floor(Math.random() * images.length);
  let bet = document.getElementById("credits").value;

  if (bet < minBet || bet > maxBet){
    return;
  }

  if(balance <= 50){
    return;

  }

  if(randomSpin1 === randomSpin2 && randomSpin2 === randomSpin3){
    balance += bet * 10;

  }else{
    balance -= bet;
  }

  document.getElementById("payout").innerHTML = balance;

  slotOne.innerHTML = `${randomSpin1}`;
  slotTwo.innerHTML = `${randomSpin2}`;
  slotThree.innerHTML = `${randomSpin3}`;
}
