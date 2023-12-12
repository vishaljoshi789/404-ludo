// variables
let playArea = document.querySelector(".play-area");
let upperArea = document.querySelector(".upper-play-area");
let middleArea = document.querySelector(".middle-play-area");
let lowerArea = document.querySelector(".lower-play-area");
let verticalArea1 = document.querySelector(".vertical-path-1");
let verticalArea2 = document.querySelector(".vertical-path-2");
let horizontalArea1 = document.querySelector(".horizontal-path-1");
let horizontalArea2 = document.querySelector(".horizontal-path-2");
let dice = document.querySelector("#dice-roll-btn");




let coinPath = ["05", "08", "011", "014", "017", "315", "312", "39", "36", "33", "30", "31", "32", "35", "38", "311", "314", "317", "12", "15", "18", "111", "114", "117", "116", "115", "112", "19", "16", "13", "10", "22", "25", "28", "211", "214", "217", "216", "215", "212", "29", "26", "23", "20", "015", "012", "09", "06", "03", "00", "01", "02"];



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


// adding classes to path 
for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 18; i++) {
        let pathClasses = ["w-1/3", "h-1/6", "border-black", "border-y", "border-x", "flex", "items-center", "justify-center", "pathCell"]
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



let blueVictoryPath = ["015", "012", "09", "06", "03", "00", "01", "04", "07", "010", "013", "016", "win"];
let yellowVictoryPath = ["315", "312", "39", "36", "33", "30", "31", "34", "37", "310", "313", "316", "win"];
let redVictoryPath = ["12", "15", "18", "111", "114", "117", "116", "113", "110", "17", "14", "11", "win"];
let greenVictoryPath = ["22", "25", "28", "211", "214", "217", "216", "213", "210", "27", "24", "21", "win"];

let safeBoxes = ["06", "111", "36", "211", "05", "35", "112", "212"]

blueVictoryPath.forEach((e, i) => {
    if(i>6)
    document.querySelector(`#path-box-${e}`).classList.add("bg-blue-400");
})
yellowVictoryPath.forEach((e, i) => {
    if(i>6)
    document.querySelector(`#path-box-${e}`).classList.add("bg-yellow-400");
})
redVictoryPath.forEach((e, i) => {
    if(i>6)
    document.querySelector(`#path-box-${e}`).classList.add("bg-red-400");
})
greenVictoryPath.forEach((e, i) => {
    if(i>6)
    document.querySelector(`#path-box-${e}`).classList.add("bg-green-400");
})


safeBoxes.forEach((e) => {
    document.querySelector(`#path-box-${e}`).classList.add("bg-gray-300");
})

blueSafe.classList.remove("bg-gray-300");
yellowSafe.classList.remove("bg-gray-300");
redSafe.classList.remove("bg-gray-300");
greenSafe.classList.remove("bg-gray-300");
blueSafe.classList.add("bg-blue-400");
yellowSafe.classList.add("bg-yellow-400");
redSafe.classList.add("bg-red-400");
greenSafe.classList.add("bg-green-400");

let dice_number = 0;

let turn = "green";
let turn_id = "playerarea1"

// dice roll event 

let rolldice = () => {
    dice_number = Math.floor(Math.random() * 6) + 1;
    let dice_img = "";
    if(dice_number==1) dice_img = "1.gif";
    else if(dice_number==2) dice_img = "2.gif";
    else if(dice_number==3) dice_img = "3.gif";
    else if(dice_number==4) dice_img = "4.gif";
    else if(dice_number==5) dice_img = "5.gif";
    else if(dice_number==6) dice_img = "6.gif";
    let dice_att = new Image();
    dice_att.src = `images/${dice_img}?`+ new Date().getTime();
    dice_att.width = 200;
    dice_att.height = 200;
    document.querySelector(`#dice-number`).innerHTML = "";
    document.querySelector(`#dice-number`).appendChild(dice_att);
}
dice.addEventListener("click", () => {
    if(checkPlay()==4||dice_number!=6) {change_turn();};
    rolldice();
})

let checkPlay = () => {
    let count = 0;
    for(let i = 0; i<document.querySelector(`.${turn_id}`).children.length; i++) {
        if(document.querySelector(`.${turn_id}`).children[i].children.length>0) count++;
    }
    return count;
}

document.getElementsByClassName(turn_id)[0].style.border = "10px solid black"
let change_turn = () => {
    document.getElementsByClassName(turn_id)[0].style.border = "none"
    if(turn_id == "playerarea1"){
        turn_id = "playerarea2";
        turn = "blue";
    }else if(turn_id == "playerarea2"){
        turn_id = "playerarea4";
        turn = "yellow";
    }else if(turn_id == "playerarea4"){
        turn_id = "playerarea3";
        turn = "red";
    }else if(turn_id == "playerarea3"){
        turn_id = "playerarea1";
        turn = "green";
    }document.getElementsByClassName(turn_id)[0].style.border = "10px solid black"
}


let initialcoinReplacer = (e, initial) => {
        let child = ""
            try {
                if(e.parentNode.classList.contains("coin-container")&&(dice_number == 6)) {
                    child = document.querySelector(`#path-box-${initial}`).appendChild(e.cloneNode(true))
                    e.parentNode.removeChild(e)        
                    coinEventAdderFun(child)
    
                }else if(e.parentNode.classList.contains("pathCell")) {
                    let box_id = e.parentNode.id.slice(9, e.parentNode.id.length);
                    let turn_coin = [];
                    if(e.classList.contains("greencoin")) turn_coin = greenVictoryPath;
                    else if(e.classList.contains("redcoin")) turn_coin = redVictoryPath;
                    else if(e.classList.contains("yellowcoin")) turn_coin = yellowVictoryPath;
                    else if(e.classList.contains("bluecoin")) turn_coin = blueVictoryPath;
                    if(!turn_coin.includes(box_id)){
                        let new_box_id = coinPath[(coinPath.indexOf(box_id)+dice_number)%coinPath.length];
                        child = document.querySelector(`#path-box-${new_box_id}`).appendChild(e.cloneNode(true))
                        e.parentNode.removeChild(e)        
                        coinEventAdderFun(child)
                    }
                    else{
                        if((turn_coin.indexOf(box_id)+dice_number)<turn_coin.length){
                            let new_box_id = turn_coin[(turn_coin.indexOf(box_id)+dice_number)];
                            if(new_box_id != "win"){
                                child = document.querySelector(`#path-box-${new_box_id}`).appendChild(e.cloneNode(true))
                            }
                            e.parentNode.removeChild(e)
                            coinEventAdderFun(child)
                        }
                    }
                    // if(dice_number!=6)        
                    // change_turn();
                }
            } catch (error) {
                console.log(error)
            }
            
    
}

let coinOpenCheck = (e) => {
    if(e.parentNode.classList.contains("coin-container")){
        return 1;
    }return 0;
}
let greenInitial = "212";
let blueInitial = "05";
let redInitial = "112";
let yellowInitial = "35";

let coinEventAdderFun = (e) => {
    e.addEventListener("click", () => {

        if(e.classList.contains("greencoin")&&turn == "green") {
            
             initialcoinReplacer(e, greenInitial)
        }
        else if (e.classList.contains("bluecoin")&&turn == "blue") {
             initialcoinReplacer(e, blueInitial)
        }
        else if (e.classList.contains("redcoin")&&turn == "red") {

             initialcoinReplacer(e, redInitial)
        }
        else if (e.classList.contains("yellowcoin")&&turn == "yellow") {
             initialcoinReplacer(e, yellowInitial)
        }
    })
}


let coinEventAdder = () => {
    document.querySelectorAll(".coin").forEach((e) => {
        coinEventAdderFun(e);
       
    })
};coinEventAdder()



document.body.style.zoom = 1;







middleArea.style.height = "34%";

document.getElementById("path-box-win").style.background = "black";