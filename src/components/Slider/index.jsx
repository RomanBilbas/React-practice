import React, { Component } from "react";
import styles from "./animalStyles.module.scss";
import defoultImgDog from "./defoultImgDog.jpg";

class AnimalSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogImageSrc: "",
      dogDescription: "The Dog",
    };

    this.timerId = null;
  }

  load = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((request) => request.json())
      .then((data) => this.setState({ dogImageSrc: data.message }))
      .catch((err) => this.setState({ dogImageSrc: defoultImgDog }));
  };

  componentDidMount() {
    this.load();

    // this.timerId = setInterval(this.load, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dogImageSrc !== this.state.dogImageSrc) {
      this.timerId = setTimeout(this.load, 2000);
    }
  }

  componentWillUnmount() {
    // clearInterval(this.timerId);
    clearTimeout(this.timerId);
  }

  render() {
    const { dogImageSrc, dogDescription } = this.state;
    return (
      <figure className={styles.dogFigure}>
        <img src={dogImageSrc} alt="Dog" />
        <figcaption>{dogDescription}</figcaption>
      </figure>
    );
  }
}

export default AnimalSlider;
