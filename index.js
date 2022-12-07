//EVENTS
// 1 CARD- HOVER
// 2 IMAGE- CLICK
// 3 FORM- SUBMIT


let addWiz = false;
const wizForm = document.querySelector(".add-wizard-form")
const secretImg = document.querySelector("#dobby > img")

sockOnload = () => {
    document.querySelector("#dobby").style.display = 'none';
  };
sockOnload()

formOnload = () => {
    document.querySelector(".add-wizard-form").style.display = 'none';
};
formOnload()


    const addBtn = document.querySelector("#new-wizard-btn")
    const wizFormContainer = document.querySelector(".container");
    addBtn.addEventListener('click', () => {
        //hide and seek w the form
        addWiz = !addWiz;
        if (addWiz) {
            wizForm.style.display = 'block';
        } else {
        wizForm.style.display = 'none';
        }
    });


    const handleWizSubmit = (event) => {
        event.preventDefault();
        wizObj = {}
        wizObj.name = event.target.name.value;
        wizObj.bloodstatus = event.target.bloodstatus.value;
        wizObj.image = event.target.image.value;
        wizObj.patronus = event.target.patronus.value;
        wizObj.wand = event.target.wand.value;
        displayWizard(wizObj)

        //trying to fix empty below
        
//didnt work.
// const fixEmpty = () => {
//     if (wizObj = "")
//         wizObj.remove()
//     }
//     fixEmpty()

//didnt work either
// function empty() {
//     let noText;
//     noText = wizObj.value;
//     if (noText == "") {
//         alert("Enter a Valid Roll Number");
//         return false;
//     };
// }
// empty()
        event.target.reset()
    }



    wizForm.addEventListener("submit", handleWizSubmit)

//create the DOM elements that each toy card should have
const wizCollection = document.querySelector("#wiz-collection");
const form = document.querySelector("#form")
const card = document.getElementsByClassName("card");
const header = document.querySelector("body > header > h1")
// const wizardFacts = document.querySelector("body > main > div > h3")




const displayWizard = (wizardObj) => {
    //dom elements for ea card
    const wizDiv = document.createElement("div")
    const wizName = document.createElement("h2")
    const wizImg = document.createElement("img")
    const wizInfo = document.createElement("div")
    const wizBlood = document.createElement("p")
    const patronus = document.createElement("p")
    const wand = document.createElement("p")
    
    // assign properties to the elements
    wizDiv.classList.add("card")
    wizName.innerText = wizardObj.name
    wizImg.src = wizardObj.image
    wizImg.alt = wizardObj.name
    wizImg.classList.add("toy-avatar")
    wizBlood.innerText = `Blood status: ${wizardObj.bloodstatus}`
    patronus.innerText = `Patronus: ${wizardObj.patronus}`
    wand.innerText = `Wand materials: ${wizardObj.wand}`

    //for each secondary nested obj.. MATTEO SHOWED ME THIS
    // wizardObj.wand.forEach(wandObj=>wand.innerText+=`Wand details: ${wandObj.details}`)
    //append
    wizInfo.append(wizBlood, patronus)
    wizDiv.append(wizName, wizImg, wizInfo, wand)
    wizCollection.appendChild(wizDiv)
}



const onMouseOver = () => {
    alert("Dobby is now a free elf! Thank you so much for saving me!")
}

    
    const dobbyClick = () => {
        const dobby = document.querySelector("#dobby")
        if (dobby.style.display === "none") {
          dobby.style.display = "block";
        } else {
          dobby.style.display = "none";
        }
      }

const displayDobby = () => {
    const dobbyDiv = document.createElement("div")
    dobbyDiv.classList.add("card")
    const name  = document.createElement("h2")
    const image = document.createElement("img")
    image.classList.add("toy-avatar")
    const info = document.createElement("p")
    
    name.textContent = "Dobby the house elf"
    image.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1dbc1935-6542-4ee3-822f-135cff4ba62c/dexddp1-1bf42268-3166-47e0-a1fd-87a5ed782282.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFkYmMxOTM1LTY1NDItNGVlMy04MjJmLTEzNWNmZjRiYTYyY1wvZGV4ZGRwMS0xYmY0MjI2OC0zMTY2LTQ3ZTAtYTFmZC04N2E1ZWQ3ODIyODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QRNpPEmhuOK8Dvx2SrEuI0NO9EPswSsFpPcJMMNaz2c"
    image.alt = "Dobby the house elf"
    info.textContent = "Please help me! Do you know how to free a house elf?"
    
    dobbyDiv.append(name, image, info)
    wizCollection.appendChild(dobbyDiv)
    
    image.addEventListener("click", dobbyClick)
}


displayDobby()

const fetchData = () => {
    fetch("http://localhost:3000/wizardingWorld")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(displayWizard)
    })
}


secretImg.addEventListener("mouseover", onMouseOver)


fetchData()
