const binaryArrayToNumber = arr => {
    let numStr = '';
    arr.map(a=>String(a)).forEach(a=>{
        numStr += a;
    })
    return parseInt(+(numStr),2);
};