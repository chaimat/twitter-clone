import React from "react";
import "./HomeBottomCard.css";
import { Card, Badge } from "antd";
import { divide } from "lodash";
export default class HomeBottomCard extends React.Component {
  cardsList = [
    {
      title: "Stock Analyst",
      description:
        "The leap into electronic typesetting, remaining essentially unchanged. We aim at providing crypto news.",
      subscribers: 225,
      badge: "Premium",
      badgeColor: "#D8B35D"
    },
    {
      title: "Stock Analyst",
      description:
        "The leap into electronic typesetting, remaining essentially unchanged. We aim at providing crypto news.",
      subscribers: 225,
      badge: "Premium",
      badgeColor: "#D8B35D"
    },
    {
      title: "Stock Analyst",
      description:
        "The leap into electronic typesetting, remaining essentially unchanged. We aim at providing crypto news.",
      subscribers: 225,
      badge: "Premium",
      badgeColor: "#D8B35D"
    },
    {
      title: "Stock Analyst",
      description:
        "The leap into electronic typesetting, remaining essentially unchanged. We aim at providing crypto news.",
      subscribers: 225,
      badge: "Premium",
      badgeColor: "#D8B35D"
    },
    {
      title: "Stock Analyst",
      description:
        "The leap into electronic typesetting, remaining essentially unchanged. We aim at providing crypto news.",
      subscribers: 225,
      badge: "Premium",
      badgeColor: "#D8B35D"
    },
    {
      title: "Stock Analyst",
      description:
        "The leap into electronic typesetting, remaining essentially unchanged. We aim at providing crypto news.",
      subscribers: 225,
      badge: "Premium",
      badgeColor: "#D8B35D"
    },
    {
      title: "Stock Analyst",
      description:
        "The leap into electronic typesetting, remaining essentially unchanged. We aim at providing crypto news.",
      subscribers: 225,
      badge: "Premium",
      badgeColor: "#D8B35D"
    },
    {
      title: "Stock Analyst",
      imgSrc: `${process.env.PUBLIC_URL}/homecard.png`,
      description:
        "The leap into electronic typesetting, remaining essentially unchanged. We aim at providing crypto news.",
      subscribers: 225,
      badge: "Premium",
      badgeColor: "#D8B35D"
    }
  ];

  renderCard(card) {
    return (
      <div className="home-bottom-card-wrapper">
        <Badge.Ribbon text={card.badge} color={card.badgeColor}>
          <Card className="home-bottom-card">
            <div className="home-bottom-card-img-content-wrapper">
              <img
                alt="home page card"
                src={`${process.env.PUBLIC_URL}/homecard.png`}
              />
              <div className="home-bottom-card-content">
                <div className="home-bottom-card-heading">{card.title}</div>
                <div className="home-bottom-card-text">{card.description}</div>
                <div className="home-bottom-card-subscribers">
                  {card.subscribers} subscribers
                </div>
                <div className="home-bottom-card-join-waitlist">
                  Join Waitlist{" "}
                  <img
                    alt="right arrow"
                    src={`${process.env.PUBLIC_URL}/rightarrow.png`}
                  />
                </div>
              </div>
            </div>
          </Card>
        </Badge.Ribbon>
      </div>
    );
  }

  render() {
    return (
      <div className="home-bottom-cards-list-wrapper">
        {this.cardsList.map((card, key) => (
          <div key={key}>{this.renderCard(card)}</div>
        ))}
        {/* <Badge.Ribbon text="hello">
          <Card className="home-bottom-card">
            <div className="home-bottom-card-img-content-wrapper">
              <img
                alt="home page card"
                src={`${process.env.PUBLIC_URL}/homecard.png`}
              />
              <div className="home-bottom-card-content">
                <div className="home-bottom-card-heading">Stock Analysis</div>
                <div className="home-bottom-card-text">
                  The leap into electronic typesetting, remaining essentially
                  unchanged. We aim at providing crypto news.
                </div>
                <div className="home-bottom-card-subscribers">
                  225 subscribers
                </div>
                <div className="home-bottom-card-join-waitlist">
                  Join Waitlist{" "}
                  <img
                    alt="right arrow"
                    src={`${process.env.PUBLIC_URL}/rightarrow.png`}
                  />
                </div>
              </div>
            </div>
          </Card>
        </Badge.Ribbon> */}
      </div>
    );
  }
}
