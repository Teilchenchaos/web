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
        }
        else if (document.getElementById(`craftTableParticle-${i}`).innerHTML == "Down") {
            Game.particles.down--
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

function changeParticlesPosition(whatToChange) {
    if(whatToChange == "-p") {
        if(parseInt(document.getElementById("craftTableAtoms-table-1").innerHTML.split(": ")[1]) == 0) {
            return 0;
        }
        let particleNumber = parseInt(document.getElementById("craftTableAtoms-table-1").innerHTML.split(": ")[1]) - 1
        document.getElementById("craftTableAtoms-table-1").innerHTML = `Protons : ${particleNumber}`
    } else if(whatToChange == "+p") {
        let particleNumber = parseInt(document.getElementById("craftTableAtoms-table-1").innerHTML.split(": ")[1]) + 1
        document.getElementById("craftTableAtoms-table-1").innerHTML = `Protons : ${particleNumber}`
    } 
    else if(whatToChange == "-n") {
        if(parseInt(document.getElementById("craftTableAtoms-table-2").innerHTML.split(": ")[1]) == 0) {
            return 0;
        }
        let particleNumber = parseInt(document.getElementById("craftTableAtoms-table-2").innerHTML.split(": ")[1]) - 1
        document.getElementById("craftTableAtoms-table-2").innerHTML = `Neutrons : ${particleNumber}`
    } else if(whatToChange == "+n") {
        let particleNumber = parseInt(document.getElementById("craftTableAtoms-table-2").innerHTML.split(": ")[1]) + 1
        document.getElementById("craftTableAtoms-table-2").innerHTML = `Neutrons : ${particleNumber}`
    } 
    else if(whatToChange == "-e") {
        if(parseInt(document.getElementById("craftTableAtoms-table-3").innerHTML.split(": ")[1]) == 0) {
            return 0;
        }
        let particleNumber = parseInt(document.getElementById("craftTableAtoms-table-3").innerHTML.split(": ")[1]) - 1
        document.getElementById("craftTableAtoms-table-3").innerHTML = `Electrons : ${particleNumber}`
    } else if(whatToChange == "+e") {
        let particleNumber = parseInt(document.getElementById("craftTableAtoms-table-3").innerHTML.split(": ")[1]) + 1
        document.getElementById("craftTableAtoms-table-3").innerHTML = `Electrons : ${particleNumber}`
    }
}

function craftAtom() {
    let protons = parseInt(document.getElementById("craftTableAtoms-table-1").innerHTML.split(": ")[1])
    let neutrons = parseInt(document.getElementById("craftTableAtoms-table-2").innerHTML.split(": ")[1])
    let electrons = parseInt(document.getElementById("craftTableAtoms-table-3").innerHTML.split(": ")[1])
    console.log(protons)
    if(protons > Game.particles.proton || neutrons > Game.particles.neutron || electrons > Game.particles.electron) {
        document.getElementById("craftTableAtoms").innerHTML += `<div class='dialog' id="dialog"><h3>You don't have enough particles.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
        return 0;
    }
    fetch("files/periodicTable.json").then(data => data.json()).then(data => {
        for(let i=0;i<118;i++) {
            let testProtons = data["elements"][i]["number"]
            let testElectrons = data["elements"][i]["number"]
            let testNeutrons = Math.round(data["elements"][i]["atomic_mass"]) - data["elements"][i]["number"]
            console.log(data["elements"][i]["name"])
            if(protons == testProtons && neutrons == testNeutrons && electrons == testElectrons) {
                console.log(data["elements"][i]["number"] + " " + data["elements"][i]["name"] + " neutrons  " + testNeutrons)
                console.log("test")
                document.getElementById("craftTableAtoms").innerHTML += `<div class='dialog' id="dialog"><h3>You crafted an atom of ${data["elements"][i]["name"]}.</h3><button class='dialog-button' onclick='document.getElementById("dialog").remove()'>Ok</button></div>`
                Game.particles.neutron -= neutrons
                Game.particles.electron -= electrons
                Game.particles.proton -= protons
                document.getElementById("rightPart-particles-neutron").innerHTML = (document.getElementById("rightPart-particles-neutron").innerHTML).split(":")[0] + ": " + Game.particles.neutron
                document.getElementById("rightPart-particles-proton").innerHTML = (document.getElementById("rightPart-particles-proton").innerHTML).split(":")[0] + ": " + Game.particles.proton
                document.getElementById("rightPart-particles-electron").innerHTML = (document.getElementById("rightPart-particles-electron").innerHTML).split(":")[0] + ": " + Game.particles.electron
                if(Game["atoms"][data["elements"][i]["name"]] == undefined) {
                    Game["atoms"][data["elements"][i]["name"]] = 0
                }
                Game["atoms"][data["elements"][i]["name"]] += 1 
                document.getElementById("rightPart-atoms-"+data["elements"][i]["name"]).innerHTML = `${data["elements"][i]["name"]} : ${Game["atoms"][data["elements"][i]["name"]]}`
                return 0;
            }
        }
    })
}