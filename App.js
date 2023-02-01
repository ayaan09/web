import logo from './logo.svg';
import './App.css';
import image from'./image.jpg';
import image2 from'./cuhk.png';
import image3 from'./hku.png';
import image4 from'./hkust.png';
import image5 from'./university of michigan.png';
import image6 from'./lse.png';
import image7 from'./uoft.png';
import image8 from'./target.png';
import image9 from'./booking.png';
import image10 from'./reward.png';
import image11 from'./primary school.png';
import image12 from'./python.png';
import image13 from'./graduation-hat.png';


function App() {

  return (

    <div className="App">
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

<div className="card-parent" data-aos="fade-right" data-aos-duration="1800">
<div className="cards">
  <img src={image} alt=""/>
</div>
  <div className="title-card">Tutoring tailored to you. For all students of all levels.<span className = "title-subtext"><strong>We personalise your tutoring experience to cater towards your needs. Our specially selected tutors have gone through a rigourous screening process to ensure you receive the best education possible. We cater all students from primary school all the way to university level.</strong></span> </div>
</div>
<div className="book-free-trial" data-aos="fade-right" data-aos-duration="1800"> *We are currently offering a free trial className for new students, book a free trial with us now!*
</div>
<div className="our-tutors-are-from" data-aos="fade-right" data-aos-duration="2000"> OUR TUTORS ARE FROM:
  </div>

  <div className="logos">
  <div className="cuhk-logo"> <img src={image2} alt=""/> </div>
  <div className="hku-logo"> <img src={image3}alt=""/> </div>
  <div className="hkust-logo"> <img src={image4} alt=""/> </div>
  <div className="university-of-michigan"> <img src={image5} alt=""/> </div>
  <div className="lse-logo"> <img src={image6} alt=""/> </div>
  <div className="uoft-logo"> <img src={image7} alt=""/> </div>
  </div>
  <div className="and-more" data-aos="fade-right" data-aos-duration="2000"> And more... </div>
  
  <div class="How-Are-We-Different" data-aos="fade-up" data-aos-duration="2000"> How are we Different?
    <div class="How-Are-We-Different-Subtext"><ol>
      <li>Ultrapersonalied and tailored teaching style to suit your needs.</li>
      <li>You decide on the tutor and simple timeslot booking / cancellation system.</li>
      <li>Rewards and points system to encourage active participation and motivate students to work hard.</li>
    </ol>
    </div>
    <div class="how-are-we-different-images">
      <img src={image8} alt=""/>
      <img src={image9} alt=""/>
      <img src={image10} alt=""/>
    </div>
    </div>
    
    <div class="flaticon-Subtext-1"> We Focus on Your needs
    </div>
    <div class="flaticon-Subtext-2"> Simple Timeslot Booking / Cancellation
    </div>
    <div class="flaticon-Subtext-3"> Points and Rewards System
    </div>

    <div class="Tutoring-levels" data-aos="fade-up" data-aos-duration="2000"> Tutoring Levels
</div>
<div class="primary-parent">
  <div class="Primary-Level" data-aos="slide-up" data-aos-duration="2000"> <img src={image11} alt=""/> 
    <div class="primary-title"> Primary School (6-11yrs)
  </div> <div class="primary-text"> We have tutors who specialise in primary school education, teaching your children the fundamentals and refining their abilities.
     </div> <button type="button" class="btn btn-1 ">Learn More</button>
</div> <div class="Secondary-Level" data-aos="slide-up" data-aos-duration="2300"> <img src= {image12} alt=""/> 
  <div class="secondary-title"> Secondary School (12-17yrs) <div class="secondary-text"> We have an extensive network of highschool graduates, currently attending notable universities with outstanding academic records.
 </div> <button type="button" class="btn btn-2 ">Learn More</button>
</div>
</div> <div class="University-Level" data-aos="slide-up" data-aos-duration="2600"> <img src= {image13} alt=""/>
  <div class="university-title"> University (18-25yrs) <div class="university-text"> Majority of our tutors are comprised of current university undergraduate students or of higher level, from a wide range of backgrounds covering most major subjects.
  </div> <button type="button" class="btn btn-3 ">Learn More</button>
</div>
    </div>
</div>
<div class="empty-space">
</div>

  </div>

  );
}

export default App;
