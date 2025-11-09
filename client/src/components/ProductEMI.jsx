import React, { useMemo } from "react";

const ProductEMI = ({ selectedVariant }) => {
  const emiOptions = [3, 6, 9, 12, 15, 18];

  const calculateEMI = useMemo(() => {
    if (!selectedVariant) return [];

    const basePrice = selectedVariant.price - (selectedVariant.cashback || 0);

    return emiOptions.map((months) => {
      let interestRate = months <= 6 ? 0 : 10.5; // 0% for first 2 options, 10.5% annual for rest
      const monthlyRate = interestRate / 12 / 100; // convert annual % to monthly fraction

      let emi;
      if (interestRate === 0) {
        // simple division if 0% interest
        emi = basePrice / months;
      } else {
        // compound interest EMI formula
        emi =
          (basePrice * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);
      }

      const totalPayment = emi * months;

      return {
        months,
        interestRate,
        emi: emi.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
      };
    });
  }, [selectedVariant]);

  if (!selectedVariant)
    return (
      <div className="mt-6 border-t pt-4">
        <h3 className="font-semibold mb-2">EMI Options</h3>
        <p className="text-gray-500 text-sm">Select variant to view EMI options.</p>
      </div>
    );

  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="font-semibold mb-3 text-lg">EMI Options</h3>
      <p className="text-sm text-gray-600 mb-4">
        Price after cashback: ₹
        {selectedVariant.price - (selectedVariant.cashback || 0)}
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Months</th>
              <th className="py-2 px-4 text-left">Interest (per annum)</th>
              <th className="py-2 px-4 text-left">Monthly EMI</th>
              <th className="py-2 px-4 text-left">Total Payment</th>
            </tr>
          </thead>
          <tbody>
            {calculateEMI.map((emi) => (
              <tr key={emi.months} className="border-t text-sm">
                <td className="py-2 px-4">{emi.months}</td>
                <td className="py-2 px-4">{emi.interestRate}%</td>
                <td className="py-2 px-4 font-medium text-green-700">
                  ₹{emi.emi} × {emi.months}
                </td>
                <td className="py-2 px-4">₹{emi.totalPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductEMI;
