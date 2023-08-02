function loadPeriodicTable() {
    fetch("files/periodicTable.json").then(data => data.json()).then(data => {
        console.log(data)
        for(let i=0; i<data["elements"].length; i++) {
            console.log(data["elements"][i]["number"])
            document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).innerHTML = `<p style="font-size: 0.5vw; margin-left: -2vw; margin-top: -0.1vw">${data["elements"][i]["number"]}</p><h6 style="margin-top: 0.5vw">${data["elements"][i]["symbol"]}</h6><p style="font-size: 0.5vw; margin-top: -1vw">${data["elements"][i]["name"]}</p>`
            document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).onclick = function () { window.open("atom.html?m=" + i) }

        }
    })
}

