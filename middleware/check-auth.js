export default function (context){
        console.log(context.store.getters.isAuthenticated);
        context.store.dispatch('initAuth', context.req);      
}