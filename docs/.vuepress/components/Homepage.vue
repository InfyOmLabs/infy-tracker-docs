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
                            <div class="add-btn pricing-btn_wrap ml-0 mt-lg-4">
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
            <div class="bg-image">
                <div class="container">
                    <div class="bg-style2">
                        <img src="../public/assets/img/bg-2.png" class="img-fluid" alt="#">
                    </div>
                </div>
            </div>
        </section>
        <!--// Middle content-->
        <!--==================== SCRNSHOT - START TRACKING ====================-->
        <section class="clearfix collapse-wrap space">
            <!-- slider section -->
            <div class="center-title center-title--scrnshot">
                <h2>Screenshots</h2>
            </div>
            <div id="imageGallery" class="screenshot-section d-flex flex-wrap">
                <!-- screenshot image 1 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/clients.jpg"
                         data-sub-html=".caption1">
                        <img src="../public/assets/img/screenshot/clients.jpg" alt="clients" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption1">
                        Clients
                    </div>
                </div>
                <!-- screenshot image 2 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/edit-report.jpg"
                         data-sub-html=".caption2">
                        <img src="../public/assets/img/screenshot/edit-report.jpg" alt="edit-report" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption2">
                        Edit reports
                    </div>
                </div>
                <!-- screenshot image 3 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/edit-task-from-tasks.jpg"
                         data-sub-html=".caption3">
                        <img src="../public/assets/img/screenshot/edit-task-from-tasks.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption3">
                        Edit task from tasks
                    </div>
                </div>
                <!-- screenshot image 4 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/edit-time-entry-from-time-entries.jpg"
                         data-sub-html=".caption4">
                        <img src="../public/assets/img/screenshot/edit-time-entry-from-time-entries.jpg"
                             alt="edit-time-entry-from-time-entries" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption4">
                        Edit time entry from time entries
                    </div>
                </div>
                <!-- screenshot image 5 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/new-report.jpg"
                         data-sub-html=".caption5">
                        <img src="../public/assets/img/screenshot/new-report.jpg" alt="new-report" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption5">
                        New Report
                    </div>
                </div>
                <!-- screenshot image 6 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/new-task-from-tasks.jpg"
                         data-sub-html=".caption6">
                        <img src="../public/assets/img/screenshot/new-task-from-tasks.jpg"
                             alt="new-task-from-tasks" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption6">
                        New task from task
                    </div>
                </div>
                <!-- screenshot image 7 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/new-time-entry-from-tasks.jpg"
                         data-sub-html=".caption7">
                        <img src="../public/assets/img/screenshot/new-time-entry-from-tasks.jpg"
                             alt="new-time-entry-from-tasks" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption7">
                        New time entries from tasks
                    </div>
                </div>
                <!-- screenshot image 8 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/projects.jpg"
                         data-sub-html=".caption8">
                        <img src="../public/assets/img/screenshot/projects.jpg"
                             alt="projects" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption8">
                        Projects
                    </div>
                </div>
                <!-- screenshot image 9 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/report-view.jpg"
                         data-sub-html=".caption9">
                        <img src="../public/assets/img/screenshot/report-view.jpg"
                             alt="report-view" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption9">
                        Report View
                    </div>
                </div>
                <!-- screenshot image 10 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/reports.jpg"
                         data-sub-html=".caption10">
                        <img src="../public/assets/img/screenshot/reports.jpg"
                             alt="reports" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption10">
                        Reports
                    </div>
                </div>
                <!-- screenshot image 11 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/tasks.jpg"
                         data-sub-html=".caption11">
                        <img src="../public/assets/img/screenshot/tasks.jpg"
                             alt="tasks" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption11">
                        Task
                    </div>
                </div>
                <!-- screenshot image 12 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/time-entries.jpg"
                         data-sub-html=".caption12">
                        <img src="../public/assets/img/screenshot/time-entries.jpg"
                             alt="time-entries" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption12">
                        Time entries
                    </div>
                </div>
                <!-- screenshot image 13 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/time-entries-from-tasks.jpg"
                         data-sub-html=".caption13">
                        <img src="../public/assets/img/screenshot/time-entries-from-tasks.jpg"
                             alt="time-entries-from-tasks" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption13">
                        Time entries from tasks
                    </div>
                </div>
                <!-- screenshot image 14 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/tracker-stopwatch.jpg"
                         data-sub-html=".caption14">
                        <img src="../public/assets/img/screenshot/tracker-stopwatch.jpg"
                             alt="tracker-stopwatch" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption14">
                        Tracker stopwatch
                    </div>
                </div>
                <!-- screenshot image 15 -->
                <div class="screenshot-section__col">
                    <div class="screenshot-section__col-item"
                         data-src="/infy-tracker/assets/img/screenshot/users.jpg"
                         data-sub-html=".caption15">
                        <img src="../public/assets/img/screenshot/users.jpg"
                             alt="users" class="img-fluid">
                    </div>
                    <div class="p-4 text-center caption15">
                        Users
                    </div>
                </div>
            </div>
            <!-- /screenshot section -->
            <div class="container space-top start-track-time">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="add-box d-flex align-items-center flex-column flex-lg-row justify-content-between">
                            <img src="../public/assets/img/shield-green.svg" class="img-fluid shield" alt="#">
                            <div class="add-content">
                                <h3 class="mt-1">Start Tracking your time</h3>
                            </div>
                            <div class="add-btn">
                                <router-link :to="'/docs/'" class="btn btn-success">Get started</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--//END SLIDER - START TRACKING -->
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
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
                    <div class="col-md-6">
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
    import {
        Hooper,
        Slide, Navigation as HooperNavigation,
        Pagination as HooperPagination,
        Progress as HooperProgress
    } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        components: {
            Hooper,
            Slide,
            HooperNavigation,
            HooperPagination,
            HooperProgress
        },

        computed: {
            data() {
                return this.$page.frontmatter;
            },
        },

        mounted: function () {

            setTimeout(()=>{
                $('#imageGallery').lightGallery({
                    download: false,
                    selector: '.screenshot-section__col-item'
                });
            }, 100)

        }
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

    .count-column {
        border-radius: 50%;
        background-color: #ffffff;
        box-shadow: 0 25px 60px 0 rgba(46, 61, 98, 0.05);
        width: 220px;
        height: 220px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        @media (max-width: 520px) {
            margin-top: 20px;
        }

        &:before {
            content: '';
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border-width: 1px;
            border-style: solid;
            border-radius: 50%;
        }

        &--build {
            .count-column__number {
                color: #EF4059;
            }

            &:before {
                border-color: #EF4059;
            }
        }

        &--download {
            .count-column__number {
                color: #5DD8D3;
            }

            &:before {
                border-color: #5DD8D3;
            }
        }

        &--commit {
            .count-column__number {
                color: #9364D4;
            }

            &:before {
                border-color: #9364D4;
            }
        }

        &__number {
            font-size: 40px;
        }

        &__title {
            color: #666E82;
            font-weight: bold;
            letter-spacing: 2px;
        }
    }

    // screenshot section
    .screenshot-section {

        &__col {
            flex: 1 1 100%;
            max-width: 100%;
            width: 100%;
            padding: 0 15px;

            @media (min-width: 576px) {
                flex: 1 1 50%;
                max-width: 50%;
                padding: 0 25px;
            }


            @media (min-width: 992px) {
                flex: 1 1 33.3%;
                max-width: 33.3%;
                padding: 0 25px;
            }

            &:hover {
                .screenshot-section__col-item {
                    transform: translateY(-8px);
                    transition: .3s all;
                }
            }

            &-item {
                box-shadow:0 22px 70px rgba(0, 0, 0, 0.13);
                border-radius: 5px;
                overflow: hidden;
                transition: .3s all;
                cursor: pointer;
            }
        }

    }
</style>
