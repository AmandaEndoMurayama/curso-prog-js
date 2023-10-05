
//Pegamos o elemento do Input cep
const cidade = document.querySelector('#cidade');

//Pegamos o elemento do input button buscar
const botao = document.querySelector('#buscar');

function consulta(dados) {
    for (let result in dados) {
        console.log(result);
        console.log(dados);
    }

}

botao.addEventListener('click', function (e) {

    let cidadenome = cidade.value;

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=d51edb06&city_name=${cidadenome}`, options)


        .then(function (response) {
            response.json()
                // o jsan tambpem retorna uma promessa, então precisamos verificar se deu certo
                // se der certo nesse caso retorne os dados para nós
                .then(function (dados) {
                    consulta(dados);
                    console.log(dados);

                    document.querySelector("cidade").innerHTML = cidadenome.cidade;
                    document.querySelector("data").innerHTML = cidadenome.result.data;
                    document.querySelector("horario").innerHTML = cidadenome.result.horario;
                    document.querySelector("temperatura").innerHTML = cidadenome.result.temperatura;
                    document.querySelector("tempo").innerHTML = cidadenome.result.tempo;
                    document.querySelector("amanhecer").innerHTML = cidadenome.result.amanhecer;
                    document.querySelector("entardecer").innerHTML = cidadenome.result.entardecer;
                })
        })


        // se der errado faz outra coisa
        .catch(function (e) {
            console.log('Error: ' + e.message);
        })

    // console.log(search);
})