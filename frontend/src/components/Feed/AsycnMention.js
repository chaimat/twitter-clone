import React from "react";
import { Mentions } from "antd";
import debounce from "lodash/debounce";
import "./AsyncMentions.css";
const { Option } = Mentions;

class AsyncMention extends React.Component {
  constructor() {
    super();

    this.loadGithubUsers = debounce(this.loadGithubUsers, 800);
  }

  state = {
    search: "",
    loading: false,
    users: [],
    text: ""
  };

  onSearch = (search) => {
    this.setState({ search, loading: !!search, users: [] });
    console.log("Search:", search);
    this.loadGithubUsers(search);
  };

  loadGithubUsers(key) {
    if (!key) {
      this.setState({
        users: []
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
          loading: false
        });
      });
  }

  handleTextAreaChange = (e) => {
    this.setState({ text: e });
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div style={{width: "100%"}}>
        <Mentions
          style={{ width: "100%" }}
          loading={loading}
          onSearch={this.onSearch}
          onChange={(e) => this.handleTextAreaChange(e)}
          {...this.props}
          autoSize
          // split="/^^|"
        >
          {users.map(({ login, avatar_url: avatar }) => (
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
        {/* {this.state.text} */}
        {/* {users.map((value, key) => <span key={key}>{value}</span>)} */}
      </div>
    );
  }
}

export default AsyncMention;
