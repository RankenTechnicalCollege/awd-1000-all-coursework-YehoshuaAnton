"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Yehoshua Anton
      Date:   11/11/2026

      Filename: project05-03.js
*/

(() => {
      const sourceDoc = document.getElementById("source_doc"),
            toc = document.getElementById("toc"),
            heading = "H2";
      let headingCount = 1;

      for (let i = sourceDoc.firstElementChild; i != null; i = i.nextElementSibling) {
            if (i.nodeName === heading) {
                  const anchor = document.createElement("a");
                  anchor.name = `doclink${headingCount}`;
                  i.insertBefore(anchor, i.firstChild);
                  const listItem = document.createElement("li"),
                        link = document.createElement("a");
                  listItem.appendChild(link);
                  link.textContent = i.textContent;
                  link.href = `#doclink${headingCount}`;
                  toc.appendChild(listItem);
                  headingCount++;
            }
      }
})();