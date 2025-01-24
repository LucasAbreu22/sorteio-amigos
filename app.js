let listaAmigos = [];

function adicionarAmigo()
{

    let amigoInput = document.getElementById('amigo');

    if(amigoInput.value == "")
    {
        alert("Campo de nome vazio!");
    } else {
        listaAmigos.push(amigoInput.value);

        visualizarLista();
    
        amigoInput.value = '';
    }
}

function visualizarLista()
{
    let listaAmigosHTML = document.getElementById('listaAmigos')

    listaAmigosHTML.innerHTML = "";

    for(let i in listaAmigos)
    {
        listaAmigosHTML.innerHTML += "<li>" + listaAmigos[i] + "<li>";
    }

}

function sortearAmigo()
{
    let resultado = document.getElementById('resultado');
    let i = Math.floor(Math.random() * listaAmigos.length);

    resultado.innerHTML = listaAmigos[i];
}