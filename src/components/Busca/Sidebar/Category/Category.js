import '../Category/CategoryStyles.css'

function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Categorias</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
            <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
            <span className="checkmark"></span>Idosos
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
            <span className="checkmark"></span>Crianças
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
            <span className="checkmark"></span>Data
        </label>
      </div>
    </div>
  )
}

export default Category;