import Component from '@glimmer/component';
import { action } from '@ember/object'; 
import { inject as service } from '@ember/service';

export default class PatientListComponent extends Component {
    @service('user') user;
    @service router;

    constructor(){
        super(...arguments)
        this.userInfo = this.user.getInfo();
        this.isDoctor = this.userInfo.role==='doctor'
        if(!this.userInfo.email){
            this.router.transitionTo('login')
        }

    }
    @action
    logout(){
        this.user.logout()
        this.router.transitionTo('login');
        
    }
}