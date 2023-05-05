import React, { useRef } from 'react';
import './App.css';
import axios from 'axios';

export default function App() {
  const apiUrl = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';

  const inputRef = useRef(null);

  function mobileOtp() {
    axios.post(apiUrl, {
      mobile: parseInt(inputRef.current.value),
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <input type="number" ref={inputRef} placeholder='number' />
      <button onClick={mobileOtp}>OTP</button>
    </div>
  );
}