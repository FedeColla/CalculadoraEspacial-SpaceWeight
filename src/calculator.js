const user = document.getElementById('user')
const button = document.getElementById('button')

let gTierra = 9.8
let gMercurio = 3.7
let gVenus = 8.87
let gMarte = 3.721
let gJupiter = 24.8
let gSaturno = 10.44
let gUrano = 8.87
let gNeptuno = 11.15
let gPluton = 0.62

button.addEventListener('click', () => {
    peso = parseInt(user.value);

    const mercurio = document.getElementById('mercurio')
    let resultMercurio = peso * gMercurio / gTierra;
    mercurio.textContent = resultMercurio.toFixed(2);

    const venus = document.getElementById('venus')
    let resultVenus = peso * gVenus / gTierra
    venus.textContent = resultVenus.toFixed(2);

    const marte = document.getElementById('marte')
    let resultMarte = peso * gMarte/ gTierra
    marte.textContent = resultMarte.toFixed(2);

    const jupiter = document.getElementById('jupiter')
    let resultJupiter = peso * gJupiter / gTierra
    jupiter.textContent = resultJupiter.toFixed(2);

    const saturno = document.getElementById('saturno')
    let resultSaturno = peso * gSaturno / gTierra
    saturno.textContent = resultSaturno.toFixed(2);

    const urano = document.getElementById('urano')
    let resultUrano  = peso * gUrano / gTierra
    urano.textContent = resultUrano.toFixed(2);

    const neptuno = document.getElementById('neptuno')
    let resultNeptuno = peso * gNeptuno / gTierra
    neptuno.textContent = resultNeptuno.toFixed(2);

    const pluton = document.getElementById('pluton')
    let resultPluton = peso * gPluton / gTierra
    pluton.textContent = resultPluton.toFixed(2);
})
