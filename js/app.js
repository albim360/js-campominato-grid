console.log('prato fiorito');


// Dichiara la variabile per il lato della griglia
let latoGriglia = 10;

// Calcola il numero totale di celle nella griglia
let numeroCelle = latoGriglia * latoGriglia;


const startButton = document.querySelector('#startGame')




// Seleziona l'elemento con classe "griglia" dalla pagina HTML
const grigliaElement = document.querySelector('.griglia');
startButton.addEventListener('click', function() {
    document.querySelector('#startGame').remove()

    // Crea un ciclo per generare tutte le celle della griglia
    for(let i = 0; i < numeroCelle; i++) {
      let num = i + 1;
      
      // Crea una stringa HTML per ogni cella
      let divString = "<div class='cella' id='cella-" + num + "' style='width: calc(100% / " + latoGriglia + ")'>" + num + "</div>";
      console.log(divString);
  
      // Aggiunge la stringa HTML all'elemento della griglia
      grigliaElement.innerHTML += divString;
    }
    
    // Seleziona tutti gli elementi con classe "cella" dalla pagina HTML
    const cella = document.querySelectorAll('.cella');
  
    // Itera su ogni cella e associa l'evento "click"
    cella.forEach(function(cella) {
      cella.addEventListener('click', function() {
        cella.classList.add('bg-brown');
        // Logga l'ID della cella cliccata
        console.log(cella.id.split("-")[1]);
      });
    });
  });
  