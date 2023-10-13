import './ContatoFormStyles.css'
import img8 from '../assets/8.svg'

function ContatoForm(){
    return(
        <div className="Contato-Form">
            <h1>Contate-nos</h1>
            <div className="ctn">
                <div className="ctn-main">
                    <div className="ctn-content">
                        <h2>Contato</h2>
                        <form action="#" method="post">
                            <input type="text" name="name" placeholder='Insira seu Nome'></input>

                            <input type="email" name="name" placeholder='Insira seu E-mail'></input>

                            <textarea name="message" placeholder="Insira sua Mensagem"></textarea>

                            <button type="submit" className="btn">Enviar <i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                    <div className="form-img">
                        <img src={img8} alt="Contato"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContatoForm;