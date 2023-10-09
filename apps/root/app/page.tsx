"use client";
import "systemjs";
import { Typography } from "@mui/material";
import Loader from "@porz-org/mfe-loader";

export default function Page(): JSX.Element {
  return (
    <main>
      <Typography>Main</Typography>
      <Loader
        appName="@porz-org/feature-home"
        app={() => System.import("@porz-org/feature-home")}
        wrapStyle={{ height: "100%", width: "100%" }}
      />
    </main>
  );
}
