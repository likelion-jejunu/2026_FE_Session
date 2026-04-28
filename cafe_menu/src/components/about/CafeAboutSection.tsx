import MenuAboutCard from "./MenuAboutCard";

function CafeAboutSection({ items }) {
  if (items.length === 0) {
    return (
      <section className="menu-about-container">
        <div className="empty-text">검색 결과가 없습니다.</div>
      </section>
    );
  }

  return (
    <div className="menu-about-container">
      {items.map((item) => (
        <MenuAboutCard key={`${item.part}-${item.name}`} item={item} />
      ))}
    </div>
  );
}
export default CafeAboutSection;