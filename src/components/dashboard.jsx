import React from "react";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <div>
      <Box
        sx={{
          height: "50px",
          width: "100%",
          borderBottom: 1,
          borderColor: "primary.main",
        }}
      />
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          width: "50px",
          borderRight: 1,
          borderColor: "primary.main",
        }}
      />
    </div>
  );
};

export default Dashboard;
