import './career.css'

function Career(){
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

        <div class="card-parent">
        <div class="become-a-tutor-with-us" data-aos="fade-right" data-aos-duration="2000">Become a Tutor with Us <span class = "title-subtext"><strong>We are currently looking for tutors with highschool diploma or above, with outstanding academic record. Current undergraduates or university graduates are preferred. Click 'Learn More' below to see what qualities we are looking for in a tutor and the subjects / courses that we require assistance with. If interested, please send your CV / resume, academic transcript, and a photo of you to @gmail.com </strong></span> </div>
        </div> <div class="join-our-operations-team" data-aos="fade-right" data-aos-duration="2000" > Join Our Operations Team <span class = "title-subtext"><strong> Applications to join our operations team is currently closed, if you would like an update when there are job slots open, please input your email below and we will notify you as soon as there are positions open. </strong></span>
        <div class="partner-with-us"> Partner with Us <span class = "title-subtext"><strong> We are currently looking for investors and partners who share the same vision in delivering the best-quality education to students. If you would like to invest in our company or partner with us, please do not hesitate to contact us! </strong></span>
        </div>
        <div class="learn-more-btn-1"> <button type="button" class="btn btn-3 ">Learn More</button>
        </div>
        <div class="learn-more-btn-2"> <button type="button" class="btn btn-3 ">Learn More</button>
        </div>
        <div class="learn-more-btn-3"> <button type="button" class="btn btn-3 ">Learn More</button>
        </div>
        <div class="empty-space">
        </div>
        </div>

        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
        AOS.init();
        </script>

        </div>
    );
}

export default Career;