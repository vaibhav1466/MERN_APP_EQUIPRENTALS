import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

function Faqs() {
  return (
    <>
      {/* <div className="preloader">
        <div className="lds-ellipsis">
          <span />
          <span />
          <span />
        </div>
      </div> */}
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
                  <h1 data-aos="fade-up">FAQ</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">FAQ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
                  <div class="faq-area pt-130 pb-110">
                      <div class="container">
                          <div class="row">
                              <div class="col-lg-3" data-aos="fade-up">
                                  <div class="sidebar-widget-area mb-20">
                                      <div class="widget faq-nav-widget">
                                          <ul class="nav nav-tabs">
                                              <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#cat1" title="link">How it works</a>
                                              </li>
                                              <li class="nav-item">
                                                  <a class="nav-link" data-toggle="tab" href="#cat2" title="link">charges?</a>
                                              </li>
                                              <li class="nav-item">
                                                  <a class="nav-link" data-toggle="tab" href="#cat3" title="link">My Account
                                                  </a>
                                              </li>
                                              <li class="nav-item">
                                                  <a class="nav-link" data-toggle="tab" href="#cat4" title="link">Availability</a>
                                              </li>
                                              <li class="nav-item">
                                                  <a class="nav-link" data-toggle="tab" href="#cat5" title="link">Excavator</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-9" data-aos="fade-up">
                                  <div class="faq-wrapper-one">
                                      <div class="tab-content">
                                          <div class="tab-pane show active" id="cat1">
                                              <div class="accordion" id="accordionone">
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading1" type="button" data-toggle="collapse"
                                                          data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                          How does EquipRentals work?
                                                      </button>
                                                      <div id="collapse1" class="collapse show" aria-labelledby="heading1"
                                                          data-parent="#accordionone">
                                                          <div class="card-body">
                                                              <p>If you want to rent in something from EquipRentals you need to:<br></br>
      
      a. Select the appropriate Product category from the dropdown or use the search bar to look for a product you wish to take on rent.<br></br>
      
      b. Register or sign up on EquipRentals, if not done already.<br></br>
      
      c. Click on the “Take on Rent” button at the bottom of the product you choose<br></br>
      
      d. Enter the pincode to check the availability of the product at your location. If the delivery is available at your location, click on Take on Rent.<br></br>
      
      e. Select the Rental duration (days/ months/year), Quantity and Start date of the rental period.<br></br>
      
      f. Click on Add to Cart.<br></br>
      
      g. Make the payment and complete your KYC, if not done.<br></br>
      
      h. Return the item to the owner after completion of the rental tenure and leave a review.</p><br></br>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading2" type="button" data-toggle="collapse"
                                                          data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                          How can I contact Rentit4me customer care?
                                                      </button>
                                                      <div id="collapse2" class="collapse" aria-labelledby="heading2"
                                                          data-parent="#accordionone">
                                                          <div class="card-body">
                                                              <p>For any queries you can use our website chat or contact us on 1234567899 or email at equiprentlas3@gmail.com</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading3" type="button" data-toggle="collapse"
                                                          data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                         Can I cancel my rental request?</button>
                                                      <div id="collapse3" class="collapse" aria-labelledby="heading3"
                                                          data-parent="#accordionone">
                                                          <div class="card-body">
                                                              <p>iYou can raise a ticket, in case you want to cancel your order until one day before the agreed date of delivery. Once delivered, an existing order cannot be canceled.
      
      The cancellation charges are as follows:<br></br>
      
      Delivery Scheduled greater than 48 Hours - No Cancellation charges. The security amount and rental amount will be returned within 7 working days.<br></br>
      
      Delivery Scheduled less than 48 Hours - The delivery charges+ 2% Platform fee will be deducted from the security amount. The rest of the security amount and the rent amount will be returned within 7 working days.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading4" type="button" data-toggle="collapse"
                                                          data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                         How and till when can I reschedule my order delivery?</button>
                                                      <div id="collapse4" class="collapse" aria-labelledby="heading4"
                                                          data-parent="#accordionone">
                                                          <div class="card-body">
                                                              <p>If you want to reschedule your order on the same day of delivery then rescheduling your order is not possible. However, you can reschedule your order before 24 hours of scheduled delivery. For this you need to contact customer care on 1234567899 or write to us at equiprentals3@gmail.com</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading5" type="button" data-toggle="collapse"
                                                          data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                          Can I extend my contract duration?
                                                      </button>
                                                      <div id="collapse5" class="collapse" aria-labelledby="heading5"
                                                          data-parent="#accordionone">
                                                          <div class="card-body">
                                                              <p>Yes, you can extend your contract duration. For that please contact customer care 1234567899 or drop an email at equiprentals3@gmail.com
      
      </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="tab-pane fade" id="cat2">
                                              <div class="accordion" id="accordiontwo">
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading6" type="button" data-toggle="collapse"
                                                          data-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                                        Are there any particular damage charges?
                                                      </button>
                                                      <div id="collapse6" class="collapse show" aria-labelledby="heading6"
                                                          data-parent="#accordiontwo">
                                                          <div class="card-body">
                                                              <p>To avoid potential damage charges, we recommend opting for CityShield, our protection plan that covers accidental damages, ensuring a worry-free experience with your rented items.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading7" type="button" data-toggle="collapse"
                                                          data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
      What will be the condition of the products at the time of delivery?                                                </button>
                                                      <div id="collapse7" class="collapse" aria-labelledby="heading7"
                                                          data-parent="#accordiontwo">
                                                          <div class="card-body">
                                                              <p>We always deliver our products in mint condition, i.e. they are restored to their original condition and are subjected to rigorous quality tests before they are delivered to you.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading8" type="button" data-toggle="collapse"
                                                          data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                         Are there any transportation charges?</button>
                                                      <div id="collapse8" class="collapse" aria-labelledby="heading8"
                                                          data-parent="#accordiontwo">
                                                          <div class="card-body">
                                                              <p>There are no transportation charges involved. However, we might charge an added minimum lifting fee if there's no service lift at your house. This fee would be ₹500/floor if the house is located above the 3rd floor. But it can differ depending on the items you've ordered.
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading9" type="button" data-toggle="collapse"
                                                          data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                                          What happens after my tenure is over?</button>
                                                      <div id="collapse9" class="collapse" aria-labelledby="heading9"
                                                          data-parent="#accordiontwo">
                                                          <div class="card-body">
                                                              <p>You have two options when your subscription tenure is over:
      Option 1: Renew your subscription for 3, 6, 9, or 12 months at discounted rental (we'd love that)
      Option 2: Inform the team about ending your subscription and raise a request</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading10" type="button" data-toggle="collapse"
                                                          data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                                        Can I reject/return the complete/partial products at the time of delivery?
                                                      </button>
                                                      <div id="collapse10" class="collapse" aria-labelledby="heading10"
                                                          data-parent="#accordiontwo">
                                                          <div class="card-body">
                                                              <p>Yes, you can reject or return the furniture-either all the products or some of them. You'll get a complete refund for all the returned products</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="tab-pane fade" id="cat3">
                                              <div class="accordion" id="accordionthree">
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading11" type="button" data-toggle="collapse"
                                                          data-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
                                                         How do I change my payment details?
                                                      </button>
                                                      <div id="collapse11" class="collapse show" aria-labelledby="heading11"
                                                          data-parent="#accordionthree">
                                                          <div class="card-body">
                                                              <p>You can go to My Profile section of Dashboard and edit your Bank Details.
      
      </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading12" type="button" data-toggle="collapse"
                                                          data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                        How do I change my email address or phone number?
                                                      </button>
                                                      <div id="collapse12" class="collapse" aria-labelledby="heading12"
                                                          data-parent="#accordionthree">
                                                          <div class="card-body">
                                                              <p>You can go to My Profile section of Dashboard and edit your details !</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading13" type="button" data-toggle="collapse"
                                                          data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                                        Do I need to sign any contract? What documents are required from my side?</button>
                                                      <div id="collapse13" class="collapse" aria-labelledby="heading13"
                                                          data-parent="#accordionthree">
                                                          <div class="card-body">
                                                              <p>Yes, you will have to execute a contract/Agreement with us at the time of taking over the possession of the rented item(s).The contract will contain all the terms and conditions of the renting arrangement. We will also require the following documents from you prior to delivery of the item(s): <br></br>
      
      Copy of PAN Card.<br></br>
      Salary Bank Statement for last 6 months.<br></br>
      Address Proof: Copy of Rent Agreement/Passport/Voter I card (an affidavit in case none is available).</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading14" type="button" data-toggle="collapse"
                                                          data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                                         What is your return & refund policy?</button>
                                                      <div id="collapse14" class="collapse" aria-labelledby="heading14"
                                                          data-parent="#accordionthree">
                                                          <div class="card-body">
                                                              <p>You must return the product on its scheduled date. Return is not applicable incase you don’t like the product at the time of delivery. However, if you receive the damaged product, please contact customer care at 1234567899. Refund is only applicable in case of cancellation.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading15" type="button" data-toggle="collapse"
                                                          data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                                          Can I return the items early (within my contract period) in case I am shifting to another place?
                                                      </button>
                                                      <div id="collapse15" class="collapse" aria-labelledby="heading15"
                                                          data-parent="#accordionthree">
                                                          <div class="card-body">
                                                              <p>Yes, you can return items before your contract period ends. However, Rentit4me enforces a minimum lock-in period of 3 months for rentals. If you choose to return the product early, you will still be responsible for the rental charges corresponding to this minimum tenure. For instance, if you return an item after 2 months, you will still be charged for the full 3-month period.
      
      To proceed with an early return, please contact our customer care team at 1234567899 or email us at equiprentals3@gmail.com .</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="tab-pane fade" id="cat4">
                                              <div class="accordion" id="accordionfour">
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading16" type="button" data-toggle="collapse"
                                                          data-target="#collapse16" aria-expanded="true" aria-controls="collapse16">
                                                         How does the rental payment process work?
                                                      </button>
                                                      <div id="collapse16" class="collapse show" aria-labelledby="heading16"
                                                          data-parent="#accordionfour">
                                                          <div class="card-body">
                                                              <p>Select your preferred tenure (3, 6, 9, 12 months) and pay upfront for selected tenure to get great discounts on monthly rent. Payment cycle will begin from the date of delivery. You can opt for our no-cost EMI option to pay in monthly instalments with 0% interest.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading17" type="button" data-toggle="collapse"
                                                          data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                                          Can I pay monthly?
                                                      </button>
                                                      <div id="collapse17" class="collapse" aria-labelledby="heading17"
                                                          data-parent="#accordionfour">
                                                          <div class="card-body">
                                                              <p>Yes, you can choose to pay monthly once your tenure is complete. However, we recommend opting for upfront payment or our No-Cost EMI option to maximize your savings. If you prefer to continue with monthly payments, you will need to register for auto-debit to facilitate future payments seamlessly.    </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading18" type="button" data-toggle="collapse"
                                                          data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                                          What is the cancellation policy?
                                                          </button>
                                                      <div id="collapse19" class="collapse" aria-labelledby="heading18"
                                                          data-parent="#accordionfour">
                                                          <div class="card-body">
                                                              <p>In the event of returning products before the completion of the selected tenure, an Early Closure Charge will apply based on your chosen tenure and payment mode (Upfront/Monthly)
      
      Upfront Payment, 6/9/12 Months Tenure: You will be entitled to a refund equivalent to one month's subscription fee.
      Upfront/Monthly Payment, 3 Months Tenure: If you choose a 3-month subscription and decide to cancel before completing the full term, no refund will be issued.
      Monthly Payment, 6/9/12 Months Tenure: No refund will be provided for the security deposit.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading20" type="button" data-toggle="collapse"
                                                          data-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                                          Money got debited but my order was not placed. What should I do?</button>
                                                      <div id="collapse20" class="collapse" aria-labelledby="heading20"
                                                          data-parent="#accordionfour">
                                                          <div class="card-body">
                                                              <p>Happens to the best of us! But don't worry, if your order wasn't placed and your money was deducted, you'll get a full refund in your original payment mode in 5-7 working days. You can place the order again.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading21" type="button" data-toggle="collapse"
                                                          data-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
      What is the late payment / bounce charges?                                                </button>
                                                      <div id="collapse21" class="collapse" aria-labelledby="heading21"
                                                          data-parent="#accordionfour">
                                                          <div class="card-body">
                                                              <p>Delayed payment of subscription fee beyond due date shall attract a penal interest of 10% of due amount per month from the date of default till the time the subscription fee is paid. The minimum interest levied would be Rs. 300 per month of delay.
                                                              Cityfurnish shall levy a charge of ₹400/- for each cheque return/bounce or ECS/Standing Instructions dishonor.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="tab-pane fade" id="cat5">
                                              <div class="accordion" id="accordionfive">
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading22" type="button" data-toggle="collapse"
                                                          data-target="#collapse22" aria-expanded="true" aria-controls="collapse22">
                                                          What locations does EquipRentals ship to?
                                                      </button>
                                                      <div id="collapse22" class="collapse show" aria-labelledby="heading22"
                                                          data-parent="#accordionfive">
                                                          <div class="card-body">
                                                              <p>Cityfurnish is fast-becoming a pan-India furniture rental store. We're currently servicing these cities:
      Gurgaon<br></br>
      Delhi<br></br>
      Noida<br></br>
      Ahemdabad <br></br>
      Gandhinagar,<br></br>
      Ghaziabad<br></br>
      Mumbai<br></br>
      Pune<br></br>
      Hyderabad<br></br>
      Bangalore<br></br>
      Surat<br></br>
      Faridabad</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading23" type="button" data-toggle="collapse"
                                                          data-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
                                                          How ?
                                                      </button>
                                                      <div id="collapse23" class="collapse" aria-labelledby="heading23"
                                                          data-parent="#accordionfive">
                                                          <div class="card-body">
                                                              <p>...</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading24" type="button" data-toggle="collapse"
                                                          data-target="#collapse24" aria-expanded="false" aria-controls="collapse24">
                                                          How ?</button>
                                                      <div id="collapse24" class="collapse" aria-labelledby="heading24"
                                                          data-parent="#accordionfive">
                                                          <div class="card-body">
                                                              <p>....</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading25" type="button" data-toggle="collapse"
                                                          data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                                          How ?</button>
                                                      <div id="collapse25" class="collapse" aria-labelledby="heading25"
                                                          data-parent="#accordionfive">
                                                          <div class="card-body">
                                                              <p>....</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="card mb-20">
                                                      <button class="collapsed card-header" id="heading26" type="button" data-toggle="collapse"
                                                          data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
                                                          How ?
                                                      </button>
                                                      <div id="collapse26" class="collapse" aria-labelledby="heading26"
                                                          data-parent="#accordionfive">
                                                          <div class="card-body">
                                                              <p>...</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
     
      <Footer />
      <div className="back-to-top">
        <i className="fas fa-angle-up" />
      </div>
    </>
  );
}

export default Faqs;
