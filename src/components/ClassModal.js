import "./ClassModal.css";
import { MdClose } from "react-icons/md";

import { useSpring, animated, Transition } from "react-spring";

const ClassModal = ({ modalProps, toggleModal }) => {
  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: modalProps[3] ? 1 : 0,
    transform: modalProps[3] ? "translateY(1)" : "scale(0.5)",
  });

  return (
    <>
      {modalProps[3] && (
        <div
          className="background-div"
          onClick={(e) => {
            e.target.className === "background-div" && toggleModal();
          }}
        >
          <animated.div style={animation}>
            <div className="modal-wrapper">
              <div className="modal-content">
                <div className="modal-header">
                  <img className="modal-image" src={modalProps[2]} alt="" />
                  <h1>{modalProps[0]}</h1>
                </div>

                <p>{modalProps[1]}</p>
                <button className="ok-button" onClick={toggleModal}>
                  Ok
                </button>
              </div>
              <div class="close-container" onClick={toggleModal}>
                <div class="leftright"></div>
                <div class="rightleft"></div>
                <label class="close"></label>
              </div>
              {/*
              <MdClose
                className="close-button"
                aria-label="Close modal"
                onClick={toggleModal}
              />*/}
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

export default ClassModal;

/**  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: modalProps[2] ? 1 : 0,
    transform: modalProps[2] ? "translateY(1)" : "scale(0.5)",
  });


  const ClassModal = ({ modalProps, toggleModal }) => {
  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: modalProps[2] ? 1 : 0,
    transform: modalProps[2]
      ? "translate3d(0,0px,0)"
      : "translate3d(0,-40px,0)",
  });

  return (
    <>
      {modalProps[2] && (
        <div className="background-div" onClick={toggleModal}>
          <animated.div style={animation}>
            <div className="modal-wrapper">
              <div className="modal-content">
                <h1>{modalProps[0]}</h1>
                <p>{modalProps[1]}</p>
                <button className="ok-button">Ok</button>
              </div>
              <MdClose
                className="close-button"
                aria-label="Close modal"
                onClick={toggleModal}
              />
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

export default ClassModal;










        from={{ opacity: 1, transform: "scale(1.1)" }}
        enter={{ opacity: 1, transform: "scale(1)" }}
        leave={{ opacity: 1, transform: "scale(0.9)" }}



        <Transition
        native
        from={{ opacity: 1, transform: "scale(1.1)" }}
        enter={{ opacity: 1, transform: "scale(1)" }}
        leave={{ opacity: 1, transform: "scale(0.9)" }}
      >
        {modalProps[2] && (
          <div className="background-div" onClick={toggleModal}>
            <div className="modal-wrapper">
              <div className="modal-content">
                <h1>{modalProps[0]}</h1>
                <p>{modalProps[1]}</p>
                <button className="ok-button">Ok</button>
              </div>
              <MdClose
                className="close-button"
                aria-label="Close modal"
                onClick={toggleModal}
              />
            </div>
          </div>
        )}
      </Transition>
 */
