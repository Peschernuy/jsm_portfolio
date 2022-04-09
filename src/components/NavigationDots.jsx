import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "portfolio", "technologies", "testimonials", "contact"].map(
        (item, index) => (
          <a
            className="app__navigation-dot"
            href={`#${item}`}
            key={item + index}
            style={active === item ? { background: "#FFA500" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
