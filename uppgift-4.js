function beräknaSfär (radie){
    let volym = (4 * Math.PI * Math.pow(radie, 3)) / 3;
    let area =  4 * Math.PI * Math.pow(radie, 2); 
    return console.log("Volym: " + Math.round(volym) + "\n" + "Area: " + Math.round(area)); 
}; 

beräknaSfär(4); 