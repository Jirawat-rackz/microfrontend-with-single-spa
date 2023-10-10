"use client";
import Script from "next/script";

export default function RootLayout(): JSX.Element {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="/import-map.json"
          type="systemjs-importmap"
        />
        <meta content="systemjs-importmap" name="importmap-type" />
      </head>
      <body>aa</body>
    </html>
  );
}
