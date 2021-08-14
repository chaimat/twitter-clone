import React from "react";
import "./FeedInput.css";
import InsertButtons from "./InsertButtons";
import { Modal } from "antd";
import { localAPI } from "../../api/local";
import Axios from "axios";
import _map from "lodash/map";
import ReactQuill from "react-quill";
import Parser from "html-react-parser";
import "quill-mention";
import "quill-mention/dist/quill.mention.css";
import history from "../../utils/history";

const coins = [
  {
    id: "bitcoin",
    value: "BTC",
  },
  {
    id: "ethereum",
    value: "ETH",
  },
  {
    id: "ripple",
    value: "XRP",
  },
  {
    id: "litecoin",
    value: "LTC",
  },
  {
    id: "dash",
    value: "DASH",
  },
  {
    id: "monero",
    value: "XMR",
  },
  {
    id: "bitcoin-cash",
    value: "BCH",
  },
  {
    id: "eos",
    value: "EOS",
  },
];

const Embed = ReactQuill.Quill.import("blots/embed");

class MentionBlot extends Embed {
  constructor(scroll, node) {
    super(scroll, node);
    this.clickHandler = null;
    this.className = "mention-class";
  }

  static create(data) {
    const node = super.create();
    if (data.denotationChar === "@") node.className = "mentionat";
    if (data.denotationChar === "#") node.className = "mentionhash";
    if (data.denotationChar === "$") node.className = "mentiondol";

    // node.setAttribute("href", "/users/"+data.value)

    const denotationChar = document.createElement("span");
    denotationChar.className = "ql-mention-denotation-char";
    denotationChar.innerHTML = data.denotationChar;
    node.appendChild(denotationChar);
    node.innerHTML += data.value;
    node.className += " mention-class";
    return MentionBlot.setDataValues(node, data);
  }

  static setDataValues(element, data) {
    const domNode = element;
    Object.keys(data).forEach((key) => {
      domNode.dataset[key] = data[key];
    });
    return domNode;
  }

  static value(domNode) {
    return domNode.dataset;
  }

  attach() {
    super.attach();
    this.clickHandler = (e) => {
      history.push(`/users/${Object.assign({}, this.domNode.dataset).value}`);
    };
    this.domNode.addEventListener("click", this.clickHandler, false);
  }

  detach() {
    super.detach();
    if (this.clickHandler) {
      this.domNode.removeEventListener("click", this.clickHandler);
      this.clickHandler = null;
    }
  }
}

MentionBlot.blotName = "mention";
MentionBlot.tagName = "span";
// MentionBlot.className = "mention-class";

ReactQuill.Quill.register(MentionBlot);
const COMMENT = "comment";
const FEED = "feed";
const MODAL = "modal";

const getUserNames = async function (searchTerm) {
  console.log("searchTerm", searchTerm);
  if (searchTerm.length < 1) return [];
  const url = `https://api.github.com/search/users?q=${searchTerm}`;
  let users;
  await fetch(url)
    .then((response) => response.json())
    .then(({ items = [] }) => {
      users = items.slice(0, 5).map((value, key) => ({
        id: value.login,
        value: value.login,
      }));
    });

  return users;
};

class FeedInput extends React.Component {
  componentDidMount() {
    window.addEventListener("mention-clicked", (e) => {
      this.handleMentionClicked(e);
    });
  }

  handleMentionClicked = (e) => {
    console.log(e.value);
    alert(e.value.value);
  };

  state = {
    isInputModalVisible: false,
    feedInputText: "",
    loading: false,
  };

  modules = {
    toolbar: null,
    // [
    //   [{ header: [1, 2, false] }],
    //   ["bold", "italic", "underline", "strike", "blockquote"],
    //   [{ list: "ordered" }, { list: "bullet" }],
    //   ["link", "image"]
    // ],
    mention: {
      renderItem: (item, mentionChar) => {
        console.log("mentionChar", mentionChar, item);
        if (mentionChar === "@") return item.value;
        else if (mentionChar === "#") {
          console.log("value", item.value);
          return null;
        } else if (mentionChar === "$") {
          return item.value;
        }
      },

      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      blotName: "mention",
      mentionDenotationChars: ["@", "#", "$"],
      source: async function (searchTerm, renderItem, mentionChar) {
        if (searchTerm === "") renderItem([], mentionChar);
        else if (mentionChar === "@") {
          const matches = await getUserNames(searchTerm);
          console.log(matches);
          renderItem(matches, mentionChar);
        } else if (mentionChar === "#") {
          renderItem(
            [
              {
                id: searchTerm,
                value: searchTerm,
              },
            ],
            mentionChar
          );
        } else if (mentionChar === "$") {
          const matches = [];
          for (let i = 0; i < coins.length; i++)
            if (~coins[i].value.toLowerCase().indexOf(searchTerm.toLowerCase()))
              matches.push(coins[i]);
          renderItem(matches, mentionChar);
        }
      },
      listItemClass: "ql-mention-list-item ql-mention-custom",
      mentionContainerClass: "ql-mention-list-container ql-mention-custom",
      mentionListClass: "ql-mention-list ql-mention-custom",
      selectKeys: [13, 32, 9],
    },
  };

  formats = [
    // "header",
    // "bold",
    // "italic",
    // "underline",
    // "strike",
    // "blockquote",
    // "list",
    // "bullet",
    // "indent",
    // "link",
    // "image",
    "mention",
  ];
  handleProcedureContentChange = (content, delta, source, editor) => {
    this.setState({ feedInputText: content });
  };

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

    Axios({
      method: "post",
      url: "http://localhost:8000/tweet/",
      data: params,
    });
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
          width={709}
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

          <div
            className="feed-input-text-wrapper"
            onClick={
              this.props.type === FEED ? this.handleOpenInputModal : null
            }
          >
            <ReactQuill
              theme="snow"
              modules={this.modules}
              formats={this.formats}
              value={this.state.feedInputText}
              onChange={this.handleProcedureContentChange}
              className="feed-input-text-editor"
              placeholder="What would you like to share today?"
              readOnly={this.props.type === FEED}
              style={
                this.props.type === COMMENT
                  ? { fontSize: "14px !important" }
                  : {}
              }
            />
          </div>
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
