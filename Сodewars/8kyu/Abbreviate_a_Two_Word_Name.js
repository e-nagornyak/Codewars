function abbrevName(name) {
   const arrStr = name.split(' ');
   console.log(`${arrStr[0][0].toUpperCase()}.${arrStr[1][0].toUpperCase()}`);

}
abbrevName("evan Cole");