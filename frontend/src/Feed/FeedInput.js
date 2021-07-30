import React from "react";
import "./FeedInput.css";
import InsertButtons from "./InsertButtons";
import autosize from "autosize";

const COMMENT = "comment"
const FEED = "feed"
const MODAL = "modal"
class FeedInput extends React.Component {
  componentDidMount() {
    autosize(this.textarea);
  }

  render() {
    return (
      <div
        className="feed-input-wrapper"
        style={
          this.props.type === MODAL
            ? { border: "0" }
            : this.props.type === COMMENT
            ? { marginTop: "36px", border: "0.5px solid #D2D2D2;" }
            : {}
        }
      >
        {!(this.props.type === COMMENT) && <InsertButtons privacy />}

        <div className="feed-input-textarea-outer-wrapper">
          <img
            className="feed-input-avatar"
            src={`${process.env.PUBLIC_URL}/avatar.png`}
            alt="avatar"
            style={this.props.type === COMMENT ? { width: "28px" } : {}}
          />
          <textarea
            placeholder="What would you like to share today?"
            className="feed-input-textarea"
            type="text"
            style={this.props.type === COMMENT ? { fontSize: "14px" } : {}}
            ref={(c) => (this.textarea = c)}
          />
        </div>
        <div className="publish-insert-buttons-bottom-wrapper">
          {this.props.type === COMMENT && (
            <div>
              <InsertButtons bottom />{" "}
            </div>
          )}

          {!(this.props.type === FEED) && (
            <div>
              <div className="feed-input-publish-button">
                {" "}
                {this.props.type === COMMENT ? "Post" : "Publish"}{" "}
              </div>
            </div>
          )}
        </div>
        {this.props.type === FEED && (
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

export default FeedInput;
