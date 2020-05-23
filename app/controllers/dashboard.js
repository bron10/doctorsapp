import Controller from '@ember/controller';
import { action } from '@ember/object'; 
import { inject as service } from '@ember/service';

export default class DashboardController extends Controller {
    @service('user') user;

    @action
    logout(){
        this.user.logout()
        this.transitionToRoute('login');
        
    }
}
