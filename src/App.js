import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import FrontPageVideo from "./components/FrontPageVideo";
import About from "./components/About";
import TrainingPage from "./components/TrainingPage";
import ClassModal from "./components/ClassModal";
import { IoIosArrowDown } from "react-icons/io";

function App() {
  useEffect(() => {
    header = document.querySelector(".header");
  }, []);
  let header;

  const [modalProps, setModalProps] = useState(["", "", false]);
  const [currentDiv, setCurrentDiv] = useState(0);
  const divs = [
    ".front-page-container",
    ".about-container",
    ".training-container",
    ".about-container",
    ".training-container",
  ];

  const onScroll = () => {
    //To change header to solid. This is not good -> should use use state to then change atribute in the component itself.
    const scrollY = window.scrollY;
    if (header !== undefined) {
      if (scrollY >= 200) {
        header.classList.add("solid-header");
      } else {
        header.classList.remove("solid-header");
      }
    }

    //Changing color of arrow when on top of front page
    const arrowElement = document.querySelector(".arrow");
    if (scrollY >= -500 && scrollY <= 10) {
      if (!arrowElement.classList.contains("arrow-white")) {
        arrowElement.classList.add("arrow-white");
      }
      return 0;
    } else {
      if (arrowElement.classList.contains("arrow-white")) {
        arrowElement.classList.remove("arrow-white");
      }
    }

    setCurrentDiv(getScrollPos);
  };

  const getScrollPos = () => {
    const scrollY = window.scrollY;

    //Start screen
    const startScreenPosition = getDivPosition(0);
    if (scrollY >= -500 && scrollY <= startScreenPosition[1]) {
      return 0;
    }

    //About screen
    const aboutScreenPosition = getDivPosition(1);
    if (
      scrollY >= aboutScreenPosition[0] &&
      scrollY <= aboutScreenPosition[1]
    ) {
      return 1;
    }

    //Training screen
    const trainingScreenPosition = getDivPosition(2);
    if (
      scrollY >= trainingScreenPosition[0] &&
      scrollY < trainingScreenPosition[1]
    ) {
      return 2;
    }

    return 50;
  };

  const getDivPosition = (number) => {
    const startPost =
      window.scrollY +
      document.querySelector(divs[number]).getBoundingClientRect().top;

    const endPos =
      startPost + document.querySelector(divs[number]).offsetHeight;

    const divPositions = [startPost, endPos];

    return divPositions;
  };

  document.addEventListener("scroll", function (e) {
    onScroll();
  });

  //Scroll to x position based on number > div
  const onClickFunction = (number) => {
    const posToGoTo =
      window.scrollY +
      document.querySelector(divs[number]).getBoundingClientRect().top;

    window.scrollTo({
      top: posToGoTo,
      behavior: "smooth",
    });
  };

  //Scroll to next div
  const scrollNext = () => {
    const posToGoTo =
      window.scrollY +
      document.querySelector(divs[getScrollPos() + 1]).getBoundingClientRect()
        .top;

    window.scrollTo({
      top: posToGoTo,
      behavior: "smooth",
    });
  };

  //Open modal
  const toggleModal = (classModalTitle, classModalText, imageLoc) => {
    const newModalProp = [
      classModalTitle,
      classModalText,
      imageLoc,
      !modalProps[3],
    ];
    modalProps[3] ? enableScroll() : disableScroll();
    setModalProps(newModalProp);
  };

  //Enable scroll bar
  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }

  //Disable scroll bar
  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

  return (
    <div className="App">
      <IoIosArrowDown onClick={scrollNext} className="arrow" />
      <ClassModal modalProps={modalProps} toggleModal={toggleModal} />
      <Header currentDiv={currentDiv} onClickFunction={onClickFunction} />
      <FrontPageVideo onClickFunction={onClickFunction} />
      <About />
      <TrainingPage toggleModal={toggleModal} />
      <h1>teste</h1>
      <h1>teste</h1>
    </div>
  );
}

export default App;
