import { MENU } from "../data/menu.js";
import { useState } from "react";
import MenuSection from "./menu/MenuSection";
import CafeMenuSection from "./menu/CafeMenuSection";
import CafeAboutSection from "./about/CafeAboutSection";
import CafeActionRow from "./filter/CafeActionRow";
import CafeFilterPanel from "./filter/CafeFilterPanel";
import Addpage from "./add/Addpage";
import getVisibleMenu from "../utils/filter.js";

function CafeMenuPage() {
    const [addpage, setAddpage] = useState(false);
    const [menu, setMenu] = useState(MENU);
    const [part, setPart] = useState("전체");
    const [searchText, setSearchText] = useState("");
    const [sortBy, setSortBy] = useState("이름순");

    const visibleMenu = getVisibleMenu(menu, { part, searchText, sortBy });

  return (
    <div className="container">
      <h2 className="title">카페 메뉴</h2>

      <MenuSection>
        <CafeActionRow menuItems={menu} setAddpage={setAddpage} />
        <div className="line" />
        <CafeFilterPanel 
            part={part} 
            sortBy={sortBy} 
            searchText={searchText}
            setPart={setPart}
            setSortBy={setSortBy}
            setSearchText={setSearchText}
        />
      </MenuSection>

      {addpage ? (
        <Addpage setAddpage={setAddpage} setMenu={setMenu} />
      ) : (
        <>
          <CafeMenuSection items={visibleMenu} />
          <CafeAboutSection items={visibleMenu} />
        </>
      )}
    </div>
  );
}

export default CafeMenuPage;
