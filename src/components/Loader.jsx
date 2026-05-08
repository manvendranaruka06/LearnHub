import React from 'react';
import SkeletonCard from './SkeletonCard';

/**
 * Loader Component
 * Renders a responsive grid of SkeletonCards to simulate the exact layout
 * of the incoming data, providing a polished, portfolio-quality loading state.
 */
const Loader = () => {
  // Create an array of 6 items to render 6 skeleton cards
  const skeletons = Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full animate-in fade-in duration-500">
      {skeletons.map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default Loader;
