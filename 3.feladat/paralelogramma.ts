// Ezek számtípus script-ek

// Területszámítás oldallal és hozzá tartozó magassággal:
function paralelogrammaOldalMagassag(oldal: number, magassag: number): number {
  return oldal * magassag;
}

// Számításhoz szükséges adatok megadása:
var oldal: number = 20;
var magassag: number = 16;

// Területszámítás szöggel és a hozzá tartozó két oldallal:
function paralelogrammaSzogKetoldal(oldal1: number, oldal2: number, szog: number): number {
  // A szög radiánokban kell legyen
  const szogRad = (szog * Math.PI) / 180;

  return oldal1 * oldal2 * Math.sin(szogRad);
}

// Számításhoz szükséges adatok megadása:  
var oldal1: number = 20;
var oldal2: number = 25;
var szog: number = 40;

// Eredmények kiírása:
console.log("Terület oldallal és magassággal:", paralelogrammaOldalMagassag(oldal, magassag));
console.log("Terület szöggel és két oldallal:", paralelogrammaSzogKetoldal(oldal1, oldal2, szog));
