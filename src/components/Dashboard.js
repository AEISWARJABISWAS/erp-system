import React from "react";
import { Link } from "react-router-dom";
import { ordersData, productsData } from "../services/mockData";
import "./Dashboard.css";

function Dashboard() {
  const totalProducts = productsData?.length;
  const totalOrders = ordersData?.length;

  return (
    <section className="dashboard-container">
      <h2>Dashboard</h2>

      <section className="dashboard-summary wide">
        <article className="dashboard-metric">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
          <Link to="/products">
            <button>Products Management</button>
          </Link>
        </article>
        <article className="dashboard-metric">
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
          <Link to="/orders">
            <button>Orders Management</button>
          </Link>
        </article>
        <article className="dashboard-metric">
          <h3>View Calendar</h3>
          <p>{totalOrders + totalProducts}</p>
          <Link to="/calendar">
            <button>Calendar</button>
          </Link>
        </article>
      </section>
    </section>
  );
}

export default Dashboard;
