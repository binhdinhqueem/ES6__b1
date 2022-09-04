const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];


const addButton = () =>{
    let buttonColor = ``;
    for (let index = 0; index < colorList.length; index++) {
        buttonColor+= `<button class="color-button ${colorList[index]}" onclick="changeColor('${colorList[index]}')"></button>`;
    }

    document.getElementById("colorContainer").innerHTML = buttonColor;
}
addButton();


const changeColor = (color) =>{
    document.getElementById('house').className = `house ${color}`;
}

