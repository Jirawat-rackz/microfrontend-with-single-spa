import "./global.css";

export default function Root() {
  return (
    <section
      style={{
        borderColor: "blue",
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
            backgroundColor: "blue",
            width: "fit-content",
            margin: "0",
            padding: "0 4px",
          }}
        >
          Login
        </p>
      </div>
      <div className="container">
        <div className="content">
          <p className="login-title">เข้าสู่ระบบ</p>
          <form>
            <div className="input-group">
              <label htmlFor="username">Usename *</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password *</label>
              <input type="password" />
            </div>
            <p className="forgot-psw">ลืมรหัสผ่าน</p>
          </form>
          <button
            className="login-button"
            type="button"
            onClick={() => {
              window.location.href = "/home";
            }}
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </section>
  );
}
