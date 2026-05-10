import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section style={styles.wrap}>
      <span style={styles.badge}>path="*"</span>
      <h1 style={{ ...styles.title, color: "#f6465d" }}>404</h1>
      <p style={styles.sub}>매칭되는 Route가 없을 때 여기로 와요.</p>
      <button style={styles.btn} onClick={() => navigate("/")}>
        홈으로 돌아가기
      </button>
    </section>
  );
}
export default NotFound;

const styles = {
  wrap: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.25rem",
    padding: "3rem 2rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: 800,
    margin: 0,
  },
  sub: {
    fontSize: "1rem",
    color: "#888",
    margin: 0,
    textAlign: "center",
    maxWidth: "520px",
  },
  btn: {
    marginTop: "0.5rem",
    padding: "10px 24px",
    background: "#FCD535",
    color: "#0b0e11",
    border: "none",
    borderRadius: "6px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "14px",
  },
  badge: {
    fontSize: "12px",
    background: "#1e2329",
    border: "1px solid #2b3139",
    padding: "4px 10px",
    borderRadius: "99px",
    color: "#888",
  },
} as const;
