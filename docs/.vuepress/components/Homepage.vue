<template>
    <div>
        <header>
            <!-- Navbar -->
            <div class="nav-menu">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav class="navbar navbar-expand-lg navbar-light border-bottom-0 py-lg-0">
                                <a class="navbar-brand p-0" href="#"><img src="../public/assets/img/logo.png" alt="#"></a>
                                <h4 class="navbar-brand-name m-0">InfyTracker</h4>
                                <button class="navbar-toggler navbar-toggler_second" type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fas fa-bars"></i>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a href="/docpage/" class="nav-link py-4" target="_blank">Docs</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Main Title -->
            <div class="main-title__alt header__bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <div class="hero-title  text-center  text-md-left">
                                <p>Hello, We are InfyOm Technologies </p>
                                <h1>InfyTracker</h1>
                                <p class="hero-title__desc">
                                    InfyTracker is a minimal time tracker and task management tools built for small teams
                                    to keep everything simple and everyone on the same page. It provides very simple task
                                    management with features like clients and projects management,
                                    Tasks management with time entries, team management along with roles and permissions and a
                                    very nice web timer to track the time for the particular task.
                                </p>
                                <div class="add-btn pricing-btn_wrap ml-0">
                                    <a href="/docpage/" class="btn btn-success" target="_blank">
                                        Get started</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="main-banner_md">
                                <img src="../public/assets/img/time-management-hero.jpg" class="img-fluid" alt="#">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-style d-none d-md-block">
                    <img src="../public/assets/img/bg-1.png" class="img-fluid" alt="#">
                </div>
            </div>
            <!--// Main Title -->
            <!--// Navbar -->


            <!--  Contact Modal -->
            <div class="modal fade" id="contactmodal" tabindex="-1" role="dialog" aria-labelledby="phpcontactform"
                 aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div class="modal-content">

                        <div class="modal-body">

                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>

                            <form class="quote-form" action="php/contact.php" method="post" id="phpcontactform">
                                <h5 class="text-center mt-3 mb-4">Get a Free Quote!</h5>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-sm-6"><input type="text" class="form-control" id="first_name"
                                                                     name="first_name"
                                                                     placeholder="First Name*" required></div>
                                        <div class="col-sm-6"><input type="text" class="form-control" id="last_name"
                                                                     name="last_name"
                                                                     placeholder="Last Name*" required></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" name="email"
                                           placeholder="Email Address*"
                                           required>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone*"
                                           required>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="pac-input" name="address"
                                           placeholder="Address*"
                                           required>
                                </div>
                                <button type="submit" class="btn btn-success w-100" id="js-contact-btn"><strong>
                                    Get Free Quote
                                </strong></button>
                                <div id="js-contact-result" data-success-msg="Success, We will get back to you soon"
                                     data-error-msg="Oops! Something went wrong"></div>

                            </form>


                        </div>

                    </div>
                </div>
            </div>
            <!--  // Contact Modal -->

            <!--==================== NEW INSURANCE ====================-->

