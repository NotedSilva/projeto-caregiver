import  "../cadastros/loginstyles.css"

const Login=()=>{
    return (

        <div id="login" >

<form action="#" method="post" id="form">
              <input
className="input"
                type="text"
                name="name"
                placeholder="Insira seu Nome"
              ></input>

              <input
                type="email"
                name="name"
                placeholder="Insira seu E-mail"
            
              ></input>



              <button type="submit" >
                Enviar 
              </button>
            </form>
</div>


    )
}
export default Login