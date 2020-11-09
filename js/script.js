$(document).ready(function () {


// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var boxUnoEl = $('#boxUno');
var studente = {
  'età': 31,
  'nome': 'Matteo',
  'cognome': 'Ponchietti'
};
for (var chiave in studente){
  boxUnoEl.append( '<h2>'+ chiave + ': ' + studente[chiave] +'</h2>')
};

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var boxDueEl = $('#boxDue');
var arrStudenti= [
  {
    'età': 21,
    'nome': 'Mario',
    'cognome': 'Rossi'
  },
  {
    'età': 31,
    'nome': 'Matteo',
    'cognome': 'Ponchietti'
  },
  {
    'età': 22,
    'nome': 'Beatrice',
    'cognome': 'Verdi'
  }
];
for (var i =0; i < arrStudenti.length; i++){
  boxDueEl.append('<h3>Il nome è: ' + arrStudenti[i].nome +'</h3>')
  boxDueEl.append('<h3>Il cognome è: ' + arrStudenti[i].cognome +'</h3>')
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var boxTreEl = $('#boxTre');
var inputUtente = {
  'età': undefined,
  'nome': undefined,
  'cognome': undefined
};
inputUtente.nome = prompt('Inserisci il nome dello studente');
inputUtente.cognome = prompt('Inserisci il cognome dello studente');
inputUtente.età = parseInt(prompt("Inserisci l'età dello studente"));

arrStudenti.push(inputUtente);
for (var i =0; i < arrStudenti.length; i++){
  boxTreEl.append('<h3>Il nome è: ' + arrStudenti[i].nome +'</h3>');
  boxTreEl.append('<h3>Il cognome è: ' + arrStudenti[i].cognome +'</h3>');
  boxTreEl.append("<h3>L'età è: " + arrStudenti[i].età +'</h3>');
}

});
