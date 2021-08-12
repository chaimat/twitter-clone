import React from "react";
import "./FeedInput.css";
import InsertButtons from "./InsertButtons";
import { Modal } from "antd";
import { localAPI } from "../../api/local";
import AsyncMention from "./AsycnMention";
import Axios from "axios";
import { Mentions } from "antd";
import debounce from "lodash/debounce";
import "./AsyncMentions.css";
const { Option } = Mentions;
const COMMENT = "comment";
const FEED = "feed";
const MODAL = "modal";
class FeedInput extends React.Component {
  constructor() {
    super();

    this.loadGithubUsers = debounce(this.loadGithubUsers, 800);
  }

  state = {
    isInputModalVisible: false,
    feedInputText: "",
    search: "",
    loading: false,
    users: [],
    text: "",
  };

  onSearch = (search) => {
    this.setState({ search, loading: !!search, users: [] });
    console.log("Search:", search);
    this.loadGithubUsers(search);
  };

  loadGithubUsers(key) {
    if (!key) {
      this.setState({
        users: [],
      });
      return;
    }

    fetch(`https://api.github.com/search/users?q=${key}`)
      .then((res) => res.json())
      .then(({ items = [] }) => {
        const { search } = this.state;
        if (search !== key) return;

        this.setState({
          users: items.slice(0, 10),
          loading: false,
        });
      });
  }

  handleOpenInputModal = () => {
    this.setState({ isInputModalVisible: true });
  };

  handleCloseInputModal = () => {
    this.setState({ isInputModalVisible: false });
  };

  handlePublishFeedInput = () => {
    alert(this.state.feedInputText);
    var params = new URLSearchParams();
    params.append("tweet_type", "opinion");
    params.append("content", this.state.feedInputText);
    // localAPI.post("/tweet/", null, {
    //   params: {
    //     tweet_type: "opinion",
    //     content: this.state.feedInputText,
    //   },
    // });

    Axios({
      method: "post",
      url: "http://localhost:8000/tweet/",
      data: params,
    });

    // fetch("http://localhost:8000/tweet/", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     content: this.state.feedInputText,
    //     tweet_type: "opinion",
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  };

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
        <Modal
          title="Create Opinion"
          visible={this.state.isInputModalVisible}
          onCancel={this.handleCloseInputModal}
          footer={null}
          bodyStyle={{ padding: 0 }}
          className="feed-input-modal"
          wrapClassName="feed-input-modal-dialog"
        >
          <FeedInput type="modal" />
        </Modal>

        {!(this.props.type === COMMENT) && <InsertButtons privacy />}

        <div className="feed-input-textarea-outer-wrapper">
          <img
            className="feed-input-avatar"
            src={`${process.env.PUBLIC_URL}/avatar.png`}
            alt="avatar"
            style={this.props.type === COMMENT ? { width: "28px" } : {}}
          />
          {/* <div style={{ width: "100%" }}> */}
          {/* <textarea
            onClick={
              this.props.type === FEED ? this.handleOpenInputModal : null
            }
            placeholder="What would you like to share today?"
            className="feed-input-textarea"
            type="text"
            style={this.props.type === COMMENT ? { fontSize: "14px" } : {}}
            ref={(c) => (this.textarea = c)}
            onChange={(e) => this.setState({ feedInputText: e.target.value })}
            // disabled={this.props.type === FEED}
            readOnly={this.props.type === FEED}
          /> */}
          {/* <AsyncMention
          onClick={
              this.props.type === FEED ? this.handleOpenInputModal : null
            }
            placeholder="What would you like to share today?"
            className="feed-input-textarea"
            type="text"
            style={this.props.type === COMMENT ? { fontSize: "14px" } : {}}
            // ref={(c) => (this.textarea = c)}
            onChange={(e) => this.setState({ feedInputText: e.target.value })}
            // disabled={this.props.type === FEED}
            readOnly={this.props.type === FEED}
          /> */}

          <Mentions
            style={{ width: "100%" }}
            loading={this.state.loading}
            onSearch={this.onSearch}
            onChange={(e) => this.setState({ feedInputText: e })}
            autoSize
            className="feed-input-mentions"
            placeholder="What would you like to share today?"
            readOnly={this.props.type === FEED}
            style={this.props.type === COMMENT ? { fontSize: "14px" } : {}}
            onClick={
              this.props.type === FEED ? this.handleOpenInputModal : null
            }
          >
            {this.state.users.map(({ login, avatar_url: avatar }) => (
              <Option
                key={login}
                value={login}
                className="antd-demo-dynamic-option"
              >
                <img className="mentions-img" src={avatar} alt={login} />
                <span>{login}</span>
              </Option>
            ))}
          </Mentions>

          {/* </div> */}
        </div>
        <div className="publish-insert-buttons-bottom-wrapper">
          {this.props.type === COMMENT && (
            <div>
              <InsertButtons bottom />{" "}
            </div>
          )}

          {!(this.props.type === FEED) && (
            <div>
              <div
                className="feed-input-publish-button"
                onClick={this.handlePublishFeedInput}
              >
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
