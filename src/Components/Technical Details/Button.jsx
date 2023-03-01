// import expandmorebtn from "../../assets/expand_more.png";
// import expandlessbtn from "../../assets/expand_less.png";
// import { useState } from "react";
import "../Configurator/style.css";
import "../../index.css";
import { useStore } from "../../store/store";
const Button = () => {

  return (
    <div className="configurator">
      {/* <div className="Configurator_section_title">Color</div> */}

      <div className="configurator__section">
        <div className="btnContainer">
          <button
            onClick={() => {
              //
              useStore.setState({
                openExplode: !useStore.getState().openExplode,
              });
            }}
          >
            Explode
          </button>
        </div>
        <div className="btnContainer">
        <button
            className="configurator__section__title"
          >
           Dimension
          </button>

        </div>
        <div className="btnContainer">
        <button
            className="configurator__section__title"
          >
            AR
          </button>

        </div>
      </div>
    </div>
  );
};

export default Button;
