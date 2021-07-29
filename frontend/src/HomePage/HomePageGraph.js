import React from "react";
import { Card } from "antd";
import "./HomePageGraph.css";
import data from "./graphData";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
// const data = [];
// for (let num = 30; num >= 0; num--) {
//   data.push({
//     date: subDays(new Date(), num).toISOString().substr(0, 10),
//     value: 1 + Math.random()
//   });
// }

export default class HomePageGraph extends React.Component {
  render() {
    return (
      <Card
        size="small"
        bodyStyle={{ padding: 0 }}
        className="home-top-card home-graph-card"
      >
        <div className="home-graph-card-inner-wrapper">
          <div>
            <div className="home-top-heading">Market Trends</div>
            <div className="home-graph-deatails">
              <div className="home-graph-price-wrapper">
                <div className="home-graph-price-inner-wrapper">
                  <span className="home-graph-price">1,245.678</span>{" "}
                  <span className="home-graph-price-currency">BTC</span>
                </div>
                <div className="home-graph-price-change">$123.45(+1.29%)</div>
              </div>
              <div className="home-top-tabs">
                <div className="home-top-tab">1d</div>
                <div className="home-top-tab">1w</div>
                <div className="home-top-tab">1m</div>
              </div>
            </div>
          </div>

          <div className="home-graph-wrapper">
            <ResponsiveContainer
              width="100%"
              height={200}
              style={{ zIndex: 5 }}
            >
              <AreaChart data={data} type="monotone">
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2451B7" stopOpacity={0.8} />
                    <stop offset="150%" stopColor="#fff" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <Area
                  type="basis"
                  dataKey="value"
                  stroke="#2451B7"
                  fill="url(#color)"
                />

                <XAxis
                  hide={true}
                  style={{ width: 0 }}
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(str) => {
                    const date = parseISO(str);
                    if (date.getDate() % 7 === 0) {
                      return format(date, "MMM, d");
                    }
                    return "";
                  }}
                />

                <YAxis
                  hide={true}
                  datakey="value"
                  axisLine={false}
                  tickLine={false}
                  tickCount={50}
                  style={{ width: 0 }}
                />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
            <div style={{ height: "100%", background: "green" }}></div>
          </div>
        </div>
      </Card>
    );
  }
}
