function removeUrlAnchor(url) {
    let removeIndex = url.split('').findIndex((e) => e === '#');
    return (removeIndex < 1) ? url : url.slice(0, removeIndex)
}


// function removeUrlAnchor(url) {
//     console.log(url.split('#')[0]);  вказуємо де саме розділювати елементи, тому ділимо посилання на 2 частини, і повертаємо першу
// }
