const apiKey = '9c306aaf3e22aba6ae42f16cd0cf4dce'; 

function buscarClima() {
    const cidade = document.getElementById('cidade').value; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=9c306aaf3e22aba6ae42f16cd0cf4dce&lang=pt_br&units=metric`;

    fetch(url) 
        .then(response => response.json()) 
        .then(data => {
            console.log(data); 
            if (data.cod === 200) {
                mostrarClima(data);
            } else {
                document.getElementById('resultado').innerHTML = `Cidade não encontrada`;
            }
        })
        .catch(error => {
            console.error('Erro:', error); 
            document.getElementById('resultado').innerHTML = 'Erro ao buscar o clima.';
        });
}

function mostrarClima(data) {
    const nomeCidade = data.name;
    const temperatura = data.main.temp;
    const descricao = data.weather[0].description;
    const umidade = data.main.humidity;

    const resultado = `
        <h2>${nomeCidade}</h2>
        <p>Temperatura: ${temperatura}°C</p>
        <p>Condição: ${descricao}</p>
        <p>Umidade: ${umidade}%</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}
