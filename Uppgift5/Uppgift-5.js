/* • Skriv en funktion som har en uppgift att skapa
1000 slumpmässiga tal mellan 1 och 6.
Metoden returnerar en array
T.ex. [4,5,6,3,1,5,2,3,6,2,4, … ]
• Kalla funktionen randomDice()
• Skapa en ny funktion som du kallar print()
• Funktionen anropar randomDice() för att generera
en array med 1000 slumpmässig tal.
• I funktionen print() ska du gå igenom
alla tal och skapa en frekvenstabell
över förekomsten av ettor, tvåor, osv.
• Skriv ut tabellen i konsolfönstret.
• Testa programmet flera gånger för att kontrollera att du får olika tabeller vid varje körning.*/


function randomDice(){                                              // deklarerar en array och använder en for-sats som loopar igenom 
    let randomArray = [];                                           // exakt 1000 gånger och lägger till ett element i arrayen
    for(let i = 0; i < 1000; i++){                                  // i form av en slumpmässig siffra mellan 1 och 6 
        randomArray.push(Math.floor((Math.random() *6) +1)); 
    }
    return randomArray;
}

function print(){
    let randomArray = randomDice(); 
    let one   = 0;                                                    // deklarerar counters för alla möjliga outcomes 
    let two   = 0; 
    let three = 0; 
    let four  = 0; 
    let five  = 0; 
    let six   = 0; 
    
    for (let i = 0; i < 1000; i++){                                  // Loopar igenom arrayen och lägger till 1 på rätt counter 
        switch(randomArray[i]){
            case 1: one   += 1; break;                                 
            case 2: two   += 1; break; 
            case 3: three += 1; break; 
            case 4: four  += 1; break; 
            case 5: five  += 1; break; 
            case 6: six   += 1; break; 
        }
    }
    console.log("Antal ettor: "  + one   + "\n" +
                "Antal tvåor: "  + two   + "\n" +
                "Antal treor: "  + three + "\n" +
                "Antal fyror: "  + four  + "\n" +
                "Antal femmor: " + five  + "\n" +
                "Antal sexor: "  + six);
}
print(); 
