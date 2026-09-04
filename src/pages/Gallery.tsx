import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import MediaSlot from "../components/MediaSlot";
import ScrollReveal from "../components/ScrollReveal";

import {
  galleryImages,
} from "../data/gallery";


const categories = [
  "ALL",
  "EVENTS",
  "WORKSHOPS",
  "COMPETITIONS",
  "TEAM",
  "CAMPUS",
];


function Gallery() {

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("ALL");


  const filteredImages =
    activeCategory === "ALL"
      ? galleryImages
      : galleryImages.filter(
          (image) =>
            image.src
              .toLowerCase()
              .includes(
                `/gallery/${activeCategory.toLowerCase()}/`
              )
        );


  const [
    lightboxIndex,
    setLightboxIndex,
  ] = useState<number | null>(null);


  const lightboxOpen =
    lightboxIndex !== null;


  const selectedImage =
    lightboxIndex !== null
      ? filteredImages[
          lightboxIndex
        ]
      : null;


  function closeLightbox() {
    setLightboxIndex(null);
  }


  function previousImage() {

    setLightboxIndex(
      (current) => {

        if (
          current === null ||
          filteredImages.length === 0
        ) {
          return null;
        }

        return (
          current -
          1 +
          filteredImages.length
        ) %
          filteredImages.length;

      }
    );

  }


  function nextImage() {

    setLightboxIndex(
      (current) => {

        if (
          current === null ||
          filteredImages.length === 0
        ) {
          return null;
        }

        return (
          current +
          1
        ) %
          filteredImages.length;

      }
    );

  }


  useEffect(() => {

    if (!lightboxOpen) {
      return;
    }


    const oldOverflow =
      document.body.style
        .overflow;


    document.body.style
      .overflow = "hidden";


    const handleKey =
      (
        event:
          KeyboardEvent
      ) => {

        if (
          event.key ===
          "Escape"
        ) {
          closeLightbox();
        }


        if (
          event.key ===
          "ArrowLeft"
        ) {
          previousImage();
        }


        if (
          event.key ===
          "ArrowRight"
        ) {
          nextImage();
        }

      };


    window.addEventListener(
      "keydown",
      handleKey
    );


    return () => {

      document.body.style
        .overflow =
        oldOverflow;


      window.removeEventListener(
        "keydown",
        handleKey
      );

    };

  }, [
    lightboxOpen,
    filteredImages.length,
  ]);


  function changeCategory(
    category: string
  ) {

    setActiveCategory(
      category
    );

    setLightboxIndex(
      null
    );

  }


  return (

    <div className="inner-page gallery-page">


      {/* HEADER */}

      <section className="gallery-compact-header">

        <span>
          MESA GALLERY
        </span>


        <h1>

          THE WORK.

          <br />

          THE PEOPLE.

          <br />


          <em>
            THE MEMORIES.
          </em>

        </h1>

      </section>



      {/* FILTERS */}

      <section className="gallery-filters-final">

        <ScrollReveal>

          <div>

            {categories.map(
              (
                category
              ) => (

                <button

                  key={
                    category
                  }

                  type="button"

                  className={
                    activeCategory ===
                    category
                      ? "active"
                      : ""
                  }

                  onClick={() =>
                    changeCategory(
                      category
                    )
                  }

                >

                  {
                    category
                  }

                </button>

              )
            )}

          </div>

        </ScrollReveal>

      </section>



      {/* GALLERY GRID */}

      <section className="gallery-page-section">

        <ScrollReveal>

          <div className="gallery-page-grid-final gallery-page-grid">


            {filteredImages.map(
              (
                image,
                index
              ) => (

                <article

                  key={
                    image.src
                  }

                  role="button"

                  tabIndex={0}

                  aria-label={`Open ${image.title}`}

                  className={`gallery-page-item gallery-page-item-${index + 1}`}


                  onClick={() =>
                    setLightboxIndex(
                      index
                    )
                  }


                  onKeyDown={(
                    event
                  ) => {

                    if (
                      event.key ===
                        "Enter" ||
                      event.key ===
                        " "
                    ) {

                      event.preventDefault();


                      setLightboxIndex(
                        index
                      );

                    }

                  }}

                >


                  <MediaSlot

                    src={
                      image.src
                    }

                    alt={
                      image.title
                    }

                    label={`MESA ${
                      index + 1
                    }`}

                  />


                  <div>

                    <span>

                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}

                    </span>


                    <strong>

                      {
                        image.title
                      }

                    </strong>

                  </div>


                </article>

              )
            )}


          </div>

        </ScrollReveal>

      </section>



      {/* LIGHTBOX */}

      {
        lightboxOpen &&
        lightboxIndex !== null &&
        selectedImage && (

          <div

            className="mesa-gallery-lightbox"

            role="dialog"

            aria-modal="true"

            aria-label={
              selectedImage.title
            }

            onClick={
              closeLightbox
            }

          >


            {/* CLOSE */}

            <button

              type="button"

              className="mesa-lightbox-close"

              aria-label="Close photo"

              onClick={
                closeLightbox
              }

            >

              <X size={24} />

            </button>



            {/* PREVIOUS */}

            {
              filteredImages.length >
              1 && (

                <button

                  type="button"

                  className="mesa-lightbox-arrow mesa-lightbox-prev"

                  aria-label="Previous photo"

                  onClick={(
                    event
                  ) => {

                    event.stopPropagation();

                    previousImage();

                  }}

                >

                  <ChevronLeft
                    size={30}
                  />

                </button>

              )
            }



            {/* IMAGE */}

            <div

              className="mesa-lightbox-content"

              onClick={(
                event
              ) =>
                event.stopPropagation()
              }

            >


              <img

                src={
                  selectedImage.src
                }

                alt={
                  selectedImage.title
                }

              />


              <div className="mesa-lightbox-caption">

                <span>

                  {String(
                    lightboxIndex +
                      1
                  ).padStart(
                    2,
                    "0"
                  )}

                  {" / "}

                  {String(
                    filteredImages.length
                  ).padStart(
                    2,
                    "0"
                  )}

                </span>


                <strong>

                  {
                    selectedImage.title
                  }

                </strong>

              </div>


            </div>



            {/* NEXT */}

            {
              filteredImages.length >
              1 && (

                <button

                  type="button"

                  className="mesa-lightbox-arrow mesa-lightbox-next"

                  aria-label="Next photo"

                  onClick={(
                    event
                  ) => {

                    event.stopPropagation();

                    nextImage();

                  }}

                >

                  <ChevronRight
                    size={30}
                  />

                </button>

              )
            }


          </div>

        )
      }


    </div>

  );

}


export default Gallery;