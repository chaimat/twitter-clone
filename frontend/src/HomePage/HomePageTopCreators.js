import React from "react";
import "./HomePageTopCreators.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card } from "antd";
import _ from "lodash";

export default class HomePageTopCreators extends React.Component {
  state = { selectedTab: "traders" };

  traders = [
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "M Cuban",
      percentage: 87
    },
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "Shri Haran",
      percentage: 36
    },
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "SomeOne with a long Name",
      percentage: -45
    },
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "Hello",
      percentage: -3
    },
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "Someone With an extremely long name that it doesnt fit the div",
      percentage: 100
    }
  ];

  analysts = [
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "Analyst 1",
      percentage: 43
    },
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "Virat Kohli",
      percentage: 56
    },
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "Priya Prakash Warrier",
      percentage: 29
    },
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "Ram Rahim Singh Insan",
      percentage: -8
    },
    {
      avatar: `${process.env.PUBLIC_URL}/avatar.png`,
      name: "Om",
      percentage: 0
    }
  ];

  renderCreators(creators) {
    return creators.map(({ avatar, name, percentage }, key) => {
      return (
        <tr key={key} className="home-top-creator-row">
          <td className="home-top-creator-image-wrapper" align="left">
            <img
              className="home-top-creator-image"
              src={avatar}
              alt="avatar"
              style={{ width: "32px" }}
            />
          </td>
          <td align="left">
            <div className="top-creator-name">
              {_.truncate(name, { length: 7 })}
            </div>
          </td>
          <td align="right">
            <div
              className="home-top-creators-percentage"
              style={{ width: "30px" }}
            >
              <CircularProgressbar
                value={Math.abs(percentage)}
                text={`${Math.abs(percentage)}%`}
                styles={{
                  path: {
                    stroke: percentage > 0 ? "#46CE7C" : "#EC5656",
                    strokeLinecap: "round"
                  },
                  trail: {
                    stroke: "#d6d6d6",
                    strokeLinecap: "butt"
                  },
                  text: {
                    fill: "#4F4F4F",
                    fontSize: "33px",
                    fontFamily: "Inter"
                  }
                }}
              />
            </div>{" "}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Card
        size="small"
        bodyStyle={{ padding: 0 }}
        className="home-top-card home-top-creators-card"
      >
        <div className="home-top-heading">Top Creators</div>
        <div className="home-top-tabs">
          <div
            className={`home-top-tab ${
              this.state.selectedTab === "analysts" && "home-top-tab-selected"
            }`}
            onClick={() => this.setState({ selectedTab: "analysts" })}
          >
            Analysts
          </div>
          <div
            className={`home-top-tab ${
              this.state.selectedTab === "traders" && "home-top-tab-selected"
            }`}
            onClick={() => this.setState({ selectedTab: "traders" })}
          >
            Traders
          </div>
        </div>

        <div className="home-top-creators-list">
          <table className="home-top-creators-table">
            <tbody>
              {this.renderCreators(
                this.state.selectedTab === "traders"
                  ? this.traders
                  : this.analysts
              )}
            </tbody>
          </table>
        </div>
      </Card>
    );
  }
}
