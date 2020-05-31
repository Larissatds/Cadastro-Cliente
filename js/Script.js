//Localização de endereço

function limpa_formulário_cep() {
    //Limpa valores do formulário de CEP
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    }
    else {
        //CEP não Encontrado
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado
    if (cep != "") {

        //Expressão regular para validar o CEP
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP
        if(validacep.test(cep)) {
            //Cria um elemento javascript
            var script = document.createElement('script');

            //Sincroniza com o callback
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback';

            //Insere script no documento e carrega o conteúdo
            document.body.appendChild(script);

        } 
        else {
            //CEP é inválido
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    }    
    else {
        //CEP sem valor, limpa formulário
        limpa_formulário_cep();
    }
}

//Mostrar dados
function cadastroCliente(nome, email, tel, cel, cep, rua, num, bairro, cidade, uf, bExcluir){
    var lista = document.getElementById("tExibir");
    var qtdLinhas = lista.rows.length;
    var adclinha = lista.insertRow(qtdLinhas);

    var cellNome = adclinha.insertCell(0);
    var cellEmail = adclinha.insertCell(1);
    var cellTel = adclinha.insertCell(2);
    var cellCel = adclinha.insertCell(3);
    var cellCep = adclinha.insertCell(4);
    var cellRua = adclinha.insertCell(5);
    var cellNum = adclinha.insertCell(6);
    var cellBairro = adclinha.insertCell(7);
    var cellCidade = adclinha.insertCell(8);
    var cellUF = adclinha.insertCell(9);
    var cellRemove = adclinha.insertCell(10);


    cellNome.innerHTML = nome;
    cellEmail.innerHTML = email;
    cellTel.innerHTML = tel;
    cellCel.innerHTML = cel;
    cellCep.innerHTML = cep;
    cellRua.innerHTML = rua;
    cellNum.innerHTML = num;
    cellBairro.innerHTML = bairro;
    cellCidade.innerHTML = cidade;
    cellUF.innerHTML = uf;
    cellRemove.innerHTML =  "<button class='btn btn-dark' id='buttonDel' onclick='removeLinha(this)'>X</button>";



}

//Remover linha da listagem
function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('tExibir').deleteRow(i);
  }      






