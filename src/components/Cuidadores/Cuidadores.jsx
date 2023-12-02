import React, { useState, useEffect } from "react";
import SearchBar from "./pages/SearchBar/SearchBar";
import FilterPanel from "./pages/FilterPanel/FilterPanel";
import List from "./pages/List/List";
import '../Cuidadores/CuidadorStyles.css';
import { dataList } from "../../db/DbCuidadores";
import EmptyView from "./pages/EmptyView/EmptyView";

const Cuidadores = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setselectedRating] = useState(null);
    const [selectedPrice, setselectedPrice] = useState([30,500]);
    const [list, setList] = useState(dataList);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');



    const [localização, setlocalização] = useState([
        { id: 1, checked: false, label: 'São Paulo' },
        { id: 2, checked: false, label: 'Rio de Janeiro' },
        { id: 3, checked: false, label: 'Bahia' },
        { id: 4, checked: false, label: 'Minas Gerais' },
        { id: 5, checked: false, label: 'Rio Grande do Sul' },
      ]);


    const handleselectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

    const handleSelectRating = (event, value) =>
    !value ? null : setselectedRating(value);

    const handleChangeChecked=id=>{
        const localizaçãoStateList=localização;
        const ChangeCheckedLocalização=localizaçãoStateList.map(item=>item.id===id?{...item,checked:!item.checked}: item);

        setlocalização(ChangeCheckedLocalização);
    };

    const handleChangePrice = (event, value) => {
        setselectedPrice(value);
      };

      const applyFilters = () => {
        let updatedList = dataList;


        // Filtro da avaliação
        if (selectedRating) {
            updatedList = updatedList.filter(
              (item) => parseInt(item.rating) === parseInt(selectedRating)
            );
          }

            // Filtro da categoria
        if (selectedCategory) {
            updatedList = updatedList.filter(
            (item) => item.category === selectedCategory
            );
         }
/*
         // Localização Filtro (tenho que arrumar)
        const localizaçãoChecked = localização
            .filter((item) => item.checked)
            .map((item) => item.label.toLowerCase());

        if (localizaçãoChecked.length) {
            updatedList = updatedList.filter((item) =>
            localizaçãoChecked.includes(item.localization)
            );
        }
*/

         // Search Filter (modelo antigo, onde encontra a letra que vc digitar em qualquer parte do nome da pessoa)
      /*  if (searchInput) {
            updatedList = updatedList.filter(
            (item) =>
            item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==-1
            );
            }
*/

                // Filtro de busca
            if (searchInput) {
                updatedList = updatedList.filter(
                    (item) =>
                    item.name &&
                    item.name.toLowerCase().startsWith(searchInput.toLowerCase().trim())
                );
                }


            // Filtro de preço
            const minPrice = selectedPrice[0];
            const maxPrice = selectedPrice[1];

            updatedList = updatedList.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
            );






          setList(updatedList);

          !updatedList.length ? setResultsFound(false) : setResultsFound(true);


        }

        useEffect(() => {
            applyFilters();
          }, [selectedRating, selectedCategory, localização, selectedPrice, searchInput]);

            // reset de filtros
          const resetFilters = () => {
            setSelectedCategory(null);
            setselectedRating(null);
            setlocalização(localização.map(item => ({ ...item, checked: false })));
            setselectedPrice([30, 500]);
            setSearchInput('');
          };


    return(
        <div className="cuidadores">
        {/* Barra de pesquisa */}
        <SearchBar
            value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
        />

        <div className='home_container'>
            <div className='home_panel-wrap'>
                {/* Painel de filtros */}
                <FilterPanel
                    selectCategory={handleselectCategory}
                    selectedCategory={selectedCategory}
                    selectRating={handleSelectRating}
                    selectedRating={selectedRating}
                    localizacao={localização}
                    changeChecked={handleChangeChecked}
                    selectedPrice={selectedPrice}
                    changePrice={handleChangePrice}
                    resetFilters={() => {
                        setSelectedCategory(null);
                        setselectedRating(null);
                        setselectedPrice([30, 500]);
                        setSearchInput('');
                    }}
                />
            </div>
            
            <div className='home_list-wrap'>
                {/* Lista & Empty View */}
                {resultsFound ? <List list={list} /> : <EmptyView />}
            </div>
        </div>
    </div>
    )
}

export default React.memo(Cuidadores); 