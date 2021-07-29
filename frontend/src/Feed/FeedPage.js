import React from "react";
import FeedInputBT from "./FeedInputbt";
import FeedMessage from "./FeedMessage";
import AsyncMention from "./AsycnMention";
import Mentions from "./Mentions";
import Navbar from "./../Navbar/Navbar";
import { Space, Row, Col } from "antd";

export default class FeedPage extends React.Component {
  render() {
    return (
      <div>
        <Space
          direction="vertical"
          size={50}
          style={{ width: "100%", overflow: "hidden" }}
        >
          <Navbar />
          <Row>
            <Col span={22} offset={1}>
              <div>
                <FeedInputBT type="feed" />
                <br />
                <br />
                <FeedMessage>
                  <FeedInputBT type="comment" />
                  <FeedMessage comment>
                    <FeedMessage comment />
                    <FeedMessage comment />
                  </FeedMessage>
                  <FeedMessage comment />
                  <FeedMessage comment />
                  <FeedMessage comment />
                </FeedMessage>{" "}
              </div>
            </Col>
          </Row>
        </Space>
      </div>
    );
  }
}