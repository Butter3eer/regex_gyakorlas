document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('fizetesForm')!.style.visibility = 'visible';

  var teljesNevRegex = /^[\p{L}0-9 ]+$/gu; //szorgalmi, elfogad magyar és minden más betűt kivéve speciális karaktereket, számokat meg space karaktert el kell fogadnia viszont az utca házszám miatt például
  var orszagRegex = /^[a-z]+$/i;
  var varosRegex = /^[\p{L}0-9 ]+$/gu; // szorgalmi
  var utcaHazSzamRegex = /^[\p{L}0-9 ]+$/gu; //szorgalmi
  var iranyitoSzamRegex = /^[A-Z0-9]+$/;
  var bankkartyaSzamRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  var ellenKodRegex = /^\d{3}$/;
  var bankkartyaNevRegex = /^[a-z ]+$/i;

  document.getElementById('fizetesForm')!.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let teljesNev : string = (document.getElementById("teljesNev") as HTMLInputElement).value;
    let orszag : string = (document.getElementById("orszag") as HTMLInputElement).value;
    let varos : string = (document.getElementById("varos") as HTMLInputElement).value;
    let utcaHazSzam : string = (document.getElementById("utcaHazSzam") as HTMLInputElement).value;
    let iranyitoSzam : string = (document.getElementById("iranyitoSzam") as HTMLInputElement).value;
    let bankkartyaSzam : string = (document.getElementById("bankkartyaSzam") as HTMLInputElement).value;
    let ellenKod : string = (document.getElementById("ellenKod") as HTMLInputElement).value;
    let kartyaNev : string = (document.getElementById("kartyaNev") as HTMLInputElement).value;

    if (!teljesNevRegex.test(teljesNev) || teljesNev == null && 
        !orszagRegex.test(orszag) || orszag == null &&
        !varosRegex.test(varos) || varos == null &&
        !utcaHazSzamRegex.test(utcaHazSzam) || utcaHazSzam == null &&
        !iranyitoSzamRegex.test(iranyitoSzam) || iranyitoSzam == null &&
        !bankkartyaSzamRegex.test(bankkartyaSzam) || bankkartyaSzam == null &&
        !ellenKodRegex.test(ellenKod) || ellenKod == null &&
        !bankkartyaNevRegex.test(kartyaNev) || kartyaNev == null
        ) 
      {
        document.getElementById('hibaUzenet')!.style.color = 'red';
        document.getElementById('hibaUzenet')!.textContent = "A megadott adatok rossz formátumúak.";
      }
    else {
      document.getElementById('hibaUzenet')!.style.color = 'green';
      document.getElementById('fizetesForm')!.style.visibility = 'hidden';
      document.getElementById('hibaUzenet')!.textContent = "Sikeres fizetés.";
    }
  });
});
