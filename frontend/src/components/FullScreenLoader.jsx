import "./FullScreenLoader.css";

export const FullScreenLoader = ({ text = "Loading..." }) => {
  return (
    <div className="fullscreen-loader">
      <div className="loader-box">
        <div className="spinner-fullscreen"></div>
      </div>
    </div>
  );
};
