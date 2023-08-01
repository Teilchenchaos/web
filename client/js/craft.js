function insertParticle(position) {
    if(document.getElementById(`craftTable-${position}`).innerHTML != "") {
        document.getElementById(`craftTable-${position}`).innerHTML = ""
    }
    else {
        document.getElementById("craftTable").innerHTML += "<div class='dialog'><h3>Please, choose to put an up or a down quark.</h3><button class='dialog-button'>Up</button class='dialog-button'><button>Down</button></div>"
    }
}