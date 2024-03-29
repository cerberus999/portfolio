import './SideBar.css'

export default function SideBar(){
    let images = [
        "https://icon-library.com/images/black-and-white-linkedin-icon/black-and-white-linkedin-icon-14.jpg",
        "https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-1.jpg"
    ]
    
    return (
        <section className='bg-slate-600'>
            <div className='bg-stone-900' style={{border: "solid 2px #252525",borderRadius: "0 10% 10% 0"}}>
                <div style={{margin: "15px"}} className='underline text-cyan-50'>
                    <div className="SideBar">
                        <a href="https://www.linkedin.com/in/pedro-aaron-espinoza-vargas-236752245/">
                            <img className='icon' src={images[0]} alt="LinkedIn"/>
                            Pedro Aaron Espinoza Vargas
                        </a>
                    </div>
                    <div className="SideBar">
                        <a href="https://github.com/cerberus999">
                            <img className='icon' src={images[1]} alt="LinkedIn" />
                            cerberus999
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}