import React from 'react';
import profile from '..//celd.jpg';
import { Card } from 'react-bootstrap';
 
function About (props) {
    return(
        <div className = "container-about justify-content-center align-items-center d-flex mt-5">
            <Card className="profile-card" border="primary" style={{ width: '40%'}}>          
                <Card.Img className="card-img-top" variant="top" src={profile} alt="profile" />
                <Card.Body>
                    <Card.Title>Charles Eldridge</Card.Title>
                    <Card.Text>Full Stack Developer</Card.Text>
                    <Card.Text>Valrico, Florida</Card.Text>
                    <Card.Text>Hobbies:  When I am not chasing after my children or coding at my desk, I like watching football and basketball.</Card.Text>
                    <Card.Text>Goals:  Show my kids the world, and make better websites than the ones that leave you constantly disappointed.</Card.Text>
                    <Card.Link href="https://www.linkedin.com/in/charles-eldridge-2b26b2b7/" className="btn btn-primary">LinkedIn</Card.Link>
                    <Card.Link href="https://github.com/Eldridge0831" className="btn btn-primary">Github</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;