function getVisibleItems(menu, {part, searchText, sortBy}) {
    const keywords = searchText.trim().split(" ");

    const indexed = menu.map((menu, index) => ({...menu, index}));

    let result = indexed.filter((menu) => {
        if (part!=="전체" && menu.part !== part) {
            return false;
        }
        if (!menu.name.includes(searchText)) {
            return false;
        }
        return true;
    });

    if(sortBy === "이름순") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }
    if(sortBy === "최신 추가순") {
        result.sort((a, b) => b.index - a.index);
    }
    
    return result.map((menu) => menu);
}
export default getVisibleItems;