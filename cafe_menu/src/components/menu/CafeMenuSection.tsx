import MenuCard from "./MenuCard"

function CafeMenuSection({ items }) {
  if (items.length === 0) {
    return (
      <section className="menu-card-container">
        <div className="empty-text">검색 결과가 없습니다.</div>
      </section>
    );
  }

  return (
    <div className="menu-card-container">
      {items.map((item) => (
        <MenuCard key={`${item.part}-${item.name}`} item={item} />
      ))}
    </div>
  );
}
export default CafeMenuSection;