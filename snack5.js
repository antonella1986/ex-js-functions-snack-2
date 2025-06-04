let intervallo;

const stampaOgniSecondo = () => {
    intervallo = setInterval(() => {
        console.log('Stampo ogni secondo perché mi va')
    }, 1000)
}

setTimeout (() => {
    clearInterval(intervallo)
    console.log('Ok ora è sufficiente')
},5000)

stampaOgniSecondo()