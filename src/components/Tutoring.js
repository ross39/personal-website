
import { BadgeCheckIcon, ChipIcon, LibraryIcon } from "@heroicons/react/solid";
import React from "react";
import { tutoring } from "../data";

export default function Tutoring() {
  return (
    <section id="tutoring">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <LibraryIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Tutoring services avaliable 
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
           I provide personalised tutoring services for leaving certificate and junior certificate students in the subject of Computer Science. I aim to keep these lessons fun while also providing a great learning experience.
           I offer online tutoring as well as in person tutoring. My rate is €30 per hour. For more information please contact me. 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {tutoring.map((tutor) => (
            <div key={tutor} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {tutor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}