import { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { centersData } from '../data/centersData';

function CentersPage() {
  // State variables
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  const [filteredCenters, setFilteredCenters] = useState(centersData);

  // Load countries on page load
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  // Load states when country changes
  useEffect(() => {
    if (selectedCountry) {
      const countryStates = State.getStatesOfCountry(selectedCountry);
      setStates(countryStates);
      setCities([]);
    } else {
      setStates([]);
      setCities([]);
    }
  }, [selectedCountry]);

  // Load cities when state changes
  useEffect(() => {
    if (selectedCountry && selectedState) {
      const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
      setCities(stateCities);
    } else {
      setCities([]);
    }
  }, [selectedCountry, selectedState]);

  // Filter centers based on selection
  useEffect(() => {
    let filtered = centersData;

    if (selectedCountry) {
      filtered = filtered.filter(center => center.countryCode === selectedCountry);
    }

    if (selectedState) {
      filtered = filtered.filter(center => center.stateCode === selectedState);
    }

    if (selectedCity) {
      filtered = filtered.filter(center => 
        center.cityName.toLowerCase().includes(selectedCity.toLowerCase())
      );
    }

    setFilteredCenters(filtered);
  }, [selectedCountry, selectedState, selectedCity]);

  const resetFilters = () => {
    setSelectedCountry('');
    setSelectedState('');
    setSelectedCity('');
    setFilteredCenters(centersData);
  };

  const getCountryName = (code) => {
    const country = Country.getCountryByCode(code);
    return country ? country.name : code;
  };

  const getStateName = (countryCode, stateCode) => {
    const state = State.getStateByCodeAndCountry(stateCode, countryCode);
    return state ? state.name : stateCode;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Our Centers
          </h1>
          <p className="text-lg md:text-xl text-green-100">
            Locate Al-Kisa Foundation centers near you for Islamic education and resources
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Search by Location</h2>
            <button
              onClick={resetFilters}
              className="text-sm text-green-700 hover:text-green-800 font-medium underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Country Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🌍 Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedState('');
                  setSelectedCity('');
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent cursor-pointer"
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* State Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🏙️ State / Province
              </label>
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity('');
                }}
                disabled={!selectedCountry}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer"
              >
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            {/* City Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🏘️ City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer"
              >
                <option value="">Select City</option>
                {cities.map(city => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Showing <span className="font-bold text-green-700">{filteredCenters.length}</span> center{filteredCenters.length !== 1 ? 's' : ''}
              {selectedCountry && ` in ${getCountryName(selectedCountry)}`}
              {selectedState && `, ${getStateName(selectedCountry, selectedState)}`}
              {selectedCity && `, ${selectedCity}`}
            </p>
          </div>
        </div>

        {/* Centers Grid */}
        {filteredCenters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCenters.map(center => (
              <div key={center.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-600 to-green-500 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{center.name}</h3>
                  <p className="text-green-100 text-sm">
                    {center.cityName}, {getStateName(center.countryCode, center.stateCode)}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Address</p>
                      <p className="text-gray-900">{center.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Phone</p>
                      <a href={`tel:${center.phone}`} className="text-green-700 hover:text-green-800 font-semibold">
                        {center.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Email</p>
                      <a href={`mailto:${center.email}`} className="text-green-700 hover:text-green-800 font-semibold">
                        {center.email}
                      </a>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Timing</p>
                      <p className="text-gray-900">{center.timing}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4 border-t">
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(center.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-800 transition-colors text-center text-sm cursor-pointer"
                    >
                      Get Directions
                    </a>
                    <a
                      href={`tel:${center.phone}`}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center text-sm cursor-pointer"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-lg">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Centers Found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters to find centers in your area</p>
            <button
              onClick={resetFilters}
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CentersPage;
