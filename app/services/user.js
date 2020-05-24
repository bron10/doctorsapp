// import Service from '@ember/service';
import { A } from '@ember/array';
import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class UserService extends Service {
    @service('patient') patient;
    @service('doctor') doctor;

    constructor(){
        super(...arguments);
        this.allUsers = [...this.patient.getAll(), ...this.doctor.getAll()];

    }

    login(email, password){
        // console.log("email, password", email, password)
        const selectedUser = this.allUsers.filter(({creds})=>(creds.email===email && creds.password===password))[0]
        // console.log("selectedUser", selectedUser);
        if(selectedUser){
            window.localStorage.user = JSON.stringify(selectedUser) 
            return selectedUser;
        }
        return false;
    }

    logout(){
        delete window.localStorage.user
    }

    getInfo(){
        let data = {};
        try{
            data = JSON.parse(window.localStorage.user);
        }catch(e){

        }
        return data.creds || {}
    }
}
