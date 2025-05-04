import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";

function NewsLetter() {
  return (
    <div className="bg-orange-400 mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <HiOutlineMailOpen className="text-4xl" />
          <div>
            <h3 className="font-semibold text-lg">Sign Up To Our News Letters</h3>
            <p>... and get a $20 coupon for your first shopping</p>
          </div>
        </div>

        <div className="w-full max-w-[500px] relative">
          <input className="py-4 px-6 w-full rounded-full pr-32 text-black" type="text" placeholder="Your Email Address ..." />
          <button  className="bg-orange-600 hover:bg-orange-700 transition text-white rounded-full px-6 py-2 absolute right-2 top-1/2 -translate-y-1/2"  type="submit"  >
            Subscribe!
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
