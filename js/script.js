const prezzoKm = 0.21;
const scontoVenti = 0.2;
const scontoQuaranta = 0.4;
const etaMinore = 18;
const etaAnziana = 65;
let prezzoBiglietto;
let prezzoFinale;
let sconto;

prezzoBiglietto = prezzoKm * km;

if (eta < etaMinore) {
  sconto = prezzoBiglietto * scontoVenti;
  prezzoFinale = prezzoBiglietto - sconto;
}

else if (eta > etaAnziana) {
  sconto = prezzoBiglietto * scontoQuaranta;
  prezzoFinale = prezzoBiglietto - sconto;
} else {
  prezzoFinale = prezzoBiglietto;
}

const gButton = document.querySelector('#btn-genera');

  gButton.addEventListener('click', function(){
    document.querySelector('.container-ticket').classList.add('d-block');
})