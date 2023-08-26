let activityInformations = document.querySelector(".activity-informations")

fetch("data.json").then((response) => {
    response.json().then((data) => {
        data.activity.map((activity) =>{
            activityInformations.innerHTML += `<div> ${activity.title} </div>`
        })
    })
})