import { MENU } from "../data/menu";
import MenuSection from "./menu/MenuSection";
import CafeMenuSection from "./menu/CafeMenuSection";
import CafeAboutSection from "./about/CafeAboutSection";
import CafeActionRow from "./filter/CafeActionRow";
import CafeFilterPanel from "./filter/CafeFilterPanel";

function CafeMenuPage() {
    const part = "전체";
    const searchText = "";
    const sortBy = "이름순";

    return (
        <div className="container">
            <h2 className="title">카페 메뉴</h2>

            <MenuSection>
                <CafeActionRow menuItems={MENU} />
                <div className="line" />
                <CafeFilterPanel
                    part={part}
                    sortBy={sortBy}
                    searchText={searchText}
                />
            </MenuSection>

            <CafeMenuSection items={MENU} />
            <CafeAboutSection items={MENU} />

        </div>
    );
}

export default CafeMenuPage;