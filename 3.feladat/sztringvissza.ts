// Ezek stringtípus script-ek

// Sztringek listája:
var sztringek: string[] = ["alma", "körte", "barack", "citrom", "dinnye", "cseresznye"];

// 3 véletlenszerű sztring visszaadása:
function randomSztring(hossz: number): string[] {
  var output: string[] = [];

  for (let i = 0; i < hossz; ++i) {
    var r: number = Math.floor(Math.random() * sztringek.length);
    output.push(sztringek[r]);
  }

  return output;
}

// Példa használat:
var eredmeny: string[] = randomSztring(3);
console.log("Véletlenszerű sztringek:", eredmeny);