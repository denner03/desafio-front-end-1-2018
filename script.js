const cidade = document.getElementById('cidade');
const btn = document.getElementById('btn-search');
const renderInfo = document.getElementById('info');
const tokenId = "f2118f88560e47ec0ed16848bc4e2d44";
const appId = "a16f2bea3c0d5b0ef61b2b031e8724d2";

btn.addEventListener('click', (e) => {
  e.preventDefault()
  const cidadeValue = cidade.value;
  consultaEstado(cidadeValue)
});

function consultaEstado(cidade) {
  var URL = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${cidade}&token=${tokenId}`;
  fetch(URL)
  .then(r=>r.json())
  .then(r=>{
    window.response = r[0];
    const estado = window.response.state;
    consultaTemperatura(cidade);
  })
}

function consultaTemperatura(cidade) {
  var URL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${appId}&units=metric&lang=pt`;
  fetch(URL)
  .then(r=>r.json())
  .then(r=>{
    window.response = r["main"];
    const temp = window.response.temp;
    const tempMin = window.response.temp_min;
    const tempMax = window.response.temp_max;
    document.getElementById('resultado').innerHTML += temp +'<br>';
    document.getElementById('resultado').innerHTML += tempMin +'<br>';
    document.getElementById('resultado').innerHTML += tempMax +'<br>';
  })
}
