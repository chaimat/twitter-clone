import React from "react";
import "./FeedInputbt.css";
import InsertButtons from "./InsertButtons";
import autosize from "autosize";
class FeedInputBT extends React.Component {
  componentDidMount() {
    autosize(this.textarea);
  }

  render() {
    return (
      <div
        className="feed-input-wrapper"
        style={
          this.props.type === "modal"
            ? { border: "0" }
            : this.props.type === "comment"
            ? { marginTop: "36px", border: "0.5px solid #D2D2D2;" }
            : {}
        }
      >
        {!(this.props.type === "comment") && <InsertButtons privacy />}

        <div className="feed-input-textarea-outer-wrapper">
          <img
            className="feed-input-avatar"
            src="https://4kt15.csb.app/avatar.png"
            alt="avatar"
            style={this.props.type === "comment" ? { width: "28px" } : {}}
          />
          <textarea
            placeholder="What would you like to share today?"
            className="feed-input-textarea"
            type="text"
            style={this.props.type === "comment" ? { fontSize: "14px" } : {}}
            ref={(c) => (this.textarea = c)}
          />
        </div>
        <div className="publish-insert-buttons-bottom-wrapper">
          {this.props.type === "comment" && (
            <div>
              <InsertButtons bottom />{" "}
            </div>
          )}

          {!(this.props.type === "feed") && (
            <div>
              <div className="feed-input-publish-button">
                {" "}
                {this.props.type === "comment" ? "Post" : "Publish"}{" "}
              </div>
            </div>
          )}
        </div>
        {this.props.type === "feed" && (
          <div className="feed-input-msg-type-buttons-wrapper">
            <div className="feed-input-opinion-button">Opinion</div>
            <div className="feed-input-research-button">Research</div>
            <div className="feed-input-trade-button">Recommend Trade</div>
          </div>
        )}
      </div>
    );
  }
}

export default FeedInputBT;
