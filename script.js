function calculateSalary(Comiss,SalarioFix){

    let comissao = Comiss;
    let salarioFixo = SalarioFix;
    var salarioTotal = 0;

    if(comissao <= 1200){

        salarioTotal = ((comissao * 3) / 100) + salarioFixo;

    }else if(comissao > 1200){

        salarioTotal = ((comissao * 5) / 100) + 36 + salarioFixo
    }
    
        return salarioTotal;
}
console.log(calculateSalary(20000,1300))

// ****************************************************************************************************************************** */


function cashMachine(saque, salario, vendas){

    let valorSaque = saque;
    let contador = 0;
    let notas = [200, 100, 50, 20, 10, 5, 2, 1]
    let resultado = []

    for(let i = 0; i < notas.length; i++){

         if(valorSaque >= notas[i]){

            valorSaque -= notas[i]
            contador ++
        }
    }
}
console.log(cashMachine())

//  - - - - -  --  - -  - - - - - - - - - - - -  -  - - - - - - - - - - - - - - - - - - - - -- - - -- - - - -- - -- - - - - - - -- - -  -- - 

function calculateStock(estoqueAt, estoqueMax, estoqueMin){

    let mediaProdut = (estoqueMax + estoqueMin) / 2;

    if(estoqueAt >= mediaProdut){

        return "Estoque no nivel ideal! Não efetuar compra."
    
    }else{

        return "Nivel baixo de estoque! Efetuar compra!"
    }
}
console.log(calculateStock(700, 1500, 300))

// - - - -- - - - - - - - - - - - -- - - -- - - -- -- - - -- - -- - -- - - - -- - - -- - -- - - - - - -- -  - - - - - -  - - -- - - 

function calculateAge(anoNasc, anoAtual){

    let idadeA = anoAtual - anoNasc;
    let idadeM = (anoAtual - anoNasc) * 12;
    let idadeD = (anoAtual - anoNasc) * 365;
    let idadeSem = (anoAtual - anoNasc) * 48;


    let resultado = `Você tem ${idadeA} de idade! - Você tem ${idadeM} meses de Idade! - Sua idade em dias é ${idadeD}! - E em semanas é ${idadeSem}!`

    return resultado;
}
console.log(calculateAge(1997, 2022))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function getDiagonal(matriz){

    

    for(let i = 0; i < matriz.length; i++){

        for(let j = 0; j < matriz.length; j++){
            
        }
    }
    return matriz;
}
console.log(getDiagonal([ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ]))