import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";


 function Blogdetails() {
  return (
    <>
      <Header />

      <section className="hero-area">
        <div
          className="breadcrumbs-area bg_cover"
          style={{
            backgroundImage: "url(assets/images/bg/breadcrumbs-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="page-title text-center">
                  <h1 data-aos="fade-up"> Blogs</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Blogs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-details-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30">
                <div className="blog-post-item" data-aos="fade-up">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-08.jpeg"
                      alt="Service Single"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta mb-1">
                      <ul>
                        <li>
                          <span>
                            <i className="far fa-calendar-alt" />
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Link"
                            >
                              25 Aug 2021
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="far fa-comment" />
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Link"
                            >
                              Com (5k)
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title">
                      Renting vs. Owning: A Flexible and Sustainable Choice for
                      Responsible Consumption
                    </h3>

                    <h4>Overview of Renting vs. Owning</h4>
                    <p>
                      Renting lets people access products or services for a
                      limited time. It avoids the long-term commitment of
                      ownership. Ownership often requires maintenance and
                      disposal. Renting offers flexibility and promotes shared
                      resources. This fundamental difference can lead to more
                      responsible consumption and less environmental impact.
                    </p>
                    <h4>How Renting Reduces Waste</h4>
                    <p>
                      The EPA reports that the U.S. generated 292.4 million tons
                      of trash in 2018. Renting helps reduce waste by maximizing
                      the lifecycle of products. Commonly rented items, like
                      furniture, electronics, and vehicles, are used for shorter
                      periods. For example, Rent the Runway shows how renting
                      clothes can cut down on clothing waste by extending the
                      life of garments.
                    </p>
                    <h4>
                      The Carbon Benefits of Renting: Less Production, Lower
                      Emissions
                    </h4>
                    <p>
                      Producing new items creates significant greenhouse gas
                      emissions. The World Economic Forum estimates that the
                      global fashion industry contributes over 10% of annual
                      carbon emissions. Renting helps reduce the demand for new
                      production, lowering overall emissions. Companies like
                      Turo support shared car usage, reducing individual car
                      ownership and the emissions that come with it.
                    </p>
                    <p>
                      The Mindful Consumer: How Renting Encourages Responsible
                      Use Studies show that renting encourages users to be more
                      intentional about their consumption choices, leading to
                      less impulsive buying. This shift in consumer behavior
                      promotes mindful consumption, resulting in a decrease in
                      resource depletion and waste. Individuals can make more
                      thoughtful decisions that align with sustainable practices
                      by choosing to rent.
                    </p>
                    <div className="blog-share">
                      <ul className="social-link">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="comments">
                  <h4 className="mb-20" data-aos="fade-up">
                    Comments
                  </h4>
                  <div className="comment-box border mb-40" data-aos="fade-up">
                    <ol className="comment-list">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author">
                            <img src="assets/images/avatar-1.jpg" alt="image" />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">Vivek Patel</h6>
                            <p>
                              I got to know about RentoMojo through a friend and
                              looked up for AC on their website and finally
                              rented one. The delivery guys installed the AC in
                              2 days. And with a such a low deposit and rent, I
                              didn't have to spend a whole lot for my comfort.
                              Thank you RentoMojo, for being so easy breezy on
                              my pocket.
                            </p>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Reply"
                              className="btn-text font-sm"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author">
                            <img src="assets/images/avatar-2.jpg" alt="image" />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">Anshul Kumar</h6>
                            <p>
                              Rentomojo was unbelievably helpful. Never thought
                              that setting up a new place would be just few
                              clicks away. The customer support staff was on
                              their toes to help me. Anytime I need something
                              for my house, Rentomojo has it. :
                            </p>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Reply"
                              className="btn-text font-sm"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                        <ol className="children">
                          <li className="comment">
                            <div className="comment-body">
                              <div className="comment-author">
                                <img
                                  src="assets/images/avatar-3.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="comment-content">
                                <h6 className="name">Nikita sharma</h6>
                                <p>
                                  The thought of renting the furniture had never
                                  occurred to me. When I saw Rentomojo's
                                  affordable range, I was super excited to try
                                  and it was really amazing. From service to
                                  product quality, everything was superb. I
                                  don’t have to carry the same furniture to
                                  every house I move to and can change the look
                                  of my home whenever I want 😬
                                </p>
                                <Link
                                  to="/login"
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  target="_self"
                                  title="Reply"
                                  className="btn-text font-sm"
                                >
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                  <div className="comment-reply" data-aos="fade-up">
                    <h4 className="mb-10">Post Your Comment</h4>
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>
                      Required fields are marked
                      <span className="required text-danger">*</span>
                    </p>
                    <form id="commentForm" className="comment-form">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="text"
                              className="form_control border"
                              name="name"
                              placeholder=" Name*"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="email"
                              className="form_control border"
                              name="email"
                              placeholder=" Email*"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-30">
                            <textarea
                              name="message"
                              className="form_control border"
                              placeholder="Comment"
                              required="required"
                              rows={6}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="main-btn">
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-30" data-aos="fade-up">
                  <h4 className="widget-title">Search</h4>
                  <form>
                    <div className="form_group">
                      <input
                        type="search"
                        className="form_control"
                        placeholder="Search Template"
                        required
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="widget categories-widget mb-30"
                  data-aos="fade-up"
                >
                  <h4 className="widget-title">Categories</h4>
                  <ul className="widget-link">
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Travel <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Lifestyle <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Design <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Technology <span>03</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Business <span>02</span>
                      </Link>
                    </li>
                  </ul>
                </div>
               
                  
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <Footer />

      <div class="back-to-top">
        <i class="fas fa-angle-up"></i>
      </div>
    </>
  );
}
export function Blogdetails2() {
  return (
    <>
      <Header />

      <section className="hero-area">
        <div
          className="breadcrumbs-area bg_cover"
          style={{
            backgroundImage: "url(assets/images/bg/breadcrumbs-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="page-title text-center">
                  <h1 data-aos="fade-up">Contact Us</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="blog-details-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30">
                <div className="blog-post-item" data-aos="fade-up">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-12.jpg"
                      alt="Service Single"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta mb-1">
                      <ul>
                        <li>
                          <span>
                            <i className="far fa-calendar-alt" />
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Link"
                            >
                              25 Aug 2021
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="far fa-comment" />
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Link"
                            >
                              Com (5k)
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="title"></h3>
                    <h4>
                      A Complete Guide To AC Maintenance: Things To Keep In Mind
                    </h4>
                    {/* <h4>How Renting Reduces Waste</h4> */}
                    <p>
                      Summers in Delhi can be brutal, yet many do not know how
                      to prep their one and only companion before the mercury
                      hits an all-time high. Yes, we are talking about ACs! To
                      deal with the unbearable heat, the role of a
                      well-functioning air conditioning system knows no bounds.
                      Even though you rent an AC, you should follow certain
                      steps to stay cool inside. If you put off the thought of
                      preparing your AC for the summer for too long, you might
                      be welcoming unwanted issues. Below, we present a complete
                      guide to what you should keep in mind for AC maintenance.
                      Let’s take a look below!
                    </p>
                    <h4>How to Prep Your AC before Summer in Delhi-NCR</h4>
                    <p>
                      Just when the temperature starts to rise, and you crave
                      anything but some cool breeze in your living room – your
                      air conditioner does not respond. During winter, your air
                      conditioner collects debris and requires maintenance right
                      before summer. To make sure the unit operates efficiently,
                      you need to follow a handful of AC maintenance tips. Let’s
                      go through the things you can do at home!
                    </p>
                    <h4>Things to Remember when Cleaning Your AC </h4>
                    <p>
                      If you want to start AC maintenance at home, the primary
                      rule is to follow the manufacturer’s instructions.
                      However, it is important to remember that the frequency of
                      cleaning your air conditioner depends on its usage.
                      Cleaning the air conditioner once a year is the thumb
                      rule, as you must get rid of large buildups of dust and
                      grime. If you live in an area where the pollution level is
                      high, you need to clean the filters at least twice or
                      thrice a year. To kick off the AC repair and maintenance
                      process, you need a coil cleaner, fin tool, and rubber
                      gloves.
                    </p>
                    <div className="blog-share">
                      <ul className="social-link">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="comments">
                  <h4 className="mb-20" data-aos="fade-up">
                    Comments
                  </h4>
                  <div className="comment-box border mb-40" data-aos="fade-up">
                    <ol className="comment-list">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author">
                            <img src="assets/images/avatar-1.jpg" alt="image" />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">Vivek Patel</h6>
                            <p>
                              I got to know about Equiprentals through a friend
                              and looked up for AC on their website and finally
                              rented one. The delivery guys installed the AC in
                              2 days. And with a such a low deposit and rent, I
                              didn't have to spend a whole lot for my comfort.
                              Thank you RentoMojo, for being so easy breezy on
                              my pocket.
                            </p>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Reply"
                              className="btn-text font-sm"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author">
                            <img src="assets/images/avatar-2.jpg" alt="image" />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">Anshul Kumar</h6>
                            <p>
                              Equiprentals was unbelievably helpful. Never
                              thought that setting up a new place would be just
                              few clicks away. The customer support staff was on
                              their toes to help me. Anytime I need something
                              for my house, Rentomojo has it. :
                            </p>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Reply"
                              className="btn-text font-sm"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                        <ol className="children">
                          <li className="comment">
                            <div className="comment-body">
                              <div className="comment-author">
                                <img
                                  src="assets/images/avatar-3.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="comment-content">
                                <h6 className="name">Nikita sharma</h6>
                                <p>
                                  The thought of renting the furniture had never
                                  occurred to me. When I saw Rentomojo's
                                  affordable range, I was super excited to try
                                  and it was really amazing. From service to
                                  product quality, everything was superb. I
                                  don’t have to carry the same furniture to
                                  every house I move to and can change the look
                                  of my home whenever I want 😬
                                </p>
                                <Link
                                  to="/login"
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  target="_self"
                                  title="Reply"
                                  className="btn-text font-sm"
                                >
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                  <div className="comment-reply" data-aos="fade-up">
                    <h4 className="mb-10">Post Your Comment</h4>
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>
                      Required fields are marked
                      <span className="required text-danger">*</span>
                    </p>
                    <form id="commentForm" className="comment-form">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="text"
                              className="form_control border"
                              name="name"
                              placeholder=" Name*"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="email"
                              className="form_control border"
                              name="email"
                              placeholder=" Email*"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-30">
                            <textarea
                              name="message"
                              className="form_control border"
                              placeholder="Comment"
                              required="required"
                              rows={6}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="main-btn">
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-30" data-aos="fade-up">
                  <h4 className="widget-title">Search</h4>
                  <form>
                    <div className="form_group">
                      <input
                        type="search"
                        className="form_control"
                        placeholder="Search Template"
                        required
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="widget categories-widget mb-30"
                  data-aos="fade-up"
                >
                  <h4 className="widget-title">Categories</h4>
                  <ul className="widget-link">
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Travel <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Lifestyle <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Design <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Technology <span>03</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Business <span>02</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-tag-cloud mb-30"
                  data-aos="fade-up"
                >
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <Footer />

      <div class="back-to-top">
        <i class="fas fa-angle-up"></i>
      </div>
    </>
  );
}
export function Blogdetails3() {
  return (
    <>
      <Header />

      <section className="hero-area">
        <div
          className="breadcrumbs-area bg_cover"
          style={{
            backgroundImage: "url(assets/images/bg/breadcrumbs-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="page-title text-center">
                  <h1 data-aos="fade-up">Contact Us</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="blog-details-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30">
                <div className="blog-post-item" data-aos="fade-up">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-13.jpg"
                      alt="Service Single"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta mb-1">
                      <ul>
                        <li>
                          <span>
                            <i className="far fa-calendar-alt" />
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Link"
                            >
                              25 Aug 2021
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="far fa-comment" />
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Link"
                            >
                              Com (5k)
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      Gated Communities vs. Standalone Buildings: Where To
                      Invest?
                    </h4>
                    {/* <h4>How Renting Reduces Waste</h4> */}
                    <p>
                      When choosing a home for rent or purchase, you have many
                      options available in the market. You will find standalone
                      buildings and gated communities, and the ample choices
                      will confuse you. However, there is a huge difference
                      between standalone buildings and gated societies! Each
                      comes with its advantages and disadvantages that widely
                      depend on your lifestyle, preferences, and budget. While
                      the standalone buildings are independent structures, the
                      gated residential buildings offer a secure environment. To
                      help you make the right decision, here is a complete guide
                      to where you should choose standalone alone buildings or
                      gated residential complexes.
                    </p>
                    <h4>What is a Standalone Building? </h4>
                    <p>
                      A standalone building is an independent structure not
                      attached to any other building. It offers complete
                      autonomy and self-sufficiency. Occupants of standalone
                      buildings feel a sense of privacy, as there are no common
                      areas or shared walls with neighbouring properties. One of
                      the main features of a standalone building is greater
                      flexibility in terms of customisation and usage. If you
                      buy a standalone building, you can modify the layout and
                      design according to their preferences. The buildings have
                      private entrances and separate utility connections, giving
                      you a sense of ownership and exclusivity. Another reason
                      for people choosing standalone buildings is affordable
                      maintenance costs.
                    </p>
                    <h4>What is a Gated Community? </h4>

                    <p>
                      A gated community is a residential area with restricted
                      entry for residents and guests. It usually consists of
                      different housing types, such as villas or apartment
                      complexes. Gated communities are designed to offer their
                      inhabitants a sense of exclusivity and security.
                    </p>
                    <p>
                      One key factor of gated communities is their emphasis on
                      security. They feature 24/7 surveillance, monitored
                      entrances and exits, and security personnel. The enhanced
                      security can bring peace of mind, making gated communities
                      appealing to families looking for a safer environment.{" "}
                    </p>
                    <div className="blog-share">
                      <ul className="social-link">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="comments">
                  <h4 className="mb-20" data-aos="fade-up">
                    Comments
                  </h4>
                  <div className="comment-box border mb-40" data-aos="fade-up">
                    <ol className="comment-list">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author">
                            <img src="assets/images/avatar-1.jpg" alt="image" />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">Vivek Patel</h6>
                            <p>
                              I got to know about Equiprentals through a friend
                              and looked up for AC on their website and finally
                              rented one. The delivery guys installed the AC in
                              2 days. And with a such a low deposit and rent, I
                              didn't have to spend a whole lot for my comfort.
                              Thank you RentoMojo, for being so easy breezy on
                              my pocket.
                            </p>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Reply"
                              className="btn-text font-sm"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author">
                            <img src="assets/images/avatar-2.jpg" alt="image" />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">Anshul Kumar</h6>
                            <p>
                              Equiprentals was unbelievably helpful. Never
                              thought that setting up a new place would be just
                              few clicks away. The customer support staff was on
                              their toes to help me. Anytime I need something
                              for my house, Rentomojo has it. :
                            </p>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Reply"
                              className="btn-text font-sm"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                        <ol className="children">
                          <li className="comment">
                            <div className="comment-body">
                              <div className="comment-author">
                                <img
                                  src="assets/images/avatar-3.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="comment-content">
                                <h6 className="name">Nikita sharma</h6>
                                <p>
                                  The thought of renting the furniture had never
                                  occurred to me. When I saw Rentomojo's
                                  affordable range, I was super excited to try
                                  and it was really amazing. From service to
                                  product quality, everything was superb. I
                                  don’t have to carry the same furniture to
                                  every house I move to and can change the look
                                  of my home whenever I want 😬
                                </p>
                                <Link
                                  to="/login"
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  target="_self"
                                  title="Reply"
                                  className="btn-text font-sm"
                                >
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                  <div className="comment-reply" data-aos="fade-up">
                    <h4 className="mb-10">Post Your Comment</h4>
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>
                      Required fields are marked
                      <span className="required text-danger">*</span>
                    </p>
                    <form id="commentForm" className="comment-form">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="text"
                              className="form_control border"
                              name="name"
                              placeholder=" Name*"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="email"
                              className="form_control border"
                              name="email"
                              placeholder=" Email*"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-30">
                            <textarea
                              name="message"
                              className="form_control border"
                              placeholder="Comment"
                              required="required"
                              rows={6}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="main-btn">
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-30" data-aos="fade-up">
                  <h4 className="widget-title">Search</h4>
                  <form>
                    <div className="form_group">
                      <input
                        type="search"
                        className="form_control"
                        placeholder="Search Template"
                        required
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="widget categories-widget mb-30"
                  data-aos="fade-up"
                >
                  <h4 className="widget-title">Categories</h4>
                  <ul className="widget-link">
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Travel <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Lifestyle <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Design <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Technology <span>03</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Business <span>02</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

      <div class="back-to-top">
        <i class="fas fa-angle-up"></i>
      </div>
    </>
  );
}
export function Blogdetails4() {
  return (
    <>
      <Header />

      <section className="hero-area">
        <div
          className="breadcrumbs-area bg_cover"
          style={{
            backgroundImage: "url(assets/images/bg/breadcrumbs-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="page-title text-center">
                  <h1 data-aos="fade-up">Contact Us</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="blog-details-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrapper mb-30">
                <div className="blog-post-item" data-aos="fade-up">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-14.jpeg"
                      alt="Service Single"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta mb-1">
                      <ul>
                        <li>
                          <span>
                            <i className="far fa-calendar-alt" />
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Link"
                            >
                              25 Aug 2021
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="far fa-comment" />
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Link"
                            >
                              Com (5k)
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      Thrift Store to Designer Home: 5 Ideas For A New Home
                      Decor
                    </h4>
                    {/* <h4>How Renting Reduces Waste</h4> */}
                    <p>
                      Giving your home a facelift doesn’t have to be hard on the
                      wallet, courtesy of thrifted home decor. Here’s a list of
                      generic items you can find at almost every thrift store/
                      garage sale. However, it is advisable to plan your budget
                      well in advance, have an idea of the desired aesthetic and
                      prepare a list comprising items that will create the
                      maximum visual impact. It is important to note that thrift
                      shopping can be exhausting, so carrying a few water
                      bottles and rehydrating every few hours is advisable.
                      Let’s dive right into the specifics to give your home a
                      coveted yet affordable upgrade.
                    </p>
                    <h4>1. Coastal Haven Home Decor</h4>
                    <p>
                      An excellent way to create a serene and tranquil yet
                      charm-infusing ambience using budget-friendly items. Look
                      for weathered driftwood pieces. A driftwood coffee table
                      can be the focal point of your living space, whereas
                      smaller pieces of driftwood can be put in jars or
                      decorative bowls on top of shelves or mantels or even hung
                      on walls as art pieces.
                    </p>
                    <p>
                      eek out unique beachcomber finds like sea shells, sea
                      glass, coral fragments, sea sponge pieces, sea stones and
                      pebbles to give your space an organic touch. You can
                      arrange the driftwood pieces in a pattern of your liking
                      using hot glue or wood glue. You may add seashells and sea
                      glass to the structure to pique interest. For a relaxed
                      beachy vibe, consider getting furniture with natural fibre
                      textures like jute rugs, rattan/wicker chairs, lampshades,
                      and seagrass baskets.
                    </p>
                    <h4>2. Modern Bohemian Interior Design</h4>

                    <p>
                      Blend the contemporary trends with eclectic and
                      free-spirited boho elements to invigorate a sense of
                      individualistic creativity. Look for items in bold colours
                      and warm hues like Indian spices. Keep an eye out for
                      vintage textiles, especially hand-stitched, embroidered
                      and made from breathable materials like linen, cotton and
                      hemp to add a sense of freshness. You can use them as
                      sofas or bed covers, wall hangings, upholstery fabric for
                      furniture and cushions, or even repurpose them as wall
                      tapestries.
                    </p>
                    <p>
                      Hunt for macramé wall hangings as they are meticulously
                      hand-woven with fine craftsmanship exuding a boho flair;
                      hence are perfect to be the focal point of your space.
                      Consider getting cascading plants that can be placed in
                      hanging planters, woven baskets and even vintage
                      wrought-iron stands. Nevertheless, don’t shy away from
                      some DIY; upcycling furniture as plant stands and a fresh
                      coat of paint can give your space just the boho charm it
                      is looking for.
                    </p>
                    <div className="blog-share">
                      <ul className="social-link">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="comments">
                  <h4 className="mb-20" data-aos="fade-up">
                    Comments
                  </h4>
                  <div className="comment-box border mb-40" data-aos="fade-up">
                    <ol className="comment-list">
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author">
                            <img src="assets/images/avatar-1.jpg" alt="image" />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">Vivek Patel</h6>
                            <p>
                              I got to know about Equiprentals through a friend
                              and looked up for AC on their website and finally
                              rented one. The delivery guys installed the AC in
                              2 days. And with a such a low deposit and rent, I
                              didn't have to spend a whole lot for my comfort.
                              Thank you RentoMojo, for being so easy breezy on
                              my pocket.
                            </p>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Reply"
                              className="btn-text font-sm"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author">
                            <img src="assets/images/avatar-2.jpg" alt="image" />
                          </div>
                          <div className="comment-content">
                            <h6 className="name">Anshul Kumar</h6>
                            <p>
                              Equiprentals was unbelievably helpful. Never
                              thought that setting up a new place would be just
                              few clicks away. The customer support staff was on
                              their toes to help me. Anytime I need something
                              for my house, Rentomojo has it. :
                            </p>
                            <Link
                              to="/login"
                              style={{ textDecoration: "none", color: "black" }}
                              target="_self"
                              title="Reply"
                              className="btn-text font-sm"
                            >
                              Reply
                            </Link>
                          </div>
                        </div>
                        <ol className="children">
                          <li className="comment">
                            <div className="comment-body">
                              <div className="comment-author">
                                <img
                                  src="assets/images/avatar-3.jpg"
                                  alt="image"
                                />
                              </div>
                              <div className="comment-content">
                                <h6 className="name">Nikita sharma</h6>
                                <p>
                                  The thought of renting the furniture had never
                                  occurred to me. When I saw Rentomojo's
                                  affordable range, I was super excited to try
                                  and it was really amazing. From service to
                                  product quality, everything was superb. I
                                  don’t have to carry the same furniture to
                                  every house I move to and can change the look
                                  of my home whenever I want 😬
                                </p>
                                <Link
                                  to="/login"
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                  target="_self"
                                  title="Reply"
                                  className="btn-text font-sm"
                                >
                                  Reply
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                  <div className="comment-reply" data-aos="fade-up">
                    <h4 className="mb-10">Post Your Comment</h4>
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>
                      Required fields are marked
                      <span className="required text-danger">*</span>
                    </p>
                    <form id="commentForm" className="comment-form">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="text"
                              className="form_control border"
                              name="name"
                              placeholder=" Name*"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group mb-20">
                            <input
                              type="email"
                              className="form_control border"
                              name="email"
                              placeholder=" Email*"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-30">
                            <textarea
                              name="message"
                              className="form_control border"
                              placeholder="Comment"
                              required="required"
                              rows={6}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="main-btn">
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-widget mb-30" data-aos="fade-up">
                  <h4 className="widget-title">Search</h4>
                  <form>
                    <div className="form_group">
                      <input
                        type="search"
                        className="form_control"
                        placeholder="Search Template"
                        required
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="widget categories-widget mb-30"
                  data-aos="fade-up"
                >
                  <h4 className="widget-title">Categories</h4>
                  <ul className="widget-link">
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Travel <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Lifestyle <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Design <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Technology <span>03</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_self"
                        title="Link"
                      >
                        Business <span>02</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <Footer />

      <div class="back-to-top">
        <i class="fas fa-angle-up"></i>
      </div>
    </>
  );
}


export default Blogdetails;


