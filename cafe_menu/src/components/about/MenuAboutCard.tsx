function MenuAboutCard({ item }) {
  const resource = item.resource
    .split(",")
    .map((s) => s.trim())
    .join(", ");
  return (
    <section className="menu-about-card">
      <header className="menu-about-header">
        <h1 className="menu-about-name">{item.name}</h1>
        <p className="menu-about-price">{item.price}</p>
      </header>
      <section className="menu-added-section">
        <h3>상세 재료</h3>
        <ul className="menu-about-list">
          {item.resource.split(",").map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </section>
      <section className="menu-added-section">
        <h3>메뉴가 추가된 날짜</h3>
        <p>{new Date(item.addedAt).toLocaleString()}</p>
      </section>
    </section>
  );
}
export default MenuAboutCard;