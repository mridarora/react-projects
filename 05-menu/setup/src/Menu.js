import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((singleItem) => {
        const { title, price, img, desc } = singleItem;
        return (
          <div className="menu-item">
            <img className="photo" src={img} alt={title}></img>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <p>{price}</p>
              </header>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
