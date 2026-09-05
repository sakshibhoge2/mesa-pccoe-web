import {
  type FormEvent,
  useState,
} from "react";

import {
  AtSign,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import MediaSlot from "../components/MediaSlot";


function Contact() {

  const [submitted, setSubmitted] =
    useState(false);

  const [sending, setSending] =
    useState(false);


  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    if (sending) return;


    setSending(true);
    setSubmitted(false);


    const form =
      event.currentTarget;

    const formData =
      new FormData(form);


    const data =
      new URLSearchParams();


    data.append(
      "name",
      String(
        formData.get("name") || ""
      )
    );


    data.append(
      "email",
      String(
        formData.get("email") || ""
      )
    );


    data.append(
      "subject",
      String(
        formData.get("subject") || ""
      )
    );


    data.append(
      "message",
      String(
        formData.get("message") || ""
      )
    );


    /*
     * Google Apps Script does receive the
     * request successfully, but the browser
     * cannot read its cross-origin response.
     *
     * Therefore we intentionally don't use
     * try/catch for success detection.
     */

    fetch(
      "https://script.google.com/macros/s/AKfycbwhOunUIscSma6u5CETz9_wBrUyzwsR11ynSOWl5qwuT0gPd_Xvo04I5ELhNmfJXE--/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: data,
      }
    );


    // Clear the form
    form.reset();


    // Show success message
    setSending(false);
    setSubmitted(true);


    // Return button to normal
    setTimeout(() => {

      setSubmitted(false);

    }, 4000);

  }


  return (

    <div className="inner-page contact-final-page">


      {/* ==========================================
          CONTACT HEADER
      ========================================== */}

      <section className="contact-compact-header">

        <span>
          CONTACT MESA
        </span>


        <h1>

          LET&apos;S BUILD

          <br />

          <em>
            SOMETHING TOGETHER.
          </em>

        </h1>


        <p>

          Collaborations,
          events, projects,
          ideas or sponsorship —
          reach Team MESA.

        </p>

      </section>



      {/* ==========================================
          CONTACT + SPONSORSHIP
      ========================================== */}

      <section className="contact-workspace">


        {/* ======================================
            CONTACT FORM
        ====================================== */}

        <div className="contact-form-panel">

          <span>
            01 / CONTACT TEAM MESA
          </span>


          <h2>
            SEND A MESSAGE.
          </h2>



          <form
            onSubmit={handleSubmit}
          >


            <div className="contact-form-row">


              <label>

                <small>
                  NAME
                </small>


                <input
                  name="name"
                  required
                  placeholder="Your name"
                  disabled={sending}
                />

              </label>



              <label>

                <small>
                  EMAIL
                </small>


                <input
                  name="email"
                  required
                  type="email"
                  placeholder="you@email.com"
                  disabled={sending}
                />

              </label>


            </div>



            <label>

              <small>
                SUBJECT
              </small>


              <input
                name="subject"
                required
                placeholder="What is this about?"
                disabled={sending}
              />

            </label>



            <label>

              <small>
                MESSAGE
              </small>


              <textarea
                name="message"
                required
                rows={7}
                placeholder="Write your message..."
                disabled={sending}
              />

            </label>



                        <button
              type="submit"
              disabled={sending}
            >
              {sending
                ? "SENDING..."
                : "SEND MESSAGE"}

              <Send
                size={15}
              />
            </button>

            {submitted && (
              <p className="contact-success-message">
                ✓ MESSAGE SENT SUCCESSFULLY
              </p>
            )}


          </form>


        </div>



        {/* ======================================
            SPONSORSHIP
        ====================================== */}

        <div className="sponsorship-panel">


          <span>
            02 / SPONSORSHIP
          </span>


          <h2>
            SPONSOR MESA.
          </h2>


          <p>

            Partner with MESA for
            technical events,
            competitions,
            workshops and
            student-led engineering
            initiatives.

          </p>



          <div className="sponsor-qr">

            <MediaSlot
              src="/assets/contacts/sponsor-qr.jpg"
              alt="MESA Sponsorship QR"
              label="ADD SPONSOR QR"
            />

          </div>



          <div className="sponsor-contact-list">


            <a
              href="mailto:mesapccoe2627@gmail.com"
            >

              <Mail
                size={16}
              />


              <div>

                <small>
                  EMAIL
                </small>

                <strong>
                  mesapccoe2627@gmail.com
                </strong>

              </div>

            </a>



            <a
              href="https://www.instagram.com/mesa_pccoe"
              target="_blank"
              rel="noreferrer"
            >

              <AtSign
                size={16}
              />


              <div>

                <small>
                  INSTAGRAM
                </small>

                <strong>
                  @mesa_pccoe
                </strong>

              </div>

            </a>



            <div>

              <MapPin
                size={16}
              />


              <div>

                <small>
                  PCCOE
                </small>

                <strong>
                  Nigdi,
                  Pune
                </strong>

              </div>

            </div>


          </div>


        </div>


      </section>


    </div>

  );

}


export default Contact;