var Game = {
    "particles": {
        "up": 0,
        "down": 0,
        "gluon": 0,
        "electron": 0,
        "proton": 0,
        "neutron": 0
    },
    "atoms": {

    }
}


//add the particles amounts to the screens on the right spot
document.getElementById("rightPart-particles-up").innerHTML = document.getElementById("rightPart-particles-up").innerHTML + Game.particles.up
document.getElementById("rightPart-particles-gluon").innerHTML = document.getElementById("rightPart-particles-gluon").innerHTML + Game.particles.gluon
document.getElementById("rightPart-particles-down").innerHTML = document.getElementById("rightPart-particles-down").innerHTML + Game.particles.down
document.getElementById("rightPart-particles-electron").innerHTML = document.getElementById("rightPart-particles-electron").innerHTML + Game.particles.electron
document.getElementById("rightPart-particles-proton").innerHTML = document.getElementById("rightPart-particles-proton").innerHTML + Game.particles.proton
document.getElementById("rightPart-particles-neutron").innerHTML = document.getElementById("rightPart-particles-neutron").innerHTML + Game.particles.neutron



//set an interval to update each 5 seconds the amount of particles acording to 1/3 chance of getting one of them each time
loop = setInterval(() => {
    let randomquark = Math.floor((Math.random() * 4) + 1);
    if (randomquark === 1) {
        Game.particles.up = Game.particles.up + 1;
        document.getElementById("rightPart-particles-up").innerHTML = (document.getElementById("rightPart-particles-up").innerHTML).split(":")[0] + ": " + Game.particles.up
    } else if (randomquark === 2) {
        Game.particles.down = Game.particles.down + 1;
        document.getElementById("rightPart-particles-down").innerHTML = (document.getElementById("rightPart-particles-down").innerHTML).split(":")[0] + ": " + Game.particles.down
    } else if (randomquark === 3) {
        Game.particles.electron = Game.particles.electron + 1;
        document.getElementById("rightPart-particles-electron").innerHTML = (document.getElementById("rightPart-particles-electron").innerHTML).split(":")[0] + ": " + Game.particles.electron
    } else {
        Game.particles.gluon = Game.particles.electron + 1;
        document.getElementById("rightPart-particles-gluon").innerHTML = (document.getElementById("rightPart-particles-gluon").innerHTML).split(":")[0] + ": " + Game.particles.gluon
    }
}, 50000000);

function showCraftMenu() {
    document.getElementById("middlePart-iframe").style.display = "flex" 
    fetch("craft.html").then(data => data.text()).then(data => {
        document.getElementById('middlePart-iframe').innerHTML = `<div id="middlePart-iframe-iframe">${data}</div>`
    })
    getParticles.style.display = "none"
}

function showPeriodicTableMenu() {
    document.getElementById("middlePart-iframe").style.display = "flex" 
    fetch("periodicTable.html").then(data => data.text()).then(data => {
        document.getElementById('middlePart-iframe').innerHTML = `<div id="middlePart-iframe-iframe">${data}</div>`
        loadPeriodicTable()
    })
    getParticles.style.display = "none"
}


function putIndexPage() {
    document.getElementById("middlePart-iframe").style.display = "none" 
    document.getElementById("middlePart-iframe").innerHTML = "."
    getParticles.style.display = "block"
}

//-------------------------------------------------------------------------------------------------------

let particleTimeSpawn1 = 7
let particleTimeSpawn2 = 5

setInterval(() => {
    const randomParticle1 = Math.floor((Math.random() * 4) + 1);

    let randomThing1 = Math.floor((Math.random() * 6) + 1);
    let randomHeight1 = Math.floor(Math.random() * 50);
    console.log(randomThing1)
    document.getElementById("getParticles").innerHTML = `<button id="getParticles-particle1" onclick="addParticles(${randomParticle1})"></button>`
    document.getElementById(`getParticles-particle1`).style.animationTimingFunction = "linear"
    document.getElementById(`getParticles-particle1`).style.marginTop = randomHeight1 + "%"
    document.getElementById(`getParticles-particle1`).style.animation = "particleMovement1_" + randomThing1 + " " + particleTimeSpawn1 + "s"
}, 12 * 1000)


function addParticles(particleNumber1) {
    let particle1 = ""
    if (particleNumber1 == 1) {
        particle1 = "electron"
    } else if (particleNumber1 == 2) {
        particle1 = "down"
    } else if (particleNumber1 == 3) {
        particle1 = "up"
    } else if(particleNumber1 == 4){
        particle1 = "gluon"
    }
    Game.particles[particle1] += 1
    document.getElementById("rightPart-particles-" + particle1).innerHTML = (document.getElementById("rightPart-particles-" + particle1).innerHTML).split(":")[0] + ": " + Game.particles[particle1]
    document.getElementById("getParticles-particle1").remove()

}

setInterval(() => {
    const randomParticle2 = Math.floor((Math.random() * 4) + 1);

    let randomThing2 = Math.floor((Math.random() * 6) + 1);
    let randomHeight2 = Math.floor(Math.random() * 50);
    console.log(randomThing2)
    document.getElementById("getParticles").innerHTML = `<button id="getParticles-particle2" onclick="addParticles(${randomParticle2})"></button>`
    document.getElementById(`getParticles-particle2`).style.animationTimingFunction = "linear"
    document.getElementById(`getParticles-particle2`).style.marginTop = randomHeight2 + "%"
    document.getElementById(`getParticles-particle2`).style.animation = "particleMovement2_" + randomThing2 + " " + particleTimeSpawn2 + "s"
}, 6 * 1000)


function addParticles(particleNumber2) {
    let particle2 = ""
    if (particleNumber2 == 1) {
        particle2 = "electron"
    } else if (particleNumber2 == 2) {
        particle2 = "down"
    } else if (particleNumber2 == 3) {
        particle2 = "up"
    } else if(particleNumber2 == 4){
        particle2 = "gluon"
    }
    Game.particles[particle2] += 1
    document.getElementById("rightPart-particles-" + particle2).innerHTML = (document.getElementById("rightPart-particles-" + particle2).innerHTML).split(":")[0] + ": " + Game.particles[particle2]
    document.getElementById("getParticles-particle2").remove()

}
