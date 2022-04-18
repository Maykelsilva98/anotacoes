class Anotacoes{
    constructor(){
       this.titulo = ""
       this.notas = ""
    }

    getNotas(){
        return this.notas
    } 
    getTitulo(){
        return this.titulo
    }

    setNotas(nota){
        this.notas = nota
    }
    setTitulo(titulo){
        this.titulo = titulo
    }

    criaNota(notas){
        try{
            if (typeof notas != "string") throw new Error("Criação de notas - Dados inválidos")
            this.setNotas(notas)
        } catch(erro){
            console.error(erro)
        }
    }

    criaTitulo(titulo){
        try {
            if (typeof titulo != "string") throw new Error("Criação de notas - Dados inválidos")
            this.setTitulo(titulo)
        } catch(erro){
            console.error(erro)
        }
    }
}