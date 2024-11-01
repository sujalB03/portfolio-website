import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import adoptailImg from "../assets/Projects/Frame1.svg";
import adoptailImg1 from "../assets/Images/website pics/Projects Image/adoptail1.png";
import adoptailImg2 from "../assets/Images/website pics/Projects Image/adoptail2.png";
import adoptailImg3 from "../assets/Images/website pics/Projects Image/adoptail3.png";
import adoptailImg4 from "../assets/Images/website pics/Projects Image/adoptail4.png";

import dseuCanteenImg from "../assets/Projects/Frame2.svg";
import dseuCanteenImg1 from "../assets/Images/website pics/Projects Image/dseu1.png";
import dseuCanteenImg2 from "../assets/Images/website pics/Projects Image/dseu2.png";
import dseuCanteenImg3 from "../assets/Images/website pics/Projects Image/dseu3.png";
import dseuCanteenImg4 from "../assets/Images/website pics/Projects Image/dseu4.png";
import dseuCanteenImg5 from "../assets/Images/website pics/Projects Image/dseu5.png";

import scoopTimesImg from "../assets/Projects/Frame3.svg";
import scoopTimesImg1 from "../assets/Images/website pics/Projects Image/thescooptimes1.png";
import scoopTimesImg2 from "../assets/Images/website pics/Projects Image/thescooptimes2.png";
import scoopTimesImg3 from "../assets/Images/website pics/Projects Image/thescooptimes3.png";
import scoopTimesImg4 from "../assets/Images/website pics/Projects Image/thescooptimes4.png";
import scoopTimesImg5 from "../assets/Images/website pics/Projects Image/thescooptimes5.png";
import scoopTimesImg11 from "../assets/Images/website pics/Projects Image/thescooptimes11.png";

import weatherAppImg from "../assets/Projects/Frame5.svg";
import weatherAppImg1 from "../assets/Images/website pics/Projects Image/weatherapp1.png";
import weatherAppImg2 from "../assets/Images/website pics/Projects Image/weatherapp2.png";
import weatherAppImg3 from "../assets/Images/website pics/Projects Image/weatherapp3.png";

import newsletterSignupImg from "../assets/Projects/Frame4.svg";
import newsletterSignupImg1 from "../assets/Images/website pics/Projects Image/newsletter1.png";
import newsletterSignupImg2 from "../assets/Images/website pics/Projects Image/newsletter2.png";
import newsletterSignupImg3 from "../assets/Images/website pics/Projects Image/newsletter3.png";
import newsletterSignupImg4 from "../assets/Images/website pics/Projects Image/newsletter4.png";

import "./Modal/modal.styles.css";
function Projects() {
  const projects = [
    {
      title: "Adoptail",
      demoLink: "https://webadoptail.infinityfreeapp.com/",
      images: [
        adoptailImg,
        adoptailImg3,
        adoptailImg1,
        adoptailImg4,
        adoptailImg2,
      ],
      description:
        "A website facilitating pet adoption and rehoming, simplifying the process and connecting animals with loving owners for lasting companionship.",
    },
    {
      title: "DSEU Canteen",
      demoLink: "https://dseucanteen.infinityfreeapp.com/",
      images: [
        dseuCanteenImg,
        dseuCanteenImg1,
        dseuCanteenImg2,
        dseuCanteenImg3,
        dseuCanteenImg4,
        dseuCanteenImg5,
      ],
      description:
        "A canteen website aimed at streamlining food ordering processes and providing a seamless dining experience for students and college faculty.",
    },
    {
      title: "The Scoop Times",
      demoLink: "Site is under Maintenance",
      images: [
        scoopTimesImg,
        scoopTimesImg1,
        scoopTimesImg2,
        scoopTimesImg3,
        scoopTimesImg4,
        scoopTimesImg5,
        scoopTimesImg11,
      ],
      description:
        "Responsive news website offering comprehensive coverage of global events, providing up-to-date information for informed readership.",
    },
    {
      title: "Weather Web App",
      demoLink: "https://weather-app-p9th.onrender.com/",
      images: [weatherAppImg, weatherAppImg1, weatherAppImg2, weatherAppImg3],
      description:
        "Responsive weather web app with integrated OpenWeatherMap API, providing current and 5-day forecasts for accurate weather updates.",
    },
    {
      title: "Newsletter Signup",
      demoLink: "https://newsletter-web-app-p442.onrender.com/",
      images: [
        newsletterSignupImg,
        newsletterSignupImg1,
        newsletterSignupImg2,
        newsletterSignupImg3,
        newsletterSignupImg4,
      ],
      description:
        "Responsive newsletter signup app with MailChimp API integration for streamlined subscription management and user-friendly signup process.",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProject(null);
  };

  return (
    <section
      className="projects"
      data-aos="fade-right"
      data-aos-duration="4000"
      id="projects"
    >
      <h1 className="heading fadeInUp">
        <span>P</span>ortfolio
      </h1>
      <Swiper
        className="mySwiper project-container"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
          formatFractionCurrent: function (number) {
            return "0" + number;
          },
          formatFractionTotal: function (number) {
            return "0" + number;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        modules={[Navigation, Pagination, EffectCoverflow]}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className={`slide${index + 1}`}>
            <img src={project.images[0]} alt={`${project.title} screenshot`} />
            <div className="content">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <button
                className="btn btn-view"
                onClick={() => openModal(project)}
              >
                View More
              </button>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-control">
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      {currentProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="overlay"
        >
          <h2 className="modal-heading">{currentProject.title}</h2>
          <a href={`${currentProject.demoLink}`}>
            <h2>Click here for Demo</h2>
          </a>
          <p className="modal-para">{currentProject.description}</p>
          <div className="project-images">
            {currentProject.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${currentProject.title} detail ${index + 1}`}
              />
            ))}
          </div>
          <button onClick={closeModal} className="modal-close-btn">
            Close
          </button>
        </Modal>
      )}
    </section>
  );
}

export default Projects;
