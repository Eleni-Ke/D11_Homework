//EX7
function changeTitle() {
    let h1Node = document.querySelector("h1");
    let titleInputNode = document.getElementById('new-title-input');
    let newTitle = titleInputNode.value;

    h1Node.innerText = newTitle;
}

//EX8
function changeBackgroundColor() {
    let backgroundColor = document.querySelector("body");
    let colorInputNode = document.getElementById("new-background-color-input");
    let newColor = colorInputNode.value;

    backgroundColor.style.background = newColor;
}

//EX9
function changeAddress() {
    let footerAddress = document.querySelector("#address");
    let addressInputNode = document.getElementById("new-address-input");
    let newAddress = addressInputNode.value;

    footerAddress.innerText = newAddress;
}

//EX10
function addClass() {
    let links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.add("link");
    }
}

//EX11
function changeVisibility() {
    let picturesNode = document.getElementsByClassName("cover");
    for (let i = 0; i < picturesNode.length; i++) {
        let pictureNode = picturesNode[i];
        pictureNode.classList.toggle("invisible");
    }
}

//EX12
function changePriceColor() {
    let pricesNode = document.getElementsByClassName('price');
    
    let randomBlue = Math.floor(Math.random()*(255 + 1));
    let randomGreen = Math.floor(Math.random()*(255 + 1));
    let randomRed = Math.floor(Math.random()*(255 + 1));
    let randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    //if I put all the random var in the loop, I get different colors for each price. Because Red, Green and Blue are being represented by a number between 1 and 255.
    
    for (let i = 0; i < pricesNode.length; i++) {
        let priceNode = pricesNode[i];
        priceNode.style.color = randomColor;
    }
}
