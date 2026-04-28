function Addpage() {
  return (
    <section className="add-page-section">
      <h3 className="add-page-title">메뉴 추가폼</h3>

      <form className="add-page">
        <AddInput
          label="메뉴 이름"
          id="menu-name"
          value=""
          placeholder={"메뉴 이름"}
          onChange={() => {}}
        />

        <AddInput
          label="가격"
          id="menu-price"
          value=""
          placeholder={"가격"}
          onChange={() => {}}
        />

        <div className="form-row">
          <label className="form-label" htmlFor="menu-part">
            파트
          </label>
          <select className="form-input" id="menu-part" name="menu-part">
            <option value="커피">커피</option>
            <option value="스무디">스무디</option>
            <option value="에이드">에이드</option>
            <option value="디저트">디저트</option>
          </select>
        </div>

        <div className="add-page-action">
          <button type="button" className="menu-button">
            추가하기
          </button>
          <button type="button" className="menu-button">
            취소
          </button>
        </div>

      </form>
    </section>
  );
}
export default Addpage;