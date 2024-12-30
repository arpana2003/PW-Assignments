function invertedTriangle(i) {
    let output = '';
    for (let row = i; row >= 1; row--) {
        let stars = '';
        for (let col = 1; col <= row; col++) {
            stars += '*';
        }
        output += stars + '\n';
    }
    document.getElementById('triangleOutput').textContent = output;
}

invertedTriangle(6);
