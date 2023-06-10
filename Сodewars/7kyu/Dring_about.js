function peopleWithAgeDrink(age) {
    switch (true) {
        case age < 14:
            return "drink toddy";
        case age < 18:
            return "drink coke";
        case age < 21:
            return "drink beer";
        default:
            return "drink whisky";
    }
}
