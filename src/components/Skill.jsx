/**
 * @copyright 2024 Abdhulla
 * @license Apache-2.0
 */

import { SkillCard } from "./SkillCard";

const skillItem = [
    {
      imgSrc: './images/html.svg',
      label: 'HTML',
      desc: 'Markup Language'
    },
    {
      imgSrc: './images/css.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: './images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: './images/bootstrap.svg',
      label: 'BootStrap',
      desc: 'CSS Framework'
    },
    {
      imgSrc: './images/github-icon.svg',
      label: 'GitHub',
      desc: 'Version Control'
    },
    {
      imgSrc: './images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
        imgSrc: './images/java.svg',
        label: 'Java',
        desc: 'Programming Language'
    },
    {
      imgSrc: './images/spring.svg',
      label: 'SpringBoot',
      desc: 'Java Framework'
    },
    {
      imgSrc: './images/mysql.svg',
      label: 'MySQL',
      desc: 'Database Management'
    },
    {
      imgSrc: './images/visual-studio-code.svg',
      label: 'Visual Studio',
      desc: 'Code Editor'
    },
    {
      imgSrc: './images/vitejs.svg',
      label: 'Vite',
      desc: 'Build Tool'
    },
  ];
export const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
            Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Explore the advanced tools and technologies I leverage to build innovative, high-performance websites and applications.</p>
             <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc,label,desc},key)=>(<SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />))
                }
            </div>
        </div>
    </section>
  )
}
