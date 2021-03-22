import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },

        { id: "ReactJS_skill", content: "ReactJS", porcentage: "90%", value: "90" },
        { id: "NodeJS_skill", content: "NodeJS", porcentage: "80%", value: "80" },
        
        { id: "HTML_skill", content: "HTML", porcentage: "90%", value: "90" },
        { id: "CSS_skill", content: "CSS", porcentage: "80%", value: "80" },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "JAVA_skill",
          content: "JAVA",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "SQL_skill",
          content: "SQL",
          porcentage: "70%",
          value: "70"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm currently a 4th year student at NIT Jaipur '21 batch 🎓 . Major in Metallurgy and Minor in Computer Science 👨‍💻 . I love Web Development and has a demonstrated history of working with web technologies like ReactJS and NodeJS. Excellent with programming and a good hold over Data Structures and Algorithms."
        },
        {
          id: "second-p-about",
          content:
            "I'm a travelling enthusiast and football lover . Also been a National level chess player and part of an NGO H.O.P.E , member of TEDx MNIT Jaipur team and various cultural societies of college."
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
