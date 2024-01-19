"use client";
import { useState } from "react";
import FileUpload from "./components/FileUpload";
import Table from "./components/Table";
import PageLoader from "./components/PageLoader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [extractedText, setExtractedText] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleFileUpload = async (file: any) => {
    setLoader(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setExtractedText(JSON.parse(data.text));

        setLoader(false);
      } else {
        console.error("Error uploading file:", response.statusText);
        toast.error(`${response.statusText}`);
        setLoader(false);
      }
    } catch (error: any) {
      console.error("Error uploading file:", error.message);
      toast.error(error.message);
      setLoader(false);
    }
  };

  return (
    <div>
      {loader && (
        <PageLoader loader={loader} loaderText="extracting insights" />
      )}
      <h1 className="text-center text-xl font-bold m-5 text-slate-500">
        Enhanced Text Extractor
      </h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {extractedText && <Table extractedText={extractedText} />}
      <ToastContainer
        style={{
          height: "30px",
          fontSize: "12px",
        }}
      />
    </div>
  );
};

export default Home;
