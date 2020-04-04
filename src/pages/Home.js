import React from 'react';


function Home() {
  return (
    <div className="App">
      
  <div className="wrapper">
    <div id="main-container" className="container bg-white">

      <section className="main-section">
        <h1><a className="nav-link" href="index.html">Nate's Portfolio</a></h1>
        <div className="row">
          {/* <!--row 1--> */}
          <div className="col-md-6 col-sm-12">
            <div className="work">
              <div style={{backgroundImage:"url('../assets2/pactit.PNG')"}} className="work-image">
              </div>
              <a href="https://jonesec2.github.io/Pack-It/"><button className="btn btn-primary mt-2">Pack It</button></a>
            </div>
          </div>


          <article className="col-md-6 col-sm-12">
            <div className="work">
              <div style={{backgroundImage:"url('../assets2/git.PNG')"}} className="work-image">
              </div>



              <a href="https://github.com/thismakesnosense"><button className="btn btn-primary mt-2">GitHub</button></a>
            </div>
          </article>
        </div>
        {/* <!--row 1--> */}

        <div className="row">
          {/* <!--row 2--> */}
          <div className="col-md-6 col-sm-12">
            <div className="work">
              <div style={{backgroundImage:"url('../assets2/resm.PNG')"}} className="work-image">
              </div>

              <a href="assets2/Resume.pdf"><button className="btn btn-primary mt-2">Resume</button></a>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="work">
              <div style={{backgroundImage:"url('../assets2/game.PNG')"}} className="work-image">
              </div>

              <a href="batgame.html"><button className="btn btn-primary mt-2">Shoot Bats</button></a>
            </div>
          </div>
        </div>
        {/* <!--row 2--> */}

        <div className="row">
          {/* <!--row 3--> */}
          <div className="col-md-6 col-sm-12">
            <div className="work">
              <div style={{backgroundImage:"url('../assets2/linkn.PNG')"}} className="work-image">
              </div>

              <a href="https://www.linkedin.com/in/nathan-olenik-092a8919b/"><button
                  className="btn btn-primary mt-2">linkedin</button></a>
            </div>

          </div>
        
          <div className="col-md-6 col-sm-12">
            <div className="work">
              <div style={{backgroundImage:"url('assets2/vagreen.PNG')"}} className="work-image">
              </div>

              <a href="https://thegreentourist.herokuapp.com/"><button
                  className="btn btn-primary mt-2">VA Green</button></a>
            </div>

          </div>
        </div>

        {/* <!--row 3--> */}
        </section>
    </div>

  </div>
  
  <footer>

    <div className="footer">
      Copyright &copy;
    </div>

  </footer>
  
  

    </div>
  );
}

export default Home;
