function creaTimer(tempo) {
    return() => {
        setTimeout(() => {
            console.log('Tempo scaduto!')
        }, tempo)
    }
}

const timer = creaTimer(5000)
timer()