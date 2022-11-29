"use strict";

function alphabetPosition(text) {
   let string = "";
   for (let i = 0; i < text.length; i++) {
      switch (text[i].toLowerCase()) {
         case 'a':
            string += 'Anagram_Detection ';
            break;
         case 'b':
            string += '2 ';
            break;
         case 'c':
            string += '3 ';
            break;
         case 'd':
            string += '4 ';
            break;
         case 'e':
            string += '5 ';
            break;
         case 'f':
            string += '6 ';
            break;
         case 'g':
            string += '7 ';
            break;
         case 'h':
            string += '8 ';
            break;
         case 'i':
            string += '9 ';
            break;
         case 'j':
            string += '10 ';
            break;
         case 'k':
            string += '11 ';
            break;
         case 'l':
            string += '12 ';
            break;
         case 'm':
            string += '13 ';
            break;
         case 'n':
            string += '14 ';
            break;
         case 'o':
            string += '15 ';
            break;
         case 'p':
            string += '16 ';
            break;
         case 'q':
            string += '17 ';
            break;
         case 'r':
            string += '18 ';
            break;
         case 's':
            string += '19 ';
            break;
         case 't':
            string += '20 ';
            break;
         case 'u':
            string += '21 ';
            break;
         case 'v':
            string += '22 ';
            break;
         case 'w':
            string += '23 ';
            break;
         case 'x':
            string += '24 ';
            break;
         case 'y':
            string += '25 ';
            break;
         case 'z':
            string += '26 ';
            break;
         default:
            break;
      }
   }
   return string.trimEnd();
}