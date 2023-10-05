
//Pegamos o elemento do Input cep
const cep = document.querySelector('#cep');

//Pegamos o elemento do input button buscar
const botao = document.querySelector('#buscar');

// function consulta(dados) {
//     for (let result in dados){
//         console.log(result);
//         console.log(dados);
//     }

// }

// função para verificar e alimentar os campos
const showData = function(result) {
    // o for in para tratarmos o objeto, o for in pega o resultado (result) e insere na variavel campo
    for(const campo in result) {
        // console.log(result)
        // nesse if verifica dinamicamente se todos os campos da api eu utilizo nos inputs
        if (document.querySelector('#' + campo)) {
            // pegamos dinamicamente o elemento dos inputs e passamos o value dinamicamente, 
            //dizendo q o result é um array e passando a variavel campo como posição
            document.querySelector('#' + campo).value = result[campo]
            //console.log(campo)
        }
    }
 }


//evento criado para realizar o envio da requisição
// o (e) é a captura do evento
botao.addEventListener('click', function (e) {
    //cep.addEventListener('blur',function(e) {

    //replace funão para substituir um caracter
    let search = cep.value.replace('-', '');

    //cria o objeto com as propriedades do envio para o ajax
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    // Buscar - acesso a url de onde será acessado, nesse caso a api o viaCEP,
    // passa por parâmetro o cep em questão, e passa os parametros nescessario, como por exemplo
    // o CORS
    // Serve para dizer que está trabalhando com servidores diferentes, como se fosse uma pemissão de acesso
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)

        // quando utilizamos o getch ele retorna uama promessa, ele é assincrono, então fazemos as
        // verificações abaixo
        // então faça algo, nesse caso crio uma função onde pego o "response" a resposta, no formato
        // json

        .then(function (response) {
            response.json()
                // o jsan tambpem retorna uma promessa, então precisamos verificar se deu certo
                // se der certo nesse caso retorne os dados para nós
                .then(function (dados) {
                    //consulta(dados);
                    console.log(dados);
                    showData(dados);
                })
        })

        // se der errado faz outra coisa
        .catch(function (e) {
            console.log('Error: ' + e.message);
        })

    // console.log(search);
})