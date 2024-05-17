import React, { useState } from 'react';


const FruitsSearch = () => {

  const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Grape',
    'Lemon',
    'Orange',
    'Strawberry',
    'Watermelon',
    'Pineapple'
  ];

  
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFruits, setFilteredFruits] = useState([]);

  
  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    
    const filtered = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(query)
    );
    setFilteredFruits(filtered);
  };

  return (
    <div>
      <h1 >Search for the Fruit </h1>
      <input
        type="text"
        placeholder="Search for a fruit"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </div>
    </div>
  );
}
export default FruitsSearch;
