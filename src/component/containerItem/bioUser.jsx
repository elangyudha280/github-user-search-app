

const BioUser = () => {
    return (
        <section className="container-bio-user relative w-full mt-5 bg-github-bg-content dark:bg-github-bg-content-dark rounded-lg p-5 shadow-[0_4px_13px_-2px_rgba(0,0,0,0.3)]">

            <div className="header-bio relative w-full  grid grid-cols-1 xs:grid-cols-[auto_1fr] xs:grid-rows-[auto_160px]">
                <div className="img-bio select-none  h-full grid place-items-center w-full xs:w-[160px]">
                    <img src="https://avatars.githubusercontent.com/u/10826353?v=4" alt="" className="rounded-full w-[180px] h-[180px] object-cover object-center scale-90 xs:w-full xs:h-full" />
                </div>
                <div className="description-header-bio relative w-full h-full  overflow-x-hidden overflow-y-auto  pt-2 py-1 px-3 text-center xs:text-left  ">
                    <h2 className="username-github text-github-bg-dark dark:text-white font-semibold text-[1.9em] ">The Octocat</h2>
                    <p className="date-join text-github-text dark:text-white  capitalize ">Joined <span className="sub-date">26 jan 2011</span></p>
                    <a href="#"className="link-username text-github-btn font-[500]">@octocat</a>
                    <p className="bio-description text-github-text dark:text-white mt-3">
                    This profile has no bio.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default BioUser;