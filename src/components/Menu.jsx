import React from 'react';

const Menu = () => {
  return (
    <section
      id="menu"
      className="bg-[#EADDC8] text-[#1C1C1C] py-16 px-6 md:px-20 text-center"
    >
      <h2 className="text-4xl font-serif text-[#4B2E2B] mb-14 tracking-wide">
        Our Menu
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">

        <div className="bg-white/70 rounded-2xl shadow-lg p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Coffee</h3>
          <ul className="space-y-2 text-[17px]">
            <li>Espresso – Rs. 300</li>
            <li>Cappuccino – Rs. 400</li>
            <li>Latte – Rs. 450</li>
            <li>Caramel Macchiato – Rs. 500</li>
          </ul>
        </div>


        <div className="bg-white/70 rounded-2xl shadow-lg p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Pastries</h3>
          <ul className="space-y-2 text-[17px]">
            <li>Chocolate Croissant – Rs. 250</li>
            <li>Banana Bread – Rs. 300</li>
            <li>Cheesecake Slice – Rs. 400</li>
            <li>Brownie – Rs. 280</li>
          </ul>
        </div>


        <div className="bg-white/70 rounded-2xl shadow-lg p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Specials</h3>
          <ul className="space-y-2 text-[17px]">
            <li>Matcha Latte – Rs. 550</li>
            <li>Rose Chai – Rs. 450</li>
            <li>Iced Spanish Latte – Rs. 500</li>
            <li>Affogato – Rs. 600</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
