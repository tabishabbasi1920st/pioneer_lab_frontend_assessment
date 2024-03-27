import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import {
  MainContainer,
  HeaderContainer,
  FooterContainer,
} from "../styles/MartketOverviewChartStyle";
import { useEffect, useRef, useState } from "react";

const MarketOverview = () => {
  const data = [
    {
      name: "Mon",
      pv: 0,
      amt: 100,
    },
    {
      name: "Tue",
      pv: 0.3,
      amt: 150,
    },
    {
      name: "Wed",
      pv: 0.6,
      amt: 170,
    },
    {
      name: "Thu",
      pv: 0.9,
      amt: 180,
    },
    {
      name: "Fri",
      pv: 1.2,
      amt: 185,
    },
    {
      name: "Sat",
      pv: 2.3,
      amt: 190,
    },
    {
      name: "Sun",
      pv: 1.2,
      amt: 200,
    },
  ];

  return (
    <MainContainer>
      <HeaderContainer>
        <p>MarketOverview</p>
        <ul>
          <li className="selected">NBST</li>
          <li>EFT</li>
          <li>WPCT</li>
          <li>RET</li>
          <li>WET</li>
        </ul>
      </HeaderContainer>
      <ResponsiveContainer
        width="100%"
        height="70%"
        style={{ marginRight: "50px" }}
      >
        <LineChart width={300} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#28a028" />
        </LineChart>
      </ResponsiveContainer>
      <FooterContainer>
        <p>Get in depth charts in Trade</p>
        <button>Trade</button>
      </FooterContainer>
    </MainContainer>
  );
};

export default MarketOverview;
