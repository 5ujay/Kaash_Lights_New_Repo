// import { React, useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';

// const CCMoreinfoLamp = () => {
//   const options = [
//     'Fluorescent Tube 4ft (120cm)',
//     'Halogen',
//     'PAR',
//     'Fluorescent Tube 5ft (150cm)',
//     'Incandescent Lamp',
//     'Sodium Vapour',
//     'Mercury Halide',
//     'CFL Small  ',
//   ];

//   const [selectedOption, setSelectedOption] = useState('');
//   const [wattValue, setWattValue] = useState(10);
//   const [quantityValue, setQuantityValue] = useState(0);

//   const getTableDataFromLocalStorage = () => {
//     const savedTableData = localStorage.getItem('tableData');
//     return savedTableData ? JSON.parse(savedTableData) : [];
//   };

//   const saveTableDataToLocalStorage = (data) => {
//     localStorage.setItem('tableData', JSON.stringify(data));
//   };

//   const [tableData, setTableData] = useState(() => {
//     const savedData = getTableDataFromLocalStorage();
//     return savedData || [];
//   });

//   //   useEffect(() => {
//   //     const savedData = getTableDataFromLocalStorage();
//   //     setTableData(savedData);
//   //   }, []);

//   useEffect(() => {
//     const savedData = getTableDataFromLocalStorage();
//     if (savedData) {
//       setTableData(savedData);
//     }
//   }, []);

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleButtonClickWatt = (action) => {
//     if (action === 'increment') {
//       setWattValue((prevValue) => prevValue + 1);
//     } else if (action === 'decrement' && wattValue > 10) {
//       setWattValue((prevValue) => prevValue - 1);
//     }
//   };

//   const handleButtonClickQuantity = (action) => {
//     if (action === 'increment') {
//       setQuantityValue((prevValue) => prevValue + 1);
//     } else if (action === 'decrement' && quantityValue > 0) {
//       setQuantityValue((prevValue) => prevValue - 1);
//     }
//   };

//   const handleAddToTable = () => {
//     if (selectedOption !== '' && quantityValue > 0) {
//       const newItem = {
//         lampType: selectedOption,
//         watt: wattValue,
//         quantity: quantityValue,
//       };
//       const updatedData = [...tableData, newItem];
//       setTableData(updatedData);
//       saveTableDataToLocalStorage(updatedData);
//       setSelectedOption('');
//       setWattValue(10);
//       setQuantityValue(0);
//     }
//   };

//   const handleDeleteItem = (index) => {
//     const updatedTableData = tableData.filter((_, i) => i !== index);
//     setTableData(updatedTableData);
//     saveTableDataToLocalStorage(updatedTableData);
//   };

//   return (
//     <>
//       <header className="bg-black">
//         <Navbar />
//       </header>
//       <main className="bg-[#E4E4E7]">
//         <ul class="flex flex-row items-center justify-center pb-20 pt-8 px-32">
//           <li class="w-28 h-2 mr-1 rounded-full bg-[#03B829]"></li>
//           <li class="w-28 h-2 mr-1 rounded-full bg-[#03B829]"></li>
//           <li class="w-28 h-2 mr-1 rounded-full bg-[#A1A1AA]"></li>
//         </ul>
//         <section className="px-24">
//           <div className="w-3/5 bg-[#F4F4F5] px-5">
//             <h3 className="py-3 px-2">Select your lamp</h3>
//             <div className="flex items-center">
//               <div>
//                 <label htmlFor="dropdown" className="block pb-1.5 px-2">
//                   Lamp Type
//                 </label>
//                 <select
//                   id="dropdown"
//                   value={selectedOption}
//                   onChange={handleSelectChange}
//                   className="py-1.5 px-1 my-1.5 bg-white text-[#18181B]"
//                 >
//                   <option value="">Select Lamp</option>
//                   {options.map((option, index) => (
//                     <option
//                       key={index}
//                       value={option}
//                       className="bg-[#F4F4F5] text-[#18181B] border-b-2 border-[#F4F4F5] border-dotted"
//                     >
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="relative pb-5 ml-3">
//                 <label htmlFor="watt" className="block  px-2">
//                   Watt(W)
//                 </label>
//                 <div className="relative px-2">
//                   <input
//                     type="text"
//                     id="watt"
//                     className="pl-8 pr-2 py-1 border rounded-md w-24"
//                     value={wattValue}
//                     readOnly
//                   />
//                   <button
//                     className="absolute top-1/2 transform -translate-y-1/2 left-5 cursor-pointer"
//                     onClick={() => handleButtonClickWatt('increment')}
//                   >
//                     +
//                   </button>
//                   <button
//                     className="absolute top-1/2 transform -translate-y-1/2 left-16 cursor-pointer"
//                     onClick={() => handleButtonClickWatt('decrement')}
//                   >
//                     -
//                   </button>
//                 </div>
//               </div>
//               <div className="relative pb-5">
//                 <label htmlFor="watt" className="block px-2">
//                   Quantity
//                 </label>
//                 <div className="relative px-2">
//                   <input
//                     type="text"
//                     id="watt"
//                     className="pl-8 pr-2 py-1 border rounded-md w-24"
//                     value={quantityValue}
//                     readOnly
//                   />
//                   <button
//                     className="absolute top-1/2 transform -translate-y-1/2 left-5 cursor-pointer"
//                     onClick={() => handleButtonClickQuantity('increment')}
//                   >
//                     +
//                   </button>
//                   <button
//                     className="absolute top-1/2 transform -translate-y-1/2 left-16 cursor-pointer"
//                     onClick={() => handleButtonClickQuantity('decrement')}
//                   >
//                     -
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <button
//                   onClick={handleAddToTable}
//                   className="bg-[#03B829] px-4 py-1 text-white"
//                 >
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//         {tableData.length > 0 && (
//           <div className="mt-8">
//             <h3 className="text-xl font-bold mb-4">Selected Items</h3>
//             <table className="border-collapse border border-gray-400">
//               <thead>
//                 <tr>
//                   <th className="border border-gray-400 px-4 py-2">
//                     Lamp Type
//                   </th>
//                   <th className="border border-gray-400 px-4 py-2">Watt (W)</th>
//                   <th className="border border-gray-400 px-4 py-2">Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tableData.map((item, index) => (
//                   <tr key={index}>
//                     <td className="border border-gray-400 px-4 py-2">
//                       {item.lampType}
//                     </td>
//                     <td className="border border-gray-400 px-4 py-2">
//                       {item.watt}
//                     </td>
//                     <td className="border border-gray-400 px-4 py-2">
//                       {item.quantity}
//                     </td>
//                     <td className="border border-gray-400 px-4 py-2">
//                       <button
//                         className="text-red-500"
//                         onClick={() => handleDeleteItem(index)}
//                       >
//                         &#10006;
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </main>
//     </>
//   );
// };

// export default CCMoreinfoLamp;

import { React, useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const CCMoreinfoLamp = () => {
  const navigate = useNavigate();
  const options = [
    'Fluorescent Tube 4ft (120cm)',
    'Halogen',
    'PAR',
    'Fluorescent Tube 5ft (150cm)',
    'Incandescent Lamp',
    'Sodium Vapour',
    'Mercury Halide',
    'CFL Small  ',
  ];

  const [selectedOption, setSelectedOption] = useState('');
  const [wattValue, setWattValue] = useState(10);
  const [quantityValue, setQuantityValue] = useState(0);
  const [tableData, setTableData] = useState([]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleButtonClickWatt = (action) => {
    if (action === 'increment') {
      setWattValue((prevValue) => prevValue + 1);
    } else if (action === 'decrement' && wattValue > 10) {
      setWattValue((prevValue) => prevValue - 1);
    }
  };

  const handleButtonClickQuantity = (action) => {
    if (action === 'increment') {
      setQuantityValue((prevValue) => prevValue + 1);
    } else if (action === 'decrement' && quantityValue > 0) {
      setQuantityValue((prevValue) => prevValue - 1);
    }
  };

  const handleAddToTable = () => {
    if (selectedOption !== '' && quantityValue > 0) {
      const newItem = {
        lampType: selectedOption,
        watt: wattValue,
        quantity: quantityValue,
      };
      setTableData([...tableData, newItem]);
      setSelectedOption('');
      setWattValue(10);
      setQuantityValue(0);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData);
  };

  return (
    <>
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main className="bg-[#E4E4E7] min-h-screen relative">
        <section className="px-24">
          <ul class="flex flex-row items-center justify-start pb-20 pt-28">
            <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
            <li class="w-40 h-2 mr-1 rounded-full bg-[#03B829]"></li>
            <li class="w-40 h-2 mr-1 rounded-full bg-[#A1A1AA]"></li>
          </ul>
          <div className="flex  items-center">
            <div className="w-fit bg-[#F4F4F5] px-5 mr-5">
              <h3 className="py-3 px-2">Select your lamp</h3>
              <div className="flex items-center">
                <div>
                  <label htmlFor="dropdown" className="block pb-1.5 px-2">
                    Lamp Type
                  </label>
                  <select
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="py-1.5 px-1 my-1.5 bg-white text-[#18181B] hover:text-[#18181B] rounded-none hover:bg-white border"
                  >
                    <option className="border" value="">
                      Select Lamp
                    </option>
                    {options.map((option, index) => (
                      <option
                        key={index}
                        value={option}
                        className="bg-[#F4F4F5] text-[#18181B]"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative pb-5 ml-3">
                  <label htmlFor="watt" className="block  px-2">
                    Watt(W)
                  </label>
                  <div className="relative px-2">
                    <input
                      type="text"
                      id="watt"
                      className="pl-8 pr-2 py-1 border  w-24"
                      value={wattValue}
                      readOnly
                    />
                    <button
                      className="absolute top-1/2 transform -translate-y-1/2 left-5 cursor-pointer"
                      onClick={() => handleButtonClickWatt('increment')}
                    >
                      +
                    </button>
                    <button
                      className="absolute top-1/2 transform -translate-y-1/2 left-16 cursor-pointer"
                      onClick={() => handleButtonClickWatt('decrement')}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="relative pb-5">
                  <label htmlFor="watt" className="block px-2">
                    Quantity
                  </label>
                  <div className="relative px-2">
                    <input
                      type="text"
                      id="watt"
                      className="pl-8 pr-2 py-1 border  w-24"
                      value={quantityValue}
                      readOnly
                    />
                    <button
                      className="absolute top-1/2 transform -translate-y-1/2 left-5 cursor-pointer"
                      onClick={() => handleButtonClickQuantity('increment')}
                    >
                      +
                    </button>
                    <button
                      className="absolute top-1/2 transform -translate-y-1/2 left-16 cursor-pointer"
                      onClick={() => handleButtonClickQuantity('decrement')}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleAddToTable}
                    className="bg-[#03B829] px-4 py-1 text-white"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
            {tableData.length > 0 && (
              <div className="w-fit bg-[#F4F4F5]">
                <table className="border-collapse border border-gray-400">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-4 py-1.5 font-normal">
                        Lamp Type
                      </th>
                      <th className="border border-gray-400 px-4 py-1.5 font-normal">
                        Wattage
                      </th>
                      <th className="border border-gray-400 px-4 py-1.5 font-normal">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-400 px-4 text-center py-2 font-light text-base">
                          {item.lampType}
                        </td>
                        <td className="border border-gray-400 text-center py-2 font-light text-base">
                          {item.watt}
                        </td>
                        <td className="border border-gray-400 text-center py-2 font-light text-base">
                          {item.quantity}
                        </td>
                        <td className="border border-gray-400 text-center px-4 py-2 font-light text-base">
                          <button
                            className="text-gray-500"
                            onClick={() => handleDeleteItem(index)}
                          >
                            &#10006;
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="flex justify-between sm:justify-start mt-10">
            <div className="mr-4">
              <button
                className="bg-white px-10 border-2 border-[#03B829] py-1.5 text-[#03B829] text-xl"
                onClick={() => navigate('/CCMoreinfo')}
              >
                Back
              </button>
            </div>
            <div>
              <button
                className="bg-[#03B829] border-2 border-[#03B829] px-10 py-1.5 text-white text-xl"
                onClick={() => navigate('/CCVerif')}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CCMoreinfoLamp;
