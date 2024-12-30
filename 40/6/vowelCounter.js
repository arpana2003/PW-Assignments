document.getElementById('vowelCounterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let count = 0;
    for (let char of name) {
        if ('aeiouAEIOU'.includes(char)) {
            count++;
        }
    }
    console.log("Vowel count: " + count);
});
