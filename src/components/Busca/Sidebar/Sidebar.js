import Category from './Category/Category'
import Price from './Price/Price'
import City from './City/City'
import './SidebarStyles.css'

function Sidebar() {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🤖</h1>
        </div>

        <Category/>
        <Price/>
        <City/>
    </section>
    </>
  )
}

export default Sidebar;
