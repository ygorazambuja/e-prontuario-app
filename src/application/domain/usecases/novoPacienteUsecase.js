
class NovoPacienteUsecase { 
    constructor(service, paciente) { 
        this.service = service;
        this.paciente = paciente
    }
    exec()  {
        this.service.insert(this.paciente);
    }
}
export default NovoPacienteUsecase