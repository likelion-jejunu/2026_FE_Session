function MenuCard({ item }) {
  return (
    <article
      className={`menu-card${item.name === "아메리카노" ? " is-main" : ""}`}
    >
      <figure className="menu-image">
        <span className="menu-part">{item.part}</span>
        <img src={item.imgSrc} alt={item.name} />
      </figure>
      <section className="menu-info">
        <h2 className="menu-name">{item.name}</h2>
        <p className="menu-price">{item.price}</p>
      </section>
    </article>
  );
}
export default MenuCard;