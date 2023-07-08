import { useState } from "react";
import { useScrollPosition } from "../hooks/ScrollPosition";
import { Link } from "react-scroll";

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  const homePos = 0;
  const aboutPos = document.getElementById("About")?.offsetTop;
  const skillsPos = document.getElementById("Skills")?.offsetTop;
  const projectsPos = document.getElementById("Projects")?.offsetTop;
  const resumePos = document.getElementById("Resume")?.offsetTop;
  const contactPos = document.getElementById("Contact")?.offsetTop;
  const currentPos = scrollPosition + window.innerHeight / 2;
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? "shadow bg-white text-black" : "",
        "flex justify-between px-5 lg:px-20 py-3 fixed w-full top-0 z-20 transition-colors"
      )}
    >
      <button className="" onClick={() => (window.location.href = "/")}>
        <img
          src={classNames(
            scrollPosition > 0
              ? "/assets/Logoprimary.png"
              : "/assets/Logowhite.png"
          )}
          alt=""
        />
      </button>

      <section className="lg:hidden mobile-hmberger-nav">
        <img
          onMouseEnter={(e) =>
            (e.target.src =
              scrollPosition > 0
                ? "/assets/humberger-blue.svg"
                : "/assets/humberger-white.svg")
          }
          onMouseLeave={(e) => (e.target.src = "/assets/humberger-default.svg")}
          className="cursor-pointer w-16"
          src="/assets/humberger-default.svg"
          alt="humberger-icon"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
        <div
          className={classNames(
            isNavOpen ? "block" : "hidden",
            "fixed top-0 left-0 w-screen h-screen  bg-black opacity-20 transition-opacity ease-linear duration-300"
          )}
          onClick={() => setIsNavOpen(false)}
        ></div>
        <div
          className={classNames(
            isNavOpen ? "right-0" : "-right-full",
            "fixed top-0 w-80 h-screen bg-secondary2 z-50 transition-all ease-linear duration-300"
          )}
        >
          <ul
            className={classNames(
              "flex flex-col items-center gap-16 text-2xl font-bold text-primary justify-start pt-14"
            )}
          >
            <li>
              <button
                className="absolute top-0 right-0 mr-5 mt-5"
                onClick={() => setIsNavOpen(false)}
              >
                <img src="/assets/exit.svg" alt="close-icon" className="w-8" />
              </button>
            </li>
            <li
              className={classNames(
                currentPos >= homePos && currentPos < aboutPos
                  ? "link-active"
                  : "",
                "navbar-Items"
              )}
            >
              <Link
                to="Home"
                smooth={true} //animation
                duration={500} //animation
                style={{ cursor: "pointer" }}
                onClick={() => setIsNavOpen(false)}
              >
                Home{" "}
              </Link>
            </li>
            <li
              className={classNames(
                currentPos >= aboutPos && currentPos < skillsPos
                  ? "link-active"
                  : "",
                "navbar-Items"
              )}
            >
              <Link
                to="About"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setIsNavOpen(false)}
              >
                About{" "}
              </Link>
            </li>
            <li
              className={classNames(
                currentPos >= skillsPos && currentPos < projectsPos
                  ? "link-active"
                  : "",
                "navbar-Items"
              )}
            >
              <Link
                to="Skills"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setIsNavOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li
              className={classNames(
                currentPos >= projectsPos && currentPos < resumePos
                  ? "link-active"
                  : "",
                "navbar-Items"
              )}
            >
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setIsNavOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li
              className={classNames(
                currentPos >= resumePos && currentPos < contactPos
                  ? "link-active"
                  : "",
                "navbar-Items"
              )}
            >
              <Link
                to="Resume"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setIsNavOpen(false)}
              >
                Resume
              </Link>
            </li>
            <li
              className={classNames(
                currentPos >= contactPos && currentPos < contactPos + 514
                  ? "link-active"
                  : "",
                "navbar-Items"
              )}
            >
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="text-sm text-black font-semibold">
              copy right 2023, All rights reserved
            </li>
          </ul>
        </div>
      </section>

      <ul className="gap-20  navbar-font text-xl items-center hidden lg:flex">
        <li
          className={classNames(
            currentPos >= homePos && currentPos < aboutPos ? "link-active" : "",
            "navbar-Items"
          )}
        >
          <Link
            to="Home"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Home{" "}
          </Link>
        </li>
        <li
          className={classNames(
            currentPos >= aboutPos && currentPos < skillsPos
              ? "link-active"
              : "",
            "navbar-Items"
          )}
        >
          <Link
            to="About"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            About{" "}
          </Link>
        </li>
        <li
          className={classNames(
            currentPos >= skillsPos && currentPos < projectsPos
              ? "link-active"
              : "",
            "navbar-Items"
          )}
        >
          <Link
            to="Skills"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Skills
          </Link>
        </li>
        <li
          className={classNames(
            currentPos >= projectsPos && currentPos < resumePos
              ? "link-active"
              : "",
            "navbar-Items"
          )}
        >
          <Link
            to="Projects"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Projects
          </Link>
        </li>
        <li
          className={classNames(
            currentPos >= resumePos && currentPos < contactPos
              ? "link-active"
              : "",
            "navbar-Items"
          )}
        >
          <Link
            to="Resume"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Resume
          </Link>
        </li>
        <li
          className={classNames(
            currentPos >= contactPos && currentPos < contactPos + 514
              ? "link-active"
              : "",
            "navbar-Items"
          )}
        >
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
