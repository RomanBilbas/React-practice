import style from "./ImageWrapper.module.scss";
import PropTypes from "prop-types";
// import ImageWrapper from "./components/ImageWrapper";
// function App() {
//   return (
//     <ImageWrapper
//       width="50px"
//       height="50px"
//       title="its cartina"
//       hidden={false}
//       style={{ border: "2px solid red" }}
//     >
//       <img
//         src="https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg"
//         alt="cosmos"
//       />
//     </ImageWrapper>
//   );
// }

// export default App;

function ImageWrapper({ children, width, height, ...restProps }) {
  const containerStyle = {
    width,
    height,
  };
  return (
    <div {...restProps} className={style.imageContainer} style={containerStyle}>
      {children}
    </div>
  );
}

ImageWrapper.defaultProps = {
  width: "300px",
  height: "300px",
};

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageWrapper;
