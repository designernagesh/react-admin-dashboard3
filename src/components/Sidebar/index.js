import sidebarData from "../../data/data";

function Sidebar() {
    return (
        <section id="sidebar">
            <a href="#" className="brand">
                <i className={sidebarData.brand.logo}></i>
                <span className="text">{sidebarData.brand.text}</span>
            </a>
            <ul className="side-menu top">
                {
                    sidebarData.topMenu.map(menu => {
                        return (
                            <li key={menu.id} className={menu.isActive ? "active" : ""}>
                                <a href="#">
                                    <i className={menu.icon} ></i>
                                    <span className="text">{menu.name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="side-menu">
                {
                    sidebarData.sideMenu.map(menu => {
                        return (
                            <li key={menu.id}>
                                <a href="#" className={menu.className || ''}>
                                    <i className={menu.icon}></i>
                                    <span className="text">{menu.name}</span>
                                </a>
                            </li>
                        )
                    })
                }                
            </ul>
        </section>
    )
}

export default Sidebar
