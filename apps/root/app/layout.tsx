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
        <section
          style={{
            borderColor: "orange",
            textAlign: "center",
            borderWidth: "2px",
            borderStyle: "solid",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "0",
              color: "white",
            }}
          >
            <p
              style={{
                backgroundColor: "orange",
                width: "fit-content",
                margin: "0",
                padding: "0 4px",
              }}
            >
              Root
            </p>
          </div>
          <nav className="navbar">
            <div className="logo">App</div>
            {pathname !== "/login" && (
              <>
                <div className="menu-items">
                  <ul className="nav-items">
                    {menu.map((title) => (
                      <li
                        className={`nav-link ${
                          pathname === `/${title}` ? "active" : ""
                        }`}
                        key={title}
                      >
                        <Link href={`/${title}`}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <a className="logout-button" href="/login">
                  ออกจากระบบ
                </a>
              </>
            )}
          </nav>
          <ThemeRegistry>{children}</ThemeRegistry>
        </section>
      </body>
    </html>
  );
}
