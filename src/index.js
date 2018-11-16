// setting variables/state 
state = {
    arrayOfStyles: []
}

const topEl = document.querySelector("#top")
const bottomEl = document.querySelector("#bottom")
const shoesEl = document.querySelector("#shoes")
const listItem = document.querySelector("#list-items")
const submitButton = document.querySelector('#submit-outfit')
const showPage = document.querySelector('.show-page')
const createCard = document.querySelector('#create-card')
const likesSortButton = document.querySelector('.sort-by-likes')
const priceSortButton = document.querySelector('.sort-by-price')

let topCounter = 0
let bottomCounter = 0
let shoeCounter = 0
let currentStyle = ''



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
        <div class="middled">
            <button class="left-top button is-rounded is-link is-outlined button-border">PREV</button>
        </div>

        <div>
            <img class="rounded" src=${tops[topCounter].frontUrl}
            onmouseover = "this.src='${tops[topCounter].backUrl}';"
            onmouseout = "this.src='${tops[topCounter].frontUrl}';"   
            />
        </div>

        <div>
            <button class="right-top button is-rounded is-link is-outlined button-border">NEXT</button>
        </div>
        `

        console.log("rendering top")
        const rightButtonTop = document.querySelector('.right-top')
        const leftButtonTop = document.querySelector('.left-top')

        rightButtonClick(rightButtonTop, renderTop, tops, goRightTops)
        leftButtonClick(leftButtonTop, renderTop, tops, goLeftTops)
        topEl.classList.add('left-right')
    }

    // render the bottom list
    const renderBottom = () => {

        bottomEl.innerHTML = `
        <div>
            <button class="left-bottom button is-rounded is-link is-outlined button-border">PREV</button>
        </div>

        <div><img class="rounded" src=${bottoms[bottomCounter].frontUrl}
        onmouseover = "this.src='${bottoms[bottomCounter].backUrl}';"
        onmouseout = "this.src='${bottoms[bottomCounter].frontUrl}';"  
        /></div>

        <div>
            <button class="right-bottom button is-rounded is-link is-outlined button-border">NEXT</button>
        </div>
        `
        console.log("rendering bottom")
        const rightButtonBottom = document.querySelector('.right-bottom')
        const leftButtonBottom = document.querySelector('.left-bottom')

        rightButtonClick(rightButtonBottom, renderBottom, bottoms, goRightBottoms)
        leftButtonClick(leftButtonBottom, renderBottom, bottoms, goLeftBottoms)
        bottomEl.classList.add('left-right')

    }

    // render the shoes list
    const renderShoe = () => {

        shoesEl.innerHTML = `
        <div>
            <button class="left-shoe button is-rounded is-link is-outlined button-border">PREV</button>
        </div>
        <div class="rounded"><img class="rounded" src=${shoes[shoeCounter].frontUrl} /></div>
        <div>
            <button class="right-shoe button is-rounded is-link is-outlined button-border">NEXT</button>
        </div>
        `
        console.log("rendering shoe")
        const rightButtonShoe = document.querySelector('.right-shoe')
        const leftButtonShoe = document.querySelector('.left-shoe')

        rightButtonClick(rightButtonShoe, renderShoe, shoes, goRightShoes)
        leftButtonClick(leftButtonShoe, renderShoe, shoes, goLeftShoes)
        shoesEl.classList.add('left-right')
    }

    const renderStyleCreateCard = () => {
        renderTop(tops)
        renderBottom(bottoms)
        renderShoe(shoes)
        createCard.classList.add('border')
    }
    


    // create a new local style card and post a style card 
    // to the api/database on click of the 'submit' button
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

        submitButton.classList.remove('is-success')
        submitButton.classList.add('is-warning')
        submitButton.innerText = `Nice!`
        setTimeout(function(){submitButton.classList.add('is-success'), submitButton.classList.remove('is-warning'), submitButton.innerText = `Submit outfit!`}, 1000);

    })

    renderStyleCreateCard(tops, bottoms, shoes)



// render each style card in rows at the bottom of the page, on page load
const renderStyleCard = (style) => {
    let listStyleDiv = document.createElement("div")
    listStyleDiv.className = "style-card"

    listStyleDiv.innerHTML = `
    <div class="list-top-div">
        <img class="top-image${style.id} rounded" data-id="${style.id}" src=${style.top_front_url}

        onmouseout="this.src='${style.top_front_url}';"
        onmouseover="this.src='${style.top_back_url}';" 
         
        />
    </div>
    <div class="list-bot-div">
        <img class="bot-image${style.id} rounded" data-id="${style.id}" src=${style.bottom_front_url}
        
        onmouseout = "this.src='${style.bottom_front_url}';"
        onmouseover = "this.src='${style.bottom_back_url}';"
        
        />
    </div>
    <div class="list-shoe-div">
        <img class="shoe-image${style.id} rounded" data-id="${style.id}" src=${style.shoe_url} />
    </div>
    <div>
        <i data-id=${style.id} class="likes-button far fa-heart fa-2x"></i>
        <i class="med-font">&nbsp;${style.likes}</i>
    </div>
