import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="mesa-footer-v2">

        <div className="mesa-footer-v2-main">

          {/* BRAND */}
          <div className="mesa-footer-v2-brand">
            <img
              src="/assets/brand/mesa-logo.png"
              alt="MESA PCCOE"
            />

            <div>
              <strong>
                MESA PCCOE
              </strong>

              <span>
                MECHANICAL ENGINEERING STUDENTS&apos; ASSOCIATION
              </span>
            </div>
          </div>


          {/* CONNECT */}
          <div className="mesa-footer-v2-connect">
            <span>
              CONNECT WITH TEAM MESA
            </span>

            <a href="#/contact">
              CONTACT
              <ArrowUpRight size={15} />
            </a>
          </div>


          {/* NAVIGATION */}
          <nav className="mesa-footer-v2-nav">
            <a href="#/home">HOME</a>
            <a href="#/about">ABOUT</a>
            <a href="#/team">TEAM</a>
            <a href="#/events">EVENTS</a>
            <a href="#/gallery">GALLERY</a>
            <a href="#/contact">CONTACT</a>
          </nav>


          {/* SOCIAL */}
          <div className="mesa-footer-v2-social">

            <a
              href="https://www.instagram.com/mesa_pccoe"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <rect
    width="18"
    height="18"
    x="3"
    y="3"
    rx="5"
    ry="5"
  />

  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

  <line
    x1="17.5"
    x2="17.51"
    y1="6.5"
    y2="6.5"
  />
