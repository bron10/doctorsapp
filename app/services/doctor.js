import Service from '@ember/service';
import { A } from '@ember/array';   
import data from '../data/data'
export default class DoctorService extends Service {
    constructor(){
        super(...arguments)
        if(!window.localStorage.doctors)
            window.localStorage.doctors = JSON.stringify(data.doctors);
    }

    getDoctors(){
        let doctors = [];
        try{
            doctors = JSON.parse(window.localStorage.doctors)
        }catch(e){}
        return doctors;
    }

    getAll(){
        return this.getDoctors()
    }
}
