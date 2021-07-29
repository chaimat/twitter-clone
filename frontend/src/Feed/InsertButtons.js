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
              src={"https://4kt15.csb.app/dollar.png"}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={"https://4kt15.csb.app/hashtag.png"}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={"https://4kt15.csb.app/mention.png"}
            />
          </div>
          <div className="insert-buttons-right">
            <img
              alt="img"
              className="insert-button-icon"
              src={"https://4kt15.csb.app/database.png"}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={"https://4kt15.csb.app/image.png"}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={"https://4kt15.csb.app/graph.png"}
            />
            <img
              alt="img"
              className="insert-button-icon"
              src={"https://4kt15.csb.app/smiley.png"}
            />
          </div>
        </div>
        {this.props.privacy && (
          <div className="privacy-button">
            <img
              alt="img"
              className="insert-button-icon"
              src={"https://4kt15.csb.app/earth.png"}
            />
            <span>Everyone</span>
          </div>
        )}
      </div>
    );
  }
}

export default InsertButtons;
