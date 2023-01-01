

import {useState,useEffect,useRef} from 'react';

import BioUser from "./containerItem/bioUser";
import NavContainer from "./containerItem/navContainer";





// component container 
const ContainerMain = ()=>{
    return (
        <section className="Container relative w-full md:w-[750px] ">
            {/* component container nav */}
            <NavContainer/>

            {/* component input search  */}
            <form action="">
            <section className="container-input-search mt-5 py-2 pr-2 relative w-full h-[60px] bg-github-bg-content dark:bg-github-bg-content-dark rounded-lg shadow-[0_4px_15px_-5px_rgba(0,0,0,0.3)] grid grid-cols-[auto_1fr_auto_auto] grid-rows-1 overflow-hidden ">

             
                    {/* icon search  */}
                 <div className="icon-search w-[50px] grid place-items-center select-none h-full ">
                   <img src="./images/icon-search.svg" alt="" /> 
                 </div>  
                
                {/* input search */}
                <input type="text" className="input-search w-full h-full text-github-text-alt dark:text-white font-[500] outline-none rounded-md bg-transparent" placeholder="Search Github username..." />

                {/* alert not found */}

                <p className="search-not-found grid place-items-center pl-2 max-[400px]:text-xs hidden h-full text-red-700">
                    No results
                </p>

                {/* BUTTON SEARCH */}
                <button className="btn-search bg-github-btn px-5 rounded-lg ml-2 transition-all duration-300 hover:bg-github-btn-hover font-bold text-white">Search</button>
             
            </section>
            </form>

            {/* component bio user */}
            <BioUser/>
        </section>
    )
}

export default ContainerMain;