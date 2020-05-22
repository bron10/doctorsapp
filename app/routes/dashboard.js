import Route from '@ember/routing/route';

export default class DashboardRoute extends Route {
    model() {
        return [{name : 'Marie Curie'}, {name : 'Mae Jemison'}, {name:'Albert Hofmann'}];
    }
}
