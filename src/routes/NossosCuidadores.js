import { lazy,Suspense } from 'react';
import '../components/NossosCuidadores/NossosCuidadores.css'
const Lazyfooter=lazy(()=>import("../components/Footer/Footer.js"))
const LazyNavigation = lazy(() => import('../components/Busca/Navigation/Navigation'));
const LazyProducts = lazy(() => import('../components/Busca/Products/Products'));
const LazyRecomended = lazy(() => import('../components/Busca/Recomended/Recomended'));
const LazySidebar = lazy(() => import('../components/Busca/Sidebar/Sidebar'));


function NossosCuidadores (){
    return(
        <>
      <Suspense fallback={<div>ta regado</div>}>
        <LazySidebar />
        <LazyNavigation />
        <LazyRecomended />
        <LazyProducts />
        <Lazyfooter/>
        </Suspense>
        </>
    )
}

export default NossosCuidadores;