<!--            todo need to remove if any content not added -->
<!--            <div class="space bg-image">-->
<!--                <div class="container">-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12">-->
<!--                            <div class="center-title">-->
<!--                                <h2 class="center-title__header">A new take on insurance</h2>-->
<!--                                <p>Great for individuals and business</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12 col-lg-7 ml-auto">-->
<!--                            <div class="insurance-title_wrap insurance-title_wrap2">-->
<!--                                <h5>Monotonectally deploy seamless data and resource maximizing systems. </h5>-->
<!--                                <h6>Great for individuals and small families up to 4 members.</h6>-->
<!--                                <p class="insurance-para">A strong, up-to-date, employee benefits health insurance-->
<!--                                    program-->
<!--                                    is vital for attracting and retaining good employees. It takes diligence, creativity-->
<!--                                    and attention to detail to ensure you are getting the best “bang for your buck” each-->
<!--                                    and every year.</p>-->
<!--                                <div class="insurance-type d-flex align-items-center">-->
<!--                                    <img src="../public/assets/img/tick.png" alt="#">-->
<!--                                    <div class="insurance-type_title">-->
<!--                                        <h6>Comprehensive Insurance</h6>-->
<!--                                        <p>Dynamically repurpose e-business users rather than granular products.</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="insurance-type d-flex align-items-center">-->
<!--                                    <img src="../public/assets/img/tick.png" alt="#">-->
<!--                                    <div class="insurance-type_title">-->
<!--                                        <h6>Support is just a call away</h6>-->
<!--                                        <p>Rapidiously customize value-added platforms compliant action items.</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="insurance-type d-flex align-items-center">-->
<!--                                    <img src="../public/assets/img/tick.png" alt="#">-->
<!--                                    <div class="insurance-type_title">-->
<!--                                        <h6>Say goodbye to paperwork.</h6>-->
<!--                                        <p>Globally deliver economically sound communities relationships.</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="banner-img-3">-->
<!--                    <img src="../public/assets/img/undraw_modern_life_u1ev.svg" width="680" class="img-fluid" alt="#">-->
<!--                </div>-->
<!--                <div class="bg-style2">-->
<!--                    <img src="../public/assets/img/bg-2.png" class="img-fluid" alt="#">-->
<!--                </div>-->
<!--            </div>-->
            <!--//END NEW INSURANCE -->
        </header>
        <!--//END HEADER -->
        <!--==================== CHOOSE YOUR INSURANCE ====================-->
        <section class="space bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="center-title">
                            <h2>InfyTracker Feature</h2>
                            <p>here is some best feature of InfyTracker </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color1 d-flex justify-content-center align-items-center m-auto">
<!--                                <img src="../public/assets/img/home-insurance.svg" class="img-fluid" alt="#">-->
                                <i class="fas fa-users color1 item-icon__icon"></i>
                            </div>
                            <h6>Clients</h6>
                            <p>The client is a very first starting entity of any task or project management system.
                                You may have one or more than one clients. InfyTracker provides very clean and simple
                                client management with client details</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color2 d-flex justify-content-center align-items-center m-auto">
                                <img src="../public/assets/img/car-insurance.svg" class="img-fluid" alt="#">
                            </div>
                            <h6>Projects</h6>
                            <p>Projects are the core and very second entity for organizing stuff. With you can manage
                                your projects which belongs to different or the same clients since you may have multiple
                                projects running for the same client. Also, you can assign the Users (Team members) to the particular projects</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color3 d-flex justify-content-center align-items-center m-auto">
                                <img src="../public/assets/img/life-insurance.svg" class="img-fluid" alt="#">
                            </div>
                            <h6>Users (Team)</h6>
                            <p>Behind every great project, there is a great team. Manage all your team members at a
                                single place along with their Projects and Roles</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color4 d-flex justify-content-center align-items-center m-auto">
                                <img src="../public/assets/img/business-insurance.svg" class="img-fluid" alt="#">
                            </div>
                            <h6>Roles + Permissions</h6>
                            <p>You have total control on your team members for who can access what. The administration
                                can define roles as per need with desired permissions and assign those roles to various
                                team members.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color5 d-flex justify-content-center align-items-center m-auto">
                                <img src="../public/assets/img/travel-insurance.svg" class="img-fluid" alt="#">
                            </div>
                            <h6>Task Management</h6>
                            <p>InfyTracker provides very clean task management with only necessary fields.
                                The task can have multiple assignees, priority, reporter, status, and description.
                                No more complex and long task management form.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color6 d-flex justify-content-center align-items-center m-auto">
                                <img src="../public/assets/img/other-insurance.svg" class="img-fluid" alt="#">
                            </div>
                            <h6>File Management:</h6>
                            <p>Attach files on your tasks to give more insights to the task along with storing your
                                files with your choice of the platform like Amazon S3, Digital Ocean, Local and FTP as
                                well.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color6 d-flex justify-content-center align-items-center m-auto">
                                <img src="../public/assets/img/other-insurance.svg" class="img-fluid" alt="#">
                            </div>
                            <h6>Comments Management</h6>
                            <p>Collaboration between the team is important on all project management systems.
                                You can comment on tasks to keep your task information up to date and to collaborate
                                with your team members.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color6 d-flex justify-content-center align-items-center m-auto">
                                <img src="../public/assets/img/other-insurance.svg" class="img-fluid" alt="#">
                            </div>
                            <h6>Time Entries with Timer Widget</h6>
                            <p>Keeping a track of your time on a particular task is important.
                                We made it easy by providing a very simple web timer widget. Click the timer, select the
                                project and task with activity type and start the timer. Once you are done, insert notes
                                on what you did and stop the timer. It will automatically record time entry on that task.
                                so you can see who did what on a particular task for what amount of time.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color6 d-flex justify-content-center align-items-center m-auto">
                                <img src="../public/assets/img/other-insurance.svg" class="img-fluid" alt="#">
                            </div>
                            <h6>Reports</h6>
                            <p>You can create reports to get insights into what has been accomplished by whom in what
                                amount of time on which project of which client. All these information are easy.
                                Based on your need, define filters and create a report and get a very clean report with
                                grouping entries according to the nested level of Clients => Projects => Users => Tasks
                                for a given date range.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color6 d-flex justify-content-center align-items-center m-auto">
                                <img src="../public/assets/img/other-insurance.svg" class="img-fluid" alt="#">
                            </div>
                            <h6>Tags & Activity Types</h6>
                            <p>Tag your task with a way you want. Create custom tags which are useful to filter out tasks.
                                Also, create activity types as per your need, so you can define what particular thing
                                has been done on a given task. E.g. Documentation, Content Writing, Designing, Development,
                                Testing, etc</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--// END CHOOSE YOUR INSURANCE -->
        <!--==================== EASY CLAIMS ====================-->
