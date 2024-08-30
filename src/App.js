import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import './App.css';

const AdminDashboard = () => {
  // Sample data for the charts
  const ticketData = [
    { name: 'Raised Tickets', value: 35 },
  ];

  const leaveData = [
    { name: 'Approved', value: 15 },
    { name: 'Pending', value: 5 },
    { name: 'Rejected', value: 2 },
  ];

  const resignationData = [
    { name: 'January', Resignations: 2 },
    { name: 'February', Resignations: 1 },
    { name: 'March', Resignations: 3 },
    { name: 'April', Resignations: 0 },
    { name: 'May', Resignations: 1 },
    { name: 'June', Resignations: 2 },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>

      <div className="dashboard-content">
        {/* Summary Metrics */}
        <div className="dashboard-metrics">
          <div className="metric-card">
            <h2>Raised Tickets</h2>
            <p>35</p>
          </div>
          <div className="metric-card">
            <h2>Upcoming Interviews</h2>
            <p>5</p>
          </div>
          <div className="metric-card">
            <h2>Total Employees</h2>
            <p>170</p>
          </div>
          <div className="metric-card">
            <h2>Team Leaders</h2>
            <p>10</p>
          </div>
          <div className="metric-card">
            <h2>Pending Leave Requests</h2>
            <p>5</p>
          </div>
          <div className="metric-card">
            <h2>Recent Resignations</h2>
            <p>3</p>
          </div>
        </div>

        {/* Graphical Representations */}
        <div className="dashboard-graphs">
          {/* Tickets Status */}
          <div className="pie-chart-container">
            <h3>Ticket Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ticketData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ticketData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Leave Requests */}
          <div className="bar-chart-container">
            <h3>Leave Requests</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={leaveData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Resignations */}
          <div className="line-chart-container">
            <h3>Monthly Resignations</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={resignationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Resignations" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
