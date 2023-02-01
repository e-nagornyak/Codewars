var greet_abe = function () {
    var name = 'Abe';
    return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function () {
    return "Hello, " + name + '!';
};
console.log(greet_abe());
console.log(greet_ben());