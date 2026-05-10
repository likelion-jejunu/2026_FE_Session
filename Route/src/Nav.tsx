import { NavLink, Link } from "react-router-dom";

function Nav() {
  function getLinkStyle({ isActive }) { // isActive는 True/False
    return isActive ? styles.linkActive : styles.link 
      // 활성화된 링크에만 linkActive 스타일 적용
  }

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <Link to="/" style={styles.brand}>
          <span style={styles.brandDot}>●</span>
          <span style={styles.brandText}>Route</span>
        </Link>

        <nav style={styles.menu}>
          <NavLink to="/" end style={getLinkStyle}>홈</NavLink>
          <NavLink to="/about" style={getLinkStyle}>소개</NavLink>
          <NavLink to="/post/1" style={getLinkStyle}>게시글 1</NavLink>
          <NavLink to="/post/2" style={getLinkStyle}>게시글 2</NavLink>
          <NavLink to="/post/999" style={getLinkStyle}>게시글 999</NavLink>
          <NavLink to="/없는페이지" style={getLinkStyle}>없는 페이지</NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Nav;

const styles = {
  header: {
    width: "100%",
    background: "rgba(11,14,17,0.85)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid #2b3139",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  inner: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "14px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
  },
  brandDot: {
    color: "#FCD535",
    fontSize: "14px",
  },
  brandText: {
    color: "#eaecef",
    fontWeight: 700,
    fontSize: "16px",
    letterSpacing: "0.02em",
  },
  menu: {
    display: "flex",
    gap: "0.25rem",
    flexWrap: "wrap",
  },
  link: {
    color: "#b7bdc6",
    textDecoration: "none",
    fontSize: "13px",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "all 0.15s ease",
  },
  linkActive: {
    color: "#0b0e11",
    background: "#FCD535",
    fontWeight: 600,
    padding: "6px 12px",
    borderRadius: "6px",
  },
} as const;
