import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'url(images/portfolio/' + projects.image + ')';
        console.log(projectImage)
        var projectLanguages = projects.languages.map(function(language){
          return <div className="card-tag text-sm">{language}</div>
        })
        return <div className="col-six tab-full mod-full">
        <div className="card" style={{visibility: 'visible'}}>
            <a target="_blank" href={projects.url}>
              <div className="card-img" style={{ backgroundImage:projectImage }}></div>
            </a>
            <div className="card-content">
                <div className="card-tags">
                    <div className="card-tag text-sm">{projects.category}</div>
                    <div className="card-tag text-sm">|</div>
                    
                    {projectLanguages}
                </div>
                <h4>{projects.title}</h4>
                <p>{projects.description}</p>
                {/* <a rel="noopener noreferrer" target="_blank" href="https://github.com/MartynFung"><strong>View Code</strong></a> */}
            </div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row projects-content">

            <h1>Check Out Some of My Works.</h1>

            
                {projects}
            
          </div>
   </section>
    );
  }
}

export default Portfolio;
