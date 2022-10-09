// variables
let playArea = document.querySelector(".play-area");
let upperArea = document.querySelector(".upper-play-area");
let middleArea = document.querySelector(".middle-play-area");
let lowerArea = document.querySelector(".lower-play-area");
let verticalArea1 = document.querySelector(".vertical-path-1");
let verticalArea2 = document.querySelector(".vertical-path-2");
let horizontalArea1 = document.querySelector(".horizontal-path-1");
let horizontalArea2 = document.querySelector(".horizontal-path-2");





let coinPath = ["05", "08", "11", "14", "17", "315", "312", "39", "36", "33", "30", "31", "32", "35", "38", "311", "314", "317", "12", "15", "18", "111", "114", "117", "116", "115", "112", "19", "16", "13", "10", "22", "25", "28", "211", "214", "217", "216", "215", "212", "29", "26", "23", "20", "015", "012", "09", "06", "03", "00", "01", "02", "05"];



// for (i = 1; i < 5; i++) {
//     let playerBox = document.createElement("div");
//     playerBox.classList.add(`playerBox${i}`)
//     if (i === 1 || i === 2) {
//         upperArea.appendChild(playerBox)
//     }
//     else {
//         lowerArea.appendChild(playerBox)
//     }
// }

for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 18; i++) {
        let pathClasses = ["w-1/3", "h-1/6", "border-black", "border-y", "border-x"]
        let pathbox = document.createElement("div");
        pathClasses.forEach((e) => {
            pathbox.classList.add(e);
        })
        pathbox.setAttribute("id", `path-box-${j}${i}`)

        if (j == 0) {
            verticalArea1.appendChild(pathbox);
        } else if (j == 1) {
            verticalArea2.appendChild(pathbox);
        } else if (j == 2) {
            horizontalArea1.appendChild(pathbox);

        } else {
            horizontalArea2.appendChild(pathbox);
        }

    }
    if (j == 2) {
        horizontalArea1.style.rotate = "90deg"
    }
    else if (j == 3) {
        horizontalArea2.style.rotate = "90deg"
    }
}


let blueSafe = document.querySelector("#path-box-05");
let yellowSafe = document.querySelector("#path-box-35");
let redSafe = document.querySelector("#path-box-112");
let greenSafe = document.querySelector("#path-box-212");

blueSafe.classList.add("bg-blue-400");
yellowSafe.classList.add("bg-yellow-400");
redSafe.classList.add("bg-red-400");
greenSafe.classList.add("bg-green-400");

let blueVictoryPath = ["04", "07", "010", "013", "016"];
let yellowVictoryPath = ["34", "37", "310", "313", "316"];
let redVictoryPath = ["113", "110", "17", "14", "11"];
let greenVictoryPath = ["213", "210", "27", "24", "21"];

let safeBoxes = ["06", "111", "36", "211"]

blueVictoryPath.forEach((e)=>{
    document.querySelector(`#path-box-${e}`).classList.add("bg-blue-400");
})
yellowVictoryPath.forEach((e)=>{
    document.querySelector(`#path-box-${e}`).classList.add("bg-yellow-400");
})
redVictoryPath.forEach((e)=>{
    document.querySelector(`#path-box-${e}`).classList.add("bg-red-400");
})
greenVictoryPath.forEach((e)=>{
    document.querySelector(`#path-box-${e}`).classList.add("bg-green-400");
})


safeBoxes.forEach((e)=>{
    document.querySelector(`#path-box-${e}`).classList.add("bg-gray-300");
})


// middleArea.style.height = "34%";