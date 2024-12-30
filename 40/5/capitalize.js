document.getElementById('capitalizeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let capitalized = name[0] === name[0].toLowerCase() ? name[0].toUpperCase() + name.slice(1) : name;
    console.log("Capitalized Name: " + capitalized);
});
