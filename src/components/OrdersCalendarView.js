import React, { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import { ordersData } from "../services/mockData";
import "./OrdersCalendarView.css";

function OrdersCalendarView() {
  // Remove setOrders if not used
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const ordersOnSelectedDate = ordersData.filter(
      (order) =>
        new Date(order.orderDate).toDateString() === date.toDateString()
    );
    setSelectedOrders(ordersOnSelectedDate);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <h2>Calendar</h2>

      {/* Calendar */}
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      {/* Orders Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Orders Calendar Modal"
        className="modal"
        aria={{
          labelledby: "ordersCalendarHeading",
          describedby: "ordersViewByCalendarDate",
        }}
      >
        <h3>Orders on {selectedDate.toDateString()}</h3>
        <div>
          {selectedOrders.length > 0 ? (
            selectedOrders.map((order) => (
              <div key={order.id}>
                <p>Order ID: {order.id}</p>
                <p>Customer Name: {order.customerName}</p>
                <p>Status: {order.status}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>No orders are available for the selected date.</p>
          )}
        </div>

        <button onClick={handleModalClose}>Close</button>
      </Modal>
    </div>
  );
}

export default OrdersCalendarView;
