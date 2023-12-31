import React, { useState } from "react";
import filedrop from "../images/file-drop1.png";
import { RxCross2 } from "react-icons/rx";
const LightFinder7 = () => {
  // ========== euro value setup ==========
  const [euro, setEuro] = useState(0);
  const handleChange = (event) => {
    setEuro(event.target.value);
  };
  const handleInputChange = (event) => {
    let inputValue = event.target.value.replace(/€/g, "");
    // Ensure the input value is a valid number and within the desired range
    inputValue = Math.min(999999, Math.max(0, Number(inputValue)));
    setEuro(inputValue);
  };

  // ========== Popup Value and drag and drop options ==========
  const [openpopups, setOpenpopups] = useState([false, false]);
  const [files, setFiles] = useState([null, null]);

  const open = (index) => {
    const newOpenpopups = [...openpopups];
    newOpenpopups[index] = true;
    setOpenpopups(newOpenpopups);
  };

  const close = (index) => {
    const newOpenpopups = [...openpopups];
    newOpenpopups[index] = false;
    setOpenpopups(newOpenpopups);
  };

  const handleFile = (index, e) => {
    const newFiles = [...files];
    newFiles[index] = e.target.files[0];
    setFiles(newFiles);
    close(index); // Close the popup on file selection
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index, e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    const newFiles = [...files];
    newFiles[index] = droppedFile;
    setFiles(newFiles);
    close(index); // Close the popup on file drop
  };

  const addMore = () => {
    const newIndex = files.length;
    setFiles([...files, null]);
    setOpenpopups([...openpopups, false]);

    // Hide the last "Add More" button if the maximum count is reached (2)
    if (newIndex >= 2) {
      document.getElementById(`addMoreButton${newIndex}`).style.display =
        "none";
    }
  };

  return (
    <>
      <div className="bg-[#e4e4e7] px-10 sm:px-20  md:px-24 lg:px-32 py-20">
        <div>
          <p className="text-sm sm:text-base lg:text-xl">
            7. &nbsp; Upload files (if any). Images, Photos, Plan, Drawings, 3D
            Models, Notes etc.
          </p>
          <div className="text-lg sm:text-xl text-white grid w-fit gap-6 pt-10">
            {files.map((file, index) => (
              <div key={index}>
                <button
                  onClick={() => open(index)}
                  className="bg-[#7246FD] px-6 sm:px-10 py-1 sm:py-3"
                >
                  Upload
                </button>
                {file && <div className="text-black text-sm">{file.name}</div>}
              </div>
            ))}
            {files.length < 2 && (
              <button
                className="text-[#7246FD] text-start px-10 py-3"
                onClick={addMore}
              >
                + Add More
              </button>
            )}
          </div>

          <div className="pt-16">
            <p className="text-sm sm:text-base lg:text-xl">
              8. &nbsp; Do you have a budget in mind, if not our team will help
              you identify one.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-10 pt-10">
              <input
                type="range"
                min={0}
                max={999999}
                value={euro}
                onChange={handleChange}
                className=" w-4/5 md:w-1/2 mt-4"
              />
              <input
                type="text"
                value={euro + "€"}
                onChange={handleInputChange}
                className="mt-4 p-2 text-center text-lg border border-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
      {openpopups.map(
        (isOpen, index) =>
          isOpen && (
            <div
              key={index}
              className="py-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-white p-4 rounded-lg shadow-lg"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(index, e)}
            >
              <div className="flex justify-between py-2">
                <p className="text-base md:text-xl">Upload file</p>
                <button
                  onClick={() => close(index)}
                  className=" text-xl sm:text-4xl"
                >
                  <RxCross2 />
                </button>
              </div>
              <div className="border-dashed border-2 border-[#7246FD] h-80 flex flex-col items-center justify-center">
                <div className="w-14 md:w-24 lg:w-fit">
                  {/* Placeholder for your filedrop icon */}
                  <img src={filedrop} alt="" />
                </div>
                <div className="text-center text-sm md:text-base lg:text-lg pt-4 cursor-pointer">
                  <p>
                    Drag and drop your file here or
                    <label
                      htmlFor={`fileInput${index}`}
                      className="text-[#7246FD]"
                    >
                      &nbsp; browse.
                    </label>
                  </p>

                  <input
                    type="file"
                    id={`fileInput${index}`}
                    className="hidden"
                    onChange={(e) => handleFile(index, e)}
                  />
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default LightFinder7;
