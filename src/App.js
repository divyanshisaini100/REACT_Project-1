import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import StatsPanel from './components/StatsPanel';
import DonorList from './components/DonorList';

const App = () => {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [filters, setFilters] = useState({ bloodGroup: '', city: '' });
  const [loading, setLoading] = useState(true);
  const [requestedDonors, setRequestedDonors] = useState(new Set());
  const [availableFiltered, setAvailableFiltered] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
        const mappedDonors = data.map(user => ({
          id: user.id,
          name: user.name,
          city: user.address.city,
          bloodGroup: bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
          available: Math.random() > 0.5
        }));
        setDonors(mappedDonors);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = donors;
    if (filters.bloodGroup) {
      filtered = filtered.filter(donor => donor.bloodGroup === filters.bloodGroup);
    }
    if (filters.city) {
      filtered = filtered.filter(donor => donor.city.toLowerCase().includes(filters.city.toLowerCase()));
    }
    setFilteredDonors(filtered);
    setAvailableFiltered(filtered.filter(donor => donor.available).length);
  }, [donors, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleRequest = (id) => {
    setRequestedDonors(prev => new Set([...prev, id]));
  };

  return (
    <div className="app">
      <Header />
      <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
      {loading ? (
        <div className="loading-state">
          <p>Loading donors...</p>
        </div>
      ) : (
        <>
          <StatsPanel availableFiltered={availableFiltered} />
          <DonorList donors={filteredDonors} onRequest={handleRequest} requestedDonors={requestedDonors} />
        </>
      )}
    </div>
  );
};

export default App;