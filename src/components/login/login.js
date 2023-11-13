import React from "react";
import * as Components from './Components';

function Login() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Criar Conta</Components.Title>
                     <Components.Input type='text' placeholder='Nome' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Senha' />
                     <Components.Button>Entrar</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Conecte-se</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Senha' />
                      <Components.Anchor href='#'>Esqueceu sua senha?</Components.Anchor>
                      <Components.Button>Entrar</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Bem-vindo de volta!</Components.Title>
                     <Components.Paragraph>
                     Para permanecer conectado conosco, por favor, faça login com suas informações pessoais.
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                     Conecte-se
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Olá, amigo!</Components.Title>
                       <Components.Paragraph>
                       Insira seus detalhes pessoais e comece a jornada conosco.
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                           Inscreva-se
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default Login;