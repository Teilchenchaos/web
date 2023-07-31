let Up = 0
let Down = 0
let Electron = 0

setInterval(() => {
  let randomquark = Math.floor((Math.random() * 3) + 1);
  if (randomquark === 1) {
    Up = Up + 1;
  } else (randomquark === 2) {
    Down = Down + 1;
  } else {
    Electron = Electron + 1;
  }
}, 2000);