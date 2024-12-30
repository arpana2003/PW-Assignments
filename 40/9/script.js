function checkDivisibility(arr) {
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
            output += arr[i] + ' ';
        }
    }
    document.getElementById('divisibilityOutput').textContent = 'Divisible by 3 but not 2: ' + output;
}

checkDivisibility([1, 3, 6, 9, 12, 15, 18, 20]);
