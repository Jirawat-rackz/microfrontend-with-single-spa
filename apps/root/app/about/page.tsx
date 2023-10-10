"use client";
import Loader from "@porz-org/mfe-loader";
import "systemjs";

export default function Page(): JSX.Element {
  return (
    <Loader
      app={() => System.import("@porz-org/feature-about")}
      appName="@porz-org/feature-about"
      wrapStyle={{ height: "100%", width: "100%" }}
    />
  );
}
