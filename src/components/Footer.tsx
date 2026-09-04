import {
  ArrowUpRight,
  AtSign,
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <footer className="mesa-footer">

      <div className="mesa-footer-main">


        <div className="mesa-footer-brand">

          <img
            src="/assets/brand/mesa-logo.png"
            alt="MESA PCCOE"
          />

          <div>

            <strong>
              MESA PCCOE
            </strong>

            <span>
              MECHANICAL ENGINEERING
              STUDENTS&apos; ASSOCIATION
            </span>

          </div>

        </div>


        <div className="mesa-footer-cta">

          <span>
            CONNECT WITH TEAM MESA
          </span>

          <a href="#/contact">

            CONTACT

            <ArrowUpRight
              size={16}
            />

          </a>

        </div>


        <nav className="mesa-footer-nav">

          <a href="#/home">
            HOME
          </a>

          <a href="#/about">
            ABOUT
          </a>

          <a href="#/team">
            TEAM
          </a>

          <a href="#/events">
            EVENTS
          </a>

          <a href="#/gallery">
            GALLERY
          </a>

          <a href="#/contact">
            CONTACT
          </a>

        </nav>


        <div className="mesa-footer-social">

          <a
            href="https://www.instagram.com/mesa_pccoe"
            target="_blank"
            rel="noreferrer"
          >
            <AtSign
              size={16}
            />
          </a>

          <a href="mailto:mesapccoeofficial@gmail.com">

            <Mail
              size={16}
            />

          </a>

        </div>

      </div>


      <div className="mesa-footer-bottom">

        <span>
          ©{" "}
          {new Date().getFullYear()}
          {" "}
          MESA PCCOE
        </span>

        <span>
          DEPARTMENT OF
          MECHANICAL ENGINEERING
        </span>

        <strong>
          DEVELOPED BY MESA
          WEB DEVELOPMENT TEAM · 2026
        </strong>

      </div>

    </footer>
  );
}

export default Footer;