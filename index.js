//EVENTS
// 1 CARD- HOVER
// 2 IMAGE- CLICK
// 3 FORM- SUBMIT


let addWiz = false;
const wizForm = document.querySelector(".add-wizard-form")

    const addBtn = document.querySelector("#new-wizard-btn")
    const wizFormContainer = document.querySelector(".container");
    addBtn.addEventListener('click', () => {
        //hide and seek w the form
        addWiz = !addWiz;
        if (addWiz) {
            wizFormContainer.style.display = 'block';
        } else {
        wizFormContainer.style.display = 'none';
        }
    });


    const handleWizSubmit = (event) => {
        event.preventDefault();
        wizObj = {}
        wizObj.name = event.target.name.value;
        wizObj.image = event.target.image.value;
        wizObj.patronus = event.target.patronus.value;
        wizObj.wand = event.target.wand.value;
        displayWizard(wizObj)

        // const configObj = {
        //     method: "POST", 
        //     headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify(wizObj)
        // }
        
        // fetch("http://localhost:3000/wizardingWorld", configObj)
    
    debugger
        event.target.reset()
    }
    
    wizForm.addEventListener("submit", handleWizSubmit)

//create the DOM elements that each toy card should have
const wizCollection = document.querySelector("#wiz-collection");
const form = document.querySelector("#form")
const card = document.getElementsByClassName("card");
const header = document.querySelector("body > header > h1")
// const wizardFacts = document.querySelector("body > main > div > h3")




const handleClick = () => {
    const wizFacts = document.querySelector("body > main > div > h3")
    if (wizFacts.style.display === "none") {
      wizFacts.style.display = "block";
    } else {
      wizFacts.style.display = "none";
    }
  }


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

    wizImg.addEventListener("click", handleClick)
}


const fetchData = () => {
    fetch("http://localhost:3000/wizardingWorld")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(displayWizard)
})
}

fetchData()