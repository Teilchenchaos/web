function loadPeriodicTable() {
    fetch("files/periodicTable.json").then(data => data.json()).then(data => {
        console.log(data)
        for(let i=0; i<data["elements"].length; i++) {
            console.log(data["elements"][i]["number"])
            document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).innerHTML = `<p style="font-size: 0.5vw; margin-left: -2vw; margin-top: -0.1vw;">${data["elements"][i]["number"]}</p><h6 style="margin-top: 0.5vw">${data["elements"][i]["symbol"]}</h6><p style="font-size: 0.5vw; margin-top: -1vw; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">${data["elements"][i]["name"]}</p>`
            document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).onclick = function () { window.open("atom.html?a=" + i) }
            document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.borderStyle = "none"
            document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.borderRadius = "7%"
            if(data["elements"][i]["category"] == "diatomic nonmetal" || data["elements"][i]["category"] == "polyatomic nonmetal") {
                document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.backgroundColor = "#e2eeff"
            }
            else if(data["elements"][i]["category"] == "alkali metal" ) {
                document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.backgroundColor = "#d8f8ff"
            }
            else if(data["elements"][i]["category"] == "alkaline earth metal") {
                document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.backgroundColor = "#ffe7e7"
            }
            else if(data["elements"][i]["category"] == "metalloid") {
                document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.backgroundColor = "#fef7e0"
            }
            else if(data["elements"][i]["category"] == "actinide") {
                document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.backgroundColor = "#ffe6d4"
            }
            else if(data["elements"][i]["category"] == "transition metal") {
                document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.backgroundColor = "#f3e8fd"
            }
            else if(data["elements"][i]["category"] == "noble gas") {
                document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.backgroundColor = "#ffe7eb"
            }
            else if(data["elements"][i]["category"] == "post-transition metal") {
                document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.backgroundColor = "#d6f9e8"
            }
            else if(data["elements"][i]["category"] == "lanthanide") {
                document.getElementById(`periodicTable-element-${data["elements"][i]["number"]}`).style.backgroundColor = "#fdfeff"
            }
        }
    })
}

