document.addEventListener("DOMContentLoaded", () => {

    let mychoice;
    let aiChoice;
    let aiPokemon;
    let myScore = 0;
    let aiScore = 0;
    const area = document.querySelector("section");
    const myIng = document.createElement("img");
    const aiIng = document.createElement("img");
    
    const water = document.querySelector(".water");
    const fire = document.querySelector(".fire");
    const grass = document.querySelector(".grass");
    const me = document.getElementById("me");
    const ai = document.getElementById("ai");

    // based of wich button i click that will determined wich pokemon i chose and a diffrent function will run
    function choseWater() {
        mychoice = "water";
        myIng.setAttribute("src", "src/pic/s.jpg");
        area.appendChild(myIng);
        battle();
    }
    function choseFire() {
        mychoice = "fire";
        myIng.setAttribute("src", "src/pic/c.jpg");
        area.appendChild(myIng);
        battle();
    }
    function choseGrass() {
        mychoice = "grass";
        myIng.setAttribute("src", "src/pic/b.jpg");
        area.appendChild(myIng);
        battle();
    }

    // ai will pick between 3 num and based off what he picks a switch statement will run and chose his pokemon
    function aiPick() {
        aiChoice = Math.floor(Math.random() * 3); 

        switch (aiChoice) {
            case 0:
                aiPokemon = "water"
                aiIng.setAttribute("src", "src/pic/s.jpg");
                area.appendChild(aiIng);
                break;
            case 1:
                aiPokemon = "fire"
                aiIng.setAttribute("src", "src/pic/c.jpg");
                area.appendChild(aiIng);
                break;
            case 2:
                aiPokemon = "grass";
                aiIng.setAttribute("src", "src/pic/b.jpg");
                area.appendChild(aiIng);
                break;
            default:
                Error = "no pokemon has been chosen";
        }
    }
    // compareing pokemon to find a winer
    function battle() {
        aiPick();
        
        if (mychoice == "water" && aiPokemon == "grass") {
            myScore = myScore + 0;
            aiScore = aiScore + 1;
        } else if (mychoice == "water" && aiPokemon == "fire") {
            myScore = myScore + 1;
            aiScore = aiScore + 0;
        } else if (mychoice == "fire" && aiPokemon == "water") {
            myScore = myScore + 0;
            aiScore = aiScore + 1;
        } else if (mychoice == "fire" && aiPokemon == "grass") {
            myScore = myScore + 1;
            aiScore = aiScore + 0;
        } else if (mychoice == "grass" && aiPokemon == "water") {
            myScore = myScore + 1;
            aiScore = aiScore + 0;
        }
        else if (mychoice == "grass" && aiPokemon == "fire") {
            myScore = myScore + 0;
            aiScore = aiScore + 1;
        }
        else {
            myScore = myScore + 0;
            aiScore = aiScore + 0;
        }
       
        console.log(mychoice + " " + aiPokemon);
            console.log(myScore + " " + aiScore);

        me.innerHTML = myScore;
        ai.innerHTML = aiScore;
    }
    water.addEventListener("click", choseWater);
    fire.addEventListener("click", choseFire);
    grass.addEventListener("click", choseGrass);
});
