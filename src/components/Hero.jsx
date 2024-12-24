/**
 * @copyright 2024 Abdhulla
 * @license Apache-2.0
 */


import { ButtonPrimary ,ButtonOutline} from "./Button"


export const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">

        <div className="container  items-center lg:grid lg:grid-cols-2  lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h9 rounded-lg">
                        <img src="./images/image-mine.jpg" alt="Abdhulla A" width={50} height={50}  className="img-cover"/>
                    </figure>


                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                Building Scalable Full-Stack Applications for the Digital Future.
                </h2>

                <div className="flex items-center gap-3 ">
                    <ButtonPrimary label="Download Resume" icon="download" href={"https://drive.usercontent.google.com/download?id=1OY3gMbwClsx3QvfNTmkYN82vLjD1OlRV&export=download&authuser=2&confirm=t&uuid=797a32b8-fce6-4960-9285-ad62aa2c8c72&at=APvzH3q1C70y39oF4jXOKZnT1hcR:1734775043669"} />

                    <ButtonOutline href="#about"label="Scroll down" icon={"arrow_downward"}/>
                </div>
            </div>
            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[65px] overflow-hidden">
                    <img src="./images/cover-image.png" alt="Abdhulla A" width={656} height={800} className="w-full" />
                </figure>
            </div>
        </div>
    </section>
)
}
