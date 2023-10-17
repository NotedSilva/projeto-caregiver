import './SidebarStyles.css'
import Category from './Category/Category'
import Price from './Price/Price'
import City from './City/City'

function Sidebar() {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🤑</h1>
        </div>

        <Category/>
        <City/>
        <Price/>



    </section>
    </>
  )
}

export default Sidebar;
