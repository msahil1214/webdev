function LunchBy(names) {
    var names=["Sahil","Mazarib", "Shoaib","hasan","Ali"];
    var n=names.length;
    var numofpayer= Math.floor(Math.random()*n);
    nameofpayer=names[numofpayer];
    alert(nameofpayer);
    
    
}
LunchBy();
