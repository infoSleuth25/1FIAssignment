import React from "react";

const ProductOptions = ({
  colors,
  storages,
  selectedColor,
  selectedStorage,
  setSelectedColor,
  setSelectedStorage,
}) => {
  return (
    <div className="mt-6">
      {/* Color options */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex gap-3 flex-wrap">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 border rounded-md ${
                selectedColor === color
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Storage options */}
      <div>
        <h3 className="font-semibold mb-2">Storage</h3>
        <div className="flex gap-3 flex-wrap">
          {storages.length > 0 ? (
            storages.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStorage(s)}
                className={`px-4 py-2 border rounded-md ${
                  selectedStorage === String(s)
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {s} GB
              </button>
            ))
          ) : (
            <p className="text-gray-500 text-sm">Select color first</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
