import React from "react";

type StatsCardProps = {
  title: string;
  value: number; // ⚡ correct : number
};

export const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="bg-[#1e293b] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value.toLocaleString()}</p>
    </div>
  );
};
