import { useEffect } from "react";
import { Link } from "react-router";

export const App = () => {
  useEffect(() => {
    console.log(window.versions.chrome());
  });
  return (
    <div>
      <h1>Hello, Electron!</h1>
      <p>hoge</p>
      <Link to="/app2">App2 Page</Link>
    </div>
  );
}
