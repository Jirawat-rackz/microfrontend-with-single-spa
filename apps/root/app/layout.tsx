"use client";
import ThemeRegistry from "config-mui/ThemeRegistry";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import "./global.css";

interface RootProps {
  children: React.ReactNode;
}

const menu = ["home", "service", "contact", "about"];

export default function RootLayout({ children }: RootProps): JSX.Element {
  const pathname = usePathname();
  if (pathname === "/") {
    window.location.href = "/login";
  }

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
      <body>
        <nav className="navbar">
          <div className="logo">App</div>
          {pathname !== "/login" && (
            <div className="menu-items">
              <ul className="nav-items">
                {menu.map((title) => (
                  <li
                    className={`nav-link ${
                      pathname === `/${title}` ? "active" : ""
                    }`}
                    key={title}
                  >
                    <Link
                      href=""
                      onClick={() => {
                        window.location.href = `/${title}`;
                      }}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="language-switch">
            <span>Language</span>
            <span>ภาษาไทย</span>
          </div>
        </nav>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
