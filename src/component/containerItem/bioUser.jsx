
const BioUser = ({username,nickname,imgProfile,urlProfile,dateJoin,bio,repo,followers,following,location,twitter,blog,company}) => {
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let dateTostring = new Date(dateJoin).toLocaleDateString('en-US',options);


  
    
    return (
        <section className="container-bio-user relative w-full mt-5 bg-github-bg-content dark:bg-github-bg-content-dark rounded-lg px-5 py-9  shadow-[0_4px_13px_-2px_rgba(0,0,0,0.3)]">

            {/* component header bio */}
            <section className="header-bio relative w-full  grid grid-cols-1 grid-rows-[auto_160px] xs:grid-cols-[auto_1fr] xs:grid-rows-[160px]">
                <div className="img-bio select-none  h-full grid place-items-center w-full xs:w-[160px]">
                    <img src={imgProfile} alt="img profile user" className="rounded-full w-[180px] h-[180px] object-cover object-center scale-90 xs:w-full xs:h-full" />
                </div>
                <div className="description-header-bio relative w-full h-full  overflow-x-hidden   pt-2 py-1 px-3 text-center xs:text-left  ">
                    <h2 className="username-github max-[620px]:text-[1.6em] text-github-bg-dark dark:text-white font-semibold text-[1.9em] ">{username}</h2>
                    <p className="date-join text-github-text dark:text-white  capitalize "><span className="sub-date">{dateTostring}</span></p>
                    <a href={urlProfile} target="_blank" className="link-username text-github-btn font-[500]">@{nickname}</a>
                    <p className="bio-description text-github-text    dark:text-white mt-3 truncate ">
                    {
                        (bio === null) ? 'This profile has no bio.' : bio
                    }
                    </p>
                </div>
            </section>

            {/* component  body bio */}
            <section className="body-bio relative w-full  grid grid-cols-1 grid-rows-[auto_auto] md:grid-cols-[auto_1fr] xs:grid-rows-auto">
                <div className="el-dummy select-none  h-full  w-full  hidden md:block xs:w-[160px]"></div>

                {/* user info */}
                <div className="container-user-info w-full mt-5  md:mt-0">
                    <div className="user-info relative w-full p-5 bg-github-bg dark:bg-github-bg-dark rounded-xl  flex max-[400px]:gap-2 flex-wrap">
                        <div className="repo  flex-1">
                            <p className="title-repo text-github-text dark:text-white">Repo</p>
                            <p className="total-repo font-bold mt-1 xs:text-xl truncate dark:text-white">{repo}</p>
                        </div>
                        <div className="followers  flex-1">
                            <p className="title-followers text-github-text dark:text-white">Followers</p>
                            <p className="total-followers font-bold mt-1 xs:text-xl truncate dark:text-white">{followers}</p>
                        </div>
                        <div className="following  flex-1">
                            <p className="title-Following text-github-text dark:text-white">Following</p>
                            <p className="total-Following font-bold mt-1 xs:text-xl truncate dark:text-white">{following}</p>
                        </div>
                    </div>

                    {/* user social media */}
                    <div className="user-social-media relative  mt-8 grid min-[400px]:grid-cols-2 grid-rows-[auto_auto] gap-5">   
                        <div className="location relative w-full  flex gap-x-2">
                            <img src="./images/icon-location.svg" className="w-[18px]" alt="icon location" />
                            { 
                              (location === null) ?
                                <p className="text-location flex-1 pl-1 text-github-shadow-inactive text-slate-400 dark:text-white truncate">
                                 No Location
                                </p>
                                :
                                <p className="text-location flex-1 pl-1 text-github-text-alt dark:text-white truncate">
                                {location}
                                </p>
                        }
                        </div>
                        <div className="link-personal-website relative w-full  flex gap-x-2">
                        <img src="./images/icon-website.svg" className="" alt="icon website" />
                            {
                                (blog === null || blog === '') 
                                ?
                                (
                                    <p className="text-website text-slate-400 flex-1 text-github-shadow-inactive dark:text-white truncate ">
                                    Not Available
                                    </p>
                                ) 
                                :
                                (
                                    <a href={blog} className="text-website  max-w-[200px] min-[400px]flex-1 text-github-text-alt dark:text-white truncate hover:underline">
                                        {}
                                    </a>
                                )
                            }
                        </div>
                        <div className="link-twitter relative w-full  flex gap-x-2">
                        <img src="./images/icon-twitter.svg" className="w-[23px]" alt="icon twitter" />
                            {
                                (twitter === null) 
                                ?
                                (
                                    <p className="text-twitter text-slate-400 flex-1 text-github-shadow-inactive dark:text-white  truncate ">
                                    Not Available
                                    </p>
                                ) 
                                :
                                (
                                    <a href="#" className="text-twitter flex-1 text-github-text-alt dark:text-white truncate hover:underline">
                                        {twitter}
                                    </a>
                                )
                            }
                        </div>
                        <div className="link-company relative w-full  flex gap-x-2">
                        <img src="./images/icon-company.svg" className="w-[23px]" alt="icon company" />
                          
                            {
                                (company === null) 
                                ?
                                (
                                    <p className="text-twitter flex-1 text-slate-400 text-github-shadow-inactive dark:text-white  truncate ">
                                     Not Available
                                    </p>
                                ) 
                                :
                                (
                                    <a href="#" className="text-twitter flex-1 text-github-text-alt dark:text-white  truncate hover:underline max-[400px]:whitespace-normal ">
                                   {company}
                                     </a>
                                )
                            }
                        </div>
                    </div>
                </div>  
            </section>
        </section>
    )
}


export default BioUser;
