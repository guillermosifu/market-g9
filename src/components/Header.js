import React from "react";

function Header({ title, store, slogan }) {
  return (
    <header className="header my-3 animate__animated animate__fadeInUp">
      <h1>{title}</h1>
      <h2 className="store">{store}</h2>
      <h3>{slogan}</h3>
    </header>
  );
}

export default Header;
