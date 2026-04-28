function CafeFilterPanel({
  part,
  sortBy,
  searchText,
}) {
  return (
    <div className="search-bar">
      <PartFilterSelect value={part} />
      <SortSelect value={sortBy} />
      <SearchInput value={searchText} />
    </div>
  );
}
export default CafeFilterPanel;

function PartFilterSelect({ value }) {
  return (
    <>
      <p className="control-label">파트</p>
      <select
        className="select-box"
        value={value}
      >
        <option value="전체">전체</option>
        <option value="커피">커피</option>
        <option value="스무디">스무디</option>
        <option value="에이드">에이드</option>
        <option value="디저트">디저트</option>
      </select>
    </>
  );
}

function SortSelect({ value }) {
  return (
    <>
      <p className="control-label">정렬</p>
      <select
        className="select-box"
        value={value}
      >
        <option value="이름순">이름순</option>
        <option value="최신추가순">최신추가순</option>
      </select>
    </>
  );
}

function SearchInput({ value }) {
  return (
    <>
      <p className="control-label">검색</p>
      <input
        className="select-box"
        type="text"
        placeholder="메뉴 검색"
        value={value}
      />
    </>
  );
}