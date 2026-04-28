function CafeActionRow({ menuItems }) {
  return (
    <div className="button-row">
      <button className="menu-button" >
        카페 메뉴 추가
      </button>
      <button className="menu-button">카페 메뉴 삭제</button>
      <p className="count-text">총 {menuItems.length}개</p>
    </div>
  );
}
export default CafeActionRow;