<!--        <section class="space">-->
<!--            <div class="container">-->
<!--                <div class="row">-->
<!--                    <div class="col-md-12">-->
<!--                        <div class="center-title">-->
<!--                            <h2>Simplified Claims</h2>-->
<!--                            <p>Easy as One, Two, Three</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="row">-->
<!--                    <div class="col-md-12 col-lg-4">-->
<!--                        <div class="item-box howit-block">-->
<!--                            <div class="item-icon color1">-->
<!--                                <span>1</span>-->
<!--                            </div>-->
<!--                            <h6>Report Claim</h6>-->
<!--                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit-->
<!--                                rutrum-->
<!--                                suscipit non et eros.</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-12 col-lg-4">-->
<!--                        <div class="item-box howit-block_af">-->
<!--                            <div class="item-icon color2">-->
<!--                                <span>2</span>-->
<!--                            </div>-->
<!--                            <h6>Claim Processing</h6>-->
<!--                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit-->
<!--                                rutrum-->
<!--                                suscipit non et eros.</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-12 col-lg-4">-->
<!--                        <div class="item-box">-->
<!--                            <div class="item-icon color3">-->
<!--                                <span>3</span>-->
<!--                            </div>-->
<!--                            <h6>Final Settlement</h6>-->
<!--                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit-->
<!--                                rutrum-->
<!--                                suscipit non et eros.</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
        <!--// END EASY CLAIMS -->
        <!--==================== TESTIMONIAL ====================-->
<!--        <section class="testimonial">-->
<!--            <div class="container">-->
<!--                <div class="row d-flex">-->
<!--                    <div class="col-md-12 col-lg-7 align-items-center">-->
<!--                        <div class="testi-content_block">-->
<!--                            <img src="../public/assets/img/quote.png" class="img-fluid" alt="#">-->
<!--                            <h3>I need to understand what’s going on – it’s my health and I want to feel secure in it.-->
<!--                                With-->
<!--                                my previous health insurance, I didn’t know how any of it worked.</h3>-->
<!--                            <span>Matthew Young</span>-->
<!--                            <p>Legal Consultant, United States</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="testi-img_wrap">-->
<!--                <img src="../public/assets/img/testi-img.png" class="img-fluid" alt="#" width="650">-->
<!--            </div>-->
<!--            &lt;!&ndash; <div class="bg-img3"><img src="images/bg-image3.png" class="img-fluid" alt="#"></div> &ndash;&gt;-->
<!--        </section>-->
        <!--//END TESTIMONIAL -->
        <!--==================== ADD ====================-->
