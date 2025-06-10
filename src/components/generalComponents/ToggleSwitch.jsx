import React from 'react';

const ToggleSwitch = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-20 p-4">
  <label className="group relative inline-flex cursor-pointer flex-col items-center">
    <input className="peer sr-only" type="checkbox" />
    <div className="relative h-6 w-12 rounded-full bg-darkBackground shadow-[inset_0_1px_4px_rgba(0,0,0,0.6)] transition-all duration-300 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-gradient-to-br after:from-gray-100 after:to-gray-300 after:shadow-[1px_1px_4px_rgba(0,0,0,0.3)] after:transition-all after:duration-300 peer-checked:bg-gradient-to-r peer-checked:from-violet-600 peer-checked:to-fuchsia-600 peer-checked:after:translate-x-6 peer-checked:after:from-white peer-checked:after:to-gray-100 hover:after:scale-95 active:after:scale-90">
      <span className="absolute inset-0.5 rounded-full bg-darkBackground" />
      <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 peer-checked:animate-glow peer-checked:opacity-100 [box-shadow:0_0_8px_rgba(167,139,250,0.5)]" />
    </div>
  </label>
</div>
  );
}

export default ToggleSwitch;
