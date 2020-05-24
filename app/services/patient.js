import Service from '@ember/service';
import { A } from '@ember/array';
import data from '../data/data'
export default class PatientService extends Service {
    constructor(){
        super(...arguments)
        if(!window.localStorage.patients)
            this.setPatients(data.patients)        
    }

    setPatients(patients){
        window.localStorage.patients = JSON.stringify(patients);
    }

    getPatients(){
        let pats = {};
        try{
            pats = JSON.parse(window.localStorage.patients)
        }catch(e){}
        return pats;
    }

    add(patient) {
        let patients = this.getPatients();
        patients.push(patient)
        this.setPatients(patients)
      }
    
    remove(id) {

        const patients = this.getPatients().filter(patient=>patient.id!=id)
        this.setPatients(patients);
        return this.getPatients();
    }
    
    getAll(){
        return this.getPatients()
    }

    getOne(patientId){
        return this.getPatients().filter(patient=>patient.id==patientId)[0] || {};
    }
}
