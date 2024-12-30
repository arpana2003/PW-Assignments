function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = 25;
document.getElementById('unitConverterOutput').textContent = `${celsius}°C is equal to ${convertToFahrenheit(celsius)}°F`;
