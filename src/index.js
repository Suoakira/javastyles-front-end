
// temporary manual seeding - can't access styles.js from index.js?
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

const bottoms = [{
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/b9/e3/b9e3483d4e5037cb3dd97e40feb05a29163e32ad.jpg],origin[dam],category[men_trousers_trousers_slim_all],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "placeholder"

    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/c1/a6/c1a69dc3ac5fd3c3efa89279c179f37710f3f3a4.jpg],origin[dam],category[men_trousers],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "placeholder"

    },
    {
        frontUrl: "https://lp2.hm.com/hmgoepprod?set=source[/5c/57/5c576a020bf704706a6ebd1aa2a8ceb7fc050536.jpg],origin[dam],category[men_blazerssuits_trousers],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
        backUrl: "placeholder"

    }
]

const shoes = [
{
    frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/314625664504?$medium$"
    // backUrl: "placeholder"
},
{
    frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/314625649604?$medium$"
    // backUrl: "placeholder"
},
{
    frontUrl: "https://runnerspoint.scene7.com/is/image/rpe/314625688404?$medium$"
    // backUrl: "placeholder"
}]

state = {
    arrayOfStyles: []
}


// main code
const topEl = document.querySelector("#top")
const bottomEl = document.querySelector("#bottom")
const shoesEl = document.querySelector("#shoes")
const listItem = document.querySelector("#list-items")
const submitButton = document.querySelector('#submit-outfit')
let topCounter = 0
let bottomCounter = 0
let shoeCounter = 0



// for click of right arrow button on tops
const goRightTops = () => {
    if (topCounter !== tops.length - 1){
        topCounter++
    } else {
        topCounter = 0
    }
}

// for click of left arrow button on tops
const goLeftTops = () => {
    if (topCounter === 0){
        topCounter = tops.length-1
    } else {
        --topCounter
    }
}

// for click of right arrow button on bottoms
const goRightBottoms = () => {
    if (bottomCounter !== bottoms.length - 1) {
        bottomCounter++
    } else {
        bottomCounter = 0
    }
}

// for click of left arrow button on bottoms
const goLeftBottoms = () => {
    if (bottomCounter === 0) {
        bottomCounter = bottoms.length - 1
    } else {
        --bottomCounter
    }
}

// for click of right arrow button on shoes
const goRightShoes = () => {
    if (shoeCounter !== shoes.length - 1) {
        shoeCounter++
    } else {
        shoeCounter = 0
    }
}

// for click of left arrow button on shoes
const goLeftShoes = () => {
    if (shoeCounter === 0) {
        shoeCounter = shoes.length - 1
    } else {
        --shoeCounter
    }
}




// left button event listener methods for tops, bottoms and shoes
const leftButtonClick = (leftButton, itemMethod, clothingItemArray, leftMethod) => {
    return leftButton.addEventListener('click', () => {

        leftMethod()
        itemMethod(clothingItemArray)
    })
}

// right button event listener methods for tops, bottoms and shoes
const rightButtonClick = (rightButton, itemMethod, clothingItemArray, rightMethod) => {
    return rightButton.addEventListener('click', () => {

        rightMethod()
        itemMethod(clothingItemArray)
    })
}


// render the top list
const renderTop = () => {


    topEl.innerHTML = `
    <img src=${tops[topCounter].frontUrl} />
    <button class="right-top">RIGHT</button>
    <button class="left-top">LEFT</button>
    `

    console.log("rendering top")
    const rightButtonTop = document.querySelector('.right-top')
    const leftButtonTop = document.querySelector('.left-top')

    rightButtonClick(rightButtonTop, renderTop, tops, goRightTops)
    leftButtonClick(leftButtonTop, renderTop, tops, goLeftTops)

}

renderTop(tops)


// render the bottom list
const renderBottom = () => {

    bottomEl.innerHTML = `

    <img src=${bottoms[bottomCounter].frontUrl} />
    <button class="right-bottom">RIGHT</button>
    <button class="left-bottom">LEFT</button>
    `
    console.log("rendering bottom")
    const rightButtonBottom = document.querySelector('.right-bottom')
    const leftButtonBottom = document.querySelector('.left-bottom')

    rightButtonClick(rightButtonBottom, renderBottom, bottoms, goRightBottoms)
    leftButtonClick(leftButtonBottom, renderBottom, bottoms, goLeftBottoms)


}

renderBottom(bottoms)


// render the shoes list
const renderShoe = () => {

    shoesEl.innerHTML = `

    <img src=${shoes[shoeCounter].frontUrl} />
    <button class="right-shoe">RIGHT</button>
    <button class="left-shoe">LEFT</button>
    `
    console.log("rendering shoe")
    const rightButtonShoe = document.querySelector('.right-shoe')
    const leftButtonShoe = document.querySelector('.left-shoe')

    rightButtonClick(rightButtonShoe, renderShoe, shoes, goRightShoes)
    leftButtonClick(leftButtonShoe, renderShoe, shoes, goLeftShoes)


}

renderShoe(shoes)


submitButton.addEventListener('click', ()=>{

    const styleObj = {
        top_front_url: tops[topCounter].frontUrl,
        top_back_url: tops[topCounter].backUrl,
        bottom_front_url: bottoms[bottomCounter].frontUrl,
        bottom_back_url: bottoms[bottomCounter].backUrl,
        shoe_url: shoes[shoeCounter].frontUrl,
        likes: 0
    }
    newStyle(styleObj)
    .then(resp => {
      console.log(resp)
      state.arrayOfStyles.push(resp)})

    renderStyleCard(styleObj)


})

const renderStyleCard = (style) => {
    let listStyleDiv = document.createElement("div")

    listStyleDiv.innerHTML = `
    <div class="list-top-div">
        <img class="list-image" data-id="top${style.id}" src=${style.top_front_url} />
    </div>
    <div class="list-bot-div">
        <img class="list-image" data-id="bot${style.id}" "src=${style.bottom_front_url} />
    </div>
    <div class="list-shoe-div">
        <img class="list-image" data-id="shoe${style.id}" src=${style.shoe_url} />
    </div>
    <button data-id=${style.id} class="likes-button">Like: ${style.likes}</button>
    `
    listItem.appendChild(listStyleDiv)

}

const renderMainShowStyleCard = (style) => {

}

document.addEventListener("click", event => {
    if (event.target.className === "likes-button") {
      const id = event.target.dataset.id
      const style = state.arrayOfStyles.find(style => style.id === parseInt(id))
      likes(style)
      listItem.innerHTML = ''
      renderAllStyles(state.arrayOfStyles)
    }
    if (event.target.className === "list-image") {
        const id = event.target.dataset.id
        console.log(id)
    }

})






const likes = (style) => {
    style.likes += 1
    updateStyle(style)
}



const renderAllStyles = (arrayStyles) =>
    state.arrayOfStyles.forEach(style => renderStyleCard(style));

getAllStyles()
    .then(resp => {
        state.arrayOfStyles = [...resp],
        renderAllStyles(state.arrayOfStyles)
    })
