import Route from '@ember/routing/route';

export default class LoginRoute extends Route {
    model(){
        
        return {
            username : 'vivek',
            password : '123'
        }
    }
}
