import '../Footer/FooterStyles.css'

const Footer = () =>{
    return (
        <div className="footer">
            <div className="cima">
                <div>
                <h1>Caregiver</h1>
                <p>Seu Bem-Estar é a Nossa Prioridade</p>
                </div>
                <div>
                    <a href='/'>
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href='/'>
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href='/'>
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
            
            <div className="baixo">
            <div>
                <h4>Empresa</h4>
                <a href='/'>Sobre nós</a>
                <a href='/'>Serviços</a>
                <a href='/'>Blog</a>
                </div>
                <div>
                    <h4>Suporte</h4>
                    <a href='/'>Contato</a>
                    <a href='/'>FAQ</a>
                    <a href='/'>Chat</a>
                </div>
                <div>
                    <h4>Social</h4>
                    <a href='/'>Facebook</a>
                    <a href='/'>Instagram</a>
                    <a href='/'>Twitter</a>
                    <a href='/'>Linkedin</a>
                </div>
                <div>
                    <h4>Outros</h4>
                    <a href='/'>Termos de Serviços</a>
                    <a href='/'>Política de Privacidade</a>
                    <a href='/'>Licença</a>
                </div>
            </div>

        </div>
    )
}

export default Footer;