`
    
    listStyleDiv.classList.add('column')
    listStyleDiv.classList.add('is-one-third')
    listStyleDiv.setAttribute("data-id", style.id)
    listItem.appendChild(listStyleDiv)
    listItem.className = 'columns'
    listItem.classList.add("is-multiline")
}



// render a style card to the top of the page
const showPageRender = (style) => {
    if (!!(currentStyle)){
        revertPrevStyle()
    }

    currentStyle = document.querySelector(`[data-id="${style.id}"]`)
    //     if (currentStyle.classList[0] !== 'style-card'){
    //         currentStyle = currentStyle.parentElement.parentElement
    //     } 

    changeCurrentStyleStyling()
    // console.log(currentStyle)
    // console.log(style)


    // remove annoying border at top of page
    createCard.id = ''
    createCard.innerHTML = `
    `


    showPage.classList.add('border')

    showPage.innerHTML = `
        <div class="show-div">
                <div class="list-top-div">
                    <img class="list-image" data-id="${style.id}" src=${style.top_front_url}
                    
                    onmouseout="this.src='${style.top_front_url}';"
                    onmouseover="this.src='${style.top_back_url}';"
                    
                    />
                </div>
                <div class="list-bot-div">
                    <img class="list-image" data-id="${style.id}" src=${style.bottom_front_url}

                    onmouseout="this.src='${style.bottom_front_url}';"
                    onmouseover="this.src='${style.bottom_back_url}';"
                    
                    />
                </div>
                <div class="list-shoe-div">
                    <img class="list-image" data-id="${style.id}" src=${style.shoe_url} />
                </div>
            </div>

            <div class="button-control">
                <div class="likes-area">
                    <i data-id=${style.id} class="like-button far fa-heart fa-2x"></i>
                    <i class="med-font">&nbsp;${style.likes}</i>
                </div>
                <div>
                <div class="please">Please leave a comment:</div>
                    <form id="comments-form" class ="">
                        <input type="text" id="submit-text">
                    </form>  
                </div> 
                <div class="comments-d">
                    <ul id="comments">
                    </ul>
                </div>

        </div>

    `

    // add comment form
    const showDiv = document.querySelector(".show-div")
    const commentForm = document.querySelector("#comments-form")
    commentForm.addEventListener("submit", (event)=>{
        event.preventDefault()
        const comment = commentForm.querySelector("#submit-text").value
        style.comments.push(comment)
        newComment(comment, style)
        showPageRender(style)
    })

    // comments list
    const commentList = document.querySelector('#comments')
    let str = ''

    style.comments.forEach(comment => {
        if (!!comment.content){
            str +=  `<div class="box">
    <article class="media">
        <div class="media-left">
      </figure>
        </div>
        <div class="media-content">
        <div class="content">
        
    
                ${comment.content}
            

    </article>
    </div>`
        } else {
            str += `<div class="box">
    <article class="media">
        <div class="media-left">
        </div>
        <div class="media-content">
        <div class="content">
            
                ${comment}
            
    </article>
    </div>`
        }
    })

    commentList.innerHTML = str


    // button for liking card on its show page 
    // document.querySelector('#like-button').addEventListener('click', (event) => {
    //     console.log('LIKE BUTTON CLICKED')
    //     const id = event.target.dataset.id
    //     const style = state.arrayOfStyles.find(style => style.id === parseInt(id))
    //     // likes(style)
    //     likeToggle(style)
    //     createCard.innerHTML = ''
    //     showPageRender(style)
    // })

}



// click events -- likes, going back to create, etc.
document.addEventListener("click", event => {
    // console.log(event.target)
    if (event.target.classList[event.target.classList.length-2] === "likes-button") {
      const id = event.target.dataset.id
      const style = state.arrayOfStyles.find(style => style.id === parseInt(id))
      likeToggle(style)
      listItem.innerHTML = ''
      renderAllStyles(state.arrayOfStyles)
      buttonToggle(style, event.target)
    } else if (event.target.classList[event.target.classList.length-2] === "like-button") {
      const id = event.target.dataset.id
      const style = state.arrayOfStyles.find(style => style.id === parseInt(id))
      likeToggle(style)
      showPage.innerHTML = ''
      showPageRender(style)
      listItem.innerHTML = ''
      renderAllStyles(state.arrayOfStyles)
      buttonToggle(style, event.target)
    } else if (event.target.parentElement.parentElement.classList[0] === 'style-card') {
        console.log('nice')
        const id = event.target.dataset.id
        const style = state.arrayOfStyles.find(style => style.id === parseInt(id))
        showPageRender(style)
    } else if (event.target.id === "back-to-create") {
        document.location.reload()
    } else if (event.target.parentElement.parentElement.classList[2] === 'style-card') {
        console.log('nice')
        const id = event.target.dataset.id
        const style = state.arrayOfStyles.find(style => style.id === parseInt(id))

        showPageRender(style)
    }
})




const likeToggle = (style) => {
    if (style.liked === false || !(style.liked)){
        style.liked = true;
        likes(style)
    } else if (style.liked === true){
        style.liked = false;
        unLike(style)
    }
}

const buttonToggle = (style, likeButton) => {
    if (style.liked === false || !(style.liked)) {
        // heart unfills
        likeButton.parentElement.classList.add('red')
        console.log(likeButton.parentElement)
    } else if (style.liked === true) {
        // heart fills
        likeButton.classList.remove('red')
    }
}


// methods for patching/posting/getting from the api & api methods
const likes = (style) => {
    style.likes += 1
    updateStyle(style)
}

const unLike = (style) => {
    style.likes -= 1
    updateStyle(style)
}





const renderAllStyles = () =>
    state.arrayOfStyles.forEach(style => renderStyleCard(style));

getAllStyles()
    .then(resp => {
        state.arrayOfStyles = [...resp],
        renderAllStyles(state.arrayOfStyles)
    })
 

const changeCurrentStyleStyling = () => {
    currentStyle.classList.remove('style-card')
    currentStyle.classList.add('style-card-click')
}

const revertPrevStyle = () => {
    currentStyle.classList.add('style-card')
    currentStyle.classList.remove('style-card-click')
}



// sorting functions/event listeners
let selectedButton = ''

likesSortButton.addEventListener("click", (event)=>{
    if(!!(selectedButton)){
        removeButtonColour()
    }
    selectedButton = event.target
    addButtonColour()
    // sort local array of styles by likes and render this sorted array onto page
     const sortedState = state.arrayOfStyles.sort(function (a, b) {
         return b.likes - a.likes
     })
     listItem.innerHTML = ''
     renderAllStyles(sortedState.arrayOfStyles)
})

priceSortButton.addEventListener("click", (event)=>{
     if(!!(selectedButton)){
        removeButtonColour()
    }
    selectedButton = event.target
    addButtonColour()
    // sort local array of styles by price and render this sorted array onto page
    state.arrayOfStyles.sort()
    
})


// adds button colour to selected sort button, price or likes
const addButtonColour = () => {
    !!(selectedButton)
    selectedButton.classList.add('selected-button')
}

// removes button colour from button when other button has been selected
const removeButtonColour = () => {
    selectedButton.classList.remove('selected-button')
}



