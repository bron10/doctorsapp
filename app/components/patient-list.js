import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PatientListComponent extends Component {
  @service('patient') patient;
  @tracked patients;
    constructor(){
      super(...arguments)
      this.patients = this.patient.getAll()
      console.log("is it allowed", this.patients)
    }

  // init(){
  //   console.log("initing")
  // }
  
  @action
  showPatient(patient) {
    alert(`The patient's name is ${patient.name}!`);
  }

  @action
  deletePatient(patientId){
    if(confirm("Are you sure you want to delete a this patient?")) {
      this.patients = this.patient.remove(patientId)
    } else{
      return false;
    }
    // console.log("patientId for delete", patientId)
  }
  
}