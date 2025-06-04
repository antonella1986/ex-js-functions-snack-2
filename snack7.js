let intervallo;
//
function avvio() {
    intervallo = setInterval(() => {
        console.log("Messaggio ripetuto");
    }, 1000);
}

function stop() {
    clearInterval(intervallo);
    console.log("Stop!");
}

//appena chiamo la funzione, avvio() viene startata
//dopo 3 secondi viene chiamata stop()
function eseguiEferma(avvio, stop) {
  avvio();
  setTimeout(() => {
    stop();
  }, 3000);
}
//eseguo materialmente
eseguiEferma(avvio, stop);
