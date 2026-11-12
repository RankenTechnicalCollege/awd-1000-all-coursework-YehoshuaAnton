"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Yehoshua Anton
      Date:   11/12/2026

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
const phrases = document.querySelectorAll("article blockquote dfn"),
      length = phrases.length;

for (let i = 0; i < length; i++) {
      phrases[i].onclick = () => {
            const phrase = document.createElement("h1");
            phrase.textContent = this.textContent;
            console.log(typeof(this), this);

            const footnote = document.createElement("p");
            const closeButton = document.createElement("input");
            const popup = window.open("", "footnote", "top=100,left=100,height=200,width=300");


            footnote.textContent = footnotes[i];
            footnote.style.fontStyle = "italic";
            footnote.style.fontSize = "1.2em";

            closeButton.type = "button";
            closeButton.value = "Close Footnote";
            closeButton.style.display = "block";
            closeButton.style.margin = "10px auto";

            popup.window.document.body.style.backgroundColor = "ivory";
            popup.window.document.body.style.fontSize = "16px";
            popup.window.document.body.style.padding = "10px";
            popup.document.body.appendChild(phrase, footnote, closeButton);
            closeButton.onclick = () => {
                  popup.close();
            }
      }
}