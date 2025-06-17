import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";




function Blogs() {
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
                  <h1 data-aos="fade-up">Blogs</h1>
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

            <section className="blog-area pt-130 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-items-wrapper">
                                <div className="row">
                                    
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/Blogdetails" title="Blog Image" target="_self"><img src="assets/images/blog/blog-08.jpeg" alt="Blog Image" /></Link>
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="/Blogdetails" style={{textDecoration:'none',color:'black'}}>Renting vs. Owning: A Flexible...</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>As we become more aware of environmental issues, our buying choices can significantly affect the planet. It’s essential to see how these decisions imp...</p>
                                                <Link to="/blogdetails" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/Blogdetails2" style={{textDecoration:'none',color:'black'}} title="Blog Image" target="_self"><img src="assets/images/blog/blog-02.jpg" alt="Blog Image" /></Link>
                                                
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="Blogdetails2" style={{textDecoration:'none',color:'black'}}>A Complete Guide To AC Maintenance: Things To Keep In Mind</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>Summers in Delhi can be brutal, yet many do not know how to prep their one and only companion before…</p>
                                                <Link to="/blogdetials2" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/Blogdetails3" title="Blog Image" target="_self"><img src="assets/images/blog/blog-05.jpg" alt="Blog Image" /></Link>
                                             
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="/Blogdetails3" style={{textDecoration:'none',color:'black'}}>Gated Communities vs. Standalone Buildings: Where To Invest?</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>When choosing a home for rent or purchase, you have many options available in the market. You will find standalone……</p>
                                                <Link to="/blogdetials3" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/Blogdetails4" title="Blog Image" target="_self"><img src="assets/images/blog/blog-01.jpeg" alt="Blog Image" /></Link>
                                                
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}}>Thrift Store to Designer Home: 5 Ideas For A New Home Decor</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>Giving your home a facelift doesn’t have to be hard on the wallet, courtesy of thrifted home decor. Here’s a…</p>
                                                <Link to="/blogdetails4" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/blogdetails" title="Blog Image" target="_self"><img src="assets/images/blog/blog-06.jpg" alt="Blog Image" /></Link>
                                              
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="/blogdetails" style={{textDecoration:'none',color:'black'}}>11 Best Parks In Bangalore You Should Visit For Fresh Air</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>Bangalore, widely known for IT Parks, boasts beautiful urban parks where you can spend quality time in the lap of…</p>
                                                <Link to="/blogdetails" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/Blogdetails4" title="Blog Image" target="_self"><img src="assets/images/blog/blog-07.jpg" alt="Blog Image" /></Link>
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}}>Why Renting Home Appliances Ma...</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>Renting home appliances provides a budget-friendly alternative to purchasing, helping individuals and families enjoy essential conveniences without th..</p>
                                                <Link to="/blogdetails" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/Blogdetails4" title="Blog Image" target="_self"><img src="assets/images/blog/blog-09.jpg" alt="Blog Image" /></Link>
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}}>Maximizing Your Travel Experie...</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>Rev up your adventures with our motorbike rentals, turning ordinary journeys into extraordinary experiences. Say goodbye to mundane travel and hello t...</p>
                                                <Link to="/blogdetails" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/Blogdetails4" title="Blog Image" target="_self"><img src="assets/images/blog/blog-10.png" alt="Blog Image" /></Link>
                                                <Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}} className="cat-btn" title="Excavator" target="_self">Excavator</Link>
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}}>Reasons Why You Should Get a L...</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>enting a laptop allows you to access top-tier technology without the upfront costs associated with purchasing. Save money while enjoying the latest fe...</p>
                                                <Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/blogdetails" style={{textDecoration:'none',color:'black'}} title="Blog Image" target="_self"><img src="assets/images/blog/blog-03.jpg" alt="Blog Image" /></Link>
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="/Blogdetails2" style={{textDecoration:'none',color:'black'}}>Why Rent a 1.5-Ton Split AC: Consider the Benefits and More</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>As the mercury is hitting a new high every year, getting an AC for home has become imperative. In some…</p>
                                                <Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                        <div className="blog-post-item blog-post-item-one mb-40">
                                            <div className="post-thumbnail">
                                                <Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}} title="Blog Image" target="_self"><img src="assets/images/blog/blog-04.jpg" alt="Blog Image" /></Link>
                                            </div>
                                            <div className="entry-content">
                                                <h3 className="title lc-2"><Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}}>Choosing The Best Laptops For Students: 8 Factors To Know</Link></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <Link to="/error" style={{textDecoration:'none',color:'black'}}>Admin</Link></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><Link to="/error" style={{textDecoration:'none',color:'black'}}>16 Dec 2021</Link></span></li>
                                                    </ul>
                                                </div>
                                                <p>In today’s digital world, laptop is not a luxury but a necessity for students. Whether you are doing your research…
                                                    </p>
                                                <Link to="/Blogdetails4" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <nav className="pagination-nav mb-40" data-aos="fade-up">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link" href="blogs.html" target="_self" aria-label="Previous">
                                            <i className="far fa-angle-left" />
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="blogs.html" target="_self">1</a></li>
                                    <li className="page-item"><a className="page-link" href="blogs.html" target="_self">2</a></li>
                                    <li className="page-item"><a className="page-link" href="blogs.html" target="_self">3</a></li>
                                    <li className="page-item"><a className="page-link" href="blogs.html" target="_self">4</a></li>
                                    <li className="page-item"><a className="page-link" href="blogs.html" target="_self">30</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="blogs.html" target="_self" aria-label="Next">
                                            <i className="far fa-angle-right"/>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-widget-area">
                                <div className="widget search-widget mb-30" data-aos="fade-up">
                                    <h4 className="widget-title">Search</h4>
                                    <form>
                                        <div className="form_group">
                                            <input type="search" className="form_control" placeholder="Search Template" required />
                                            <button className="search-btn"><i className="fas fa-search" /></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="widget categories-widget mb-30" data-aos="fade-up">
                                    <h4 className="widget-title">Categories</h4>
                                    <ul className="widget-link">
                                        <li><Link to="/blogs" style={{textDecoration:'none',color:'black'}} target="_self" title="Link">Travel <span>10</span></Link></li>
                                        <li><Link to="/blogs" style={{textDecoration:'none',color:'black'}} target="_self" title="Link">Lifestyle <span>05</span></Link></li>
                                        <li><Link to="/blogs" style={{textDecoration:'none',color:'black'}} target="_self" title="Link">Design <span>10</span></Link></li>
                                        <li><Link to="/blogs" style={{textDecoration:'none',color:'black'}} target="_self" title="Link">Technology <span>03</span></Link></li>
                                        <li><Link to="/blogs" style={{textDecoration:'none',color:'black'}} target="_self" title="Link">Business <span>02</span></Link></li>
                                    </ul>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         

            <Footer/>

            <div class="back-to-top"><i class="fas fa-angle-up"></i></div>
        </>
    );
}

export default Blogs;