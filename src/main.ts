abstract class Veiculo {
  protected velocidade: number = 0;

  constructor(protected modelo: string) {}

  //  implementado pela subclasse
  abstract acelerar(): void;

  //  implementado pela subclasse
  abstract desacelerar(): void;

  frear(): void {
    this.velocidade = 0;
    console.log(`${this.modelo} está parado.`);
  }

  exibirVelocidade(): void {
    console.log(`Velocidade atual do ${this.modelo}: ${this.velocidade} km/h`);
  }
}

class Carro extends Veiculo {
  acelerar(): void {
    this.velocidade += 10;
    console.log(
      `${this.velocidade} acelerou. A velocidade é: ${this.velocidade} km/h`
    );
  }

  desacelerar(): void {
    if (this.velocidade > 0) this.velocidade -= 10;
  }
}

class Moto extends Veiculo {
  acelerar(): void {
    this.velocidade += 10;
    console.log(
      `${this.velocidade} acelerou. A velocidade é: ${this.velocidade} km/h`
    );
  }

  desacelerar(): void {
    if (this.velocidade > 0) this.velocidade -= 10;
  }
}

class Bicicleta extends Veiculo {
  acelerar(): void {
    this.velocidade += 5;
    console.log(
      `${this.velocidade} acelerou. A velocidade é: ${this.velocidade} km/h`
    );
  }

  desacelerar(): void {
    if (this.velocidade > 0) this.velocidade -= 5;
  }
}

class Viao extends Veiculo {
  acelerar(): void {
    this.velocidade += 300;
    console.log(
      `${this.velocidade} acelerou. A velocidade é: ${this.velocidade} km/h`
    );
  }

  desacelerar(): void {
    if (this.velocidade > 0) this.velocidade -= 300;
  }
}

const carro = new Carro("Ferrari");

carro.acelerar();
carro.exibirVelocidade();
carro.desacelerar();
carro.frear();

const moto = new Moto("Harley Davidson 881 iron");
moto.acelerar();
moto.exibirVelocidade();
moto.desacelerar();
moto.frear();

const viao = new Viao("Airbus A380");
viao.acelerar();
viao.exibirVelocidade();
viao.desacelerar();
viao.frear();

const bmx = new Bicicleta("BMX");
bmx.acelerar();
bmx.exibirVelocidade();
bmx.desacelerar();
bmx.frear();

console.log("------------DESAFIO--------------");

// velocidade = 0;
// console.log(`${this.modelo} está parado.`);
