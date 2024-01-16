import React, { useState } from 'react';
import axios from 'axios';

const UserSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?name=${searchTerm}`);
      console.log(response.data);

      const responseData = Array.isArray(response.data)
        ? response.data
        : [response.data];

      setSearchResult(responseData);
    } catch (error) {
      console.error('Error searching users:', error);
      setSearchResult([]);
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter email to search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search Users</button>

      <ul>
        {searchResult.map((pension) => (
          <li key={pension.id}>
            <p>Name: {pension.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearchComponent;
