import React from 'react';

function About (props) {
    return(
        <div className = "container-about">
            <div class="card text-center">
                <div class="card-body">
                    <img class="card-img-top" src="images\celd.jpg" alt="Card image cap" />
                    <h5>Charles Eldridge, Full Stack Web Developer</h5>
                    <h5>Valrico, Florida</h5>
                    <p>Hobbies:  When I am not chasing after my children or attempting to code, I like watching pro and college football and basketball.  Would love to get back into trail running in the future.</p>
                    <a href="https://www.linkedin.com/in/charles-eldridge-2b26b2b7/" class="btn btn-primary">LinkedIn</a>
                    <a href="https://github.com/Eldridge0831" class="btn btn-primary">Github</a>
                </div>
            </div>
        </div>
    );
}

export default About;