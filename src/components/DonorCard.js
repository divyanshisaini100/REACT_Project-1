import React from 'react';

const DonorCard = ({ donor, onRequest, requested }) => {
  const getInitials = (name) => {
    const names = name.split(' ');
    return names.map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="donor-card">
      <div className="donor-avatar">
        {getInitials(donor.name)}
      </div>
      <h3>{donor.name}</h3>
      <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
      <p><strong>City:</strong> {donor.city}</p>
      <p><strong>Status:</strong> <span className={donor.available ? 'status-available' : 'status-unavailable'}>{donor.available ? 'Available' : 'Not Available'}</span></p>
      <button 
        className="request-button" 
        onClick={() => onRequest(donor.id)} 
        disabled={requested}
      >
        {requested ? 'Request Sent ✅' : 'Request Help'}
      </button>
    </div>
  );
};

export default DonorCard;