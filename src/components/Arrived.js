import React from "react";
import ArrivedItem from "./ArrivedItem";

const Arrived = ({ items = [] }) => {
  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Just Arrived <br className="" />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>
        <div className="flex -mx-4 flex-row relative">
          {/* <!-- START: JUST ARRIVED ROW 1 --> */}

          {items.map((item, index) => (
            <ArrivedItem key={String(index)} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arrived;
