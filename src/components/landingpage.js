import React,{Component} from 'react';
import { Cell, Grid } from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        className="avatar-img"
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQEXKC4rPgrW9A/profile-displayphoto-shrink_200_200/0/1561025379136?e=1613001600&v=beta&t=wZtG-2UsFIhRxdxigFsagfhJUNswxL4Wcg2lpHFe8Gs"
                        alt="avatar"
                        />

                        <div style={{textAlign:"center",paddingTop:"10px",paddingBottom:"10px"}} className="banner-text">
                            <h2>David Kyosi</h2>
                            <h3>Full Stack Web Developer</h3>
                            <hr/>
                            <p>HTLM & CSS | JavaScript | Laravel | Angular | React | Node | TypeScript</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/kyosi-david-056aa8145/" target="_blank"><i  className="fa fa-linkedin-square"></i></a>
                                <a href="https://www.linkedin.com/in/kyosi-david-056aa8145/" target="_blank"><i  className="fa fa-github-square"></i></a>
                                <a href="https://www.linkedin.com/in/kyosi-david-056aa8145/" target="_blank"><i  className="fa fa-youtube-square"></i></a>
                                <a href="https://www.linkedin.com/in/kyosi-david-056aa8145/" target="_blank"><i  className="fa fa-facebook-square"></i></a>
                             
                            </div>
                        </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;