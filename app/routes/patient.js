import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PatientRoute extends Route {
    @service('patient') patient;
    constructor(){
      super(...arguments);
    }
    model({patient_id}) {
        console.log('This is the dynamic segment data: ' ,(patient_id));
        return this.patient.getOne(patient_id)
        // make an API request that uses the id
      }
}
