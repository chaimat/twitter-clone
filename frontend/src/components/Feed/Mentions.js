import React from "react";
import { MentionsInput, Mention } from "react-mentions";

class Mentions extends React.Component {
  state = { value: "" };

  handleChange = (event, newValue, newPlainTextValue, mentions) => {
    this.setState({ value: newValue });
    console.log("newValue", newValue);
    console.log("newPlainTextValue", newPlainTextValue);
    console.log("mentions", mentions);
  };

  data = [
    {
      id: "1",
      display: "elon"
    },
    {
      id: "2",
      display: "getway"
    }
  ];

  // renderUserSuggestion = (entry, search, highlightedDisplay, index, focused) => {
  //   console.log(entry, search, highlightedDisplay, index, focused);
  //   }
  render() {
    return (
      <div>
        <MentionsInput value={this.state.value} onChange={this.handleChange}>
          <Mention
            trigger="@"
            data={this.data}
            markup="__display__"
            style={{
              color: "#daf4fa"
            }}
            // onAdd={(id) => setActorIds((actorIds) => [...actorIds, id])}
            appendSpaceOnAdd={true}
            // renderSuggestion={this.renderUserSuggestion}
            displayTransform={(id, name) => `@${name}`}
          />
          {/* <Mention
            trigger="#"
            // data={this.requestTag}
            // renderSuggestion={this.renderTagSuggestion}
          /> */}
        </MentionsInput>
        <p style={{ whiteSpace: "pre-line" }}>{this.state.value}</p>
      </div>
    );
  }
}

export default Mentions;
