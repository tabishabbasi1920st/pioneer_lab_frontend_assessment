import { MainContainer } from "../styles/BitCoinStyle";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { MdOutlineRefresh } from "react-icons/md";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const BitCoin = () => {
  const [bitCoinData, setBitCoinData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  useEffect(() => {
    fetchBitcoinData();
  }, []);

  const fetchBitcoinData = async () => {
    try {
      setApiStatus(apiStatusConstants.inProgress);
      const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

      const response = await fetch(apiUrl);
      if (response.ok) {
        const fetchedData = await response.json();
        setBitCoinData(fetchedData);
        setApiStatus(apiStatusConstants.success);
      } else {
        console.log("bitcoin api response is fail.");
        setApiStatus(apiStatusConstants.failure);
        setBitCoinData([]);
      }
    } catch (error) {
      console.error("Error while fetching Bitcoin data: ", error);
    }
  };

  let chartData;
  let realTime;
  if (bitCoinData.length !== 0) {
    const { bpi, time } = bitCoinData;
    const timestamp = new Date(time.updatedISO);
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedTime = `${formattedHours}:${minutes}:${timestamp.getSeconds()} ${ampm}`;
    realTime = formattedTime;
    // Formatting data for Recharts
    chartData = Object.keys(bpi).map((key) => ({
      price: bpi[key].rate_float,
      code: key,
      time: formattedTime,
    }));
  }

  const renderLoader = () => {
    return (
      <Oval
        visible={true}
        height="20"
        width="20"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  };

  const renderAppropView = () => {
    switch (apiStatus) {
      case apiStatusConstants.initial:
        return <MdOutlineRefresh />;
      case apiStatusConstants.inProgress:
        return renderLoader();
      case apiStatusConstants.success:
        return <MdOutlineRefresh />;
      case apiStatusConstants.failure:
        return <MdOutlineRefresh color="red" />;
    }
  };

  return (
    <MainContainer>
      <div className="top-container">
        <h3>Bitcoin</h3>
        <p>{realTime}</p>
        <button
          disabled={apiStatus === apiStatusConstants.inProgress}
          onClick={fetchBitcoinData}
        >
          {renderAppropView()}
        </button>
      </div>
      <ResponsiveContainer height="90%" width="100%">
        <AreaChart
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="code" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fill="#2ab42a"
          />
        </AreaChart>
      </ResponsiveContainer>
    </MainContainer>
  );
};

export default BitCoin;
