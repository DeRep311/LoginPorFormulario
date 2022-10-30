const nombre = document.getElementById('Nombre')
const envio = document.getElementById('btn')


const handleSubmit = async (e) => {
    e.preventDefault();
   await fetch(`http://localhost:3000/sign`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: nombre.value,
    });
}
envio.addEventListener('click', handleSubmit)