const lista = [[1,2,3], [4,5,6], [7,8], [9,10,11,12], [-13]]
funcao = (lista) => {
    let menor = Infinity;
    for (indexLista = 0; indexLista < lista.length; indexLista++){
        for(indexListaMenor = 0; indexListaMenor < lista.length; indexListaMenor++){
            if(lista[indexLista][indexListaMenor] < menor){
                menor = lista[indexLista][indexListaMenor]
            }
        }
    }
    return menor;
}
console.log(funcao(lista))