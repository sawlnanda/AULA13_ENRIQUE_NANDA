//MAP
//percorre todo o array e executa a ação que tivermos programado

// let lista = ["Altamiro","Barnabé","Cremildo"]

// lista.map((nome,posicao)=>{
//     console.log(`O nome é ${nome} e ele ocupa a posição ${posicao}`)
// })

//REDUCE
//procura reduzir um array normalmente atraves de 
//operaçãoes matemáticas, transaformanndo todo o conteudo
//do array em umunico valor

//let numeros = [2,3,5,10];

//let total = numeros.reduce((acumulador, numero,indice,original)=>{
  //  console.log(`${acumulador} - total até agora`);
    //console.log(`${numero} - valor atual`);
    //console.log(`${indice} - posição ate agora`);
    //console.log(`${original} - array original`);

    //console.log('----------------------')
    //return acumulador = acumulador*numero;
//})
//console.log(`Total do reduce é ${total}`);

//FIND
//Faz uma busca dentro do array e devolve o primeiro item que ele corresponde ao criterio de busca

//let listagem = [2,3,"Marcelo",5,"professor"]

//let busca = listagem.find((item2)=>{
  //  if(item2 ==="Marcelo"){
   //     return console.log('Nome encontrado')
  //  }else{
    //    return console.log('Nome não encontrado')
    //};
//});

//console.log(busca);

let palavras = ['alface','beterraba','cenoura','dedo','espinafre']

//ter menos que 7 letras
resultado = palavras.filter((palavra)=>{
    return palavra.length>11
});
console.log(resultado)