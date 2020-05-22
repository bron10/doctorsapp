import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PatientListComponent extends Component {
  @action
  showPatient(patient) {
    alert(`The patient's name is ${patient.name}!`);
  }
}