const showItem = document.querySelector(".show-page")
const listItem = document.querySelector("#list-items")


const renderTop = (top) => {
    let topDiv = document.createElement("div")
    topDiv.className = "top-div"
    topDiv.innerHTML = `

    <img src=${top.frontUrl1} >
    
    `
    showItem.appendChild(topDiv)

}

const renderBottom = (bottom) => {
    let bottomDiv = document.createElement("div")
    bottomDiv.innerHTML = `

        <img src=${bottom.frontUrl1} >
    
    `
    showItem.appendChild(bottomDiv)

}

const renderShoe = (shoe) => {
    let shoeDiv = document.createElement("div")
    shoeDiv.innerHTML = `

        <img src=${shoe.shoe1} >
    
    `
    showItem.appendChild(shoeDiv)

}