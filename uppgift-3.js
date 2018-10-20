let radie = prompt("Ange cirkelns radie: ");
    
function beräkna (radie){
let omkrets = 2 * Math.PI * radie; 
let area = Math.PI * Math.pow(radie, 2); 
return alert("Omkrets: " + Math.round(omkrets) + "\n" + "Area: " + Math.round(area)); 
}    

beräkna(radie); 