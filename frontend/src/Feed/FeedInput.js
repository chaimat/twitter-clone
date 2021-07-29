import React from "react";
import "./FeedInput.css";
class FeedInput extends React.Component {
  render() {
    return (
      <div>
        <div className="feed-input-outer-wrapper">
          <div className="feed-input-inner-wrapper">
            <div className="feed-input-content">
              <div className="feed-input-msg-type-buttons-wrapper">
                <div className="feed-input-trade-button">
                  <span className="feed-input-trade-button-heading">Recommend Trade</span>
                  </div>
                <div className="feed-input-research-button">
                  <span className="feed-input-research-button-heading">Research</span>
                  </div>
                <div className="feed-input-opinion-button">
                <span className="feed-input-opinion-button-heading">Opinion</span>
                </div>
              </div>
              <div className="feed-input-textarea-outer-wrapper">
                <div className="feed-input-textarea">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedInput;
