import { useState } from "react";
import "./App.css";

const MENU = [
  {
    part: "커피",
    name: "아메리카노",
    price: "4,000원",
    resource: "bean, water",
    addedAt: "2024-06-01T10:00:00Z",
  },
  {
    part: "커피",
    name: "카페라떼",
    price: "4,500원",
    resource: "bean, milk",
    addedAt: "2024-06-02T11:00:00Z",
  },
  {
    part: "커피",
    name: "바닐라라떼",
    price: "5,000원",
    resource: "bean, milk, vanilla",
    addedAt: "2024-06-03T12:00:00Z",
  },
  {
    part: "스무디",
    name: "딸기스무디",
    price: "5,000원",
    resource: "strawberry, milk",
    addedAt: "2024-06-04T13:00:00Z",
  },
  {
    part: "스무디",
    name: "망고스무디",
    price: "5,000원",
    resource: "mango, milk",
    addedAt: "2024-06-05T14:00:00Z",
  },
  {
    part: "에이드",
    name: "레몬에이드",
    price: "4,500원",
    resource: "lemon, water",
    addedAt: "2024-06-06T15:00:00Z",
  },
  {
    part: "에이드",
    name: "자몽에이드",
    price: "4,500원",
    resource: "grapefruit, water",
    addedAt: "2024-06-07T16:00:00Z",
  },
  {
    part: "디저트",
    name: "크루아상",
    price: "3,500원",
    resource: "flour, butter",
    addedAt: "2024-06-07T17:00:00Z",
  },
  {
    part: "디저트",
    name: "치즈케이크",
    price: "5,500원",
    resource: "cheese, flour",
    addedAt: "2024-06-07T18:00:00Z",
  },
  {
    part: "디저트",
    name: "휘낭시에",
    price: "2,800원",
    resource: "flour, butter",
    addedAt: "2024-06-07T19:00:00Z",
  },
];

function getVisibleItems(items, { part, searchText, sortBy }) {
  const keyword = searchText.trim().toLowerCase();

  const indexed = items.map((item, index) => ({ item, index }));

  let result = indexed.filter(({ item }) => {
    if (part !== "전체" && item.part !== part) return false;
    if (!item.name.toLowerCase().includes(keyword)) return false;
    return true;
  });

  if (sortBy === "이름순") {
    result.sort((a, b) => a.item.name.localeCompare(b.item.name, "ko"));
  }

  if (sortBy === "최신추가순") {
    result.sort((a, b) => b.index - a.index);
  }

  return result.map(({ item }) => item);
}

function CafeMenuPage() {
  const [addpage, setAddpage] = useState(false);
  const [part, setPart] = useState("전체");
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("이름순");

  return (
    <div className="container">
      <h2 className="title">카페 메뉴</h2>

      <MenuSection>
        <CafeActionRow
          setAddpage={setAddpage}
          menuItems={MENU}
        />

        <div className="line" />

        <CafeFilterPanel
          part={part}
          sortBy={sortBy}
          searchText={searchText}
          onPartChange={setPart}
          onSortByChange={setSortBy}
          onSearchTextChange={setSearchText}
        />
      </MenuSection>

      {addpage && <Addpage />}
      {!addpage && (
        <>
          <CafeMenuSection items={MENU} />
          <CafeAboutSection items={MENU} />
        </>
      )}
    </div>
  );
}
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
          <button type="button" className="menu-button">추가하기</button>
          <button type="button" className="menu-button">취소</button>
        </div>
      </form>
    </section>
  );
}

function AddInput({ id, label, value, placeholder, onChange }) {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={id}>{label}</label>
      <input
        className="form-input"
        id={id}
        name={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function MenuSection({ children }) {
  return (
    <div className="menu-section">
      {children}
    </div>
  );
}

function CafeActionRow({ setAddpage, menuItems }) {

  return (
    <div className="button-row">
      <button className="menu-button" onClick={() => setAddpage(true)}>
        카페 메뉴 추가
      </button>
      <button className="menu-button">
        카페 메뉴 삭제
      </button>
      <p className="count-text">총 {menuItems.length}개</p>
    </div>
  );
}

function CafeFilterPanel({
  part,
  sortBy,
  searchText,
  onPartChange,
  onSortByChange,
  onSearchTextChange,
}) {
  return (
    <div className="search-bar">
      <PartFilterSelect value={part} onChange={onPartChange} />
      <SortSelect value={sortBy} onChange={onSortByChange} />
      <SearchInput value={searchText} onChange={onSearchTextChange} />
    </div>
  );
}

function PartFilterSelect({ value, onChange }) {
  return (
    <>
      <p className="control-label">파트</p>
      <select
        className="select-box"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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

function SortSelect({ value, onChange }) {
  return (
    <>
      <p className="control-label">정렬</p>
      <select
        className="select-box"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="이름순">이름순</option>
        <option value="최신추가순">최신추가순</option>
      </select>
    </>
  );
}

function SearchInput({ value, onChange }) {
  return (
    <>
      <p className="control-label">검색</p>
      <input
        className="select-box"
        type="text"
        placeholder="메뉴 검색"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

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

function MenuCard({ item }) {
  return (
    <article className={`menu-card${item.name === "아메리카노" ? " is-main" : ""}`}>
      <figure className="menu-image">
        <span className="menu-part">{item.part}</span>
        <img  alt="" />
      </figure>
      <section className="menu-info">
        <h2 className="menu-name">{item.name}</h2>
        <p className="menu-price">{item.price}</p>
      </section>
    </article>
  );
}

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

function MenuAboutCard({ item }) {
  item.resource = item.resource.split(",").map((s) => s.trim()).join(", ");
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

export default function App() {
  fetch("https://randomuser.me/api/?results=10&nat=us,gb,ca,au,nz")
  .then((res) => res.json())
  .then((data) => {
    console.log("랜덤 유저 데이터:", data.results);
  });
  return <CafeMenuPage />;
}