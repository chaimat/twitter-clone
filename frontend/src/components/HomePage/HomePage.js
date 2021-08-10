import React from "react";
import "./HomePage.css";
import HomePageGraph from "./HomePageGraph";
import HomePageTopCreators from "./HomePageTopCreators";
import HomePageTopCoins from "./HomePageTopCoins";
import Home from "./HomeGraph";
import { Row, Col } from "antd";
import HomeBottomCard from "./HomeBottomCard";
import Navbar from "./../Navbar/Navbar";
import { Space } from "antd";

export default class HomePage extends React.Component {
  render() {
    return (
      <div style={{ background: "#f5f7ff" }}>
        <Space
          direction="vertical"
          size={79}
          style={{ width: "100%", overflow: "hidden" }}
        >
          <Navbar />
          <div className="home-page-wrapper" style={{ overflow: "hidden" }}>
            <Row
              gutter={[
                { xl: 48, lg: 48, md: 48, sm: 48, xs: 0 },
                { xl: 0, lg: 0, md: 48, sm: 48, xs: 48 }
              ]}
            >
              <Col
                xl={{ span: 9, offset: 2 }}
                lg={{ span: 9, offset: 2 }}
                md={{ span: 22, offset: 1 }}
                sm={{ span: 22, offset: 1 }}
                xs={{ span: 20, offset: 2 }}
              >
                <HomePageGraph />
              </Col>
              <Col
                xl={{ span: 5, offset: 0 }}
                lg={{ span: 5, offset: 0 }}
                md={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                xs={{ span: 20, offset: 2 }}
              >
                <HomePageTopCreators />
              </Col>
              <Col
                xl={{ span: 6, offset: 0 }}
                lg={{ span: 6, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                sm={{ span: 12, offset: 0 }}
                xs={{ span: 20, offset: 2 }}
              >
                <HomePageTopCoins />
              </Col>
            </Row>
            <HomeBottomCard />
          </div>
        </Space>
      </div>
    );
  }
}
