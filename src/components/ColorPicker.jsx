import React, { useState } from "react";
import { FaCheck } from "react-icons/fa"; // Import a check icon from react-icons

const colors = [
  "black",
  "#00000000",
  "#737373",
  "#a6a6a6",
  "#d9d9d9",
  "#ffffff",
  "#ff3131",
  "#ff5757",
  "#ff66c4",
  "#cb6ce6",
  "#8c52ff",
  "#5e17eb",
  "#0097b2",
  "#0cc0df",
  "#5ce1e6",
  "#38b6ff",
  "#5271ff",
  "#004aad",
  "#00bf63",
  "#7ed957",
  "#c1ff72",
  "#ffde59",
  "#ffbd59",
  "#ff914d",
];

const ColorPicker = ({ setDotColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleClick = (color) => {
    setSelectedColor(color);
    setDotColor(color);
  };

  return (
    <div className="grid grid-cols-6 gap-1  w-full lg:w-1/4">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`h-6 w-6 rounded-full relative cursor-pointer hover:border hover:border-gray-200 hover:shadow-md transition ease-in-out duration-200 border`}
          style={
            color == "#00000000"
              ? {
                  backgroundImage:
                    "linear-gradient(45deg, #e0e0e0 25%, transparent 25%, transparent 75%, #e0e0e0 75%, #e0e0e0), linear-gradient(45deg, #e0e0e0 25%, transparent 25%, transparent 75%, #e0e0e0 75%, #e0e0e0)",
                  backgroundSize: "10px 10px",
                  backgroundPosition: "0 0, 5px 5px",
                }
              : { backgroundColor: color }
          }
          onClick={() => handleClick(color)}
        >
          {selectedColor === color && (
            <div className="absolute inset-0 flex items-center justify-center">
              <FaCheck className="text-white text-xs" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
