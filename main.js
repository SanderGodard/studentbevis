text = [
"Cecilie Wullum Leinslie",
"18.11.2004",
"Norwegian University of Science and Technology"];
barcodeTall = "561837";
// Sett bilde i css



var year = new Date().getFullYear();
var seasons = {
  "Spring": new Date(year, 0, 1),
  "Autumn": new Date(year, 8, 1)
};

function getSeason(month, day) {
  var index = month - 1;
  var newDate = new Date(year, index, day);
  for (var key in seasons) {
    if (newDate > seasons[key]) return key;
  }
  return Object.keys(seasons)[0];
}

console.log(formatDate(seasons["Spring"]));
console.log(formatDate(seasons["Autumn"]));


var now = new Date(0);

secondsBackInTime = 0 // ms
var nowInt = parseInt(Date.now() - secondsBackInTime);
now.setUTCSeconds(nowInt/1000);
// console.log(bought)

seasonNow = getSeason(now.getMonth(), now.getDate());

semesterName = document.getElementById("semesterName");
semesterName.innerText = seasonNow + " " + year;

var start = seasons[seasonNow];
if (seasonNow == "Spring") {
    var end = new Date(0);
    var endInt = parseInt(seasons["Autumn"] - 1); // go one second back in time from next season start
} else {
    var end = new Date(0);
    var year = year + 1;
    var endInt = parseInt(seasons["Spring"] - 1 + 31536000); // go one second back in time from next season start + one year
}
end.setUTCSeconds(endInt/1000);
// console.log(bought)



fromDate = document.getElementById("fromDate");
fromDate.innerHTML = formatDate(start);

toDate = document.getElementById("toDate");
toDate.innerHTML = formatDate(end);


function formatDate(d) {
    return String(d.getDate()).padStart(2, "0") + "." + String((d.getMonth() + 1)).padStart(2, "0") + "." + d.getFullYear().toString(); // + " " + formatTime(d);
}

function formatTime(d) {
    // return d.getHours() + ":" + d.getMinutes();
    return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
}

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}


function updateCountdown() {
    timediff = String(valid.getTime() - Date.now()).padStart(13, "0")
    timer.innerHTML = msToTime(timediff);
}



imageBox = document.getElementsByClassName("persona")[0].children[0];
infoElements = document.getElementsByClassName("persona")[0].children[1];
function bouncePic() {
    imageBox.style.transition = "transform 0s ease-in-out";
    imageBox.style.transform = "translateY(0)";

    imageBox.style.transition = "transform .3s ease-in";

    for (var i = 0; i < infoElements.children.length; i++) {
        infoElements.children[i].style.opacity = "0";
    }

    // console.log(imageBox);
    bottom = 32.4 * 2 + (2.6 * 2 + 15) * 2; // Juster basert på font

    setTimeout(() => {
        imageBox.style.transform = "translateY(" + bottom + "px)";
    }, 250);
    setTimeout(() => {
        imageBox.style.transform = "translateY(" + (bottom - bottom/2) + "px)";
        imageBox.style.transition = "transform .2s ease-in-out";
    }, 600);
    setTimeout(() => {
        imageBox.style.transform = "translateY(" + bottom + "px)";
    }, 800);
    setTimeout(() => {
        imageBox.style.transform = "translateY(" + (bottom - bottom/4) + "px)";
    }, 1000);
    setTimeout(() => {
        imageBox.style.transform = "translateY(" + bottom + "px)";
        imageBox.style.transition = "transform .15s ease-in-out";
    }, 1200);
    setTimeout(() => {
        imageBox.style.transform = "translateY(" + (bottom - 5) + "px)";
        imageBox.style.transition = "transform .1s ease-in-out";
    }, 1350);
    setTimeout(() => {
        imageBox.style.transform = "translateY(" + bottom + "px)";
        imageBox.style.transition = "transform .8s ease";
    }, 1450);
    setTimeout(() => {
        imageBox.style.transform = "translateY(0)";
    }, 1700);
    setTimeout(() => {
        for (var i = 0; i < infoElements.children.length; i++) {
            infoElements.children[i].style.opacity = "1";
        }
    }, 2100);
}



validBtn = document.getElementById("validBtn");
validBtn.addEventListener("click", () => {
    bouncePic();
});

imageBox.addEventListener("click", () => {
    bouncePic();
});


function toggleFullscreen() {
    if (!document.fullscreen) {
        document.body.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

fullscreenButton = document.getElementById("menu");
fullscreenButton.addEventListener("click", () => {
    toggleFullscreen();
});


modal = document.getElementById("modal");
function barcodeModal() {
    if (modal.style.display == "none") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
}

barcodeButton = document.getElementById("barcodeButton");
barcodeButton.addEventListener("click", () => {
    barcodeModal();
});

closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
    barcodeModal();
});

personName = infoElements.children[0];
birthdate = infoElements.children[1];

personName.innerText = text[0];
birthdate.innerText = text[1];

schools = document.getElementsByClassName("school");
for (var i = 0; i < schools.length; i++) {
    schools[i].innerText = text[2];
}

studNrs = document.getElementsByClassName("studNr");
for (var i = 0; i < studNrs.length; i++) {
    studNrs[i].innerText = barcodeTall;
}


card = document.getElementsByTagName("main")[0].children[1];
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        tmp = document.createElement("img");
        tmp.src = "cap.png";
        tmp.src = "cap.png";
        tmp.style.width = "calc(60px * " + ((Math.random() * 0.6) + 0.7) + ")";
        tmp.style.bottom = "calc(200px * " + ((Math.random() * 1.7) + 0.1) + ")";
        tmp.className = "caps";
        // console.log(tmp.style.width);
        card.appendChild(tmp);
    }, ((Math.random() * 5) + 0.8) * 1000);

}
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        tmp = document.createElement("img");
        tmp.src = "cap.png";
        tmp.src = "cap.png";
        tmp.style.width = "calc(60px * " + ((Math.random() * 0.6) + 0.7) + ")";
        tmp.style.bottom = "calc(200px * " + ((Math.random() * 1.7) + 0.1) + ")";
        tmp.className = "caps-right";
        // console.log(tmp.style.width);
        card.appendChild(tmp);
    }, ((Math.random() * 5) + 0.8) * 1000);

}
