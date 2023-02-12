import {useState} from "react";
import {NavLink} from "react-router-dom";
import config from "../../config.json";
import classes from './Header.module.scss';

interface NavItem {
    title: string;
    url: string;
}

const Header = () => {
    const [isNavActive, setIsNavActive] = useState<boolean>(false)
    const handleBtnClick = () => setIsNavActive(!isNavActive)

    const navItems: NavItem[] = config.header?.nav_items;
    const author:string = config.header?.author

    return (
        <header className={classes.header}>
            <div className={classes.logo_container}>
                <NavLink to={"/"}>
                    <span>{author}</span>
                </NavLink>
            </div>
            <div className={classes.nav_container}>
                {navItems && navItems.map(({title, url}) =>
                    <NavLink key={title} onClick={handleBtnClick}
                             to={url}>{title}</NavLink>)}
            </div>
        </header>
    )
}
export default Header