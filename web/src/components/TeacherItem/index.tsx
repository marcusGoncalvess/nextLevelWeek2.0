import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/57052394?s=460&u=83a46ddbbc1ece36766f0426febd9f6360959a57&v=4"
          alt="Marcus Gonçalves"
        />
        <div>
          <strong>Marcus Gonçalves</strong>
          <span>Filosofia</span>
          <p>Só sei que nada sei...</p>
        </div>
      </header>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
