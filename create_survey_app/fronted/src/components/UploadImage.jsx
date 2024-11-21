import React, { useRef  , useState} from 'react';
const UploadImage = ({closeModal}) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a preview URL for the selected image
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a preview URL for the selected image
    }
  };
  const handleFileSelection = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Open file selection dialog
    }
  };
  return (
    <div className="fixed inset-0 bg-opacity-50  flex justify-center z-30 backdrop-blur-[0.75px] items-center bg-slate-300  ">
      <div className=" flex  w-full justify-center">
        <div className="py-4 px-6 bg-white flex flex-col gap-2 text-sm shadow-2xl  animate  max-md:w-full " >
            <p className="self-end absolute hover:text-gray-400 transition" role="button" onClick={() => closeModal()}>X</p>
            <p className="font-bold mt-2">Add media</p>
            <p>Upload file</p>
            <div className="  border  flex items-center justify-center border-dashed  hover:border-blue-600 transition"> 

            {
              selectedImage? <div className="relative flex justify-center items-center  px-24">
                <span className=" absolute right-3   top-1 hover:text-blue-600" role="button" onClick={() => {
                  setSelectedImage(null)
                }}>X</span>
                <img src={selectedImage} alt="img" className="w-72" />
            </div>:


                <span className="py-12 px-24 "  
                role="button" 
                onClick={handleFileSelection}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                >
                  <input type="file" className="hidden"  ref={fileInputRef} accept="image/*" onChange={handleImageChange} />
                   Drag & Drop or <span className="text-blue-500">browse</span> for files here
                </span>
            }
               
            </div>
           
            <div className="mt-2 flex justify-between w-full "> 
                <button className="border py-1 px-3 font-bold" onClick={() => closeModal()}>Close</button>
                <button className=" py-1 px-3 bg-blue-600 text-white rounded-sm font-bold " type="button" >Save</button>
             </div>
            </div>
          
        </div>
    </div>
  )
}

export default UploadImage