import "./global.css";

export default function Root() {
  return (
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
  );
}
