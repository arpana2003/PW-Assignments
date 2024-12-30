document.getElementById('colorMixerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let color1 = document.getElementById('color1').value.toLowerCase();
    let color2 = document.getElementById('color2').value.toLowerCase();
    
    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            console.log("purple");
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            console.log("orange");
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            console.log("green");
            break;
        default:
            console.log("Invalid color combination");
    }
});
