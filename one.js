import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [cpuUsage, setCpuUsage] = useState(null);
  const [ramUsage, setRamUsage] = useState(null);
  const [diskSpace, setDiskSpace] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('/api/system-info')
      .then(response => response.json())
      .then(data => {
        setCpuUsage(data.cpuUsage);
        setRamUsage(data.ramUsage);
        setDiskSpace(data.diskSpace);
      });
  }, []);

  return (
    <div>
      <h1>Personal Security Dashboard</h1>
      <div>
        <h2>System Health</h2>
        <p>CPU Usage: {cpuUsage}%</p>
        <p>RAM Usage: {ramUsage} GB</p>
        <p>Disk Space: {diskSpace} GB</p>
      </div>
      {/* Additional sections can be added here */}
    </div>
  );
}

export default Dashboard;
