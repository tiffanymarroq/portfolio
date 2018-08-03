export default function (context) {
    
    console.log(context.store.getters.isAuthenticated);
    if(!context.store.getters.isAuthenticated){
        context.redirect('/admin/auth');
    }
}