import Controller from '@ember/controller';
import { action } from '@ember/object'; 
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
    
    @service('user') user;

    @action
    login(){
        const email     = this.get('email'); 
        const password  = this.get('password');
        const loggedIn = this.user.login(email, password);
        if(loggedIn){
            const isDoctor = loggedIn.creds.role==='doctor'
            if(isDoctor) {
                this.transitionToRoute('dashboard');
            }else{
                this.transitionToRoute('patient',{patient_id : loggedIn.id, ...loggedIn});
            }
        }else{
            alert("Invalid email or password");
        }
    }

    validate(email, password){
        return true
    }

    getRole(email){
        return 'doctor'
    }
}
