import Controller from '@ember/controller';
import { action } from '@ember/object'; 
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
    
    @service('user') user;

    @action
    login(){
        const email     = this.get('email'); 
        const password  = this.get('password');
        if(this.user.login(email, password)){
            this.transitionToRoute('dashboard');
        }else{
            alert("Invalid credentials");
        }

        // if(this.validate(email, password)){
        //     const role = this.getRole(email)
        //     this.store.createRecord('user', {email, password, role})
        // }
    }

    validate(email, password){
        return true
    }

    getRole(email){
        return 'doctor'
    }
}
