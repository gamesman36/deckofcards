updateView();
function updateView(){
    html = /*html*/`
    ${displayCards()}
    <br /><br />
    <button onclick="location.reload()">Redeal</button>
    `;

    app.innerHTML = html;
}

function displayCards(){
    let y =``
    for(let x of dealtCards){
        y += `<img src="images/${x}.png">`;
    }
    return y;
}