console.log("test");

/* 
Geheimnisse
Cola
Hefter
*/



let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};


console.log(unserLager)
console.table(unserLager)

// ausgabe Geheimnisse
console.log(unserLager.schrank["Obere Schublade"].Ordner2)
console.log(unserLager["schrank"]["Obere Schublade"]["Ordner2"])

// ausgabe Cola
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager["schrank"]["Untere Schublade"])

// in String hinzufügen +=     ersetzen = 
unserLager["schrank"]["Untere Schublade"] += " Spezi"
console.log(unserLager["schrank"]["Untere Schublade"])
console.log(unserLager)
console.table(unserLager)


// ausgabe Hefter
console.log(unserLager.schreibtisch.schublade)
console.log(unserLager["schreibtisch"]["schublade"])
