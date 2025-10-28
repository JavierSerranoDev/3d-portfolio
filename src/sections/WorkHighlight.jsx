const WorkHighlight = ({ topProjects }) => {
  return (
    <section id="work-highlight" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background"/>
        </div>
        <div className="title-layout">
            {/*LEFT: TITLE CONTENT*/}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="title-text">
                        <h1>Shaping Works</h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className='text-white-50 md:text-xl relative z- 10 pointer-events-none'> Hi, I'm Javier, a developer based in Mexico with a passion for code.</p>
                </div>
            </header>
        </div>
    </section>
  )
}

export default WorkHighlight