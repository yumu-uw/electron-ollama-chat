import React, { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    console.log(window.versions.chrome());
  });
  return (
    <div>
      <h1>Hello, Electron!</h1>
      <p>hoge</p>
    </div>
  );
}
