import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pin.css"; // Optional: Add CSS for styling

const PinValidation = () => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const correctPin = "ANJCPL"; // This should be securely managed, preferably not hard-coded.

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === correctPin) {
      navigate("/admin");
    } else {
      setError("Invalid PIN. Please try again.");
    }
  };

  return (
    <div className="pin-container" id="pin">
      <h2>Enter PIN to Access Admin Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={pin}
          onChange={handlePinChange}
          maxLength="6"
          placeholder="Enter 6-digit PIN"
          required
        />
        <button type="submit">Validate</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PinValidation;
