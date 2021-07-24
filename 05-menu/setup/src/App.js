import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      return setMenuItems(items);
    }
    let newMenu = items.filter((item) => item.category === category);
    setMenuItems(newMenu);
  }

  return (
    <main>
      <section className="menu section">
        <h2 className="title">Our menu</h2>
        <div className="underline"></div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
