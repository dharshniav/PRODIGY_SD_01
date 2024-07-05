document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;

    let celsius, fahrenheit, kelvin;

    if (unit === 'C') {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === 'F') {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = (temperature - 32) * 5/9 + 273.15;
    } else if (unit === 'K') {
        celsius = temperature - 273.15;
        fahrenheit = (temperature - 273.15) * 9/5 + 32;
        kelvin = temperature;
    }

    document.getElementById('result').innerHTML = `
        ${temperature}°${unit} is:<br>
        ${celsius.toFixed(2)}°C<br>
        ${fahrenheit.toFixed(2)}°F<br>
        ${kelvin.toFixed(2)} K
    `;
});
