class Paciente {
  constructor(cpf, genero, id, nome) {
    this.cpf = cpf;
    this.genero = genero;
    this.id = id;
    this.nome = nome;
  }
  static PacienteVazio() {
    return new Paciente(null, null, null, null);
  }
}
export default Paciente;
