console.log('prato fiorito');

// Dichiariamo la variabile per il lato della griglia
let latoGriglia = 10;

// Calcoliamo il numero totale di celle nella griglia
let numeroCelle = latoGriglia * latoGriglia;

// Selezioniamo il pulsante "startGame" dalla pagina HTML
const startButton = document.querySelector('#startGame');

// Selezioniamo l'elemento con classe "griglia" dalla pagina HTML
const grigliaElement = document.querySelector('.griglia');

// Aggiungiamo un evento al clic sul pulsante "startGame"
startButton.addEventListener('click', function() {
  // Rimuoviamo il pulsante "startGame" dalla pagina
  document.querySelector('#startGame').remove();

  // Creiamo un ciclo per generare tutte le celle della griglia
  for(let i = 0; i < numeroCelle; i++) {
    let num = i + 1;

    // Creiamo una stringa HTML per ogni cella
    let divString = "<div class='cella' id='cella-" + num + "' style='width: calc(100% / " + latoGriglia + ")'>" + num + "</div>";
    console.log(divString);

    // Aggiungiamo la stringa HTML all'elemento della griglia
    grigliaElement.innerHTML += divString;
  }

  // Selezioniamo tutti gli elementi con classe "cella" dalla pagina HTML
  const cella = document.querySelectorAll('.cella');

  // Iteriamo su ogni cella e associamo l'evento "click"
  cella.forEach(function(cella) {
    cella.addEventListener('click', function() {
      cella.classList.add('bg-brown');
      // Logghiamo l'ID della cella cliccata
      console.log(cella.id.split("-")[1]);
    });
  });
});
