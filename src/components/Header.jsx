import React from 'react';

function Header({ title, image }) {
  return (
    <header>
      <img src={image} alt="Header Logo" width={70} height={70}/>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;