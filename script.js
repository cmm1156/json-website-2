
let albumGalleryElement = document.getElementById('albumGallery');

let albumDatabase = [
  {
    "title" : "Meet the Beatles!",
    "image_url" : "meet.jpg",
    "bg_color" : "gold",
    "info" : ["1964", " Capitol"],
    "songs" : ["I Want to Hold Your Hand", "It Won't Be Long", "All I've Got to Do", "Hold Me Tight", "Not a Second Time", "I Saw Her Standing There"],
    "font_color" : "black"
  },

  {
    "title" : "A Hard Day's Night",
    "image_url" : "hard.jpg",
    "bg_color" : "#80b9ff",
    "info" : ["1964", " United Artists"],
    "songs" : ["If I Fell", "Any Time at All", "You Can't Do That", "A Hard Day's Night", "I Should Have Known Better", "I'll Be Back"],
    "font_color" : "black"
  },

  {
    "title" : "Beatles VI",
    "image_url" : "vi.jpg",
    "bg_color" : "#fffee8",
    "info" : ["1965", " Capitol Records"],
    "songs" : ["Yes It Is", "Tell Me What You See", "Every Little Thing", "Kansas City", "Eight Days a Week", "What You're Doing"],
    "font_color" : "black"
  },

  {
    "title" : "Help!",
    "image_url" : "help.jpg",
    "bg_color" : "#2e2e2e",
    "info" : ["1965", " Capitol Records"],
    "songs" : ["The Night Before", "I Need You", "You Like Me Too Much", "Ticket to Ride", "Yesterday", "Help!"],
    "font_color" : "white"
  },

  {
    "title" : "Beatles For Sale",
    "image_url" : "forsale.jpg",
    "bg_color" : "#d4b361",
    "info" : ["1966", " Capitol Records"],
    "songs" : ["Mr. Moonlight", "Honey Don't", "Words of Love", "I'm a Loser", "Rock and Roll Music", "Every Little Thing"],
    "font_color" : "black"
  },

  {
    "title" : "Revolver",
    "image_url" : "revolver.jpg",
    "bg_color" : "#FFFFFF",
    "info" : ["1966", " Capitol Records"],
    "songs" : ["Taxman", "Eleanor Rigby", "Good Day Sunshine", "And Your Bird Can Sing", "For No One", "Doctor Robert"],
    "font_color" : "black"
  },

  {
    "title" : "Abbey Road",
    "image_url" : "abbey.jpg",
    "bg_color" : "#d0d3d6",
    "info" : ["1969", " Apple"],
    "songs" : ["Oh Darling", "Something", "Because", "Come Together", "Sun King", "The End"],
    "font_color" : "black"
  },

  {
    "title" : "Let It Be",
    "image_url" : "letitbe.jpg",
    "bg_color" : "#db9ec6",
    "info" : ["1970", " Apple"],
    "songs" : ["Dig a Pony", "Get Back", "Let It Be", "I've Got a Feeling", "For You Blue", "Two of Us"],
    "font_color" : "black"
  }

]


console.log(albumDatabase[0].title);

for (var i = 0; i < albumDatabase.length; i++) {
    createAlbum(albumDatabase[i]);

    let k = i;

    // var newIdentity = document.getElementById("album1")

    // if (albumDatabase[i].title == "Meet the Beatles!") {
    //
    // }


    // var panel = createAlbum(albumDatabase[i]);
    // panel[i].id= "album" + (i + 1);

    // var k = i;
    // panel.setAttribute("id", ("album"+ k));


  // ### Find way to add a unique id for each panel
  // ### then each panel can have individual qualities

}

var panelNumber = document.getElementById("albumGallery").querySelectorAll(".albumItem")
panelNumber[0].setAttribute("id", "album1");
panelNumber[1].setAttribute("id", "album2");
panelNumber[2].setAttribute("id", "album3");
panelNumber[3].setAttribute("id", "album4");
panelNumber[4].setAttribute("id", "album5");
panelNumber[5].setAttribute("id", "album6");
panelNumber[6].setAttribute("id", "album7");
panelNumber[7].setAttribute("id", "album8");



// for (var i = 0; i < albumDatabase.length; i++) {
//
//   if (albumDatabase[i].title == "Meet the Beatles!") {
//     newAlbumPanel.setAttribute("id", "album1");
//   }
//   if (albumDatabase[i].title == "A Hard Day's Night") {
//     newAlbumPanel.setAttribute("id", "album2");
//   }
//   if (albumDatabase[i].title == "Beatles VI") {
//     newAlbumPanel.setAttribute("id", "album3");
//   }
//   if (albumDatabase[i].title == "Help!") {
//     newAlbumPanel.setAttribute("id", "album4");
//   }
//   if (albumDatabase[i].title == "Beatles For Sale") {
//     newAlbumPanel.setAttribute("id", "album5");
//   }
//   if (albumDatabase[i].title == "Revolver") {
//     newAlbumPanel.setAttribute("id", "album6");
//   }
//   if (albumDatabase[i].title == "Abbey Road") {
//     newAlbumPanel.setAttribute("id", "album7");
//   }
//   if (albumDatabase[i].title == "Let It Be") {
//     newAlbumPanel.setAttribute("id", "album8");
//   }
//
// }




