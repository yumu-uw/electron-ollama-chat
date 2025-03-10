import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router";

export const App = () => {
  useEffect(() => {
    console.log(window.versions.chrome());
  });
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <p>hoge</p>
      <Link to="/app2">App2 Page</Link>
    </div>
  );
}
