//create the DOM elements that each toy card should have
const wizCollection = document.querySelector("#wiz-collection");


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
    wizardObj.wand.forEach(wandObj=>wand.innerText+=`Wand details:${wandObj.details}`)
    //append
    wizInfo.append(wizBlood, patronus)
    wizDiv.append(wizName, wizImg, wizInfo, wand)
    wizCollection.appendChild(wizDiv)
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