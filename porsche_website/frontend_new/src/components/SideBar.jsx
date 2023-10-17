import React, {useEffect, useRef} from 'react';
import ModelCategoryList from "./ModelCardList";
function Sidebar({isOpen, modelCategories, setSidebarOpen}) {
    const sideBarRef = useRef(null)
    const navInteract = (open) => {
        if (!sideBarRef.current) return
        if (!open){
            sideBarRef.current.style.width = "0"
            // document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
            setSidebarOpen(false)
        }
        else {
            sideBarRef.current.style.width = "250px"
            // document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
        }
    }
    useEffect(() => {
        if (isOpen) navInteract(true)
    }, [isOpen]);
    return (
        <div>
            <div id="mySidenav" ref={sideBarRef}
                className={`sidenav fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-gray-800 p-8`}>
                <ModelCategoryList
                    modelCategories={modelCategories}
                />
                <a href="javascript:void(0)" className="close-btn" onClick={() => navInteract(false)}>&times;</a>

            </div>
            {/*<div id="mySidenav" className="sidenav" ref={sideBarRef}>*/}
            {/*    <a href="javascript:void(0)" className="close-btn" onClick={() => navInteract(false)}>&times;</a>*/}
            {/*    <a href="#"></a>*/}
            {/*    <a href="#"></a>*/}
            {/*    <a href="#"></a>*/}
            {/*    <a href="#"></a>*/}
            {/*</div>*/}
        </div>

    );
}

export default Sidebar;
