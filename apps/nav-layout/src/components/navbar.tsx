import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";

const menu = ["home", "service", "contact", "about"];

export default function PrimaryNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
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
        {/* {pathname !== "/login" && (
          <>
            <div className="menu-items">
              <ul className="nav-items">
                {menu.map((title) => (
                  <li
                    className={`nav-link ${
                      pathname === `/${title}` ? "active" : ""
                    }`}
                    key={title}
                    onClick={() => navigate(`/${title}`)}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>
            <a className="logout-button" href="/login">
              ออกจากระบบ
            </a>
          </>
        )} */}
        {((pathname === "/" || pathname === "/login") && <></>) || (
          <>
            <div className="menu-items">
              <ul className="nav-items">
                {menu.map((title) => (
                  <li
                    className={`nav-link ${
                      pathname === `/${title}` ? "active" : ""
                    }`}
                    key={title}
                    onClick={() => navigate(`/${title}`)}
                  >
                    {title}
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
    </section>
  );
}
