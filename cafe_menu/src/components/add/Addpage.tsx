import AddInput from "../add/AddInput";
import { useState } from "react";

function Addpage({setAddpage, setMenu}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [part, setPart] = useState("커피");
  const [resource, setResource] = useState("");
  

  return (
    <section className="add-page-section">
      <h3 className="add-page-title">메뉴 추가폼</h3>

      <form className="add-page">
        <AddInput
          label="메뉴 이름"
          id="menu-name"
          value={name}
          placeholder={"메뉴 이름"}
          onChange={setName}
        />

        <AddInput
          label="가격"
          id="menu-price"
          value={price}
          placeholder={"가격"}
          onChange={setPrice}
        />

        <div className="form-row">
          <label className="form-label" htmlFor="menu-part">
            파트
          </label>
          <select className="form-input" id="menu-part" name="menu-part"
           value={part} onChange={(e) => setPart(e.target.value)}>
            <option value="커피">커피</option>
            <option value="스무디">스무디</option>
            <option value="에이드">에이드</option>
            <option value="디저트">디저트</option>
          </select>
        </div>

        <AddInput
          label="재료"
          id="menu-resource"
          value={resource}
          placeholder={"재료"}
          onChange={setResource}
        />

        <div className="add-page-action">
          <button type="button" className="menu-button" 
            onClick={() => {
            setMenu((prev) => 
                [...prev, { 
                  name, 
                  price, 
                  part, 
                  resource: resource,
                  addedAt: new Date().toISOString(),
                }]);
              setAddpage(false)}}
          >
            추가하기
          </button>
          <button type="button" className="menu-button" onClick={() => {setAddpage(false)}}>
            취소
          </button>
        </div>

      </form>
    </section>
  );
}
export default Addpage;