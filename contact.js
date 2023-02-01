import './contact.css'

function Contact(){
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
    <div class="contact-us" data-aos="fade-right" data-aos-duration="2000">Contact Us <span class = "title-subtext"><strong> Have any questions? Feel free to contact us using the contact form below! We are more than happy to answer your questions! </strong></span> </div>
    </div>

    <form class="form-contact" data-aos="fade-up" data-aos-duration="3000" action="index.html" method="post">
    <label for="Name" >First Name</label >
    <input type="text" name="Name" value="" />
    <label for="Last-Name" >Last Name</label>
    <input type="text" name="Last-Name" value="" />
    <label for="Email">Email</label>
    <input type="email" name="Email" value=""/>
    <label for="number">Phone Number</label>
    <input type="number" name="number" value=""/>
    <label for="Enquiry">Message</label>
    <input type="text" name="Enquiry" value=""/>
    <button type="submit" name="button" class="btn btn-secondary" className="submit-form">Submit</button>
    </form>

    <div class="empty-space">
    </div>


    <script src="https://unpkg.com/aos@next/dist/aos.js">
    </script>
    <script>
    AOS.init();
    </script>
    </div>

    );
}

export default Contact;