"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Chapter case   

      Word Cloud   Generator
      Author: Yehoshua Anton
      Date:   11/18/2026    

      Filename:       js07.js
 */

document.getElementById("getFile").onchange = function () {
      // Retrieve information about the selected file
      let userFile = this.files[0];

      // Verify that a text file is selected
      try {
            const isText = userFile.type.startsWith("text");
            if (!isText) {
                  throw `${userFile.name} is not a text file`;
            }

            // Read the contents of the selected file
            let fileReader = new FileReader();
            fileReader.readAsText(userFile);

            // Once the file has finished loading, display in the page
            const sourceDoc = document.getElementById("wc_document");
            fileReader.onload = () => {
                  sourceDoc.innerHTML = fileReader.result;

                  // Store the text of the document, removing HTML tags
                  const sourceText = sourceDoc.textContent;

                  // Generate the word cloud
                  wordCloud(sourceText);
            }
      } catch (error) {
            // Alert the user to select a text file
            window.alert(error);
      }

      function wordCloud(sourceText) {
            // Convert the source text to lowercase and remove leading and trailing whitespace
            sourceText = sourceText.toLowerCase().trim();

            // Remove anything that isn't a letter of whitespace from the text
            const wordRegex = /[^a-z\s]/g;
            sourceText = sourceText.replace(wordRegex, "");

            // Remove all words that appear in the stopWords array from the text
            for (let i = 0; i < stopWords.length; i++) {
                  const stopRegex = new RegExp(`\\b${stopWords[i]}\\b`, "g");
                  sourceText = sourceText.replace(stopRegex, "");
            }

            // Place the remaining words into an array by splitting on the whitespace
            let words = sourceText.split(/\s+/g);

            // Sort the words by alphabetical order
            words.sort();

            // Create a two-dimensional array in which each element is an array containing a word and it's duplicate count
            let unique = [[words[0], 1]];
            let uniqueIndex = 0;
            const wordsLength = words.length;

            for (let i = 1; i < wordsLength; i++) {
                  if (words[i] === words[i - 1]) {
                        // Increase that word's duplicate counter by 1
                        unique[uniqueIndex][1]++;
                  } else {
                        // Add a new word to he unique array
                        uniqueIndex++;
                        unique[uniqueIndex] = [words[i], 1];
                  }
            }

            // Sort by duplicate count in descending order
            unique.sort((a, b) => {
                  return b[1] - a[1];
            });

            // Keep only the 110 most frequently occurring words
            unique = unique.slice(0, 100);

            // Find the duplicates of the most-repeated word
            const maxCount = unique[0][1];

            // Sort the list of words into alphabetical order again
            unique.sort();

            // Reference the word cloud box and reset the text
            const cloudBox = document.getElementById("wc_cloud");
            cloudBox.innerHTML = "";

            // Size each word based on it's usage
            const uniqueLength = unique.length;
            for (let i = 0; i < uniqueLength; i++) {
                  const word = document.createElement("span");
                  word.textContent = unique[i][0];
                  word.style.fontSize = `${unique[i][1] / maxCount}em`;
                  cloudBox.appendChild(word);
            }
      }
}




























/*--- ----------------------------------------------*/
/* Array of words to NOT include in the word cloud */
/*-------------------------------------------------*/

let stopWords = ["a", "about", "above", "across", "after", "afterwards", "again", "against",
      "ago", "all", "almost", "alone", "along", "already", "also", "although",
      "always", "am", "among", "amongst", "amoungst", "amount", "an", "and",
      "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere",
      "are", "around", "as", "at", "back", "be", "became", "because", "become",
      "becomes", "becoming", "been", "before", "beforehand", "behind", "being",
      "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom",
      "but", "by", "call", "came", "can", "cannot", "cant", "case", "cases", "cause",
      "co", "computer", "con", "could", "couldnt", "cry", "de", "describe", "detail",
      "do", "does", "doing", "done", "down", "due", "during", "each", "eg", "eight",
      "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even",
      "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fie",
      "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former",
      "formerly", "forty", "found", "four", "from", "front", "full", "further",
      "get", "give", "go", "had", "has", "hasnt", "have", "he", "held", "having",
      "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers",
      "herself", "him", "himself", "his", "how", "however", "hundred", "i", "ie",
      "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself",
      "keep", "know", "knows", "knew", "last", "latter", "latterly", "least", "less",
      "let", "ltd", "made", "make", "many", "may", "me", "meanwhile", "might", "mill",
      "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my",
      "myself", "name", "namely", "neither", "never", "nevertheless", "next",
      "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now",
      "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or",
      "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over",
      "own", "part", "per", "perhaps", "plainly", "please", "precisely", "put",
      "rather", "re", "same", "said", "say", "says", "see", "seem", "seemed",
      "seeming", "seems", "serious", "several", "shall", "she", "should", "show",
      "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone",
      "something", "sometime", "sometimes", "somewhere", "st", "sts", "still", "such",
      "system", "take", "ten", "th", "ths", "thx", "than", "that", "the", "their",
      "them", "themselves", "then", "thence", "there", "thereafter", "thereby",
      "therefore", "therein", "thereupon", "these", "they", "thick", "thin",
      "third", "this", "those", "though", "three", "through", "throughout",
      "thru", "thus", "to", "together", "too", "top", "toward", "towards",
      "twelve", "twenty", "two", "un", "unless", "under", "until", "up",
      "upon", "us", "very", "via", "was", "we", "well", "were", "weve", "what",
      "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas",
      "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while",
      "whither", "who", "whoever", "whole", "whom", "whose", "why", "will",
      "with", "within", "without", "would", "year", "years", "yet", "you",
      "your", "yours", "yourself", "yourselves"];
