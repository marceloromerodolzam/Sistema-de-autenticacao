let gmail = document.getElementById('inpEmail');
let senha = document.getElementById('inpPass');
let botaoLogin = document.getElementById('botaoLogin');
let aviso = document.getElementById('aviso');
let nome = '';


aviso.innerHTML = '';

/* armazenando o email e senha e nome */
const userLogin = {
    gmail: 'g@gmail.com',
    senha: 'Casa1234@',
    nome: 'User'
}

botaoLogin.addEventListener('click', function(){
    
    const Gmail = gmail.value;
    const Senha = senha.value;
    const Nome = nome;

    if(Gmail == '' || Senha == ''){

        aviso.innerHTML = 'Preencha os campos acima';

    }else if(Gmail != userLogin.gmail || Senha != userLogin.senha){

       aviso.innerHTML = 'Usuario invalido!'

    }else{ 

        aviso.innerHTML = `O ${userLogin.nome} foi reconhecido!`; 

    }
})