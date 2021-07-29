import React from "react";
import "./FeedMessage.css";
class FeedMessage extends React.Component {
  state = { showComments: false };
  handleShowComments = () => {
    this.setState({ showComments: !this.state.showComments });
  };
  render() {
    return (
      <div
        className={`feed-message-wrapper ${
          this.props.comment && "feed-message-comment-wrapper"
        }`}
      >
        <img
          className={`feed-message-avatar ${
            this.props.comment && `feed-message-comment-avatar`
          }`}
          alt="avatar"
          src="https://4kt15.csb.app/avatar.png"
        />
        <div>
          <div className="feed-message-content">
            <div className="feed-message-top-wrapper">
              <div className="feed-message-top-left">
                <div
                  className={`feed-message-username ${
                    this.props.comment && "feed-message-comment-username"
                  }`}
                >
                  {" "}
                  Crypto_mama
                </div>
                <div className="feed-message-time">
                  <img
                    className="feed-message-time-icon"
                    src="https://4kt15.csb.app/earth.png"
                    alt="earth_img"
                  />{" "}
                  <span className="feed-message-time-text">1 d</span>
                </div>
              </div>
              {!this.props.comment && (
                <div className="feed-message-top-right">
                  <div className="feed-message-type"> Opinion </div>
                  <div className="feed-message-settings">
                    {" "}
                    <img
                      className="feed-message-menu-icon"
                      src="https://4kt15.csb.app/menudots.png"
                      alt="amenu"
                    />{" "}
                  </div>
                </div>
              )}
            </div>
            <div
              className={`feed-message-text  ${
                this.props.comment && "feed-message-comment-text"
              }`}
            >
              {" "}
              <p style={{ whiteSpace: "pre-line" }}>
                {`TI believe $ETH is going to 10k, its is too 
                        scarce for the value
              add each coin provides. @crytpoTrader @CZ your thoughts? #binance
              #macro #tokenomics`}
              </p>
            </div>
            {!this.props.comment ? (
              <div className="feed-message-like-comment-wrapper">
                <div className="feed-message-like">
                  <img
                    className="feed-message-like-icon"
                    src="https://4kt15.csb.app/thumbs 1.png"
                    alt="earth_img"
                  />
                  <span className="feed-message-like-text">Like</span>
                </div>
                <div
                  className="feed-message-comment-icon-wrapper"
                  onClick={this.handleShowComments}
                >
                  <img
                    className="feed-message-comment-icon"
                    src="https://4kt15.csb.app/comments.png"
                    alt="earth_img"
                  />
                  <span className="feed-message-comment-icon-text">4</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="feed-message-comment-like">
                  <img
                    className="feed-message-like-icon"
                    src="https://4kt15.csb.app/thumbs 1.png"
                    alt="thumbs_img"
                  />
                  <span className="feed-message-like-comment-text">3</span>
                </div>
              </div>
            )}
          </div>
          {this.state.showComments && this.props.children}
        </div>
      </div>
    );
  }
}

export default FeedMessage;