function createAlbum(incomingJSON) {

  // var k = i;

  let newAlbumPanel = document.createElement("DIV");
  newAlbumPanel.style.backgroundColor = incomingJSON['bg_color'];
  newAlbumPanel.style.color = incomingJSON['font_color'];
  newAlbumPanel.classList.add('albumItem');

  let newImage = document.createElement("IMG");
  newImage.classList.add("headerImage");
  newImage.src = incomingJSON['image_url'];
  newAlbumPanel.appendChild(newImage);

  // let fontColor = document.createElement("")


  let newPanelHeading = document.createElement("H2");
  newPanelHeading.classList.add('albumTitle');
  newPanelHeading.innerHTML = incomingJSON['title'];
  newAlbumPanel.appendChild(newPanelHeading);


  let infoElement = document.createElement("H3");
  infoElement.classList.add('infoLine');
  infoElement.innerHTML = incomingJSON['info'];
  newAlbumPanel.appendChild(infoElement)


  let newPanelSubhead = document.createElement("H4");
  newPanelSubhead.classList.add('trackListGrid');
  newPanelSubhead.classList.add('trackTitle');

  newPanelSubhead.innerHTML = "Track List:";
  newAlbumPanel.appendChild(newPanelSubhead);



  let newSongList = document.createElement("OL");
  newSongList.classList.add('trackListGrid');
  newSongList.classList.add('trackOrder');


  newAlbumPanel.appendChild(newSongList);

  for (var i = 0; i < incomingJSON['songs'].length; i++) {
    var currentSongString = incomingJSON['songs'][i];
    var newSongItem = document.createElement("LI");
    newSongItem.innerHTML = currentSongString;
    newSongList.appendChild(newSongItem);
  }

  albumGalleryElement.appendChild(newAlbumPanel);

}



// var trackList1 = album1.querySelectorAll(".trackListGrid")

// album1.createElement("DIV")

var album1 = document.getElementById("album1");
var album2 = document.getElementById("album2");
var album3 = document.getElementById("album3");
var album4 = document.getElementById("album4");
var album5 = document.getElementById("album5");
var album6 = document.getElementById("album6");
var album7 = document.getElementById("album7");
var album8 = document.getElementById("album8");

album1.addEventListener("mouseover", flipContent1);
album2.addEventListener("mouseover", flipContent2);
album3.addEventListener("mouseover", flipContent3);
album4.addEventListener("mouseover", flipContent4);
album5.addEventListener("mouseover", flipContent5);
album6.addEventListener("mouseover", flipContent6);
album7.addEventListener("mouseover", flipContent7);
album8.addEventListener("mouseover", flipContent8);


// var allAlbums = document.getElementById("albumGallery").querySelectorAll("albumItem");
// allAlbums.addEventListener("mouseover", flipContent);

function flipContent1() {
  // album1.style.backgroundColor = "red";
  album1.style.transition = "2s";
  album1.style.fontSize = "19pt";
}

function flipContent2() {
  album2.style.transition = "2s";
  album2.style.fontSize = "19pt";
}

function flipContent3() {
  album3.style.transition = "2s";
  album3.style.fontSize = "19pt";
}

function flipContent4() {
  album4.style.transition = "2s";
  album4.style.fontSize = "19pt";
}

function flipContent5() {
  album5.style.transition = "2s";
  album5.style.fontSize = "19pt";
}

function flipContent6() {
  album6.style.transition = "2s";
  album6.style.fontSize = "19pt";
}

function flipContent7() {
  album7.style.transition = "2s";
  album7.style.fontSize = "19pt";
}

function flipContent8() {
  album8.style.transition = "2s";
  album8.style.fontSize = "19pt";
}



// var albumPanel = document.getElementById('albumGallery');
//
// function albumMovement(eventDetails) {
//
//   var mouseX = eventDetails.screenX;
//   var mouseY = eventDetails.screenY;
//
//   console.log("Cursor is at: " + mouseX + "," + mouseY + ".");
//
//   albumPanel.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";
//
//
// }
//
// albumMovement(eventDetails)

// var albumBlock = document.('')

// albumItem.addEventListener("click", expandElement);
// albumItem.addEventListener("mouseover", respond)
//
// function respond() {
//   albumItem.style.boxShadow = "0px 0px 5px black";
// }
//
// function expandElement() {
//
// }
