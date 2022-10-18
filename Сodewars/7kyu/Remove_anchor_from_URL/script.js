function removeUrlAnchor(url) {
    let removeIndex = url.split('').findIndex((e) => e === '#');
    return (removeIndex < 1) ? url : url.slice(0, removeIndex)

}