export class Card {
  public Cod: string;
  public Nombre: string;
  public Tipo: string;
  public Frec: string;
  public Raza: string;
  public Atr: string;
  public Arte: string;
  public imagePath: string;

  constructor(
    Cod: string,
    Nombre: string,
    Tipo: string,
    Frec: string,
    Raza: string,
    Atr: string,
    Arte: string,
    imagePath: string
) {
    this.Cod = Cod
    this.Nombre = Nombre
    this.Tipo = Tipo
    this.Frec = Frec
    this.Raza = Raza
    this.Atr = Atr
    this.Arte = Arte
    this.imagePath = imagePath
  }
}
