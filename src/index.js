

state = {
    arrayOfStyles: []
}


// main code
const topEl = document.querySelector("#top")
const bottomEl = document.querySelector("#bottom")
const shoesEl = document.querySelector("#shoes")
const listItem = document.querySelector("#list-items")
const submitButton = document.querySelector('#submit-outfit')
const showPage = document.querySelector('.show-page')
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
    <img src=${tops[topCounter].frontUrl}

    onmouseover = "this.src='${tops[topCounter].backUrl}';"
    onmouseout = "this.src='${tops[topCounter].frontUrl}';"
    
    
    />
    <button class="right-top">RIGHT</button>
    <button class="left-top">LEFT</button>
    `

    console.log("rendering top")
    const rightButtonTop = document.querySelector('.right-top')
    const leftButtonTop = document.querySelector('.left-top')

    rightButtonClick(rightButtonTop, renderTop, tops, goRightTops)
    leftButtonClick(leftButtonTop, renderTop, tops, goLeftTops)

}

// render the bottom list
const renderBottom = () => {

    bottomEl.innerHTML = `

    <img src=${bottoms[bottomCounter].frontUrl}

    onmouseover = "this.src='${bottoms[bottomCounter].backUrl}';"
    onmouseout = "this.src='${bottoms[bottomCounter].frontUrl}';"
    
    />

    <button class="right-bottom">RIGHT</button>
    <button class="left-bottom">LEFT</button>
    `
    console.log("rendering bottom")
    const rightButtonBottom = document.querySelector('.right-bottom')
    const leftButtonBottom = document.querySelector('.left-bottom')

    rightButtonClick(rightButtonBottom, renderBottom, bottoms, goRightBottoms)
    leftButtonClick(leftButtonBottom, renderBottom, bottoms, goLeftBottoms)

}

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
const renderStyleCreateCard = () => {
    renderTop(tops)
    renderBottom(bottoms)
    renderShoe(shoes)
}
renderStyleCreateCard()




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
            state.arrayOfStyles.push(resp)
            renderStyleCard(resp)
    })


})




const renderStyleCard = (style) => {
    let listStyleDiv = document.createElement("div")
    listStyleDiv.className = "style-card"

    listStyleDiv.innerHTML = `
    <div class="list-top-div">
        <img class="top-image${style.id}" data-id="${style.id}" src=${style.top_front_url}

        onmouseout="this.src='${style.top_front_url}';"
        onmouseover="this.src='${style.top_back_url}';" 
         
        />
    </div>
    <div class="list-bot-div">
        <img class="bot-image${style.id}" data-id="${style.id}" src=${style.bottom_front_url}
        
        onmouseout = "this.src='${style.bottom_front_url}';"
        onmouseover = "this.src='${style.bottom_back_url}';"
        
        />
    </div>
    <div class="list-shoe-div">
        <img class="shoe-image${style.id}" data-id="${style.id}" src=${style.shoe_url} />
    </div>
    <button data-id=${style.id} class="likes-button">Like: ${style.likes}</button>
    `


    
    listStyleDiv.setAttribute("data-id", style.id)
    listItem.appendChild(listStyleDiv)
}





const showPageRender = (style) => {
    let showDiv = document.createElement('div')
    showDiv.innerHTML = `
    <div class="list-top-div">
        <img class="list-image" data-id="${style.id}" src=${style.top_front_url}
        
        onmouseout = "this.src='${style.top_front_url}';"
        onmouseover = "this.src='${style.top_back_url}';"
        
        />
    </div>
    <div class="list-bot-div">
        <img class="list-image" data-id="${style.id}" src=${style.bottom_front_url} />

        onmouseout = "this.src='${style.bottom_front_url}';"
        onmouseover = "this.src='${style.bottom_back_url}';"

    </div>
    <div class="list-shoe-div">
        <img class="list-image" data-id="${style.id}" src=${style.shoe_url} />
    </div>
    <button data-id=${style.id} class="likes-button">Like: ${style.likes}</button>


    `
    const top = document.querySelector(`dataset.${style.id}`);
    console.log(top) 
    const bot = document.querySelector('[data-id]');
    const shoe = document.querySelector('[data-id]');
    showPage.appendChild(showDiv)

}



document.addEventListener("click", event => {
    if (event.target.className === "likes-button") {
      const id = event.target.dataset.id
      const style = state.arrayOfStyles.find(style => style.id === parseInt(id))
      likes(style)
      listItem.innerHTML = ''
      renderAllStyles(state.arrayOfStyles)
    }
    else if (event.target.className = "style-card"){
        const id = event.target.dataset.id
        const style = state.arrayOfStyles.find(style => style.id === parseInt(id))
        showPage.innerHTML = ''
        showPageRender(style)
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
