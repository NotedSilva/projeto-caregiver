import '../Recomended/RecomendedStyles.css'

function Recomended() {
  return (
    <>
    <div>
      <h2 className="recommended-title">Sugestões</h2>
      <div className="recommended-flex">
      <button id="buton" className="btns">Todas categorias</button>
        <button id="buton" className="btns">Crianças</button>
        <button id="buton" className="btns">Idosos</button>
        <button id="buton" className="btns">Pets</button>
      </div>
    </div>
    </>
  )
}

export default Recomended;
