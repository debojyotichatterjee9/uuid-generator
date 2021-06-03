import React, { useState, useRef } from "react";
import "./Menu.css"

const Menu = props => {
    const [activeFlag, setActiveFlag] = useState({
        one: false,
        three: false,
        four: true,
        five: false,
        empty: false
    })
    const [menuBorderLefVal, setMenuBorderLefVal] = useState(254)
    const menuRef = useRef();
    const menuItemRef = useRef();
    const menuBorderRef = useRef();
    const menuClickHandler = (event) => {
        const bgColorsBody = { one: "#ffb457", two: "#ff96bd", three: "#9999fb", four: "#ffe797", five: "#cffff1" };
        let item = event.target.element;
        let id = event.target.id;
        setActiveFlag(prevState => {
            let updatedFlagVals = {
                one: false,
                three: false,
                four: false,
                five: false,
                empty: false
            }
            updatedFlagVals[id] = true
            return updatedFlagVals;
        })
        document.body.style.backgroundColor = bgColorsBody[id];

        // const offsetActiveItem = menuItemRef.current.getBoundingClientRect();
        // const offsetMenuBar = menuRef.current.getBoundingClientRect();
        // const offsetMenuBorder = menuBorderRef.current.getBoundingClientRect();
        // const left = Math.ceil(event.target.offsetLeft - menuRef.current.clientLeft - (Math.ceil(offsetMenuBorder.width) - event.target.offsetWidth) / 2);
        // setMenuBorderLefVal(left);


        props.onUuidTypeChange(id);
    }
    return (
        <React.Fragment>
            <menu id="menu_bar" ref={menuRef} className="menu">

                <button
                    id="one"
                    ref={menuItemRef}
                    className={activeFlag.one ? "menu__item active" : "menu__item"}
                    style={{ "--bgColorItem": "#ff8c00" }}
                    onClick={(e) => menuClickHandler(e)}>
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M3.8,6.6h16.4" />
                        <path d="M20.2,12.1H3.8" />
                        <path d="M3.8,17.5h16.4" />
                    </svg>
                </button>

                <button
                    id="three"
                    ref={menuItemRef}
                    className={activeFlag.three ? "menu__item active" : "menu__item"}
                    style={{ "--bgColorItem": "#f54888" }}
                    onClick={(e) => menuClickHandler(e)}>
                    {/* <svg className="icon" viewBox="0 0 24 24">
                        <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
        C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"/>
                        <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
                    </svg> */}
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M3.8,6.6h16.4" />
                        <path d="M20.2,12.1H3.8" />
                        <path d="M3.8,17.5h16.4" />
                    </svg>
                </button>

                <button
                    id="four"
                    ref={menuItemRef}
                    className={activeFlag.four ? "menu__item active" : "menu__item"}
                    style={{ "--bgColorItem": "#4343f5" }}
                    onClick={(e) => menuClickHandler(e)}>
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
                        <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
                        <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
                    </svg>
                </button>

                <button
                    id="five"
                    ref={menuItemRef}
                    className={activeFlag.five ? "menu__item active" : "menu__item"}
                    style={{ "--bgColorItem": "#e0b115" }}
                    onClick={(e) => menuClickHandler(e)}>
                    {/* <svg className="icon" viewBox="0 0 24 24">
                        <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
          C3.9,4.4,4.4,3.9,5.1,3.9z"/>
                        <path d="M4.2,9.3h15.6" />
                        <path d="M9.1,9.5v10.3" />
                    </svg> */}
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M3.8,6.6h16.4" />
                        <path d="M20.2,12.1H3.8" />
                        <path d="M3.8,17.5h16.4" />
                    </svg>
                </button>

                <button
                    id="empty"
                    className={activeFlag.empty ? "menu__item active" : "menu__item"}
                    style={{ "--bgColorItem": "#65ddb7" }}
                    onClick={(e) => menuClickHandler(e)}>
                    {/* <svg className="icon" viewBox="0 0 24 24" >
                        <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
          C3.9,4.4,4.4,3.9,5.1,3.9z"/>
                        <path d="M5.5,20l9.9-9.9l4.7,4.7" />
                        <path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" />
                    </svg> */}
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M3.8,6.6h16.4" />
                        <path d="M20.2,12.1H3.8" />
                        <path d="M3.8,17.5h16.4" />
                    </svg>
                </button>

                {/* <div ref={menuBorderRef} className="menu__border" style={{ "transform": `translate3d(${menuBorderLefVal}px, 0px, 0px)` }}></div> */}

            </menu>

            <div className="svg-container">
                <svg viewBox="0 0 202.9 45.5" >
                    <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
                        <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
                    </clipPath>
                </svg>
            </div>
        </React.Fragment>
    );
}

export default Menu;