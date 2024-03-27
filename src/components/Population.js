import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { MainContainer } from "../styles/PopulationStyle";

const Population = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const apiUrl =
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

        const response = await fetch(apiUrl);
        if (response.ok) {
          const fetchedData = await response.json();
          const { data } = fetchedData;
          setPopulationData(data);
        } else {
          setPopulationData([]);
        }
      } catch (error) {
        console.error("Error while fetching population data: ", error);
      }
    };
    fetchPopulationData();
  }, []);

  const sortedData = populationData.sort((a, b) => a["ID Year"] - b["ID Year"]);

  return (
    <MainContainer>
      <h3 className="population">USA Population</h3>
      <ResponsiveContainer width="100%" height="95%">
        <LineChart
          width={800}
          height={400}
          data={sortedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="Year" />
          <YAxis type="number" domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Population" stroke="#77f534" />
        </LineChart>
      </ResponsiveContainer>
    </MainContainer>
  );
};

export default Population;
