function creaContatoreAutomatico(intervalloTempo) {
    let contatore = 0
    return function avviaContatore() {
        setInterval(() => {
            contatore++;
            console.log(`Contatore: ${contatore}`)
        }, intervalloTempo)
    }
}

const startContatore = creaContatoreAutomatico(1000)
startContatore()