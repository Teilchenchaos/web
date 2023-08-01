function insertParticle(position) {
    if(document.getElementById(`craftTable-${position}`).innerHTML != "") {
        document.getElementById(`craftTable-${position}`).innerHTML = ""
    }
    else {
        document.getElementById("craftTable").innerHTML += `<div class='dialog' id="dialog"><h3>What type of quark do you want to put in this slot ?.</h3><button class='dialog-button' onclick='putQuarkInCraftSlot("up", ${position})'>Up</button><button class='dialog-button' onclick='putQuarkInCraftSlot("down", ${position})'>Down</button></div>`
    }
}

function putQuarkInCraftSlot(quark, position) {
    document.getElementById(`craftTable-${position}`).innerHTML = quark
    document.getElementById("dialog").remove()
}