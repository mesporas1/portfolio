import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.descriptions}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        var workDescription = work.descriptions.map(function (description) {
          return <li dangerouslySetInnerHTML={{ __html: description }}></li>
        })
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <ul class="description">
            {workDescription}
          </ul>
        </div>
      })

      var volunteer_work = this.props.data.volunteer_work.map(function (volunteer_work) {
        var volunteer_workDescription = volunteer_work.descriptions.map(function (description) {
          return <li dangerouslySetInnerHTML={{ __html: description }}></li>
        })
        return <div key={volunteer_work.company}><h3>{volunteer_work.company}</h3>
          <p className="info">{volunteer_work.title}<span>&bull;</span> <em className="date">{volunteer_work.years}</em></p>
          <ul class="description">
            {volunteer_workDescription}
          </ul>
        </div>
      })

      var skills = this.props.data.skills.map(function (skills) {
        var projectImage = 'images/tech/' + skills.image;
        return <div key={skills.name} className="columns feature-item">
          <img className='skill' alt={skills.name} src={projectImage} />
          <h5>{skills.name}</h5>
        </div>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Volunteer Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {volunteer_work}
          </div>
        </div>



        <div className="row">

          <div className="three columns header-col">
            <h1><span>Technologies</span></h1>
          </div>

          <div>
            <div className="nine columns main-col"><p className="lead">{skillmessage}</p></div>
            <ul className="bgrid-quarters s-bgrid-thirds cf">
              {skills}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
