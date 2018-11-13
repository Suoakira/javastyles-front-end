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