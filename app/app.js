/* 
    PASSO 1: Criar uma variável para armazenar o valor digitado no campo CEP do formulário:
*/
const cep = document.querySelector("#cep");

/*
    PASSO 2: Criar um  Event Listener para identificar o evento "blur" no campo CEP do Formulário. O evento "blur" será acionado quando o usuário for para o próximo campo, tanto com Tab, quanto clicando.

    PASSO 3: Tratar o valor digitado no campo do CEP usando o método replace para substituir o caracter de hífen por um espaço em branco, caso o usuário digite o CEP com hífen. Armazene o valor tratado em outra variável e crie um log para ela no console.
*/
// cep.addEventListener("blur", (e) => {
//     let search = cep.value.replace("-", "");
//     console.log(search);
// })

/*
    PASSO 4: Criar uma variável chamada option e definir um objeto com as opções para a Request.
*/
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

/*
    PASSO 5: Usar o método fetch para fazer a busca na API ViaCEP, usando a variável search e a variável options, como parâmetros para compor a string da url.
*/
// cep.addEventListener("blur", (e) => {
//     let search = cep.value.replace("-", "");
//     console.log(search);
   
//     fetch(`https://viacep.com.br/ws/${search}/json/`, options)
  
//  })

 /*
    PASSO 6: No .then , transformar a resposta em JSON com o método .json() 
    No .catch logar o erro no console caso, a requisição retorne um erro.
 */
    // cep.addEventListener("blur", (e) => {
    //     let search = cep.value.replace("-", "");
    //     console.log(search);
       
    //     fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    //     .then(response => {
    //         response.json()
    //     })
    //     .catch(e => {
    //         console.log("ERRO: "+e)
    //     })
    //  })

/*
    PASSO 7:  Como o método response.json também é uma promise, é preciso usar o .then novamente.  Assim, é possível logar a resposta no console.
*/
    // cep.addEventListener("blur", (e) => {
    //     let search = cep.value.replace("-", "");
    //     console.log(search);
           
    //     fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    //     .then(response => {
    //         response.json()
    //         .then(data => {
    //             console.log(data)
    //         })
    //     })
    //     .catch(e => {
    //         console.log("ERRO: "+e)
    //     })
    //     })

/*
    PASSO 8: Criar uma função para exibir os dados da resposta. Essa função deve receber a resposta já formatada como parâmetro. Depois, comparar cada campo da resposta com os campos do formulário e adicionar o valor de cada item da resposta ao respectivo campo do formulário.
*/
const showData = (result) => {
    for (const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }
    }
}

/*
    PASSO 9: Chamar a função que exibe os dados da resposta dentro do Event Listener, logo após a resposta ser convertida.
*/
cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");
    console.log(search);
   
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        response.json()
        .then(data => {
            console.log(data)
            showData(data)
        })
    })
    .catch(e => {
        console.log("ERRO: "+e)
    })
 })