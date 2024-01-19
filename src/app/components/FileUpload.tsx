"use client";
import { useRef, useState } from "react";

const FileUpload = ({ onFileUpload }: any) => {
  const [fileObject, setFileObject] = useState<any>();
  const inputFileRef = useRef<any>(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setFileObject(file);
    onFileUpload(file);
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className="bg-gradient-to-r from-[#73e8f4] via-[#441af5] to-[#E18D9F] p-1 rounded-full cursor-pointer"
          onClick={() => inputFileRef.current?.click()}
        >
          <div className="px-20 bg-white text-sm py-2 rounded-full">
            <div className="flex flex-col items-center text-slate-500 font-bold">
              Choose pdf file
            </div>
            <input
              type="file"
              className="h-full w-full hidden"
              name="nftFile"
              ref={inputFileRef}
              accept=".pdf"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-slate-500 font-bold m-5">
        {fileObject?.name}
      </div>
    </>
  );
};

export default FileUpload;
