import React from 'react';

const SearchResult = ({ searchResult }) => {
  return (
    <div>
      {searchResult && searchResult.length > 0 ? (
        <ul>
          {searchResult.map((user) => (
            <li key={user.id}>
              <p>이메일 : {user.name}</p>
              <p>닉네임 : {user.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResult;
