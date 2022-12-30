import NavContainer from "./containerItem/navContainer";




// component container 
const ContainerMain = ()=>{
    return (
        <section className="Container relative w-full md:w-[700px] ">
            {/* component container nav */}
            <NavContainer/>
        </section>
    )
}

export default ContainerMain;