function Person (namn, epost, mobil, gatuadress, postnummer, ort){
    this.namn = namn; 
    this.epost = epost; 
    this.mobil = mobil;
    let adress = {};
    adress.gatuadress = gatuadress; 
    adress.postnnummer = postnummer; 
    adress.ort = ort;  
    this.print = function(){
       console.log(this.namn + "\n" + "\n" + adress.gatuadress + "\n" + adress.postnnummer + " " + adress.ort); 
    };
}

let sofie = new Person("Sofie Ohlsson", "sofieohlsson@gmail.com", "0745987245", "Stråkvägen 1", "169 35", "Solna"); 
sofie.print(); 

console.log("\n");

let sixten = new Person("Sixten Olsson", "sixten610@gmail.com", "0742593746", "Vasagatan 1", "411 24 ", "Göteborg"); 
sixten.print(); 