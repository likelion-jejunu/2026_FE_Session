import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("홈이 렌더링됐어요.");
    return () => {
      console.log("홈이 사라져요.");
    }
  }, []);
  
  return (
    <section style={styles.wrap}>
        
      <span style={styles.badge}>path="/"</span>
      <h1 style={styles.title}>🏠 홈 페이지</h1>
      <p style={styles.sub}>
        BrowserRouter가 "/" URL을 감지해서 이 컴포넌트를 렌더링했어요.
      </p>
      <button style={styles.btn} onClick={() => navigate("/about")}>
        소개 페이지로 이동 →
      </button>
      <Outlet />
    </section>
  );
}
export default Home;

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
    fontSize: "2.5rem",
    fontWeight: 800,
    margin: 0,
    color: "#ffffff",
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
