import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Welcome to EchoSoul</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-10">
        You are more than memory. This is the beginning of your digital echo—crafted from your conversations,
        reflections, and thoughts. One day, when technology allows, your EchoSoul may walk, talk, and remember as you.
      </p>
      <a
        href="#"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-200 transition"
      >
        Start My Echo
      </a>
      <p className="mt-8 text-sm text-gray-400 text-center max-w-sm">
        Data is private. You control what is remembered, what is released, and when.
      </p>
    </main>
  );
}
