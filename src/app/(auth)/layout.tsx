import React from "react";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <h1 className="text-3xl my-4">Bienvenidos a Shopping-coffe</h1>
      {children}
    </div>
  );
}
