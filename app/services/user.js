// import Service from '@ember/service';
import { A } from '@ember/array';
import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class UserService extends Service {
    @service('patient') patient;

    login(email, password){
        console.log("email, password", email, password)
        const allUsers = [...this.patient.getAll()]
        const selectedUser = allUsers.filter(({creds})=>(creds.email===email && creds.password===password))[0]
        console.log("selectedUser", selectedUser);
        if(selectedUser){
            window.localStorage.user = JSON.stringify(selectedUser) 
            return true;
        }
        return false;
    }

    logout(){
        window.localStorage.clear()
    }
}
