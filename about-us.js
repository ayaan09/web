import './about-us.css';
import sushi from './sushi.jpeg'
import hanz from './hanz.JPG'
function AboutUs() {

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

<div className="card-parent">
  <div className="title-card" data-aos="zoom-in" data-aos-duration="1800"> About Us
  <div className = "title-subtext"> Founded in November of 2022, Xperience was created by two undergraduates from The Chinese University of Hong Kong (CUHK) with the aim of providing ultrapersonalised and tailored education to students. Xperience is an online tutoring platform where students can book tutoring lessons from our diverse network of tutors, covering a wide range of subjects. Our tutors go through multiple stages of screening before they are qualified to teach.
  <br/>
  <br/>
  Our system allows the user to simply book / cancel lessons, schedule tutoring sessions with different tutors, and overall provide the most personalised experience to the student by introducing gamification into the system so that our students are rewarded for their efforts, ultimately incentivising and motivating them to work hard.
  <br/>
  <br/>
  We realised the importance of understanding each student's learning style and would like to curate the best possible learing experience for them. Each student is different and we believe in the idea of personalition to effectively learn and to attain quality results.
</div>
</div>
  <div className="profile-pic" data-aos="fade-up" data-aos-duration="1500" >
      <img src={sushi} alt=""/> <div className="profile-pic-2"> <img src={hanz} alt=""/>
        </div> <div className="sushi-position"> Founder & CEO
        </div> <div className="sushi-name"> Atsushi Imoto
        </div> <div className="hanz-position"> Co-Founder & COO
        </div> <div className="hanz-name"> Hanzalah Ayaan Choudhury
        </div> <div className="sushi-education"> Year 2, Economics (CUHK)
        </div> <div className="hanz-education"> Year 4, Computer Engineering (CUHK)
        </div>
</div>


<div className="Our-Milestones">
  <div className="Our-Milestones-Text"> Our Milestones </div>
  <div className="empty-space"> </div>
</div>


</div>

        </div>
 );


}
export default AboutUs;