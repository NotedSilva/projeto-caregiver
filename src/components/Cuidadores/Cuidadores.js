import React from "react";
import SearchBar from "./pages/SearchBar/SearchBar";
import FilterPanel from "./pages/FilterPanel/FilterPanel";
import List from "./pages/List/List";

const Cuidadores = () => {
    return(
        <div className="cuidadores">
            {/*Search Bar*/}

            <SearchBar />

            <div className='home_panelList-wrap'>
            <div className='home_panel-wrap'>
            {/*Side Panels*/}

            <FilterPanel />
            <div className='home_panel-wrap'>
            {/* List & Empty View */}
            <List />
            </div>
            </div>
            </div>
        </div>
    )
}

export default Cuidadores; 