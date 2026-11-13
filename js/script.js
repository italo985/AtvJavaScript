/*

Primeira atividade, o objetivo é percorrer uma lista que mostra o status dos produtos e
contar quantos produtos estão avariados e exibir a quantidade.

*/

const lotes = ["OK", "OK", "Avariado", "OK", "Avariado", "OK"];

let count = 0;

for (let i = 0; i < lotes.length ; i++) {
   
if (lotes[i] === "Avariado"){
    count++
    
    }
}

console.log("Produtos avariados:" + count);


/*

Segunda atividade, o objetivo é contabilizar apenas os dias que o restaurante obteve 
lucro (valores positivos) e soma-los

*/

const fluxo = [1500, -300, 2100, -150, 3200];

let soma = 0;

for (let i = 0; i < fluxo.length; i++) {

    if(fluxo[i] > 0 ){
        
        soma = soma + fluxo[i];
    
    }
}

console.log("Soma dos lucros semanais: "+soma);



/*

Terceira atividade, o objetivo é extrair do relatório de tentativas de login os quais
falharam e emitir um alerta de suspeita com o indice indicando a posição do array

*/

const logs = ["08:00 - Sucesso", "09:30 - Falha", "09:31 - Falha", "09:35 - Sucesso"];

for (let i = 0; i < logs.length; i++) {
    
    if (logs[i].includes("Falha")) {
        console.log("Tentativa suspeita no índice "+i);
    }
}

/*

Quarta atividade, e necessário percorrer uma lista que contém eletrônicos e selecionar apenas
os da categoria "Periférico", aplicar um desconto de 10% sob seu preço original e exibir o 
valor da compra total, incluindo os produtos que nao recebem desconto

*/

const carrinho = [
 { nome: "Monitor", preco: 1200, categoria: "Tela" },
 { nome: "Teclado Mecânico", preco: 300, categoria: "Periférico" },
 { nome: "Mouse Gamer", preco: 150, categoria: "Periférico" },
 { nome: "Mesa", preco: 800, categoria: "Móveis" }
];

let totalCompra = 0;

for (let i = 0; i < carrinho.length; i++) {
    
    if (carrinho[i].categoria.includes("Periférico")) {
        carrinho[i].preco = carrinho[i].preco - (carrinho[i].preco * 0.10);

        console.log("Preço do "+ carrinho[i].nome +" com o desconto aplicado: "+carrinho[i].preco);
        
    }

    totalCompra = totalCompra + carrinho[i].preco;
}

console.log("Preço total da compra: R$"+totalCompra);

/*

Quinta atividade, o objetivo é identificar uma sequencia de dias trabalhados (true), e caso chegue ou 
ultrapasse 7 dias de trabalho consecutivos um alerta é emitido pois e crime

*/
    
const escala = [true, true, true, true, false, true, true, true, true, true, true, true, false];

let diasSeguidos = 0;

for (let i = 0; i < escala.length; i++) {
    
    escala[i] ? diasSeguidos++ : diasSeguidos = 0;

    if (diasSeguidos >= 7) {
        console.log("Alerta Trabalhista: Violação encontrada no dia "+ (i+1));
        break;
    }
}

