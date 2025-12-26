var pics = [
    {
        image: "harry.png",
        title: "HARRY POTTER",
        info: "the central character in the harry potter series."
    },
    {
        image: "Hermione.jpg",
        title: "HERMIONE GRANGER",
        info: "she possessed a brilliant academic mind & proved to be a gifted."
    },
    {
        image: "dobby.jpg",
        title: "DOBBY",
        info: "won hearts with his bravery,loyalty & unique charm ."
    },
    {
        image: "dumbledore.png",
        title: "DUMBLEDORE",
        info: "He iswidely regarded as one of the most powerful  & influential wizards of his time."
    },
    {
        image: "voldemort.jpg",
        title: "LORD VOLDEMORD",
        info: "the evil incarnate and has on other motive than to keep himself alive."
    },
    {
        image: "ron.jpg",
        title: "RON WEASLEY",
        info: "the humour,loyalty,readiness to defend his frienfd & his love of food."
    }
];

var i = 0; 

var photo     = document.getElementById("photo");
var titleText = document.getElementById("title-text");
var infoText  = document.getElementById("info-text");
var countText = document.getElementById("count-text");

function show() {
    photo.src           = pics[i].image;
    titleText.innerHTML = pics[i].title;
    infoText.innerHTML  = pics[i].info;
    countText.innerHTML = (i + 1) + " / " + pics.length;
}
function next() {
    i++;
    if (i >= pics.length) {
        i = 0;
    }
    show();
}
function prev() {
    i--;
    if (i < 0) {
        i = pics.length - 1;
    }
    show();
}
show();