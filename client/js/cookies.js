var cookiesConsent = getCookie("cookiesConsent")
//add the cookies banner if the cookie "cookiesConsent" doesn't exist
if(cookiesConsent != "v1") {
  document.body.innerHTML = `<link rel="stylesheet" href="css/cookies.css"><div id="cookies"><h1 id="cookiesTitle">Cookies</h1><p id="cookiesText">This website uses cookies and the local storage. They are used to store your save data and.</p><button id="cookies-button" onclick="acceptCookies()">OK</button></div>`
} 

function acceptCookies() {
    setCookie("cookiesConsent", "v1", 100)
    location.reload()
}
//a function that does what it says
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//a function that does what it says
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