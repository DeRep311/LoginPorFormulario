const home = (req,res)=>{
    res.sendFile((path.join(__dirname,'/public/index.html')))
}
const signUp = (req,res)=>{
    res.sendFile((path.join(__dirname,'/public/signin.html')))
}
const signin =(req,res)=>{
    let Nombre=req.body
      req.session.Nombre=Nombre
      console.log(Nombre);
      
  }
  const Productostest = (req, res) => {
    let datos = datosFalsos();
    res.send(datos)}
export {
    home,
    signUp,
    signin,
    Productostest
}
