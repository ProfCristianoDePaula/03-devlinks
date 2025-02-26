import "./App.css";

import Foto from "./img/Avatar-6.png"
import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";

const App = () => {
  return (
    <div id="App" className="">
      <Perfil fotoPerfil={Foto}>@ProfCristianoDePaula</Perfil>
      <Switch />

      <ul>
        <Links>GitHub</Links>
        <Links>Instagran</Links>
        <Links>Portifólio</Links>
        <Links>Projetos</Links>
        
      </ul>

      <div id="socialLinks">
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
        <SocialLinks />
      </div>
      <Rodape>Prof. Cristiano de Paula</Rodape>
    </div>
  );
};

export default App;