<!--        <section class="add-section clearfix">-->
<!--            <div class="container">-->
<!--                <div class="row justify-content-center">-->
<!--                    <div class="col-md-10">-->
<!--                        <div class="add-box">-->
<!--                            <img src="../public/assets/img/shield-yellow.svg" class="img-fluid shield" alt="#">-->
<!--                            <div class="add-content">-->
<!--                                <h3> 100% Satisfaction Guarantee</h3>-->
<!--                                <p>We offer no questions asked refund policy for 14 days from the policy date.</p>-->
<!--                            </div>-->
<!--                            <div class="add-btn">-->
<!--                                <a href="#" data-toggle="modal" data-target="#contactmodal" class="btn btn-success">Get-->
<!--                                    your free Quote</a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
        <!--//END ADD -->
        <!--==================== PRICING ====================-->
<!--        <section class="pricing">-->
<!--            <div class="container">-->
<!--                <div class="row">-->
<!--                    <div class="col-md-12">-->
<!--                        <div class="center-title">-->
<!--                            <h2>Honest Pricing</h2>-->
<!--                            <p>Simple & honest pricing. No hidden fees. </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="row pricing-wrap">-->
<!--                    <div class="col-md-4">-->
<!--                        <div class="row">-->
<!--                            <div class="pricing-block">-->
<!--                                <h6 class="primary">BASIC</h6>-->
<!--                                <div class="pricing-high">-->
<!--                                    <div class="pricing-icon color3">-->
<!--                                        <h2><span>$</span>9</h2>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Rapidiously strategize value</p>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Progressively visualize leadership </p>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Equity invested supply chains. </p>-->
<!--                                </div>-->
<!--                                <div class="add-btn pricing-btn_wrap">-->
<!--                                    <a href="#" class="btn btn-success">Choose Plan</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-4">-->
<!--                        <div class="row">-->
<!--                            <div class="pricing-block pricing-block_middle">-->
<!--                                <h6 class="secondary">PROFESSIONAL</h6>-->
<!--                                <span class="save-price">Save 20%</span>-->
<!--                                <div class="star-middle">-->
<!--                                    <i class="fas fa-star"></i>-->
<!--                                </div>-->
<!--                                <div class="pricing-high">-->
<!--                                    <div class="pricing-icon color7">-->
<!--                                        <h2><span>$</span>19</h2>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Rapidiously strategize value</p>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Progressively visualize leadership </p>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Equity invested supply chains</p>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Proactively leverage</p>-->
<!--                                </div>-->
<!--                                <div class="add-btn pricing-btn_wrap">-->
<!--                                    <a href="#" class="btn btn-warning">Choose Plan</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-4">-->
<!--                        <div class="row">-->
<!--                            <div class="pricing-block">-->
<!--                                <h6 class="tertiary">PREMIUM</h6>-->
<!--                                <div class="pricing-high">-->
<!--                                    <div class="pricing-icon color1">-->
<!--                                        <h2><span>$</span>49</h2>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Rapidiously strategize value</p>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Progressively visualize leadership </p>-->
<!--                                </div>-->
<!--                                <div class="pricing-text">-->
<!--                                    <i class="fas fa-check"></i>-->
<!--                                    <p>Equity invested supply chains. </p>-->
<!--                                </div>-->
<!--                                <div class="add-btn pricing-btn_wrap">-->
<!--                                    <a href="#" class="btn btn-primary">Choose Plan</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="row">-->
<!--                    <div class="col-md-12">-->
<!--                        <div class="pricing-bottom_text">-->
<!--                            <p>*Prices shown per month if paid annually</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="pricing-bg pricing-bg_secong">-->
<!--                <img src="../public/assets/img/bg-image4.png" class="img-fluid" alt="#">-->
<!--            </div>-->
<!--        </section>-->
        <!--//END PRICING -->
        <!--==================== CONTENT SECTION ====================-->
