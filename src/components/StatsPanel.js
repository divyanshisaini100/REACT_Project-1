import React from 'react';

const StatsPanel = ({ availableFiltered }) => {
  return (
    <div className="stats-panel">
      <div className="stat">
        <h3>Available Donors</h3>
        <p>{availableFiltered}</p>
      </div>
    </div>
  );
};

export default StatsPanel;