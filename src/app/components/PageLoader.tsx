import React, { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
// import { handleScroll } from "../../utils/hooks";

export default function PageLoader({
  loader,
  loaderText,
}: {
  loader: boolean;
  loaderText: string;
}) {
  // useEffect(() => {
  //   handleScroll(loader);
  // }, [loader]);

  return (
    <div>
      {loader && (
        <div className="bg-white fixed w-full h-full opacity-70 z-50">
          <div className="mx-auto  flex flex-col h-full">
            <div className="m-auto  text-center">
              <div className="flex justify-center">
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#380F98"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  visible={loader}
                />
              </div>

              <div className="text-center">
                {loaderText ? (
                  <span className="text-black text-base sm:text-xl">
                    {loaderText}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
