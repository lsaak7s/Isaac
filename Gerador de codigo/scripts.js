/*Variável um pedaçinho da memoria que eu posso guardar que eu quiser

Algoritmo - receita do bolo 'Passo a passo'
logica de programação - Fazer o bolo 'Ja sabe como fazer'
Função - Só é executado quando é chamado

Algoritimo

[x] Saber quém éo botão
[x] Saber quando o botão foi clicado
[x] Saber quém é textearea
[x] pegar oque tem dentro dele
[x] Enviar para a IA
[x] Pegar a resposta e devolver para a tela

let nome = "Isaac"
console.log(nome)*/

/*HTML = document
javascript = script
Selecionar = querySelector
curioso = addEventListener
filtro = value
fetch = ferramenta para o js se cominicar com sevidores
async/ await = fazer o js esperar a resposta do servidor
IA
headers = Configuração dentro da configuração
JSON.stringify = Sempre necessario IA
sistem = Determinar oque a IA vai SER*****
User = Determinar oque ela vai fazer*****
mensangens = role "função", contente "Definir como a IA vai trabalhar"
Depois disso de configurar a IA = role "use" pedido do usuario, contente "Da onde vem o pedido"
*/

/*HTML*/
/* 
    Variável - Pedacinho de memória
    que eu posso guardar o que eu quiser

    Função - Pedacinho de código QUE só EXECUTA
    Quando é chamado

    Algoritmo - Receita do Bolo
    Lógica de Programação -  Fazer o bolo

    // Algoritmo do nosso sistema
    // Lógica de programação

    [x] Saber quem é o botão
    [x] Saber quando o botão foi clicado
    [x] Saber quem é o textarea  
    [x] Pegar o que tem dentro dele
    [x] Enviar para a IA
    [x] Pegar a resposta da IA e colocar na tela 
    [/] Estilizar a resposta     

    // Ir no HTML e pegar o botão
    // HTML = document (documento)
    // Selecionar (querySelector)
    // Quem é o Botão
    // Apelido para o botão - classes(class) = .
    fetch - ferramenta do JS para se comunicar com o servidor
*/

// Descobri que é o botao
let botao = document.querySelector(".botao-gerar")
let endereco = "https://api.groq.com/openai/v1/chat/completions"

// 1Criei a funcao que será chamada quando clicar 1
// no botao

async function gerarCodigo() {

    let textoUsuario = document.querySelector(".caixa-texto").value
    let blocoCodigo = document.querySelector(".bloco-codigo")
    let resultadoCodigo = document.querySelector(".resultado-codigo")

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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",
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate."
                },
                {
                    role: "user",
                    content: textoUsuario
                }
            ]
        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    blocoCodigo.textContent = resultado
    resultadoCodigo.srcdoc = resultado

}

// ficar de olho no botao, quando clicado chamar o gerarCodigo
botao.addEventListener("click", gerarCodigo)


// vizinho curioso (addEventListener)
// adicionar ouvinte de eventos
// Evento = clique, digitei...