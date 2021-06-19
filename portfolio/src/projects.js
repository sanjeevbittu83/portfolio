import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              <h5>i have created my portfolio using react js.</h5>
            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
        </div>

          

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Html Project #1</CardTitle>
            <CardText>
              <h5>I HAVE CREATED A  WEBPAGE USING HTML,CSS,JS TO HELP 3RD SEMESTER STUDENT IN NUMERICAL METHODS</h5>
            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
		</div>
      )
    } else if(this.state.activeTab === 2) {
      return (
         <div className="projects-grid">
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >machine learning Project #1</CardTitle>
            <CardText>
              <h5>sentiment analysis on product reviews using machine learning techniques</h5>
            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
		  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >machine learning project #2</CardTitle>
            <CardText>
              <h5>credit card fraud detection using machine learning techniques</h5>
            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
		</div>
      )
    } else if(this.state.activeTab === 3) {
      return (
         <div className="projects-grid">
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Project #1</CardTitle>
            <CardText>
              <h5>i have developed web app using zoho creator cloud based software for a startup organization for helping farmer.</h5>
            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
		  </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Other</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;