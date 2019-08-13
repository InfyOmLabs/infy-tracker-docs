<template>
    <div>
        <header>
            <div class="nav-menu">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav class="navbar navbar-expand-lg navbar-light border-bottom-0 py-lg-0">
                                <a class="navbar-brand p-0" href="#">
                                    <img src="../public/assets/img/logo.png" alt="#">
                                </a>
                                <h4 class="navbar-brand-name m-0">InfyTracker</h4>
                                <button class="navbar-toggler navbar-toggler_second" type="button"
                                        data-toggle="collapse" data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fas fa-bars"></i>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <router-link :to="'/docs/'" class="nav-link py-4">Docs</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Title -->
        <div class="main-title__alt header__bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-6">
                        <div class="hero-title  text-center  text-md-left">
                            <h1>InfyTracker</h1>
                            <p class="hero-title__desc">
                                InfyTracker is a minimal time tracker and task management tools built for small teams to
                                keep everything simple and everyone on the same page.
                            </p>
                            <p class="hero-title__desc">
                                It provides very simple task management with features like Clients and Projects
                                management, Tasks management with time entries, Team management along with Roles and
                                Permissions and a very nice Web Timer to track the time for the particular task.
                            </p>
                            <div class="add-btn pricing-btn_wrap ml-0">
                                <router-link :to="'/docs/'" class="btn btn-success">Get started</router-link>
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
        <!-- Middle content -->
        <section class="space bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="center-title">
                            <h2>Features</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color1 d-flex justify-content-center align-items-center m-auto">
                                <i class="fas fa-user-tie item-icon__icon item-icon__icon--color1"></i>
                            </div>
                            <h6>Clients</h6>
                            <p>
                                The client is a very first starting entity of any Task or Project management system. You
                                may have one or more than one clients. InfyTracker provides very clean and simple client
                                management with client details.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color2 d-flex justify-content-center align-items-center m-auto">
                                <i class="fas fa-folder-open item-icon__icon item-icon__icon--color2"></i>
                            </div>
                            <h6>Projects</h6>
                            <p>
                                Projects are the very second entity for organizing stuff. Manage your projects which
                                belongs to the same or different clients since you may have multiple projects for the
                                same client with assigning Users to the particular projects.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color3 d-flex justify-content-center align-items-center m-auto">
                                <i class="fas fa-users item-icon__icon item-icon__icon--color3"></i>
                            </div>
                            <h6>Users (Team)</h6>
                            <p>
                                Behind every great Product, there is a great team. You can manage all of your team
                                members at a single place along with their Projects and Roles and what permissions they
                                can have and what they can access and not.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color4 d-flex justify-content-center align-items-center m-auto">
                                <i class="fas fa-user item-icon__icon item-icon__icon--color4"></i>
                            </div>
                            <h6>Roles + Permissions</h6>
                            <p>
                                You have total control on your team members for who can access what. The administration
                                can define roles as per need with desired permissions and assign those roles to various
                                team members.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color5 d-flex justify-content-center align-items-center m-auto">
                                <i class="fas fa-tasks item-icon__icon item-icon__icon--color5"></i>
                            </div>
                            <h6>Task Management</h6>
                            <p>
                                InfyTracker provides very clean task management with only necessary fields. The task can
                                have multiple assignees, priority, reporter, status, and description. No more complex
                                and long task management form.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color6 d-flex justify-content-center align-items-center m-auto">
                                <i class="fas fa-paperclip item-icon__icon item-icon__icon--color6"></i>
                            </div>
                            <h6>File Management</h6>
                            <p>
                                Attach your files on your tasks to attach more information on the task along with option
                                of storing your files with your choice of the file storage service from various services
                                like Amazon S3, Digital Ocean, Local and FTP.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color1 d-flex justify-content-center align-items-center m-auto">
                                <i class="fas fa-comments item-icon__icon item-icon__icon--color1"></i>
                            </div>
                            <h6>Comments & Tags</h6>
                            <p>
                                Collaboration between the team is important. You can comment on tasks to keep your task
                                information up to date and to collaborate with your team members. Also, you can put your
                                choice of Tags on the task with a way you want. Create custom tags which are useful to
                                filter out tasks.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color2 d-flex justify-content-center align-items-center m-auto">
                                <i class="fas fa-user-clock item-icon__icon item-icon__icon--color2"></i>
                            </div>
                            <h6>Time Entries & Widget</h6>
                            <p>Keeping a track of your time spent on a particular task is important. We made it easy by
                                providing a very simple web timer widget. Click the timer, select task and start the
                                timer. Once you are done, insert notes and stop the timer. It will automatically record
                                time entry on that task.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="item-box">
                            <div class="item-icon color3 d-flex justify-content-center align-items-center m-auto">
                                <i class="fas fa-file item-icon__icon item-icon__icon--color3"></i>
                            </div>
                            <h6>Reports</h6>
                            <p>Create reports to get insights What has been accomplished, by Whom, in What amount of
                                time, on Which project, of Which client. All these information are easy to access by
                                creating reports with desired filters based on your need for a given period of time by
                                reports.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--// Middle content-->
        <!--==================== ADD ====================-->
        <section class="add-section clearfix collapse-wrap">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="add-box">
                            <img src="../public/assets/img/shield-green.svg" class="img-fluid shield" alt="#">
                            <div class="add-content">
                                <h3 class="mt-1">Start Tracking your time</h3>
                                <p>Open source and free to use without any credit mention</p>
                            </div>
                            <div class="add-btn">
                                <router-link :to="'/docs/'" class="btn btn-success">Get started</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--//END ADD -->
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer-title">
                            <h6>ADDRESS</h6>
                            <p>A/306, 3rd floor, Aditya Complex,<br>
                                Opp. Astha Square, Nr. VIP Circle,<br>
                                Utaran, Mota Varachha,<br>
                                Surat - 394101, Gujarat,<br>
                                India</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-title">
                            <h6>FOLLOW US</h6>
                            <ul>
                                <li><a href="https://twitter.com/infyom" target="_blank">Twitter</a></li>
                                <li><a href="https://www.facebook.com/infyom" target="_blank">Facebook</a></li>
                                <li><a href="https://in.linkedin.com/company/infyom-technologies" target="_blank">Linkedin</a>
                                </li>
                                <li><a href="https://github.com/InfyOmLabs" target="_blank">Github</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="footer-title">
                            <h6>Made with <i class="fa fa-heart"></i> by InfyOm Technologies</h6>
                            <p>We are a group of creative nerds making awesome stuff for Web & Mobile. We just love to
                                contribute to open source technologies. We always try to build something which helps
                                developers to save their time. so they can spend a bit more time with their friends &
                                family. </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="copyright">
                            <p>Copyright © 2019.
                                <a href="http://www.infyom.com/" target="_blank">InfyOm Technologies</a>
                            </p>
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
      data () {
        return this.$page.frontmatter
      },
    },
  }
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

            &--color1 {
                color: #00A7C5;
            }

            &--color2 {
                color: #DE34ED;
            }

            &--color3 {
                color: #8AD77A;
            }

            &--color4 {
                color: #C8B544;
            }

            &--color5 {
                color: #CD8675;
            }

            &--color6 {
                color: #6767CB;
            }
        }
    }

    .copyright {
        a {
            color: #818697;
        }
    }

</style>
