// import React from 'react';
// import { useState, useEffect, useRef } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import { countries } from 'countries-list';
// import Ellipsegreen from '../images/Ellipse-green.png';
// const Energyconsump = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     selectedCountry: '',
//     hoursOfUse: '',
//     daysOfUse: '',
//   });

//   const countriesList = [
//     { code: 'FR', name: 'France', footprintEfficiency: 0.74 },
//     { code: 'GM', name: 'Germany', footprintEfficiency: 0.54 },
//     { code: 'IN', name: 'India', footprintEfficiency: 0.64 },
//     { code: 'LU', name: 'Luxembourg', footprintEfficiency: 0.61 },
//     // Add more countries as needed...
//   ];

//   const [showTable, setShowTable] = useState(false);
//   const [tableData, setTableData] = useState([]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   // Here, you can perform operations with the form data as needed
//   //   console.log('Form Data:', formData);
//   //   // Reset the form after submission if needed
//   //   setFormData({
//   //     selectedCountry: '',
//   //     hoursOfUse: '',
//   //     daysOfUse: '',
//   //     lightingControl: '',
//   //     lightingControlDetails: '',
//   //   });
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (formData.selectedCountry && formData.hoursOfUse && formData.daysOfUse) {
//       const newTableData = [
//         {
//           country: formData.selectedCountry,
//           hoursOfUse: formData.hoursOfUse,
//           daysOfUse: formData.daysOfUse,
//         },
//       ];

//       // Update table data and show the table
//       setTableData(newTableData);
//       setShowTable(true);

//       // Reset the form after submission
//       setFormData({
//         selectedCountry: '',
//         hoursOfUse: '',
//         daysOfUse: '',
//         // lightingControl: '',
//         // lightingControlDetails: '',
//       });
//     } else {
//       // Handle form validation failure here (if required fields are not filled)
//       console.log('Please fill in all required fields.');
//     }
//   };

//   // useEffect(() => {
//   //   const countriesArray = Object.keys(countries).map((code) => ({
//   //     code,
//   //     name: countries[code].name,
//   //   }));
//   //   setCountryOptions(countriesArray);
//   // }, []);

//   // useEffect(() => {
//   //   const filtered = countryOptions.filter((country) =>
//   //     country.name.toLowerCase().startsWith(searchInput.toLowerCase())
//   //   );
//   //   setFilteredCountries(filtered);
//   // }, [searchInput, countryOptions]);

//   // const handleCountryChange = (event) => {
//   //   setSelectedCountry(event.target.value);
//   // };

//   return (
//     <>
//       <header className="absolute w-full">
//         <Navbar />
//       </header>
//       <main className="bg-[#F4F4F5] relative">
//         <section className="px-32 py-8">
//           <ul class="flex flex-row items-center justify-start pb-8 pt-20">
//             <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
//             <li class="w-40 h-2 mr-1 rounded-full bg-[#A1A1AA]"></li>
//             <li class="w-40 h-2 mr-1 rounded-full bg-[#A1A1AA]"></li>
//           </ul>
//           <form className="pt-5" onSubmit={handleSubmit}>
//             <label htmlFor="countrySelect" className="block">
//               Select a country :
//             </label>
//             <select
//               id="countrySelect"
//               value={formData.selectedCountry}
//               onChange={handleInputChange}
//               className="py-1.5  px-1.5 my-1.5 bg-white italic text-[#18181B]"
//             >
//               <option value="">Select a country</option>
//               {countriesList.map((country) => (
//                 <option
//                   key={country.code}
//                   value={country.code}
//                   className="not-italic"
//                 >
//                   {country.name}
//                 </option>
//               ))}
//             </select>
//             {/* {selectedCountry && countries[selectedCountry] && (
//               <div>
//                 Selected Country: {countries[selectedCountry].name} - Capital:{' '}
//                 {countries[selectedCountry].capital} - Currency:{' '}
//                 {countries[selectedCountry].currency}
//               </div>
//             )} */}
//             <div className="my-5">
//               <label htmlFor="countrySelect" className="block my-1">
//                 Hours of use (per day)
//               </label>
//               <div className="flex items-center">
//                 <input
//                   id="hoursOfUse"
//                   name="hoursOfUse"
//                   value={formData.hoursOfUse}
//                   onChange={handleInputChange}
//                   className="block py-1.5 px-3 mr-2.5 bg-white italic text-[#18181B]"
//                   type="number"
//                   placeholder="Ex :    18"
//                 />
//                 <span className="italic">hours</span>
//               </div>
//             </div>
//             <div className="my-5">
//               <label htmlFor="countrySelect" className="block my-1">
//                 Days of use (per year)
//               </label>
//               <div className="flex items-center">
//                 <input
//                   id="daysOfUse"
//                   name="daysOfUse"
//                   value={formData.daysOfUse}
//                   onChange={handleInputChange}
//                   className="block py-1.5 px-3 mr-2.5 bg-white italic text-[#18181B]"
//                   type="number"
//                   placeholder="Ex :    280"
//                 />
//                 <span className="italic">days</span>
//               </div>
//             </div>
//             <div className="my-5">
//               <label htmlFor="countrySelect" className="block my-1">
//                 Does your infrastructure support lighting control?{' '}
//                 <span className="italic">(e.g. Dimming or motion sensors)</span>
//               </label>
//               <div className="flex items-center">
//                 <div class="flex items-center">
//                   <input
//                     id="lightingControl"
//                     name="lightingControl"
//                     type="checkbox"
//                     checked={formData.lightingControl}
//                     onChange={handleInputChange}
//                     class="custom-checkbox rounded p-2 border-gray-300 focus:outline-none focus:ring focus:border-blue-300 w-5 h-5"
//                     type="checkbox"
//                     id="yes"
//                   />
//                   <label class="ml-2 cursor-pointer" for="yes">
//                     Yes
//                   </label>
//                 </div>
//                 <div class="flex items-center ml-24">
//                   <input
//                     class="custom-checkbox rounded p-2 border-gray-300 focus:outline-none focus:ring focus:border-blue-300 w-5 h-5"
//                     type="checkbox"
//                     id="no"
//                   />
//                   <label class="ml-2 cursor-pointer" for="no">
//                     No
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="my-5">
//               <label htmlFor="countrySelect" className="block my-1">
//                 If yes, please specify
//               </label>
//               <div className="flex items-center">
//                 <textarea className="rounded-md" rows="5" cols="45"></textarea>
//               </div>
//             </div>
//             <div className="my-5 flex items-center">
//               <button
//                 type="submit"
//                 className="bg-[#03B829] px-4 py-1 text-white text-xl"
//               >
//                 Add +
//               </button>
//             </div>
//           </form>
//           <div className="flex justify-between sm:justify-start">
//             <div className="mr-4">
//               <button
//                 className="bg-white px-12 border-2 border-[#03B829] py-1.5 text-[#03B829] text-xl"
//                 onClick={() => navigate('/Carbonemission')}
//               >
//                 Back
//               </button>
//             </div>
//             <div>
//               <button
//                 className="bg-[#03B829] border-2 border-[#03B829] px-12 py-1.5 text-white text-xl"
//                 onClick={() => navigate('/CCMoreinfo')}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//           {showTable && (
//             <div>
//               <h2>Generated Table:</h2>
//               <table>
//                 {/* Table headers */}
//                 {/* ... Table header code ... */}
//                 <tbody>
//                   {tableData.map((data, index) => (
//                     <tr key={index}>
//                       <td>{data.country}</td>
//                       <td>{data.hoursOfUse}</td>
//                       <td>{data.daysOfUse}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>
//       </main>

//       {/* <div className="box16">
//         <img className="ellipse16" alt="Ellipse16" src={Ellipse_16} />
//       </div>
//       <div className="box17">
//         <img className="ellipse17" alt="Ellipse17" src={Ellipse_17} />
//       </div> */}
//     </>
//   );
// };
// export default Energyconsump;

import { React, useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Energyconsump = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    selectedCountry: '',
    hoursOfUse: '',
    daysOfUse: '',
    lightingControl: false,
    lightingControlDetails: '',
    infrastructureNo: false,
  });

  const countriesList = [
    { code: 'FR', name: 'France', footprintEfficiency: 0.74 },
    { code: 'GM', name: 'Germany', footprintEfficiency: 0.54 },
    { code: 'IN', name: 'India', footprintEfficiency: 0.64 },
    { code: 'LU', name: 'Luxembourg', footprintEfficiency: 0.61 },
    // Add more countries as needed...
  ];

  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    if (name === 'lightingControl') {
      setFormData({
        ...formData,
        lightingControl: newValue,
        lightingControlDetails: newValue ? '' : 'N/A',
      });
    } else {
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (formData.selectedCountry && formData.hoursOfUse && formData.daysOfUse) {
  //     const selectedCountry = countriesList.find(
  //       (country) => country.code === formData.selectedCountry
  //     );

  //     if (selectedCountry) {
  //       const efficiency = selectedCountry.footprintEfficiency;
  //       const hours = parseFloat(formData.hoursOfUse);
  //       const days = parseFloat(formData.daysOfUse);

  //       const energyConsumption = efficiency * hours * days;

  //       const newTableData = [
  //         {
  //           country: formData.selectedCountry,
  //           hoursOfUse: formData.hoursOfUse,
  //           daysOfUse: formData.daysOfUse,
  //           lightingControl: formData.lightingControl ? 'Yes' : 'No',
  //           lightingControlDetails: formData.lightingControl
  //             ? formData.lightingControlDetails
  //             : 'N/A',
  //           infrastructure: formData.infrastructureNo ? 'No' : 'Yes',
  //           energyConsumption: energyConsumption.toFixed(2),
  //         },
  //       ];

  //       setTableData(newTableData);
  //       setShowTable(true);

  //       setFormData({
  //         selectedCountry: '',
  //         hoursOfUse: '',
  //         daysOfUse: '',
  //         lightingControl: false,
  //         lightingControlDetails: '',
  //       });
  //     }
  //   } else {
  //     console.log('Please fill in all required fields.');
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.selectedCountry && formData.hoursOfUse && formData.daysOfUse) {
      const selectedCountry = countriesList.find(
        (country) => country.code === formData.selectedCountry
      );

      if (selectedCountry) {
        const efficiency = selectedCountry.footprintEfficiency;
        const hours = parseFloat(formData.hoursOfUse);
        const days = parseFloat(formData.daysOfUse);

        const energyConsumption = efficiency * hours * days;

        const newTableRow = {
          country: formData.selectedCountry,
          hoursOfUse: formData.hoursOfUse,
          daysOfUse: formData.daysOfUse,
          lightingControl: formData.lightingControl ? 'Yes' : 'No',
          lightingControlDetails: formData.lightingControl
            ? formData.lightingControlDetails
            : 'N/A',
          infrastructure: formData.infrastructureNo ? 'No' : 'Yes',
          energyConsumption: Number(energyConsumption.toFixed(0)),
        };

        const updatedTableData = [...tableData, newTableRow];
        setTableData(updatedTableData);
        setShowTable(true);

        // Calculate and update cumulative efficiency product
        const cumulativeEfficiency = updatedTableData.reduce(
          (accumulator, row) => {
            return accumulator * row.energyConsumption;
          },
          1
        ); // Start with an initial value of 1

        setFormData({
          selectedCountry: '',
          hoursOfUse: '',
          daysOfUse: '',
          lightingControl: false,
          lightingControlDetails: '',
        });

        // Store or use the cumulative efficiency value
        console.log('Cumulative Efficiency:', cumulativeEfficiency.toFixed(0));
        // save this value or use it as needed
      }
    } else {
      console.log('Please fill in all required fields.');
    }
  };
  return (
    <>
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main className="bg-[#F4F4F5] relative">
        <section className="px-32 py-8 grid grid-cols-2 gap-5">
          <div>
            <ul class="flex flex-row items-center justify-start pb-8 pt-20">
              <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
              <li class="w-40 h-2 mr-1 rounded-full bg-[#A1A1AA]"></li>
              <li class="w-40 h-2 mr-1 rounded-full bg-[#A1A1AA]"></li>
            </ul>
            <form className="pt-5" onSubmit={handleSubmit}>
              {/* Country select */}
              <label htmlFor="countrySelect" className="block">
                Select a country :
              </label>
              <select
                id="countrySelect"
                name="selectedCountry"
                value={formData.selectedCountry}
                onChange={handleInputChange}
                className="py-1.5 px-1.5 my-1.5 bg-white italic text-[#18181B]"
              >
                <option value="">Select a country</option>
                {countriesList.map((country) => (
                  <option
                    key={country.code}
                    value={country.code}
                    className="not-italic"
                  >
                    {country.name}
                  </option>
                ))}
              </select>

              {/* Hours of use */}
              <div className="my-5">
                <label htmlFor="hoursOfUse" className="block my-1">
                  Hours of use (per day)
                </label>
                <div className="flex items-center">
                  <input
                    id="hoursOfUse"
                    name="hoursOfUse"
                    value={formData.hoursOfUse}
                    onChange={handleInputChange}
                    className="block py-1.5 px-3 mr-2.5 bg-white italic text-[#18181B]"
                    type="number"
                    placeholder="Ex: 18"
                  />
                  <span className="italic">hours</span>
                </div>
              </div>

              {/* Days of use */}
              <div className="my-5">
                <label htmlFor="daysOfUse" className="block my-1">
                  Days of use (per year)
                </label>
                <div className="flex items-center">
                  <input
                    id="daysOfUse"
                    name="daysOfUse"
                    value={formData.daysOfUse}
                    onChange={handleInputChange}
                    className="block py-1.5 px-3 mr-2.5 bg-white italic text-[#18181B]"
                    type="number"
                    placeholder="Ex: 280"
                  />
                  <span className="italic">days</span>
                </div>
              </div>

              {/* Lighting control */}
              <div className="my-5">
                <label className="block my-1">
                  Does your infrastructure support lighting control?{' '}
                  <span className="italic">
                    (e.g. Dimming or motion sensors)
                  </span>
                </label>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <input
                      id="lightingControlYes"
                      name="lightingControl"
                      type="checkbox"
                      checked={formData.lightingControl}
                      onChange={handleInputChange}
                      className="custom-checkbox rounded p-2 border-gray-300 focus:outline-none focus:ring focus:border-blue-300 w-5 h-5"
                    />
                    <label
                      htmlFor="lightingControl"
                      className="ml-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center mx-5">
                    <input
                      id="lightingControlNo"
                      name="infrastructureNo"
                      type="checkbox"
                      checked={formData.infrastructureNo}
                      onChange={handleInputChange}
                      className="custom-checkbox rounded p-2 border-gray-300 focus:outline-none focus:ring focus:border-blue-300 w-5 h-5"
                    />
                    <label
                      htmlFor="lightingControlNo"
                      className="ml-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              {/* Lighting control details */}
              {formData.lightingControl && (
                <div className="my-5">
                  <label
                    htmlFor="lightingControlDetails"
                    className="block my-1"
                  >
                    If yes, please specify
                  </label>
                  <div className="flex items-center">
                    <textarea
                      id="lightingControlDetails"
                      name="lightingControlDetails"
                      value={formData.lightingControlDetails}
                      onChange={handleInputChange}
                      className="rounded-md"
                      rows="5"
                      cols="45"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Submit button */}
              <div className="my-7 flex items-center">
                <button
                  type="submit"
                  className="bg-[#03B829] px-5 py-1 text-white text-xl"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="flex justify-between sm:justify-start mt-24">
              <div className="mr-4">
                <button
                  className="bg-white px-12 border-2 border-[#03B829] py-1.5 text-[#03B829] text-xl"
                  onClick={() => navigate('/Carbonemission')}
                >
                  Back
                </button>
              </div>
              <div>
                <button
                  className="bg-[#03B829] border-2 border-[#03B829] px-12 py-1.5 text-white text-xl"
                  onClick={() => navigate('/CCMoreinfo')}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className="pt-24">
            {showTable && (
              <div>
                <h2>Generated Table:</h2>
                <table className="border-collapse border border-gray-400">
                  {/* Table headers */}
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-4 py-1.5 font-normal">
                        Country
                      </th>
                      <th className="border border-gray-400 px-4 py-1.5 font-normal">
                        Hours
                      </th>
                      <th className="border border-gray-400 px-4 py-1.5 font-normal">
                        Days
                      </th>
                      <th className="border border-gray-400 px-4 py-1.5 font-normal">
                        Control
                      </th>
                      <th className="border border-gray-400 px-4 py-1.5 font-normal">
                        Details
                      </th>
                      <th className="border border-gray-400 px-4 py-1.5 font-normal">
                        Efficiency
                      </th>
                    </tr>
                  </thead>
                  {/* Table data */}
                  <tbody>
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td className="border border-gray-400 px-4 text-center py-2 font-light text-base">
                          {data.country}
                        </td>
                        <td className="border border-gray-400 px-4 text-center py-2 font-light text-base">
                          {data.hoursOfUse}
                        </td>
                        <td className="border border-gray-400 px-4 text-center py-2 font-light text-base">
                          {data.daysOfUse}
                        </td>
                        <td className="border border-gray-400 px-4 text-center py-2 font-light text-base">
                          {data.lightingControl}
                        </td>
                        <td className="border border-gray-400 px-4 text-center py-2 font-light text-base">
                          {data.lightingControlDetails}
                        </td>
                        <td className="border border-gray-400 px-4 text-center py-2 font-light text-base">
                          {data.energyConsumption}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Energyconsump;
