function cancelCraftTable() {
    fetch("index.html").then(data => data.text()).then(data => {
        document.getElementById('middlePart-iframe').innerHTML = `<div id="middlePart-iframe-iframe">${data}</div>`
    })
}

function insertParticle(position) {
    if (document.getElementById(`craftTableParticle-${position}`).innerHTML != "") {
        document.getElementById(`craftTableParticle-${position}`).innerHTML = ""
    }
    else {
        console.log(document.getElementById("craftTableParticle").innerHTML)
        document.getElementById("craftTableParticle").innerHTML += `<div class='dialog' id="dialog"><h3>What type of quark do you want to put in this slot ?</h3><button class='dialog-button' onclick='putQuarkInCraftSlot("Up", ${position})'>Up</button><button class='dialog-button' onclick='putQuarkInCraftSlot("Down", ${position})'>Down</button></div>`
    }
}

function putQuarkInCraftSlot(quark, position) {
    document.getElementById(`craftTableParticle-${position}`).innerHTML = quark
    document.getElementById("dialog").remove()
}
//if it works, don't touch it !!!!!
function craftParticle() {
    let quarksPlacement = 0
    for (let i = 1; i < 4; i++) {
        if (document.getElementById(`craftTableParticle-${i}`).innerHTML == "Up") {
            quarksPlacement++
        }
        else if (document.getElementById(`craftTableParticle-${i}`).innerHTML == "Down") {
            quarksPlacement = quarksPlacement
        }
        else if (document.getElementById(`craftTableParticle-${i}`).innerHTML == "") {
            document.getElementById("craftTableParticle").innerHTML += `<div class='dialog' id="dialog"><h3>Please fill in the three slots before crafting anything.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
            return 0;
        }
    }
    if (quarksPlacement == 1) {
        if (Game.particles.down < 2 || Game.particles.up < 1) {
            document.getElementById("craftTableParticle").innerHTML += `<div class='dialog' id="dialog"><h3>You don't have enough quarks.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
            return 0;
        }
        document.getElementById("craftTableParticle").innerHTML += `<div class='dialog' id="dialog"><h3>You crafted a neutron.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
        clearParticlecraftTableParticle()
        Game.particles.neutron++
        document.getElementById("rightPart-particles-neutron").innerHTML = (document.getElementById("rightPart-particles-neutron").innerHTML).split(":")[0] + ": " + Game.particles.neutron
    }
    else if (quarksPlacement == 2) {
        if (Game.particles.down < 1 || Game.particles.up < 2) {
            document.getElementById("craftTableParticle").innerHTML += `<div class='dialog' id="dialog"><h3>You don't have enough quarks.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
            return 0;
        }
        document.getElementById("craftTableParticle").innerHTML += `<div class='dialog' id="dialog"><h3>You crafted a Proton.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
        clearParticlecraftTableParticle()
        Game.particles.proton++
        document.getElementById("rightPart-particles-proton").innerHTML = (document.getElementById("rightPart-particles-proton").innerHTML).split(":")[0] + ": " + Game.particles.proton
    }
    else if (quarksPlacement == 0 || quarksPlacement == 3) {
        if (quarksPlacement == 0) {
            if (Game.particles.down < 3) {
                document.getElementById("craftTableParticle").innerHTML += `<div class='dialog' id="dialog"><h3>You don't have enough quarks.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
                return 0;
            }
        }
        else if (quarksPlacement == 3) {
            if (Game.particles.up < 3) {
                document.getElementById("craftTableParticle").innerHTML += `<div class='dialog' id="dialog"><h3>You don't have enough quarks.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
                return 0;
            }
        }
        document.getElementById("craftTableParticle").innerHTML += `<div class='dialog' id="dialog"><h3>You crafted something unstable, it's so unstable that it decayed in 10⁻²³seconds.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
        clearParticlecraftTableParticle()
    }
}

function clearParticlecraftTableParticle() {
    for (let i = 1; i < 4; i++) {
        if (document.getElementById(`craftTableParticle-${i}`).innerHTML == "Up") {
            Game.particles.up--
            document.getElementById(`craftTableParticle-${i}`).innerHTML = ""
        }
        else if (document.getElementById(`craftTableParticle-${i}`).innerHTML == "Down") {
            Game.particles.down--
            document.getElementById(`craftTableParticle-${i}`).innerHTML = ""
        }
    }
    document.getElementById("rightPart-particles-down").innerHTML = (document.getElementById("rightPart-particles-down").innerHTML).split(":")[0] + ": " + Game.particles.down
    document.getElementById("rightPart-particles-up").innerHTML = (document.getElementById("rightPart-particles-up").innerHTML).split(":")[0] + ": " + Game.particles.up
}

function atomsCraftMenu() {
    craftTableParticle.style.display = "none"
    craftTableAtoms.style.display = "flex"
}

function particlesCraftMenu() {
    craftTableParticle.style.display = "block"
    craftTableAtoms.style.display = "none"
}