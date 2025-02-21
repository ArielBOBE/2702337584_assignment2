// To access the stars
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

gfg(2).call();  

document.getElementById("leftB").onclick = function() {minusImage()};
document.getElementById("rightB").onclick = function() {plusImage()};

const images = [];
images[0] = "images/naruto.png"
images[1] = "images/orlando.png"
images[2] = "images/ally.png"
images[3] = "images/naruto.png"

const desc = [[], [], [], []];
desc[0][0] = "Ariel Prandi Darmawidjaja"
desc[0][1] = "L4BC 2702337584"

desc[1][0] = "Orlando Jonathan Padiman"
desc[1][1] = "L4BC 2702337615"

desc[2][0] = "ALMIRA FARAHIYAH SHAFIQA RANA"
desc[2][1] = "L4CC 2702378956"

desc[3][0] = "ABYAN ALI KARTASASMITA"
desc[3][1] = "L4CC 2702355385"


// index of images
var index = 0;

function minusImage() {
    if (index == 0) {
        index = 3;
    }
    else {
        index--;
    }
    // // image index
    document.getElementById('member-image').src = images[index]

    // student name and id
    document.getElementById('name').innerHTML = desc[index][0]
    document.getElementById('id').innerHTML = desc[index][1]
}

function plusImage() {
    if (index == 3) {
        index = 0;
    }
    else {
        index++;
    }
    // // image index
    document.getElementById("member-image").src = images[index]

    // student name and id
    document.getElementById("name").innerHTML = desc[index][0]
    document.getElementById("id").innerHTML = desc[index][1]
}
 
// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
 
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}