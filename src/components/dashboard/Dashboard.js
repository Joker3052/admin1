import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Container } from 'react-bootstrap';
import "./Dashboard.css";


function Dashboard() {
  const [data, setData] = useState([
    { date: "2023-08-01", nam: 5, nu: 10 },
    { date: "2023-08-02", nam: 8, nu: 12 },
    { date: "2023-08-03", nam: 7, nu: 11 },
    { date: "2023-08-03", nam: 7, nu: 11 },
    { date: "2023-08-03", nam: 7, nu: 11 },
    // Thêm dữ liệu cho các ngày khác trong tháng ở đây
  ]);

  const updateData = (date, nam, nu) => {
    const newData = data.map(item => {
      if (item.date === date) {
        return { ...item, nam, nu };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div className="main">
    <Container>
      <div className="App">
        <h1>
          Biểu đồ số quần áo đã bán trong một tháng theo ngày{" "}
          <i className="fas fa-user"></i>{" "}
        </h1>
        <div className="row">
          <div className="col-12">
            <Chart
              options={{
                chart: {
                  id: "basic-bar",
                },
                xaxis: {
                  categories: data.map(item => item.date),
                },
              }}
              series={[
                {
                  name: "Nam",
                  data: data.map(item => item.nam),
                },
                {
                  name: "Nữ",
                  data: data.map(item => item.nu),
                },
              ]}
              type="bar"
              width="600"
            />
          </div>
        </div>
      </div>
      <div className="App">
        <h1>
          Biểu đồ số quần áo đã bán trong một tháng theo ngày{" "}
          <i className="fas fa-user"></i>{" "}
        </h1>
        <div className="row">
          <div className="col-12">
            <Chart
              options={{
                chart: {
                  id: "basic-bar",
                },
                xaxis: {
                  categories: data.map(item => item.date),
                },
              }}
              series={[
                {
                  name: "Nam",
                  data: data.map(item => item.nam),
                },
                {
                  name: "Nữ",
                  data: data.map(item => item.nu),
                },
              ]}
              type="bar"
              width="600"
            />
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default Dashboard;
