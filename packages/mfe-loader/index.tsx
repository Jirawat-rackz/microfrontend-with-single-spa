import { FC, useEffect, useRef, useState } from "react";
import SingleSpaParcel from "./SingleSpaParcel";
import { ComposableApp, LoadAppFn, SingleSpaApp } from "./types";

interface LoaderProps {
  app: LoadAppFn;
  appName: string;
  [key: string]: any;
}

const testIsSingleSpa = (
  loadedApp: FC | SingleSpaApp
): loadedApp is SingleSpaApp => "bootstrap" in loadedApp;

const useLoadableApp = (loadApp: LoadAppFn) => {
  const [isSingleSpa, setIsSingleSpa] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const appRef = useRef<undefined | ComposableApp>();

  useEffect(() => {
    let unmounted = false;
    (async () => {
      const app = await loadApp();
      if (unmounted) {
        return;
      }
      if (testIsSingleSpa(app)) {
        setIsSingleSpa(true);
      }
      appRef.current = app;
      setIsLoading(false);
    })();

    return () => {
      unmounted = true;
    };
  }, []);

  if (isLoading) {
    return { isLoading } as const;
  }

  if (isSingleSpa) {
    return {
      isSingleSpa: true,
      isLoading: false,
      LoadedApp: appRef.current as SingleSpaApp,
    } as const;
  }
  return {
    isSingleSpa: false,
    isLoading: false,
    LoadedApp: appRef.current as FC,
  } as const;
};

// Heavily inspired by the leanjs implementation of loading an app
// @see https://github.com/leanjs/leanjs/blob/main/packages/core/src/utils/loadApp.ts
const Loader: FC<LoaderProps> = ({ app, appName, ...props }) => {
  const { isSingleSpa, isLoading, LoadedApp } = useLoadableApp(app);

  if (isLoading) {
    return (
      <section
        style={{
          borderColor: "yellowgreen",
          textAlign: "center",
          borderWidth: "2px",
          borderStyle: "solid",
          height: "100%",
        }}
      >
        <div
          style={{
            textAlign: "right",
            color: "white",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <p
            style={{
              backgroundColor: "yellowgreen",
              width: "fit-content",
              margin: "0",
              padding: "0 4px",
            }}
          >
            Loading
          </p>
        </div>
        Loading...
      </section>
    );
  }

  if (!isLoading && isSingleSpa) {
    return <SingleSpaParcel app={LoadedApp} {...props} />;
  }
  if (!isLoading && LoadedApp) {
    return <LoadedApp {...props} />;
  }

  return <></>;
};

export default Loader;
