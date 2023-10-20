import { lazy,Suspense } from 'react';
import '../components/NossosCuidadores/NossosCuidadores.css'
const Lazyfooter=lazy(()=>import("../components/Footer/Footer.js"))
import SearchBar from '../components/Common/SearchBar/SearchBar';
import List from '../components/Common/List/List';
import Filter from '../components/Common/Filter/Filter'
import EmptyView from '../components/Common/EmptyView/EmptyView';



function NossosCuidadores (){
    return(
        <>
        <div className="home">
        <SearchBar />
        <div className="home_panelList-wrap">

        
        
        <EmptyView />
        <Filter />
        <List />
        </div>
        </div>
      <Suspense fallback={<div>ta carregando</div>}>
        <Lazyfooter/>
        </Suspense>
        </>
    )
}

export default NossosCuidadores;