import { hex_sha256 } from "./sha256-min.mjs";

const alvo = '365cae365e42b095b8e5ee0e41903364fc17c9bdcc772cb8edd8507c45842eef'; // hash calculada Camisa7Trabalhodevweb
const sal = 'Trabalhodevweb';
const mensagem =  document.getElementById('mensagem')

document.getElementById('btn_enviar').onclick = () =>{
    const entrada = document.getElementById('senha').value;
    if (hex_sha256(entrada + sal) === alvo){
        sessionStorage.setItem('logado', '1');
        window.location.href = 'jogadores.html';
    }else{
        mensagem.innerHTML = 'Senha incorreta';
    }
}