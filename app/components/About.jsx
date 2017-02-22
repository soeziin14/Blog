var React = require('react');

const About = () => {

    return(
        <div>
            <header>
                <div className="row header">
                    <div className="row">
                        <div className="columns small-12 medium-6 large-6 vogue">
                            <img src='https://s3.amazonaws.com/jinblog/About/jin_glare.jpg' alt=""></img>
                        </div>
                        <div className="columns small-12 medium-6 large-6 intro-text">
                                <h1>FEATURED IN VOGUE.</h1>
                                <span className="name">INGENIOUS. WORLD-CLASS. <br/>
                                                   #1 CANDIDATE.
                                </span>
                                <hr/>
                                <h2>Grab a Jin Today!</h2>
                                <span className="skills">No hidden fees. 100% satisfaction guaranteed.</span>
                        </div>
                    </div>
                </div>
            </header>
            <section id="features">
                <div className="row">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="section-title">FEATURES</h1>
                            <blockquote>"The ideal candidate is experienced, witty, social, smart, handsome, gentle, kind, forgiving,
                                happy, and doesn't exist."
                                <footer>- A wise recruiter</footer>
                            </blockquote>
                            <hr/>
                        </div>
                    </div>
                    <div className="row feature">
                        <div className="columns small-12 medium-6 large-6 img-responsive">
                            <img src="https://s3.amazonaws.com/jinblog/About/corp_slave.jpg" alt=""/>
                        </div>
                        <div className="columns small-12 medium-6 large-6 description">
                            <h1 className="section-title">YOUNG.</h1>
                            <p>Jin's young age and his immunity to diseases ensure a prolonged enslavement to your company.</p>
                        </div>
                    </div>
                    <div className="row feature">
                        <div className="columns small-12 medium-6 large-6 img-responsive">
                            <img src="https://s3.amazonaws.com/jinblog/About/passion.jpg" alt=""/>
                        </div>
                        <div className="columns small-12 medium-6 large-6 description">
                            <h1 className="section-title">PASSIONATE.</h1>
                            <p>Jin might just go out of this way to safeguard his passion. Even if it means getting wet in the rain.</p>
                        </div>
                    </div>
                    <div className="row feature">
                        <div className="columns small-12 medium-6 large-6 img-responsive">
                            <img src="https://s3.amazonaws.com/jinblog/About/tech_stack.png" alt=""/>
                        </div>
                        <div className="columns small-12 medium-6 large-6 description">
                            <h1 className="section-title">SKILLED.</h1>
                            <p>Jin has 1,000,000+ <span className="seconds">seconds</span> of experience in various modern programming technologies.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="hr-no-padding"/>
            <section className="success" id="pricing">
                <div className="columns text-center small-12 medium-12 large-12">
                    <h1 className="section-title">PRICING</h1>
                </div>
                <div className="row pricing_options">
                    <div className="row text-center">
                        <div className="columns small-12 medium-4 large-4">
                            <h1>$10,000</h1>
                            <p>You will be presented with a heart-warming monkey in your office.</p>
                            <img className="img-thumbnail" src="https://s3.amazonaws.com/jinblog/About/uck.png" alt=""/>
                        </div>
                        <div className="columns small-12 medium-4 large-4">
                            <h1>$20,000</h1>
                            <p>Jin will intently work with computer. Watching youtube.</p>
                            <img className="img-thumbnail" src="https://s3.amazonaws.com/jinblog/About/kid_computer.jpg" alt=""/>
                        </div>
                        <div className="columns small-12 medium-4 large-4">
                            <h1>$70,000</h1>
                            <p>Equivalent to hiring Mark Zuckerberg as a developer.</p>
                            <img className="img-thumbnail" src="https://s3.amazonaws.com/jinblog/About/mark.jpeg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="row contact_header">
                    <div className="columns text-center small-12 medium-12 large-12">
                        <h1 className="section-title">About Me</h1>
                    </div>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 serious_header">
                        <img id="imsma" src="https://s3.amazonaws.com/jinblog/About/imsma.jpg" alt=""/>
                    </div>
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <h1>Jokes Aside...</h1>
                        <p>Hi, I am Jin Song. Thank you for visiting my blog and going through my obnoxious skeletal index page. To learn
                            front-end development better, I decided to try everything from start instead of using a fancy template that
                            lies out in the internet. And instead of
                            going over everything I have in my resume, I wanted to make my
                            introduction
                            a little special, as I am sure you are bored of seeing serious, typical portfolio sites. This site is built using Express.js, Node.js, React, and DynamoDB as its database. Everything is self-taught, and this site is my first attempt at serverless SPA.
                            Even if it did not impress you, I hope it at least made you laught a little.
                            The site is still work in progress, and I hope to work on it more soon.
                            <br/>
                            <br/>
                            I am an energetic guy who likes to interact and have fun
                            with people, even with clients! The photo was taken during IMSMA A1 training session in Spiez, Switzerland while
                            I was on project IMSMA @ Novetta. You could see from the picture that I was very happy to be chosen to be sent
                            to this beautiful place with great people.
                            <br/>
                            <br/>
                            On a more academic and technical note, I studied at Northern Virginia Community College at Annandale,
                            where I received associate degree in Economics. I then transferred to University of Virginia at Charlottesville.
                            I changed my major to Computer Science and proceeded to graduate.
                            At school, I took Java courses with some C++ background, so I am familiar with Object Oriented Programming.
                            I still deem JAVA as my strongest language, but I believe Javascript comes in as close second, as I picked up
                            and gained professional experience working on Handlebar.js, Ractive.js, and Node.js.
                            <br/>
                            <br/>
                        </p>
                        <p>I am probably not the smartest nor most experienced you are looking for. However, I can promise persistent
                            energy.</p>
                    </div>
                    <div className="">
                        <h3>If you want to know more about me, I kindly invite you to...</h3>
                        <div className="">
                            <a href="https://www.linkedin.com/in/jin-song-2684a1a0">
                                <img src="https://s3.amazonaws.com/jinblog/About/linkedin.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

module.exports = About;
