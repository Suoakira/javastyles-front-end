const listItem = document.querySelector("list-items")


const renderTop = (top) => {
    let topDiv = document.createElement("div")
    topDiv.className = "top-div"
    topDiv.innerHTML = `
    
    `
    listItem.appendChild("listItem")

}

const renderBottom = (bottom) => {
    let bottomDiv = document.createElement("div")
    bottomDiv.innerHTML = `
    
    `
    listItem.appendChild("bottomDiv")

}