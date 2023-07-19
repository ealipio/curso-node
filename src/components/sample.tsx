import AnimateOnScroll from "../providers/AnimateOnScroll";
import React from "react";

interface SampleComponentProps {
  children: React.ReactNode;
}

const SampleComponent = ({ children }: SampleComponentProps) => {
  return (
    <div className="grid h-screen grid-cols-1 place-items-center">
      <h1 className="rounded-xl bg-blue-700 p-20 text-white ">{children}</h1>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <SampleComponent>I'm a normal div</SampleComponent>

      <AnimateOnScroll reappear>
        <SampleComponent>I appear on Scroll!</SampleComponent>
      </AnimateOnScroll>
    </>
  );
};

export default HomePage;
