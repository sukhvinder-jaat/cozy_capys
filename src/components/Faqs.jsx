import React from "react";
import { Accordion } from "react-bootstrap";
export const Faqs = () => {
  return (
    <>
      <section className="bg_orangeFC pt-md-5" id="FAQ">
        <div className="container py-sm-5 pt-4">
          <h2 className="text-center text-white ff_bomb_one fs_6xl fw-normal faqShadow pt-5 pb-3">
            FAQ’s
          </h2>
          <Accordion className="mt-md-5 mt-4">
            <Accordion.Item eventKey="0" data-aos="fade-down">
              <Accordion.Header>Q1. What is Cozy Capys?</Accordion.Header>
              <Accordion.Body>
                <p className="ff_sans fw-normal fs_md clr_black0D opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" data-aos="fade-down">
              <Accordion.Header>
                Q2. How does Cozy Capys give back to wildlife conservation?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_sans fw-normal fs_md clr_black0D opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" data-aos="fade-down">
              <Accordion.Header>
                Q3. What kind of community events does Cozy Capys host?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_sans fw-normal fs_md clr_black0D opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" data-aos="fade-down">
              <Accordion.Header>
                Q4. How can I stay updated on Cozy Capys news and announcements?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_sans fw-normal fs_md clr_black0D opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" data-aos="fade-down">
              <Accordion.Header>
                Q5. How can I adopt my Cozy Capy?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_sans fw-normal fs_md color_black opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

