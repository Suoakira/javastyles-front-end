const tops = [
{
    frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/43/6a/436a2cbc4f0d0bd0b62091f07c5c98dffc1eb1dc.jpg],origin[dam],category[men_jacketscoats_jackets],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
    backUrl: "placeholder"
},
    {
    frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/9f/b6/9fb6a93bd313731bd807dfdd5a79d26665b79707.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
    backUrl: "placeholder"
},
{
    frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/52/09/5209c7bf06008391ad811fd088fa548baa658e36.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
    backUrl: "placeholder"

}]








const showItem = document.querySelector(".show-page")
const listItem = document.querySelector("#list-items")
let topCounter = 0
let bottomCounter = 0
let shoeCounter = 0


// for click of right arrow button
const goRight = () => {
    if (topCounter !== tops.length - 1){
        topCounter++
    } else {
        topCounter = 0 
    }
}

// for click of left arrow button
const goLeft = () => {
    if (topCounter === 0){
        topCounter = tops.length-1
    } else {
        --topCounter
    }
}



const renderTop = () => {
    let topDiv = document.createElement("div")
    topDiv.className = "top-div"
    topDiv.innerHTML = `

    <img src=${tops[topCounter].frontUrl} />
    <button class="right-top">RIGHT</button>
    <button class="left-top">LEFT</button>
    `
    showItem.appendChild(topDiv)
    
    const rightButton = document.querySelector('.right-top')
    const leftButton = document.querySelector('.left-top')

    rightButton.addEventListener('click', () => {
        goRight()
        showItem.innerHTML = ""
        renderTop(tops)
    })

    leftButton.addEventListener('click', () => {
        goLeft()
        showItem.innerHTML = ""
        renderTop(tops)
    })

}

renderTop(tops)




const renderBottom = (bottom) => {
    let bottomDiv = document.createElement("div")
    bottomDiv.className = "bottom-div"
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

