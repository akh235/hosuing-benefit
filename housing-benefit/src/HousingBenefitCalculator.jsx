import { useState } from "react";

function HousingBenefitCalculator() {
  const [area, setArea]                             = useState(65);
  const [rent, setRent]                             = useState(6500);
  const [income, setIncome]                         = useState(8000);
  const [housingInsurance, setHousingInsurance]     = useState(0);
  const [rentAfterInsurance, setRentAfterInsurance] = useState(0);

  const calculateHousingInsurance = () => {
    // Constants for rate values (you can replace these with actual rates)
    const housingInsuranceRate = 0.15; // 15% of rent for a household without children
    const maxRent = 6842; // Maximum eligible rent
    const minAnnualRent = 3180; // Minimum annual rent for housing insurance to be paid
    // Calculate eligible rent based on the home size
    const eligibleRent = area <= 65 ? rent : (rent / 75) * 65;
    // Calculate housing insurance
    let calculatedInsurance = 0;
    if (eligibleRent >= minAnnualRent) {
      calculatedInsurance =
        (eligibleRent > maxRent ? maxRent : eligibleRent) *
        housingInsuranceRate;
    }
    // Calculate rent after housing insurance
    const rentAfterInsurance = rent - calculatedInsurance;
    // Update state variables
    setHousingInsurance(calculatedInsurance);
    setRentAfterInsurance(rentAfterInsurance);
  };

  return (
    <div>
      <h1>Housing Benefit Calculator</h1>
      <div>
        <label htmlFor="area">Area (m²):</label>
        <input
          type="number"
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rent">Monthly Rent (NOK):</label>
        <input
          type="number"
          id="rent"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="income">Household Income (NOK):</label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      <button style={{ marginTop: '10px', border: '1px solid black'}} onClick={calculateHousingInsurance}>
        Calculate Housing Insurance
      </button>
      <div>
        {/* <p>Rent (NOK): {rent}</p>
        <p>Housing Insurance (NOK): {housingInsurance.toFixed(2)}</p>
        <p>
          Rent after Housing Insurance (NOK): {rentAfterInsurance.toFixed(2)}
        </p>
        <p>Rent (DKK): {rent * 0.8231} (Converted)</p> */}
        <p>
          Housing Insurance (DKK): {housingInsurance.toFixed(2) * 0.8231}{" "}
          (Converted)
        </p>
        {/* <p>
          Rent after Housing Insurance (DKK):{" "}
          {rentAfterInsurance.toFixed(2) * 0.8231} (Converted)
        </p> */}
      </div>
    </div>
  );
}
export default HousingBenefitCalculator;
