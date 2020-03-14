 function exibirTabela() {

 	var nome = document.getElementById('nome').value;
 	var cpf = document.getElementById('cpf').value;
 	var email = document.getElementById('email').value;
 	var cidade = document.getElementById('cidade').value;


 	// alert('Soma: ' + soma);

 	var linha = '<tr>';
 	linha += '<td>' + nome + '</td>';
 	linha += '<td>' + cpf + '</td>';
 	linha += '<td>' + email + '</td>';
 	linha += '<td>' + cidade + '</td>';
 	linha += '<tr>';

 	tabela.innerHTML += linha;
}