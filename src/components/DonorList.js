import React from 'react';
import DonorCard from './DonorCard';

const DonorList = ({ donors, onRequest, requestedDonors }) => {
  return (
    <div className="donor-list">
      <h2>Available Donors</h2>
      {donors.length === 0 ? (
        <div className="empty-state">
          <p>No donors found for this search.</p>
        </div>
      ) : (
        <div className="donor-grid">
          {donors.map(donor => (
            <DonorCard key={donor.id} donor={donor} onRequest={onRequest} requested={requestedDonors.has(donor.id)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DonorList;