'use strict';

function finalGrade(e, p) {
   return (e > 90 || p > 10) ? 100 : (e > 75 && p >= 5) ? 90 : (e > 50 && p >= 2) ? 75 : 0;
}