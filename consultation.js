import './consultation.css';
import university from './university.png';
import briefcase from './briefcase.png'

function Consultation(){
    return(
        <div>
        <div className="top-bar">
        <ol className="name">
        <li className="logo-main"><a id="xperience" href="/">XPERIENCE</a></li>
        <li className="first-item"><a id="xperience" href="/about">About us</a></li>
        <li className="other-items">Find a Tutor</li>
        <li className="other-items">Courses</li>
        <li className="other-items"> <a id="xperience" href="/consultation">Consultation</a></li>
        <li className="other-items"><a id="xperience" href="/careers">Careers</a></li>
        <li className="other-items"><a id="xperience" href="/contact">Contact</a></li>
        <button type="button" className="btn btn-link btn-signup">Sign Up</button>
        <button type="button" className="btn btn-light ">Sign In</button>
        </ol>
        </div>

        
        <div class="one-stop-services" data-aos="fade-right" data-aos-duration="2000">One-stop Consulting Services: </div>
        <div class="education-consultation" data-aos="fade-right" data-aos-duration="2000">Academic Consultation <span class = "education-consultation-subtext"><strong>Looking to enter you deam university? We are currently offering education consultation services to help make your dreams come true! </strong></span> </div>
        <div class="services-offering" data-aos="fade-right" data-aos-duration="2000"> Services we are Offering: </div>
        <div class="services-offering-subtext" data-aos="fade-right" data-aos-duration="2000"><ol>
        <li>University application assistance (e.g. how to write entrance essays, personal statements, CVs).</li>
        <li>How to ace your exams. We focus on International curriculums and will provide exam preparation tips, and guide you through your studies (IB, A-levels, AP).</li>
        <li>Assist your entire university application process (assist with applying through UCAS (UK), Common App (US), or any other destination of your choice).</li>
        </ol>
        </div>
        <div class="university-image" data-aos="fade-right" data-aos-duration="2000"> <img src={university} alt=""/></div>
        <div class="learn-more-btn" data-aos="fade-right" data-aos-duration="2000"> <button type="button" class="btn btn-3 ">Learn More</button></div>     
        <div>
        <div class="career-consultation" data-aos="fade-right" data-aos-duration="2000"> Career Consultation <span class = "career-consultation-subtext"><strong> Want to land your dream job? We have mentors who have landed intern jobs at large corporate banks, big 4, investment banks, etc. who will help guide you and give you extensive advice on landing these offers! </strong></span> </div>
        <div class="career-image" data-aos="fade-right" data-aos-duration="2000"> <img src={briefcase} alt=""/></div>
        </div>
        <div class="services-offering-2" data-aos="fade-right" data-aos-duration="2000"> Services we are Offering: </div>
        <div class="services-offering-subtext" data-aos="fade-right" data-aos-duration="2000"><ol>
        <li>Guidance and tips on how to apply for jobs and stand out from other applicants.</li>
        <li>Get access to our extensive network of individuals who have worked in large multinational companies.</li>
        <li>Assist you through the application process and giving advice on what recruiters are looking for in various different industries.</li>
        </ol>
        </div>
        <div class="learn-more-btn-btn" data-aos="fade-right" data-aos-duration="2000"> <button type="button" class="btn btn-3 ">Learn More</button></div>
        <div class="empty-space"></div>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script></script>
        </div>
    );
}

export default Consultation;