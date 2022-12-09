const addBtn = document.querySelector("#new-wizard-btn")
const wizFormContainer = document.querySelector(".container");
const wizCollection = document.querySelector("#wiz-collection");
const form = document.querySelector("#form")
const card = document.getElementsByClassName("card");
const header = document.querySelector("body > header > h1")
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

let addWiz = false;
addBtn.addEventListener('click', () => {
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
    event.target.reset()
    }

wizForm.addEventListener("submit", handleWizSubmit)

const displayWizard = (wizardObj) => {
    const wizDiv = document.createElement("div")
    const wizName = document.createElement("h2")
    const wizImg = document.createElement("img")
    const wizHouse = document.createElement("p")
    const wizBlood = document.createElement("p")
    const patronus = document.createElement("p")
    const wand = document.createElement("p")
    
    wizDiv.classList.add("card")
    wizName.classList.add("name")
    wizName.innerText = wizardObj.name
    wizImg.src = wizardObj.image
    wizImg.alt = wizardObj.name
    wizImg.classList.add("wiz-avatar")
    wizHouse.classList.add("house")
    wizHouse.innerText = wizardObj.house
    wizBlood.innerText = `Blood status: ${wizardObj.bloodstatus}`
    patronus.innerText = `Patronus: ${wizardObj.patronus}`
    wand.innerText = `Wand materials: ${wizardObj.wand}`

    wizDiv.append(wizName, wizImg, wizHouse, wizBlood, patronus, wand)
    wizCollection.appendChild(wizDiv)
}

const onMouseOver = () => {
    alert("Dobby is now a free elf! Thank you so much for saving me!")
}
   
const dobbyClick = () => {
    const dobby = document.querySelector("#dobby")
    if (dobby.style.display === "none"){
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
    image.classList.add("wiz-avatar")
    const info = document.createElement("p")
    
    name.textContent = "Dobby the house elf"
    image.src = "images/dobby.png"
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
    .then(data => data.forEach(displayWizard))
}

secretImg.addEventListener("mouseover", onMouseOver)

fetchData()
