"use strict";

// Random Quote - https://animechan.vercel.app/

async function getQuote() {
  const res = await fetch('https://animechan.vercel.app/api/random');
  const data = await res.json();
    console.log(data);
  
  const quoteHolder = document.getElementById("quote");
  quoteHolder.innerHTML = data.quote;

  const animeHolder = document.getElementById("quote-anime");
  animeHolder.innerHTML = data.character;
  }
await getQuote(); 

// Random Google Font
const API_KEY = 'AIzaSyDrY4frGeOBeZYuG0TNyEPD-389RVi3DGA';
let fontsList = [];
const textHolder = document.querySelector(".quote");
const  named = document.querySelector(".font")


async function loadFontsList() {
        const result = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=' + API_KEY);
        const data = await result.json();
        console.log(data)
        console.log('Number of items in the google font list: ', data.items.length);
        return data.items;
}

function loadRandomFont(fontsList) {
    const randomIndex = Math.floor(Math.random() * fontsList.length);
    console.log(randomIndex)
    const randomFont = fontsList[randomIndex].family;
    WebFont.load({
      google: {
          families: [randomFont]
      }
  });
  console.log('Selected Font: ', randomFont);
    return randomFont;
}

function updateFont(textHolder, randomFont) {
  textHolder = document.querySelector(".quote");
  textHolder.style.fontFamily = randomFont;  
} 

function typeSelectedFont(named, randomFont){
  named = document.querySelector(".font");
  named.innerHTML = `Typed in: ${randomFont}`;
}


async function randomizeFont() {
    fontsList = await loadFontsList();
    const randomFont = loadRandomFont(fontsList);
    updateFont(textHolder, randomFont);
    typeSelectedFont(named, randomFont);
}
randomizeFont();







