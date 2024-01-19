import React from "react";

const Table = ({ extractedText }: any) => {
  return (
    <div className="container mx-auto flex justify-center">
      {extractedText.length > 0 && (
        <table className="w-[80%] bg-white border border-gray-300 rounded-md overflow-hidden p-9 m-9">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 font-semibold text-left">Header</th>
              <th className="py-2 px-4 font-semibold text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {extractedText.map((item: any, index: number) => {
              return (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 px-4 font-medium w-[40%]">
                    {item.attr_name}
                  </td>
                  <td className="py-2 px-4 ">{item.attr_value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
