import React from "react";

function Card() {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-55 h-40 rounded-full mx-auto"
          src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg"
          alt=""
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium mb-8">
              Tailwind CSS is an excellent framework.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400 mb-8">
              Johan Swan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Front End Developer New Zealand
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
