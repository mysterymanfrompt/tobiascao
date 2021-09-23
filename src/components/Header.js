import { useEffect } from "react";
import "./Header.css";

const Header = ({ currentDiv, onClickFunction }) => {
  useEffect(() => {
    testingReplacingUrl();
  }, []);

  const testingReplacingUrl = () => {
    window.history.pushState("page2", "Title", "/page2");
  };

  console.log("CUrrent div: ", currentDiv);

  return (
    <header className="header">
      <button
        onClick={() => {
          onClickFunction(1);
        }}
        className={
          "header-button " + (currentDiv === 1 && "header-button-active")
        }
      >
        Sobre nós
      </button>
      <button
        onClick={() => onClickFunction(2)}
        className={
          "header-button " + (currentDiv === 2 && "header-button-active")
        }
      >
        Treinos
      </button>
      <button
        onClick={() => onClickFunction(3)}
        className={
          "header-button " + (currentDiv === 3 && "header-button-active")
        }
      >
        Testemunhos
      </button>
      <button
        onClick={() => onClickFunction(4)}
        className={
          "header-button " + (currentDiv === 4 && "header-button-active")
        }
      >
        Contactos
      </button>
    </header>
  );
};

export default Header;
