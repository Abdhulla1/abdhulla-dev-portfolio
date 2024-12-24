/**
 * @copyright 2024 Abdhulla
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(); // Reference for the last active nav link
  const activeBox = useRef(); // Reference for the active-box element
  const sectionRefs = useRef({}); // To store section refs dynamically

  const navItems = [
    {
      label: "Home",
      link: "#home",
      id: "home",
    },
    {
      label: "About",
      link: "#about",
      id: "about",
    },
    {
      label: "Projects",
      link: "#projects",
      id: "projects",
    },
    {
      label: "Certifications",
      link: "#certifications",
      id: "certifications",
    }
  ];

  // Function to initialize the active box position
  const initActiveBox = () => {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  // Intersection Observer to track active sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentNavLink = document.querySelector(
              `a[href="#${entry.target.id}"]`
            );

            // Remove active class from the last active link
            lastActiveLink.current?.classList.remove("active");

            // Add active class to the current link
            currentNavLink?.classList.add("active");
            lastActiveLink.current = currentNavLink;

            // Update active-box position
            initActiveBox();
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // Section becomes active when 60% is visible
      }
    );

    // Observe sections
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        sectionRefs.current[id] = section;
        observer.observe(section);
      }
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  // Handle window resize to adjust active-box position
  useEffect(() => {
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link }, key) => (
        <a
          href={link}
          key={key}
          className={"nav-link " + (key === 0 ? "active" : "")} // Default to 'active' for the first item
          onClick={(event) => {
            lastActiveLink.current?.classList.remove("active");
            event.target.classList.add("active");
            lastActiveLink.current = event.target;
            initActiveBox();
          }}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
