const Auth=(req,res,next)=>{
    if (req.session?.Nombre) {
        next();
    }else res.redirect('/signUp');
}
export default Auth