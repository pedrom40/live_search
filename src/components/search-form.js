import React from 'react';

export default function SearchForm(props) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">Search</label>&emsp;
      <input type="search" id="search" name="search" placeholder="Dale Cooper" onChange={e => props.onChange(e.target.value)} />
    </form>
  );
}
