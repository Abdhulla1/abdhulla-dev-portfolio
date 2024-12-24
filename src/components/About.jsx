/**
 * @copyright 2024 Abdhulla
 * @license Apache-2.0
 */

const aboutItems = [
    {
      label: 'Project done',
      number: '03'
    },
    {
      label: 'Months of Practical Experience',
      number: '06'
    }
  ];
export const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Welcome! I&apos;m Abdhulla, a dedicated Java Full Stack Developer with a passion for creating efficient, scalable, and user-centric web applications. Combining creativity and technical expertise, I transform ideas into digital solutions that excel in both functionality and performance. With skills in React, Java, Spring Boot, and MySQL, I bring a balance of innovation and practicality to every project I undertake. Let&apos;s collaborate to turn your vision into impactful software!
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                  {aboutItems.map(({label,number},key)=>(
                    <div key={key}>
                      <div className="flex items-center md:mb-2">
                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                      </div>
                      <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                  ))
                  }
                  <img src="/images/Logo.png" alt="Ab" width={70} height={70} className="ml-auto md:w-[80px] md:h-[80]" />
                </div>
            </div>
        </div>
    </section>
  )
}
