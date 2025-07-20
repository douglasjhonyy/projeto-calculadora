function insertToDisplay(data){
    document.querySelector('#display').value += data // função de colocar números no display

}

function clean(){
    document.querySelector('#display').value = '' // função de apagar tudo
}

function back(){
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1) //finção de apagar número anterior
}

function result(){
    const display = document.querySelector('#display')
    try{
        display.value = eval(display.value)
        //o eval serve para identificar e calcular as operações de forma automatica
    } catch{
        display.value = 'Error'
        
    }
}