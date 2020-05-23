import Service from '@ember/service';
import { A } from '@ember/array';

export default class PatientService extends Service {
    patients = A([{
        name : 'john',
        address : '',
        gender : '',
        dob : '',
        age : 23,
        symptoms : ['pain in stomach'],
        prescription : ['xyz tablet', 'abcsyrup'],
        visitedDate : Date.now(),
        creds :{
            email :"jon@hob.com",
            password : "123",
            role : 'patient'
        }
    }])

    add(patient) {
        this.patients.pushObject(patient);
      }
    
    remove({creds}) {
        const email = creds.email;
        const selectedPatient = this.patients.filter(patient=>patient.creds.email===email)[0]
        if(selectedPatient)
            this.patients.removeObject(selectedPatient);
    }
    
    getAll(){
        return this.patients
    }
}
