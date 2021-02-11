import Service from "../service";

class PacienteService { 
    constructor() {
        this.service = new Service()
    }

    async insert(pacienteDTO, token) {
        this.service.api.post('/paciente', { pacienteDTO,}, { 
            headers: {
                'Authorization': token
            }
        })
    }
}
export default PacienteService