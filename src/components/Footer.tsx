import {
  Mail,
} from "lucide-react";

import {
  useLocation,
} from "react-router-dom";


const footerLinks = [
  {
    label:
      "HOME",

    href:
      "/home",
  },

  {
    label:
      "ABOUT",

    href:
      "/about",
  },

  {
    label:
      "TEAM",

    href:
      "/team",
  },

  {
    label:
      "EVENTS",

    href:
      "/events",
  },

  {
    label:
      "GALLERY",

    href:
      "/gallery",
  },

  {
    label:
      "CONTACT",

    href:
      "/contact",
  },
];


function Footer() {

  const year =
    new Date().getFullYear();


  const location =
    useLocation();


  return (
    <>

      <footer className="mesa-footer-v2">

        <div className="mesa-footer-v2-main">


          {/* ==================================================
              BRAND — DESKTOP
          ================================================== */}

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


          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <nav className="mesa-footer-v2-nav">

            {footerLinks.map(
              (item) => {

                const active =
                  location.pathname ===
                    item.href ||
                  (
                    item.href !==
                      "/home" &&
                    location.pathname.startsWith(
                      `${item.href}/`
                    )
                  );


                return (

                  <a
                    key={
                      item.href
                    }
                    href={
                      `#${item.href}`
                    }
                    className={
                      active
                        ? "active"
                        : ""
                    }
                  >

                    {
                      item.label
                    }

                  </a>

                );

              }
            )}

          </nav>


          {/* ==================================================
              SOCIAL + MOBILE BRAND
          ================================================== */}

          <div className="mesa-footer-v2-social">

            <div className="mesa-footer-v2-mobile-mark">

              <img
                src="/assets/brand/mesa-logo.png"
                alt="MESA"
              />

              <span>
                MESA PCCOE
              </span>

            </div>


            <div className="mesa-footer-v2-social-buttons">

              {/* INSTAGRAM */}

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

                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  />

                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />

                </svg>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:mesapccoeofficial@gmail.com"
                aria-label="Email"
              >

                <Mail
                  size={18}
                />

              </a>

            </div>

          </div>

        </div>


        {/* ==================================================
            BOTTOM
        ================================================== */}

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

        /* ==================================================
           FOOTER
        ================================================== */

        .mesa-footer-v2 {

          width:
            100%;

          max-width:
            none;

          box-sizing:
            border-box;

          padding:
            24px
            clamp(
              24px,
              5vw,
              90px
            )
            12px;

          background:
            linear-gradient(
              115deg,
              #020507,
              #05090d
            );

          border-top:
            1px solid
            rgba(
              242,
              169,
              0,
              .38
            );

          color:
            #fff;

          flex-shrink:
            0;

          margin-top:
            auto;

        }


        .mesa-footer-v2 *,
        .mesa-footer-v2 *::before,
        .mesa-footer-v2 *::after {

          box-sizing:
            border-box;

        }


        /* ==================================================
           MAIN ROW
        ================================================== */

        .mesa-footer-v2-main {

          width:
            100%;

          max-width:
            none;

          margin:
            0;

          display:
            grid;

          grid-template-columns:
            minmax(
              280px,
              1.15fr
            )
            minmax(
              420px,
              1.5fr
            )
            auto;

          align-items:
            center;

          gap:
            clamp(
              30px,
              4vw,
              80px
            );

          padding-bottom:
            20px;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              .10
            );

        }


        /* ==================================================
           BRAND
        ================================================== */

        .mesa-footer-v2-brand {

          display:
            flex;

          align-items:
            center;

          gap:
            14px;

          min-width:
            0;

        }


        .mesa-footer-v2-brand img {

          width:
            58px;

          height:
            58px;

          flex:
            0 0 58px;

          object-fit:
            contain;

        }


        .mesa-footer-v2-brand strong {

          display:
            block;

          color:
            #fff;

          font-size:
            clamp(
              22px,
              1.6vw,
              28px
            );

          line-height:
            1;

          font-weight:
            800;

        }


        .mesa-footer-v2-brand span {

          display:
            block;

          max-width:
            330px;

          margin-top:
            6px;

          color:
            rgba(
              255,
              255,
              255,
              .63
            );

          font-size:
            11px;

          line-height:
            1.4;

        }


        /* ==================================================
           NAVIGATION
        ================================================== */

        .mesa-footer-v2-nav {

          display:
            flex;

          flex-wrap:
            wrap;

          justify-content:
            center;

          align-items:
            center;

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
            rgba(
              255,
              255,
              255,
              .74
            );

          text-decoration:
            none;

          font-size:
            12px;

          font-weight:
            700;

          white-space:
            nowrap;

          transition:
            color
            .2s
            ease;

        }


        .mesa-footer-v2-nav a:hover {

          color:
            #f2a900;

        }


        .mesa-footer-v2-nav a.active {

          color:
            #f2a900;

          font-weight:
            800;

        }


        /* ==================================================
           SOCIAL
        ================================================== */

        .mesa-footer-v2-social {

          display:
            flex;

          justify-content:
            flex-end;

          align-items:
            center;

          gap:
            9px;

        }


        .mesa-footer-v2-social-buttons {

          display:
            flex;

          align-items:
            center;

          gap:
            9px;

        }


        .mesa-footer-v2-social-buttons a {

          width:
            40px;

          height:
            40px;

          display:
            grid;

          place-items:
            center;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .15
            );

          border-radius:
            10px;

          color:
            #fff;

          text-decoration:
            none;

          transition:
            .2s
            ease;

        }


        .mesa-footer-v2-social-buttons a:hover {

          color:
            #f2a900;

          border-color:
            rgba(
              242,
              169,
              0,
              .6
            );

          transform:
            translateY(-2px);

        }


        /* ==================================================
           MOBILE MINI BRAND
        ================================================== */

        .mesa-footer-v2-mobile-mark {

          display:
            none;

        }


        /* ==================================================
           BOTTOM
        ================================================== */

        .mesa-footer-v2-bottom {

          width:
            100%;

          max-width:
            none;

          margin:
            0;

          padding-top:
            12px;

          display:
            grid;

          grid-template-columns:
            1fr
            1fr
            1fr;

          align-items:
            center;

          gap:
            20px;

          color:
            rgba(
              255,
              255,
              255,
              .50
            );

          font-size:
            10px;

        }


        .mesa-footer-v2-bottom
        span:nth-child(2) {

          text-align:
            center;

        }


        .mesa-footer-v2-bottom strong {

          color:
            #f2a900;

          font-size:
            10px;

          text-align:
            right;

          font-weight:
            700;

        }


        /* ==================================================
           TABLET
        ================================================== */

        @media (max-width: 900px) {

          .mesa-footer-v2-main {

            grid-template-columns:
              1fr
              auto;

            gap:
              16px
              24px;

          }


          .mesa-footer-v2-brand {

            grid-column:
              1 / -1;

          }


          .mesa-footer-v2-nav {

            justify-content:
              flex-start;

          }


          .mesa-footer-v2-social {

            justify-content:
              flex-end;

          }

        }


        /* ==================================================
           PHONE
        ================================================== */

        @media (max-width: 650px) {

          .mesa-footer-v2 {

            padding:
              12px
              12px
              7px;

          }


          .mesa-footer-v2-brand {

            display:
              none;

          }


          .mesa-footer-v2-main {

            display:
              flex;

            flex-direction:
              column;

            align-items:
              stretch;

            gap:
              10px;

            padding-bottom:
              10px;

          }


          .mesa-footer-v2-nav {

            order:
              1;

            width:
              100%;

            display:
              flex;

            flex-wrap:
              wrap;

            justify-content:
              center;

            align-items:
              center;

            gap:
              8px
              14px;

            margin:
              0;

          }


          .mesa-footer-v2-nav a {

            font-size:
              10px;

            padding:
              3px 0;

          }


          .mesa-footer-v2-social {

            order:
              2;

            width:
              100%;

            display:
              flex;

            justify-content:
              space-between;

            align-items:
              center;

            gap:
              8px;

            margin:
              0;

            padding:
              0
              8px;

          }


          .mesa-footer-v2-mobile-mark {

            display:
              flex;

            align-items:
              center;

            gap:
              6px;

            min-width:
              0;

          }


          .mesa-footer-v2-mobile-mark img {

            width:
              26px;

            height:
              26px;

            object-fit:
              contain;

            flex:
              0
              0
              26px;

          }


          .mesa-footer-v2-mobile-mark span {

            color:
              rgba(
                255,
                255,
                255,
                .75
              );

            font-size:
              9px;

            font-weight:
              800;

            letter-spacing:
              .04em;

            white-space:
              nowrap;

          }


          .mesa-footer-v2-social-buttons {

            display:
              flex;

            align-items:
              center;

            justify-content:
              flex-end;

            gap:
              8px;

            margin-left:
              auto;

          }


          .mesa-footer-v2-social-buttons a {

            width:
              32px;

            height:
              32px;

            border-radius:
              8px;

          }


          .mesa-footer-v2-social-buttons svg {

            width:
              15px;

            height:
              15px;

          }


          .mesa-footer-v2-bottom {

            padding-top:
              7px;

            grid-template-columns:
              1fr
              1fr;

            gap:
              4px
              8px;

            font-size:
              7px;

            line-height:
              1.2;

          }


          .mesa-footer-v2-bottom
          span:first-child {

            text-align:
              left;

          }


          .mesa-footer-v2-bottom
          span:nth-child(2) {

            text-align:
              right;

          }


          .mesa-footer-v2-bottom strong {

            grid-column:
              1 / -1;

            margin-top:
              2px;

            text-align:
              center;

            font-size:
              7px;

          }

        }


        /* ==================================================
           VERY SMALL PHONE
        ================================================== */

        @media (max-width: 390px) {

          .mesa-footer-v2 {

            padding:
              10px
              9px
              6px;

          }


          .mesa-footer-v2-nav {

            gap:
              7px
              11px;

          }


          .mesa-footer-v2-nav a {

            font-size:
              9px;

          }


          .mesa-footer-v2-mobile-mark {

            gap:
              5px;

          }


          .mesa-footer-v2-mobile-mark img {

            width:
              23px;

            height:
              23px;

            flex-basis:
              23px;

          }


          .mesa-footer-v2-mobile-mark span {

            font-size:
              8px;

          }


          .mesa-footer-v2-social {

            padding:
              0
              5px;

          }


          .mesa-footer-v2-social-buttons a {

            width:
              30px;

            height:
              30px;

          }

        }

      `}</style>

    </>
  );
}


export default Footer;