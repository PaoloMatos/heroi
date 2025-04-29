

/*class formatoDeBolo{
    constructor(saborDaMassa, saborRecheio){
      this.saborDaMassa = saborDaMassa
      this.saborRecheio = saborRecheio
    }
  
    escrever(){
      console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
  
    assarBolo(){
      console.log("o bolo de " + this.saborDaMassa + "  está assando com " +  this.saborRecheio)
    }
  
  
  }
  
  let boloFesta = new formatoDeBolo("massa de chocolate","recheio de nutella")
  let boloPremium = new formatoDeBolo("massa de morango","recheio de  coco") 
  
  
  
  boloFesta.escrever()
  boloPremium.escrever()
  boloPremium.assarBolo()
*/
  class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo  = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`o ${this.tipo} ${this.nome} de idade ${this.idade} atacou usando ${this.ataque}`)
    }

  
  }

  let mago = new heroi("Renc", 23, "mago"," Magia")
  let guerreiro = new heroi("Pedro", 24, "guerreiro"," espada")
  let monge = new heroi("Paulo", 25, "monge"," artes marciais")
  let ninja = new heroi("Fernando", 26, "ninja"," shuriken")

  mago.atacar()
  guerreiro.atacar()
  monge.atacar()
  ninja.atacar()