import React from "react";
import "./InsertButtons.css";
class InsertButtons extends React.Component {
  render() {
    return (
      <div
        className="insert-buttons-outer-wrappper"
        style={
          this.props.bottom ? { marginBottom: "0", marginRight: "20px" } : {}
        }
      >
        <div className="insert-buttons-wrapper">
          <div className="insert-buttons-right">
            <img
              alt="img"
              className="insert-button-icon"
              src={`${process.env.PUBLIC_URL}/dollar.png`}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={`${process.env.PUBLIC_URL}/hashtag.png`}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={`${process.env.PUBLIC_URL}/mention.png`}
            />
          </div>
          <div className="insert-buttons-right">
            <img
              alt="img"
              className="insert-button-icon"
              src={`${process.env.PUBLIC_URL}/database.png`}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={`${process.env.PUBLIC_URL}/image.png`}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={`${process.env.PUBLIC_URL}/graph.png`}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={`${process.env.PUBLIC_URL}/smiley.png`}
            />
          </div>
        </div>
        {this.props.privacy && (
          <div className="privacy-button">
            <img
              alt="img"
              className="insert-button-icon"
              src={`${process.env.PUBLIC_URL}/earth.png`}
            />
            <span>Everyone</span>
          </div>
        )}
      </div>
    );
  }
}

export default InsertButtons;
