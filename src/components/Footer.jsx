/**
 * @copyright 2024 Abdhulla
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Projects',
      href: '#projects'
    },
    {
      label: 'Certifications',
      href: '#certifications'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Abdhulla1'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdhulla-atthaullasha/'
    },
    {
      label: 'Hackerrank',
      href: 'https://www.hackerrank.com/profile/abbuabdhulla'
    }
  ];

export const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                    Your Next Great Hire Awaits!
                    </h2>


                    <ButtonPrimary href="mailto:abbuabdhulla@gmail.com" label="Let&apos;s Collaborate" icon="chevron_right" classes="reveal-up" />

                </div> 

                <div className="grid grid-cols-2  gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>
                        <ul>
                            {sitemap.map(({label,href},key)=>(
                                <li key={key}>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>
                        <ul>
                            {socials.map(({label,href},key)=>(
                                <li key={key}>
                                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="/" className="logo reveal-up">
                    <img src="./images/Logo.png" width={70} height={70} alt="ab" />
                </a>
                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2024 <span className="text-zinc-200">Abdhulla</span>
                </p>
            </div>
        </div>
    </footer>
  )
}