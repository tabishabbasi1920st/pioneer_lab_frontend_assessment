import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  MainContainer,
  CustomButton,
  FooterContainer,
  HeaderContainer,
} from "../styles/WalletBalanceStyle";
import { FaCircle } from "react-icons/fa";

const data = [
  { name: "USDT", value: 300.56 },
  { name: "NBST", value: 270.72 },
  { name: "EFT", value: 203.04 },
  { name: "WET", value: 329.76 },
];

const COLORS = ["#9fff9d", "#2ab42a", "#1b9a59", "#03c3ff"];

const WalletBalance = () => {
  const legendPayload = data.map((item) => ({
    name: item.name,
    value: item.value,
    type: "circle",
    color: COLORS[data.indexOf(item) % COLORS.length],
    payload: item,
  }));

  const renderLegend = () => {
    return (
      <ul>
        {legendPayload.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <FaCircle style={{ color: entry.color }} /> {/* Icon */}
              <span style={{ color: entry.color }}>{entry.name}</span>:{" "}
            </div>
            <span style={{ color: "#fff" }}>{entry.payload.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <p>Wallet Balance</p>
      </HeaderContainer>
      <ResponsiveContainer height="75%" width="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            stroke="#171717"
            strokeWidth={4}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="#8884d8"
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            align="center"
            verticalAlign="bottom"
            layout="horizontal"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{ fontSize: "12px" }}
            content={renderLegend}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <FooterContainer>
        <CustomButton>Manage Wallet</CustomButton>
      </FooterContainer>
    </MainContainer>
  );
};

export default WalletBalance;
