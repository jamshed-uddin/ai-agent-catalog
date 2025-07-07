import React from "react";

export const CardSkeleton = () => {
  return (
    <div className="h-48  bg-gray-800 animate-pulse rounded-xl w-full"></div>
  );
};

export const CardsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </div>
  );
};

const AgentsPageSkeleton = () => {
  return (
    <div className="mt-8 space-y-10">
      <div className="flex justify-end gap-3 flex-wrap">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="w-32 h-10 bg-gray-800 rounded-xl animate-pulse"
          ></div>
        ))}
      </div>
      <CardsSkeleton />
    </div>
  );
};

export default AgentsPageSkeleton;
