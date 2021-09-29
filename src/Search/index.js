import React, { useState } from 'react';

import './search.scss';

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const onChangeValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(searchValue);
      setSearchValue("")
    }
  }

  return (
    <input
      type="text"
      className="search"
      placeholder="Create a new todo..."
      value={searchValue}
      onChange={onChangeValue}
      onKeyPress={onKeyPress}
    />
  )
}

export { Search }