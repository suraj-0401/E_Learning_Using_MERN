import React from "react";

function NewsLetter() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Stay Updated with Our Newsletter</h2>
        <p className="mt-4">
          Subscribe to receive updates on new courses, offers, and insights.
        </p>
        <form className="mt-8 flex justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-l-lg border-none focus:outline-none w-1/2"
          />
          <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-r-lg hover:bg-yellow-300">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
