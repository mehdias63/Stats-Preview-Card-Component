import React from "react";

export default function Stats() {
  return (
    <div className="w-[20.4375rem] h-[48.75rem] lg:w-[69.375rem] lg:h-[27.875rem] px-4 bg-[#1B1937] py-12 rounded-lg font-inter lg:py-0 lg:px-0 lg:grid lg:grid-cols-2  ">
      <div>
        <div className="bg-[url(../public/images/image-header-mobile.jpg)] bg-no-repeat bg-cover h-[13.59rem] bg-blend-multiply bg-[#AB5CDB] opacity-[0.7511] rounded-t-lg lg:bg-[url(../public/images/image-header-desktop.jpg)] lg:col-start-2 lg:h-[27.875rem] lg:ml-[0.94rem] lg:rounded-br-lg lg:rounded-tl-none"></div>
      </div>
      <div className="lg:col-start-1 lg:row-start-1 lg:py-8 lg:px-16">
        <h1 className="font-bold text-[1.75rem] p-4 text-center leading-8 mt-2 lg:text-left lg:text-[2.25rem] lg:leading-[2.75rem]">
          Get<span className="text-[#AB5CDB]"> insights</span> that help your
          business grow.
        </h1>
        <p className="font-normal text-[0.9375rem] p-4 text-center leading-[1.5625rem] mb-4 opacity-60 lg:text-left lg:pr-8">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="flex flex-col justify-center items-center gap-6 text-center lg:flex-row lg:justify-evenly lg:gap-16 lg:text-left lg:mt-10 lg:mr-4">
          <div>
            <h1 className="font-bold text-2xl">10k+</h1>
            <p className="font-lexend font-normal opacity-60 leading-[1.5625rem] text-xs">
              Companies
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">314</h1>
            <p className="font-lexend font-normal opacity-60 leading-[1.5625rem] text-xs">
              Templates
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">12M+</h1>
            <p className="font-lexend font-normal opacity-60 leading-[1.5625rem] text-xs">
              Queries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
