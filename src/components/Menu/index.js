import React from "react";
import Logo from "../../assets/img/LogoMain.png";
// import ButtonLink from "./ButtonLink/index"
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu"> 
      <a href="/">
        <img className="Logo" src={Logo} alt="LEALFLIX_logo"></img>
      </a>

      <Button as="a" className="ButtonLink" href="/">
          Novo vídeo
      </Button>
      {/* <ButtonLink className="ButtonLink" href="/">
          Novo vídeo
      </ButtonLink> */}
    </nav>
  );
}

export default Menu;
