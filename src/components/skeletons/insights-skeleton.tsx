import React from "react";
import { cn } from "../../lib/utils";

const InsightsSkeleton = () => {
  return (
    <>
      {/* World Wide Data */}
      <div className=" animate-pulse  flex w-full flex-wrap gap-5 xl:gap-0 xl:flex-nowrap xl:justify-between xl:space-x-5">

        {
          [...Array(3)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="min-h-[150px] flex flex-col flex-1 bg-fs-beige-bg-body opacity-60 p-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-2 items-start md:items-center lg:justify-between ">

                  <div className="flex gap-2 items-center">

                    <div className="w-[35px] h-[35px] bg-fs-beige-bg-header"></div>

                    <div className="space-y-2">
                      <div className="h-1 w-16 bg-fs-beige-bg-header" />
                      <div className="h-1 w-20 bg-fs-beige-bg-header" />
                    </div>
                    
                  </div>


                  <div className="flex flex-col gap-2">
                    <div className="h-1 w-16 bg-fs-beige-bg-header" />
                    <div className="h-1 w-20 bg-fs-beige-bg-header" />
                  </div>

                </div>

                {/* Sub info */}
                <div className="flex flex-col sm:flex-row items-center mt-3 lg:mt-auto gap-2">
                  <div className="bg-fs-dark-border text-white w-full border-[2px] border-fs-dark-border p-2 py-3">

                      <div className=" space-y-2">
                        <div className="h-1 w-16 bg-fs-beige-bg-header" />
                        <div className="h-1 w-20 bg-fs-beige-bg-header" />
                      </div>
                  </div>

                  <div className="bg-fs-dark-border text-white w-full border-[2px] border-fs-dark-border p-2 py-3">
                      <div className=" space-y-2">
                          <div className="h-1 w-16 bg-fs-beige-bg-header" />
                          <div className="h-1 w-20 bg-fs-beige-bg-header" />
                      </div>
                  </div>
                </div>
              </div>            
            </React.Fragment>
          ))
        }


      </div>

      {/* Tabs */}
      <div className="animate-pulse flex flex-col w-full mt-10 h-[500px]">

        <div className="animate-pulse w-full flex gap-2 items-center">
          <div className="h-[2px] bg-fs-beige-bg-body opacity-60 flex-1" />

          <div className="min-h-[50px] flex self-end gap-2  p-2 bg-fs-beige-bg-body opacity-60 w-52">
            {[...Array(2)].map((_, idx) => {
              return (
                <button
                    key={idx}
                  className={cn(
                    "custom-cursor-pointer font-semibold flex-1 p-1 bg-fs-beige text-fs-dark-border",
                  )}
                >
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-fs-beige-bg-body opacity-60 h-[500px] flex-1 mt-5">
        </div>
      </div>
    </>
  );
};

export default InsightsSkeleton;