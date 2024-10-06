const lista = [[1,2,3], [4,5,6], [7,8], [9,10,11,12], [-13]]
const lista1 = [[1,2,3,-13], [4,5,6,-13], [7,8,-13], [9,10,11,12,-13], [-13]]
funcao = (lista) => {
    let menor = Infinity;
    for (index in lista){
        for(indexMenor in lista[index]){
            if(lista[index][indexMenor] < menor){
                menor = lista[index][indexMenor]
            }
        }
    }
    var contador = -1;
    var numeroDeItens = -1; //não to conseguindo usar o lenght
    for (index in lista){
        numeroDeItens++
        for (indexMenor in lista[index]){
            if (lista[index][indexMenor] == menor){
                contador++
            }
        }
    }
    if (contador == numeroDeItens){
        return(menor)
    }
    else{
        return(-1)
    }
}
console.log(funcao(lista))
console.log(funcao(lista1))
