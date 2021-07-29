import React from "react";
import "./HomePageTopCoins.css";
import { Card } from "antd";
import _ from "lodash";
export default class HomePageTopCoins extends React.Component {
  state = { selectedTab: "1d" };
  coins1d = [
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Bitcoin",
      marketCap: "150k",
      change: 11
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Etherium",
      marketCap: "80k",
      change: 11
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Tether",
      marketCap: "90k",
      change: 71
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Binance Coin",
      marketCap: "90k",
      change: -11
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Doge Coin",
      marketCap: "30k",
      change: -7
    }
  ];

  coins1w = [
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Etherium",
      marketCap: "20k",
      change: 41
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Bitcoin",
      marketCap: "50k",
      change: -78
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Binance Coin",
      marketCap: "40k",
      change: 21
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Tether",
      marketCap: "990k",
      change: -22
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Doge Coin",
      marketCap: "20k",
      change: 0
    }
  ];

  coins1m = [
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Bitcoin",
      marketCap: "100k",
      change: -48
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Etherium",
      marketCap: "20k",
      change: 41
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Doge Coin",
      marketCap: "20k",
      change: 0
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Tether",
      marketCap: "990k",
      change: -22
    },
    {
      avatar: "https://4kt15.csb.app/coin.png",
      name: "Binance Coin",
      marketCap: "20k",
      change: -21
    }
  ];

  renderCoins() {
    let coins = this.coins1d;
    if (this.state.selectedTab === "1d") {
      coins = this.coins1d;
    } else if (this.state.selectedTab === "1w") {
      coins = this.coins1w;
    } else {
      coins = this.coins1m;
    }
    return coins.map(({ avatar, name, marketCap, change }, key) => {
      return (
        <tr key={key} className="home-top-coin-row">
          <td className="home-top-coin-image-wrapper" align="left">
            <img
              className="home-top-coin-image"
              src={avatar}
              alt="avatar"
              style={{ width: "20px" }}
            />
          </td>
          <td>
            <div className="top-coin-name">
              {_.truncate(name, { length: 15 })}
            </div>
          </td>
          <td>
            <div className="home-top-coin-market">{marketCap}</div>{" "}
          </td>
          <td>
            <div className="home-top-coin-change">
              <span
                className="home-top-coin-change-text"
                style={{ color: change > 0 ? "#46CE7C" : "#EC5656" }}
              >
                {Math.abs(change)}%
              </span>
              <img
                src={`https://4kt15.csb.app/${
                  change > 0 ? "pos" : "neg"
                }_change.png`}
                alt="change symbol"
                style={{ width: "16px" }}
              />
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Card size="small" bodyStyle={{ padding: 0 }} className="home-top-card">
        <div className="home-top-heading">Top Coins</div>
        <div className="home-top-tabs">
          <div
            className={`home-top-tab ${
              this.state.selectedTab === "1d" && "home-top-tab-selected"
            }`}
            onClick={() => this.setState({ selectedTab: "1d" })}
          >
            1d
          </div>
          <div
            className={`home-top-tab ${
              this.state.selectedTab === "1w" && "home-top-tab-selected"
            }`}
            onClick={() => this.setState({ selectedTab: "1w" })}
          >
            1w
          </div>
          <div
            className={`home-top-tab ${
              this.state.selectedTab === "1m" && "home-top-tab-selected"
            }`}
            onClick={() => this.setState({ selectedTab: "1m" })}
          >
            1m
          </div>
        </div>

        <div className="home-top-coins-list">
          <table className="home-top-coins-table">
            <tbody>{this.renderCoins()}</tbody>
          </table>
        </div>
      </Card>
    );
  }
}
