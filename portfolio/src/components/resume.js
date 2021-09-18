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
            <p>A hard working, a passionate about Problem solving and full stack development with immense interest in Algorithms and Data Structures. A firm believer of the quote :“Take risks now and do something bold. You won’t regret it.”― Elon Musk </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Vill-Raj kharsa, po-Koil Bhoopat, dis-Arwal 804430 BIHAR</p>
            <h5>Phone</h5>
            <p>+917779916932</p>
            <h5>Email</h5>
            <p>sanjeevbittu83@gmail.com</p>
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
              schoolDescription="electronics and communication engineering with marks=7.64 CGPA"
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
              startYear={"Jan "+ 2020}
              endYear={"Mar "+ 2020}
              jobName="software development intern at wit/bit"
              jobDescription="➢ I have worked on bugs and testing.
              ➢ I have worked on react js."
              />
              <Experience
              startYear={"Aug "+ 2020}
              endYear={"Dec "+ 2020}
              jobName="Teaching Assistant at Coding Ninja"
              jobDescription="➢I have solved problems, debug codes and
              helped students.
              ➢I have worked on Html, Css,Javascript,Node
              and Express."
              />
              <Experience
              startYear={"Oct "+ 2020}
              endYear={"Persent"}
              jobName="software development engineer at Mapline inc."
              jobDescription="➢ I have worked on many bugs and features.
              
              ➢ I am working on javascript, jquery, dot net,
              Microsoft sql server ,Html and css.
              
              ➢
              I have used some open source like slick grid js
              and leaflet js"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              
                <Skills
                skill="c++"
                progress={70}
                />
                 <Skills
                skill="data structure & algorithm"
                progress={70}
                />
                <Skills
                skill="Oops"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                />
                <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                skill="jQuery"
                progress={70}
                />
                <Skills
                skill="Asp.net"
                progress={50}
                />
                <Skills
                  skill="ReactJS"
                  progress={50}
                />
                <Skills
                  skill="NodeJs"
                  progress={50}
                />
                <Skills
                 skill="Mysql"
                 progress={60}
                />  
                
                <Skills
                skill="machine learning"
                progress={30}
                />
                

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;