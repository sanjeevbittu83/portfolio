import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>sanjeev kumar</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>A hard working, a passionate about machine learning , deep learning & full stack development with immense interest in Algorithms and Data Structures. Skilled in C++, C and Python. A firm believer of the quote :“Take risks now and do something bold. You won’t regret it.”― Elon Musk </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Bc62 tiyasha appartement samarpally road,kestopur, kolkata-700102</p>
            <h5>Phone</h5>
            <p>+917779916932</p>
            <h5>Email</h5>
            <p>kbittu074@gmail.com.com</p>
            <h5>Linkedin</h5>
            <p>https://www.linkedin.com/in/sanjeev-kumar-02a30a150/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2020}
              schoolName="Institute of Engineering & Management, kolkata."
              schoolDescription="electronics and communication engineering with marks=7.1 CGPA"
               />

               <Education
                 startYear={2012}
                 endYear={2013}
                 schoolName="s.k high school, chanda"
                 schoolDescription="Board:BSEB,  marks=63%"
                  />
                <Education
                 startYear={2013}
                 endYear={2016}
                 schoolName="s.k high school, chanda"
                 schoolDescription="Board:BSEB,  marks=61.6%"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={"persent"}
              jobName="Remote internship"
              jobDescription="full stack developer"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="c"
                progress={95}
                />
                <Skills
                skill="c++"
                progress={95}
                />
                <Skills
                skill="Python"
                progress={75}
                />
                <Skills
                skill="machine learning"
                progress={60}
                />
                <Skills
                skill="data structure & algorithm"
                progress={78}
                />
                <Skills
                skill="Oops"
                progress={90}
                />
                <Skills
                skill="Flask"
                progress={50}
                />

              <Skills
                skill="javascript"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="ReactJS"
                    progress={70}
                    />
                    <Skills
                      skill="Mysql"
                      progress={65}
                      />
                <Skills
                skill="Php"
                progress={48}
                />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;