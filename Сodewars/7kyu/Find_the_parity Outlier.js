function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}

let a = [2, 2, 2, 1, 2, 4]
findOutlier(a)