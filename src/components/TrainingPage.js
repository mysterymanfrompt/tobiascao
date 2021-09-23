import "./TrainingPage.css";
import ClassButton from "./ClassButton";
const TrainingPage = ({ toggleModal }) => {
  return (
    <div className="training-container">
      <div className="inner-circle"></div>
      <h1 className="training-title">Treinos</h1>
      <h3 className="training-text">
        Aqui podes descobrir alguns dos treinos que temos para te providenciar
      </h3>
      <div className="classes-container">
        <ClassButton
          imageLocation="./media/button_images/dog1.jpg"
          title="Baby Pupy Class"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          voluptates nesciunt mollitia maiores possimus, sed officia eveniet ex
          cumque nam ut porro molestiae, sunt nemo repellat? "
          toggleModal={toggleModal}
        />
        <ClassButton
          imageLocation="./media/button_images/dog1.jpg"
          title="Intermidiete Puppy"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          voluptates nesciunt mollitia maiores possimus, sed officia eveniet ex
          cumque nam ut porro molestiae, sunt nemo repellat? "
          toggleModal={toggleModal}
        />
        <ClassButton
          imageLocation="./media/button_images/dog1.jpg"
          title="Foundation Class"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          voluptates nesciunt mollitia maiores possimus, sed officia eveniet ex
          cumque nam ut porro molestiae, sunt nemo repellat? "
          toggleModal={toggleModal}
        />
        <ClassButton
          imageLocation="./media/button_images/dog1.jpg"
          title="Junior Foundation Class"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          voluptates nesciunt mollitia maiores possimus, sed officia eveniet ex
          cumque nam ut porro molestiae, sunt nemo repellat? "
          toggleModal={toggleModal}
        />
        <ClassButton
          imageLocation="./media/button_images/dog1.jpg"
          title="Advanced Skills Class"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          voluptates nesciunt mollitia maiores possimus, sed officia eveniet ex
          cumque nam ut porro molestiae, sunt nemo repellat? "
          toggleModal={toggleModal}
        />
        <ClassButton
          imageLocation="./media/button_images/dog1.jpg"
          title="Advanced Skills"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          voluptates nesciunt mollitia maiores possimus, sed officia eveniet ex
          cumque nam ut porro molestiae, sunt nemo repellat? "
          toggleModal={toggleModal}
        />
        <ClassButton
          imageLocation="./media/button_images/dog1.jpg"
          title="Advanced Skills Class"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo
          voluptates nesciunt mollitia maiores possimus, sed officia eveniet ex
          cumque nam ut porro molestiae, sunt nemo repellat? "
          toggleModal={toggleModal}
        />
      </div>
    </div>
  );
};

export default TrainingPage;
