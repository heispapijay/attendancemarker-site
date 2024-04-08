import React from 'react'

const SearchStudent = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
      handleSearch(event.target.value);
    };
  
    return (
      <input
        className="search-bar"
        type="text"
        placeholder="Search by matric number"
        value={searchTerm}
        onChange={handleChange}
      />
    );
  };

export default SearchStudent;