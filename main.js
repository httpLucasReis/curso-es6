// criando um método estático 

class Matematica { 
    static soma(a,b){
        return a+b;
    }
}

// Herança (Estendendo uma classe)
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }

}


// Criando uma classe
class TodoList extends List{ 
    constructor(){
      super(); // Chamando o constructor da classe pai  

      this.usuario = 'Diego';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
    
}

// Instanciando um objeto
const MinhaLista = new TodoList();

// Chamando um método
document.getElementById("novotodo").onclick = function(){
    MinhaLista.add('Novo todo');
}

console.log(Matematica.soma(2,5));