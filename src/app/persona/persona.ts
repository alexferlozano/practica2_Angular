export class Persona {
  public Nombre: String
  public Apellidos: String
  public Edad: Number
  public Sexo: String

  constructor(nombre,apellidos,edad,sexo)
  {
    this.Nombre=nombre
    this.Apellidos=apellidos
    this.Edad=edad
    this.Sexo=sexo
  }
  setNombre(nombre:String) {
    this.Nombre=nombre;
  }
  setApellidos(apellidos:String) {
    this.Apellidos=apellidos;
  }
  setEdad(edad:number) {
    this.Edad=edad;
  }
  setSexo(sexo:String) {
    this.Sexo=sexo;
  }
  getNombre(): String {
    return this.Nombre;
  }
  getApellidos(): String {
    return this.Apellidos;
  }
  getEdad(): Number {
    return this.Edad;
  }
  getSexo(): String {
    return this.Sexo;
  }
}