</svg>
            </a>

            <a
              href="mailto:mesapccoe2627@gmail.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

          </div>

        </div>


        <div className="mesa-footer-v2-bottom">

          <span>
            © {year} MESA PCCOE
          </span>

          <span>
            DEPARTMENT OF MECHANICAL ENGINEERING
          </span>

          <strong>
            DEVELOPED BY MESA WEB DEVELOPMENT TEAM · {year}
          </strong>

        </div>

      </footer>


      <style>{`

        .mesa-footer-v2 {
          width: 100% !important;
          max-width: none !important;

          box-sizing: border-box;

          padding:
            24px
            clamp(24px, 5vw, 90px)
            12px;

          background:
            linear-gradient(
              115deg,
              #020507,
              #05090d
            );

          border-top:
            1px solid rgba(242,169,0,.38);

          color: #fff;
        }


        .mesa-footer-v2 *,
        .mesa-footer-v2 *::before,
        .mesa-footer-v2 *::after {
          box-sizing: border-box;
        }


        /* =========================
           MAIN ROW
        ========================= */

        .mesa-footer-v2-main {
          width: 100% !important;
          max-width: none !important;

          margin: 0 !important;

          display: grid;

          grid-template-columns:
            minmax(280px, 1.25fr)
            minmax(220px, .8fr)
            minmax(420px, 1.35fr)
            auto;

          align-items: center;

          gap:
            clamp(
              30px,
              4vw,
              80px
            );

          padding-bottom: 20px;

          border-bottom:
            1px solid rgba(255,255,255,.10);
        }


        /* =========================
           BRAND
        ========================= */

        .mesa-footer-v2-brand {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }


        .mesa-footer-v2-brand img {
          width: 58px;
          height: 58px;

          flex: 0 0 58px;

          object-fit: contain;
        }


        .mesa-footer-v2-brand strong {
          display: block;

          color: #fff;

          font-size:
            clamp(
              22px,
              1.6vw,
              28px
            );

          line-height: 1;

          font-weight: 800;
        }


        .mesa-footer-v2-brand span {
          display: block;

          max-width: 330px;

          margin-top: 6px;

          color:
            rgba(255,255,255,.63);

          font-size: 11px;

          line-height: 1.4;
        }


        /* =========================
           CONNECT
        ========================= */

        .mesa-footer-v2-connect {
          display: grid;
          gap: 6px;
        }


        .mesa-footer-v2-connect > span {
          color:
            rgba(255,255,255,.55);

          font-size: 11px;
        }


        .mesa-footer-v2-connect a {
          width: max-content;

          display: inline-flex;
          align-items: center;
          gap: 6px;

          color: #f2a900;

          text-decoration: none;

          font-size: 13px;
          font-weight: 800;
        }


        .mesa-footer-v2-connect a:hover {
          color: #ffc13b;
        }


        /* =========================
           NAV
        ========================= */

        .mesa-footer-v2-nav {
          display: flex;
          flex-wrap: wrap;

          justify-content: center;
          align-items: center;

          gap:
            12px
            clamp(
              18px,
              1.8vw,
              30px
            );
        }


        .mesa-footer-v2-nav a {
          color:
            rgba(255,255,255,.74);

          text-decoration: none;

          font-size: 12px;
          font-weight: 700;

          white-space: nowrap;
        }


        .mesa-footer-v2-nav a:hover {
          color: #f2a900;
        }


        /* =========================
           SOCIAL
        ========================= */

        .mesa-footer-v2-social {
          display: flex;
          justify-content: flex-end;
          gap: 9px;
        }


        .mesa-footer-v2-social a {
          width: 40px;
          height: 40px;

          display: grid;
          place-items: center;

          border:
            1px solid rgba(255,255,255,.15);

          border-radius: 10px;

          color: #fff;

          text-decoration: none;

          transition:
            .2s ease;
        }


        .mesa-footer-v2-social a:hover {
          color: #f2a900;

          border-color:
            rgba(242,169,0,.6);

          transform:
            translateY(-2px);
        }


        /* =========================
           BOTTOM
        ========================= */

        .mesa-footer-v2-bottom {
          width: 100% !important;
          max-width: none !important;

          margin: 0 !important;

          padding-top: 12px;

          display: grid;

          grid-template-columns:
            1fr
            1fr
            1fr;

          align-items: center;

          gap: 20px;

          color:
            rgba(255,255,255,.50);

          font-size: 10px;
        }


        .mesa-footer-v2-bottom
        span:nth-child(2) {
          text-align: center;
        }


        .mesa-footer-v2-bottom strong {
          color: #f2a900;

          font-size: 10px;

          text-align: right;

          font-weight: 700;
        }


        /* =========================
           MEDIUM SCREEN
        ========================= */

        @media (max-width: 1200px) {

          .mesa-footer-v2 {
            padding:
              22px
              30px
              12px;
          }


          .mesa-footer-v2-main {
            grid-template-columns:
              1.1fr
              .8fr
              1fr
              auto;

            gap: 24px;
          }


          .mesa-footer-v2-nav {
            gap:
              10px 15px;
          }

        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {

          .mesa-footer-v2-main {
            grid-template-columns:
              1fr
              1fr;

            gap:
              16px 24px;
          }


          .mesa-footer-v2-nav {
            justify-content: flex-start;
          }


          .mesa-footer-v2-social {
            justify-content: flex-end;
          }

        }


        /* =========================
           PHONE
        ========================= */

        @media (max-width: 650px) {

          .mesa-footer-v2 {
            padding:
              10px
              10px
              6px;
          }


          .mesa-footer-v2-main {
            grid-template-columns:
              1fr
              auto;

            gap:
              6px 9px;

            padding-bottom:
              7px;
          }


          .mesa-footer-v2-brand {
            gap:
              7px;
          }


          .mesa-footer-v2-brand img {
            width:
              34px;

            height:
              34px;

            flex-basis:
              34px;
          }


          .mesa-footer-v2-brand strong {
            font-size:
              17px;
          }


          .mesa-footer-v2-brand span {
            max-width:
              180px;

            margin-top:
              2px;

            font-size:
              8px;

            line-height:
              1.2;
          }


          .mesa-footer-v2-connect {
            justify-items:
              end;

            gap:
              2px;
          }


          .mesa-footer-v2-connect > span {
            font-size:
              8px;
          }


          .mesa-footer-v2-connect a {
            font-size:
              10px;

            gap:
              4px;
          }


          .mesa-footer-v2-nav {
            grid-column:
              1 / -1;

            justify-content:
              flex-start;

            gap:
              4px 10px;
          }


          .mesa-footer-v2-nav a {
            font-size:
              10px;
          }


          .mesa-footer-v2-social {
            grid-column:
              1 / -1;

            justify-content:
              flex-end;

            margin-top:
              -27px;
          }


          .mesa-footer-v2-social a {
            width:
              27px;

            height:
              27px;

            border-radius:
              7px;
          }


          .mesa-footer-v2-social svg {
            width:
              14px;

            height:
              14px;
          }


          .mesa-footer-v2-bottom {
            padding-top:
              5px;

            grid-template-columns:
              auto
              1fr;

            gap:
              2px 7px;

            font-size:
              7px;

            line-height:
              1.15;
          }


          .mesa-footer-v2-bottom
          span:nth-child(2) {
            text-align:
              right;
          }


          .mesa-footer-v2-bottom strong {
            grid-column:
              1 / -1;

            text-align:
              center;

            font-size:
              7px;
          }

        }


        /* =========================
           VERY SMALL PHONE
        ========================= */

        @media (max-width: 390px) {

          .mesa-footer-v2 {
            padding:
              9px
              8px
              5px;
          }


          .mesa-footer-v2-brand img {
            width:
              31px;

            height:
              31px;

            flex-basis:
              31px;
          }


          .mesa-footer-v2-brand strong {
            font-size:
              16px;
          }


          .mesa-footer-v2-brand span {
            font-size:
              7.5px;
          }


          .mesa-footer-v2-connect > span {
            font-size:
              7px;
          }


          .mesa-footer-v2-connect a {
            font-size:
              9px;
          }


          .mesa-footer-v2-nav {
            gap:
              3px 8px;
          }


          .mesa-footer-v2-nav a {
            font-size:
              9px;
          }


          .mesa-footer-v2-social a {
            width:
              25px;

            height:
              25px;
          }

        }

      `}</style>
    </>
  );
}

export default Footer;