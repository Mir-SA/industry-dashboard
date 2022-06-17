import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function BasicCard({ header }) {
  return (
    <Card sx={{ minWidth: 275, minHeight: 75 }}>
      <Typography align="center" padding={1} variant="h5" component="div">
        {header}
      </Typography>
    </Card>
  );
}
