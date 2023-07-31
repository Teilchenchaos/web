let cookiesConsent = getCookie("cookiesConsent")

window.onload = function(){
    if(cookiesConsent == "") {
        document.body.innerHTML = `<div id="cookies"><h1 id="cookiesTitle">Cookies</h1><p id="cookiesText">This website uses cookies to store save data and your account credentials, but cookies will never be used to track you.</p><p id="cookiesText">Ce site internet utilise les cookies pour stocker les données de sauvegarde et les informations de votre compte, mais ils ne seront jamais utilisés pour vous tracker.</p><p id="cookiesText">tiu retejo uzas biskvitojn, por konservi vian sekurkopion kaj vian konton, sed ni neniam uzos ilin por kunordigi vin</p><p id="cookiesText">Diese Website verwendet Cookies, um Daten und Ihre Kontodaten zu speichern, aber Cookies werden niemals verwendet, um Sie zu verfolgen.</p></div>`
    } 
}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}