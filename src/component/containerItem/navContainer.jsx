
import { useState,useEffect,useRef } from "react";

const NavContainer = ()=>{

    let [html,setHtml] = useState();
    
    // ref for element span toggle di nav toggle
    let spanMode = useRef()

    // ref form element img btn toggle
    let imgToggle = useRef()


    useEffect(()=>{
        setHtml(document.querySelector('html'))
        if(localStorage.getItem('mode')){
            document.querySelector('html').classList.add(localStorage.getItem('mode'))
            spanMode.current.textContent = localStorage.getItem('spanMode');
            imgToggle.current.src = localStorage.getItem('imgMode');
        }
        else{ 
            document.querySelector('html').classList.add('light')
            spanMode.current.textContent = 'dark'
            imgToggle.current.src = './images/icon-moon.svg';
        }
       
    },[])

    const eventToggle = ()=>{
        if(html.classList.contains('light')){
            localStorage.setItem('mode','dark');
            localStorage.setItem('spanMode','light');
            localStorage.setItem('imgMode','./images/icon-sun.svg');
            html.classList.replace('light',localStorage.getItem('mode'))
            spanMode.current.textContent =  localStorage.getItem('spanMode')
            imgToggle.current.src = localStorage.getItem('imgMode')
        }else{
            localStorage.setItem('mode','light');
            localStorage.setItem('spanMode','dark');
            localStorage.setItem('imgMode','./images/icon-moon.svg');
            html.classList.replace('dark',localStorage.getItem('mode'))
            spanMode.current.textContent =  localStorage.getItem('spanMode')
            imgToggle.current.src = localStorage.getItem('imgMode')
        }
    }
    return(
        <nav className="nav-container  relative w-full h-[50px] grid grid-cols-[1fr_auto] grid-rows-[auto] ">
            <h2 className="nav-title font-semibold text-2xl flex-1 text-slate-900 dark:text-white self-center">devfinder</h2>
            <button className="btn-toggle  w-[100px] flex justify-center items-center gap-x-2" onClick={eventToggle}>
                <span ref={spanMode} className="text-lg font-semibold uppercase text-github-text-alt dark:text-white tracking-widest" ></span>
                <img ref={imgToggle} src="" alt="" />
            </button>
        </nav>
    )
}

export default NavContainer;