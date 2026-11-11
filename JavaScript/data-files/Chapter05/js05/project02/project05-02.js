"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Yehoshua Anton
      Date:   11/11/2026

      Filename: project05-02.js
*/

(() => {
      const images = document.querySelectorAll("img"),
            photoBucket = document.getElementById("photo_bucket"),
            photoList = document.getElementById("photo_list");

      images.forEach((image) => {
            image.onclick = () => {
                  if (image.parentElement.id === "photo_bucket") {
                        const newItem = document.createElement("li");
                        photoList.appendChild(newItem);
                        newItem.appendChild(image);
                  } else {
                        const oldItem = image.parentElement;
                        photoBucket.appendChild(image);
                        oldItem.parentElement.removeChild(oldItem);
                  }
            }
      });
})();