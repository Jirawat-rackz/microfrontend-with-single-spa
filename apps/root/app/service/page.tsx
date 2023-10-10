"use client";
import Loader from "@porz-org/mfe-loader";
import "systemjs";

export default function Page(): JSX.Element {
  return (
    <Loader
      app={() => System.import("@porz-org/feature-service")}
      appName="@porz-org/feature-service"
      wrapStyle={{ height: "100%", width: "100%" }}
    />
  );
}
