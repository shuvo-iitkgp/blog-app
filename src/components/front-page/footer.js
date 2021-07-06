import { Button, Link } from '@material-ui/core'
import React from 'react'
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import GitHubIcon from '@material-ui/icons/GitHub';
import PinterestIcon from '@material-ui/icons/Pinterest';
function footer() {
    return (
        
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join us to receive posts on your email.
                </p>
            
                <p className="footer-subscription-text">
                    You can subscribe any time.
                </p>
            
                <p className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                        <Button variant="contained" color="secondary" className="btn">
                        Subscribe
                        </Button>
                    </form>
                </p>
            </section>
            
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        
                        <Link to='/'>Inverstors</Link>
                        <Link to='/'>Terms of Services</Link>
                        
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                        
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Pictures</h2>
                        <a href="#">Submit Picures</a>
                        <a href='#'>Ambassadors</a>
                        <a href='#'>Agency</a>
                        <a href='#'>Influencer</a>
                        
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <a href="https://www.instagram.com/shuvo_der_eroberer/" target="_blank">Instagram</a>
                        <a  href="https://www.linkedin.com/in/subhajitb2002/" target="_blank">LinkedIn</a>
                        <a href="https://www.facebook.com/shuvo.098/" target="_blank">Facebook</a>
                        <a href="https://twitter.com/SubhajitB98" target="_blank">Twitter</a>
                        <a  href="https://github.com/shuvo-iitkgp" target="_blank">Github</a>
                        
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            PosterRoom 
                        </Link>
                    </div>
                    <small className="website-rights">P.R. &copy; 2021</small>
                    <div className="social-icons">
                        <a className="social-icon-link" href="https://www.facebook.com/shuvo.098/" target="_blank" aria-label="Facebook">
                        <FacebookIcon/>
                        </a>
                        <a className="social-icon-link" href="https://www.instagram.com/shuvo_der_eroberer/" target="_blank" aria-label="Instagram">
                        <InstagramIcon/>
                        </a>
                        <a className="social-icon-link" href="https://twitter.com/SubhajitB98" target="_blank" aria-label="Twitter">
                        <TwitterIcon/>
                        </a>
                        <a className="social-icon-link" href="https://www.linkedin.com/in/subhajitb2002/" target="_blank" aria-label="LinkedIn">
                        <LinkedInIcon/>
                        </a>
                        <a className="social-icon-link" href="https://github.com/shuvo-iitkgp" target="_blank" aria-label="Github">
                        <GitHubIcon/>
                        </a>
                        <a className="social-icon-link" href="https://www.reddit.com/user/shuvo_iit" target="_blank" aria-label="Reddit">
                        <RedditIcon/>
                        </a>
                        <a className="social-icon-link" href="https://in.pinterest.com/suvo98890/_saved/" target="_blank" aria-label="Pinterest">
                        <PinterestIcon/>
                        </a>
                    </div>
                </div>
                
            </section>
        </div>
        
    )
}

export default footer
