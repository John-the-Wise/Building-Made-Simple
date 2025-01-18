import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('/api/plans');
        setPlans(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlans();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <a href={plan.fileUrl} download>{plan.fileName}</a>
            <p>{plan.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
