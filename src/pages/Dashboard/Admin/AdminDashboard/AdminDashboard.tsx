import React, { useEffect, useMemo, useRef } from "react";
import { Card, Statistic, Row, Col } from "antd";
import { FaCar, FaMoneyBill, FaCalendar } from "react-icons/fa";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface DashboardStats {
  totalBookings: number;
  availableCars: number;
  revenue: number;
}

const AdminDashboard: React.FC = () => {
  const stats: DashboardStats = useMemo(() => {
    return {
      totalBookings: 4000,
      availableCars: 700,
      revenue: 15000,
    };
  }, []);

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["Bookings", "Available Cars", "Revenue"],
          datasets: [
            {
              label: "Summary",
              data: [stats.totalBookings, stats.availableCars, stats.revenue],
              backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
              borderWidth: 1,
              animation: {
                delay: 500,
              },
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: ["Summary"],
            },
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [stats]);

  return (
    <div className="admin-dashboard">
      <h1 className="mb-5">Dashboard Overview</h1>
      <Row gutter={16} className="sm:space-y-0 space-y-5 mb-10">
        <Col xs={24} md={8}>
          <Card className="text-center">
            <Statistic title="Total Bookings" value={stats.totalBookings} prefix={<FaCalendar size={24} />} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="text-center">
            <Statistic title="Available Cars" value={stats.availableCars} prefix={<FaCar size={24} />} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="text-center">
            <Statistic title="Revenue" value={`$${stats.revenue.toLocaleString()}`} prefix={<FaMoneyBill size={24} />} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Card>
            <div style={{ width: "100%", height: "300px" }}>
              <canvas ref={chartRef} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
