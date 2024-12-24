/**
 * @copyright 2024 Abdhulla
 * @license Apache-2.0
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


import { CertficationCard } from "./CertficationCard";

const reviews = [
    {
      content: 'Certified in Java Full Stack Development. Demonstrated expertise in building robust, scalable web applications.',
      name: 'Full Stack Java Developer',
      imgSrc: './images/Excelr.jpg',
      company: 'Excelr'
    },
    {
      content: 'Completed React Front-End Development Certification. Specialized in creating dynamic, user-friendly interfaces.',
      name: 'React Front-End Developer',
      imgSrc: './images/hackerrank.png',
      company: 'HackerRank'
    },
    {
      content: 'Certified in Java Basics. Proficient in core concepts like OOP, data types, loops, and exception handling.',
      name: 'Java Basics Certification',
      imgSrc: './images/hackerrank.png',
      company: 'HackerRank'
    },
    {
      content: 'Certified in Java Full Stack Development. Demonstrated expertise in building robust, scalable web applications.',
      name: 'Full Stack Java Developer',
      imgSrc: './images/Excelr.jpg',
      company: 'Excelr'
    },
    {
      content: 'Completed React Front-End Development Certification. Specialized in creating dynamic, user-friendly interfaces.',
      name: 'React Front-End Developer',
      imgSrc: './images/hackerrank.png',
      company: 'HackerRank'
    },
    {
      content: 'Certified in Java Basics. Proficient in core concepts like OOP, data types, loops, and exception handling.',
      name: 'Java Basics Certification',
      imgSrc: './images/hackerrank.png',
      company: 'HackerRank'
    }
   
  ];

export const Certifications = () => {
  useGSAP(()=>{
    gsap.to('.scrub-slide',{
      scrollTrigger:{
        trigger:'.scrub-slide',
        start:'-200% 80%',
        end:'400% 80%',
        scrub:true
      },
      x:'-1000'
    })
  });
  return (
    <section id="certifications" className="section overflow-hidden">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
            What I&apos;ve Achieved
            </h2>
            <div className="flex items-stretch gap-3 w-fit scrub-slide">
                {reviews.map(({content,name,imgSrc,company},key)=>(
                    <CertficationCard 
                        key={key}
                        name={name}
                        imgSrc={imgSrc}
                        company={company}
                        content={content}
                    />
                ))}
            </div>
        </div>

    </section>
  )
}
