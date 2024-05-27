let birds = ["American Kestrel", "American Robin", "Bald Eagle", "Baltimore Oriole", "Barn Swallow", "Belted Kingfisher", "Blue Jay", "Broad-Winged Hawk", "Brown-Headed Cowbird", "Canada Goose", "Cardinal", "Common Nighthawk", "Comorant", "Cooper's Hawk", "Down Woodpecker", "Eastern Bluebird", "Eastern Screech Owl", "Eastern Whip-poor-will", "Eastern Wood Pewee", "European Starling", "Golden Eagle", "Great Blue Heron", "Great Gray Owl", "Great Horned Owl", "Green Heron", "Gyrfalcon", "Indigo Bunting", "Mourning Dove", "Northern Harrier", "Northern Shrike", "Osprey", "Peregrine Falcon", "Pileated Woodpecker", "Purple Martin", "Red Wing Blackbird", "Red-Tailed Hawk", "Rock Pigeon", "Ruby-Throated Hummingbird", "Sandhill Crane", "Scarlet Tanager", "Snowy Egret", "Sparrow", "Turkey Vulture", "Waxwing"];
let birdsFiles = [];
let prefix = "/pictures/";
let suffix = ".png";
let correctOption;

function setup() {
    document.body.removeChild(document.getElementById("setupButton"));
    for (let i = 0; i < birds.length; i++) {
        birdsFiles.push(prefix + birds[i] + suffix);
    }
    console.log(birdsFiles);
    let img = document.createElement("img");
    img.src = "";
    img.width = "400";
    img.height = "400";
    img.id = "img";
    document.body.appendChild(img);
    let scoreT = document.createElement("h4");
    scoreT.innerHTML = "Total Score";
    scoreT.className = "score";
    scoreT.id = "scoreT"
    document.body.appendChild(scoreT);
    let scoreU = document.createElement("h4");
    scoreU.innerHTML = "0/0";
    scoreU.className = "score2";
    scoreU.id = "score";
    document.body.appendChild(scoreU);
    let button1 = document.createElement("button");
    button1.innerHTML = "button created";
    button1.className = "button normal";
    button1.id = "1";
    button1.style.left = "0px";
    button1.style.top = "450px";
    button1.setAttribute("onclick", "buttonPress(1);");
    let button2 = document.createElement("button");
    button2.innerHTML = "button created";
    button2.className = "button normal";
    button2.id = "2";
    button2.style.left = "625px";
    button2.style.top = "450px";
    button2.setAttribute("onclick", "buttonPress(2);");
    let button3 = document.createElement("button");
    button3.innerHTML = "button created";
    button3.className = "button normal";
    button3.id = "3";
    button3.style.left = "0px";
    button3.style.top = "545px";
    button3.setAttribute("onclick", "buttonPress(3);");
    let button4 = document.createElement("button");
    button4.innerHTML = "button created";
    button4.className = "button normal";
    button4.id = "4";
    button4.style.left = "625px";
    button4.style.top = "545px";
    button4.setAttribute("onclick", "buttonPress(4);");
    document.body.appendChild(button1);
    document.body.appendChild(button2);
    document.body.appendChild(button3);
    document.body.appendChild(button4);
    next();
}
function buttonPress(num) {
    console.log(num);
    if ((num + "") == correctOption)
        winAnim(num + "");
    else
        failAnim(num + "");
}
function winAnim(num) {
    document.getElementById(num).className = "button correct";
    arr = document.getElementById("score").innerHTML.split("/");
    arr[0] = (parseInt(arr[0]) + 1) + "";
    arr[1] = (parseInt(arr[1]) + 1) + "";
    document.getElementById("score").innerHTML = arr[0] + "/" + arr[1];
    document.getElementById("1").setAttribute("onclick", "");
    document.getElementById("2").setAttribute("onclick", "");
    document.getElementById("3").setAttribute("onclick", "");
    document.getElementById("4").setAttribute("onclick", "");
    const time = setTimeout(next, 1000);
}
function failAnim(num) {
    document.getElementById(num).className = "button false";
    arr = document.getElementById("score").innerHTML.split("/");
    arr[1] = (parseInt(arr[1]) + 1) + "";
    document.getElementById("score").innerHTML = arr[0] + "/" + arr[1];
    document.getElementById("1").setAttribute("onclick", "");
    document.getElementById("2").setAttribute("onclick", "");
    document.getElementById("3").setAttribute("onclick", "");
    document.getElementById("4").setAttribute("onclick", "");
    const time = setTimeout(next, 1000);
}
function next() {
    if (birdsFiles.length != 0) {
        let selectedFile = birdsFiles.splice(Math.floor(Math.random() * birdsFiles.length), 1)[0];
        let bird = selectedFile.substring(10, selectedFile.length - 4);
        document.getElementById("img").src = selectedFile;
        document.getElementById("1").className = "button normal";
        document.getElementById("2").className = "button normal";
        document.getElementById("3").className = "button normal";
        document.getElementById("4").className = "button normal";
        document.getElementById("1").setAttribute("onclick", "buttonPress(1);");
        document.getElementById("2").setAttribute("onclick", "buttonPress(2);");
        document.getElementById("3").setAttribute("onclick", "buttonPress(3);");
        document.getElementById("4").setAttribute("onclick", "buttonPress(4);");
        console.log(selectedFile + " " + bird);
        let arr = [bird];
        while (arr.length != 4) {
            let addBird = birds[Math.floor(Math.random() * birds.length)];
            if (arr.indexOf(addBird) == -1) {
                arr.push(addBird);
            }
        }
        shuffleArray(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == bird)
                correctOption = (i + 1) + "";
            document.getElementById((i + 1) + "").innerHTML = arr[i];
        }
    }
    else {
        finishAnim()
    }
}
function finishAnim() {
    let score = document.getElementById("score").innerHTML;
    let h4 = document.createElement("h4");
    let extra = "";
    let correct = parseInt(score.split("/")[0]);
    if (correct >= 40)
        extra = "Great Job!"
    else if (correct >= 35)
        extra = "Good Job!";
    else if (correct >= 25)
        extra = "Keep Going!"
    else if (correct >= 15)
        extra = "Lock In!";
    else
        extra = "What are you even doing, like honestly?";
    h4.innerHTML = "You've completed the test with a score of " + correct + ". " + extra + ". Refresh the page to play again!";
    document.body.removeChild(document.getElementById("1"));
    document.body.removeChild(document.getElementById("2"));
    document.body.removeChild(document.getElementById("3"));
    document.body.removeChild(document.getElementById("4"));
    document.body.removeChild(document.getElementById("score"));
    document.body.removeChild(document.getElementById("scoreT"));
    document.body.removeChild(document.getElementById("img"));
    document.body.appendChild(h4);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}