import React from "react";

function AboutMe() {
  return (
    <>
      <section
        class="about"
        data-aos="fade-right"
        data-aos-duration="4000"
        id="about"
      >
        <h1 class="heading">
          <span>A</span>bout <span>M</span>e
        </h1>
        <div class="row">
          <div class="info-text">
            <h2 class="para1">
              Hi there! I'm a frontend developer who loves making websites
              awesome. With HTML, CSS, and JavaScript, I make sure websites look
              great and work smoothly. Imagine me like a conductor leading an
              orchestra, using code to create beautiful and innovative websites.
            </h2>
            <h2 class="para2">
              When I'm not fixing website layouts or solving web problems, I
              enjoy friendly arguments about whether to use tabs or spaces in
              code. But don't worry, my jokes might not be super funny, but they
              won't break your browser!
            </h2>

            <h2 class="para3">
              So, get ready for a fun ride through the world of web development
              with me. Let's turn ideas into real websites, one step at a time!
              🚀💻
            </h2>
            <div class="download-btn">
              <a
                class="btn"
                href="https://drive.google.com/file/d/1N1zuZy7SJu7Rj4Dt1WrMdtFdOOxUVPMS/view?usp=drivesdk"
                target="_blank"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