<!--        <section class="content-wrap">-->
<!--            <div class="container">-->
<!--                <div class="row">-->
<!--                    <div class="col-md-6">-->
<!--                        <div class="content-box content-box1">-->
<!--                            <h5>Which are the network hospitals in your vicinity?</h5>-->
<!--                            <p>To avail a cashless settlement of your claim, you should be admitted in a network-->
<!--                                hospital.-->
<!--                                A company has a list of such hospitals and you need to find out whether the hospital in-->
<!--                                the-->
<!--                                company’s network is your preferred choice of hospital and/or located in your area.</p>-->
<!--                        </div>-->
<!--                        <div class="content-box">-->
<!--                            <h5>What are the documents required for claiming?</h5>-->
<!--                            <p>A pre-authorization form is required in case of cashless claims which are to be submitted-->
<!--                                to-->
<!--                                the TPA. Other documents might also be required and you should have the knowledge of the-->
<!--                                required documents.</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-md-6">-->
<!--                        <div class="content-box content-box1">-->
<!--                            <h5>Will I get covered for my pre-existing illnesses?</h5>-->
<!--                            <p>Every insurer excludes coverage on the pre-existing illnesses for certain tenure at the-->
<!--                                starting of the policy. You need to find out what this waiting period for your-->
<!--                                pre-existing-->
<!--                                illness is and how soon can you be covered for your pre-existing illnesses. </p>-->
<!--                        </div>-->
<!--                        <div class="content-box">-->
<!--                            <h5>Is maternity covered in health insurance policies?</h5>-->
<!--                            <p>No. As health insurance policy is designed to cover unforeseen medical expenses a normal-->
<!--                                health insurance policy does not cover maternity expenses. </p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
        <!--//END CONTENT SECTION -->
        <!--==================== ADD ====================-->
        <section class="add-section clearfix collapse-wrap">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="add-box d-flex flex-column flex-lg-row align-items-center">
                            <img src="../public/assets/img/shield-green.svg" class="img-fluid shield" alt="#">
                            <div class="add-content">
                                <h3> Time tracker made easy</h3>
                                <p>InfyTracker is a minimal time tracker and task management tools built for small teams
                                    to keep everything simple and everyone on the same page.</p>
                            </div>
                            <div class="add-btn text-nowrap">
                                <a href="/docpage/" class="btn btn-success" target="_blank">
                                    Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--//END ADD -->
        <!--==================== FOOTER ====================-->
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer-title">
                            <h6>ADDRESS</h6>
                            <p>A/306, 3rd floor, Aditya Complex,<br>
                                Opp. Astha Square, Nr. VIP Circle,<br>
                                Utaran, Mota Varachha,<br>
                                Surat - 394105, Gujarat,<br>
                                India</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-title">
                            <h6>FOLLOW US</h6>
                            <ul>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Linkedin</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="footer-title">
                            <h6>Made with <i class="fa fa-heart"></i> by InfyOm Technologies</h6>
                            <p>We are a group of creative nerds making awesome stuff for Web & Mobile.
                                We just love to contribute to open source technologies. We always try to build something
                                which helps developers to save their time. so they can spend a bit more time with their
                                friends & family. </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="copyright">
                            <p>Copyright © 2019. InfyOm Technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        computed: {
            data() {
                return this.$page.frontmatter;
            }
        }
    };
</script>

<style lang="scss" scoped>
@import "./../public/assets/css/all.css";
@import "./../public/assets/css/bootstrap.min.css";
@import "./../public/assets/css/circular-std.css";
@import "./../public/assets/css/style.css";

    .navbar {
        height: auto;
    }

    .navbar-brand {
        img {
            max-height: 35px;
        }

        &-name {
        }
    }

    .center-title {

        h2 {
            border-bottom: 0;
        }

    }
    .hero-title {
        &__desc {
            text-transform: initial;

            @media (min-width: 768px) and (max-width: 991px) {
                max-width: 65%;
            }
        }
    }

    .item-icon {

        &__icon {
            font-size: 40px;
        }
    }

</style>
