setInterval(function() {
    save()
}, 60 * 1000);

function save() {
    localStorage.setItem("save", JSON.stringify(Game))
    console.log("save")
}

document.onkeydown = function(e) {
    if(e.key == "s") {
        e.preventDefault()
        if(e.ctrlKey) {
            console.log("manual save")
            save()
        }
    }
}