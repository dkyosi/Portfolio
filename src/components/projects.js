import React,{Component} from 'react';
import { Cell, Grid, Tab, Tabs,Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div style={{display:"flex"}}>
                    <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                    <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover"}}>React Project #1</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton style={{color:"f2f"}} name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                    <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover"}}>React Project #2</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton style={{color:"f2f"}} name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                    <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover"}}>React Project #3</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton style={{color:"f2f"}} name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div style={{display:"flex"}}>
                    <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                    <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://miro.medium.com/max/3492/1*fKb9TdxSYjVzWindUWaGUg.png) center / cover"}}>Angular Project #1</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton style={{color:"f2f"}} name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                    <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://miro.medium.com/max/3492/1*fKb9TdxSYjVzWindUWaGUg.png) center / cover"}}>Angular Project #2</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton style={{color:"f2f"}} name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                    <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://miro.medium.com/max/3492/1*fKb9TdxSYjVzWindUWaGUg.png) center / cover"}}>Angular Project #3</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton style={{color:"f2f"}} name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div style={{display:"flex"}}>
                <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png) center / cover"}}>JavaScript Project #1</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:"#fff"}}>
                    <IconButton style={{color:"f2f"}} name="share"/>
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png) center / cover"}}>JavaScript Project #2</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:"#fff"}}>
                    <IconButton style={{color:"f2f"}} name="share"/>
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png) center / cover"}}>JavaScript Project #3</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:"#fff"}}>
                    <IconButton style={{color:"f2f"}} name="share"/>
                </CardMenu>
            </Card>
            </div>
        )
    }else if(this.state.activeTab === 3){
        return(
            <div style={{display:"flex"}}>
                <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://www.cloudways.com/blog/wp-content/uploads/laravelpillar.jpg) center / cover"}}>Laravel Project #1</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:"#fff"}}>
                    <IconButton style={{color:"f2f"}} name="share"/>
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://www.cloudways.com/blog/wp-content/uploads/laravelpillar.jpg) center / cover"}}>Laravel Project #2</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:"#fff"}}>
                    <IconButton style={{color:"f2f"}} name="share"/>
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth:"450",margin:"auto"}}>
                <CardTitle style={{color:"#f2f",textAlign:"center",height:"176px",background:"url(https://www.cloudways.com/blog/wp-content/uploads/laravelpillar.jpg) center / cover"}}>Laravel Project #3</CardTitle>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:"#fff"}}>
                    <IconButton style={{color:"f2f"}} name="share"/>
                </CardMenu>
            </Card>
            </div>
            )
        }

    }


    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>  
                    <Tab>JavaScript</Tab>
                    <Tab>Laravel</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;