// create a new style
const newStyle = (newStyleObj) => {
    return fetch("http://localhost:3000/api/v1/styles", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newStyleObj)
    })
    .then(response => response.json())
}

// get all styles
const getAllStyles = () => 
    fetch(`http://localhost:3000/api/v1/styles`)
        .then(resp => resp.json())

// update style
const updateStyle = (style) => {
    return fetch(`http://localhost:3000/api/v1/styles/${style.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(style)
        })
        .then(response => response.json())
}

// new comment
const newComment = (newComment, style) => {
    return fetch("http://localhost:3000/api/v1/comments", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({content: newComment, style_id: style.id})
    })
    .then(response => response.json())
}