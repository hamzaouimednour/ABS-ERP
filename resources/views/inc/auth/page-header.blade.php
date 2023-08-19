<div class="page-header">
    <div>
        <h1 class="page-title"></h1> 
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page"></li>
        </ol>
    </div>
    <div class="d-flex  ms-auto header-right-icons header-search-icon">
        <div class="dropdown d-sm-flex">
            <a href="#" class="nav-link icon" data-bs-toggle="dropdown">
                <i class="fe fe-search"></i>
            </a>
            <div class="dropdown-menu header-search dropdown-menu-start">
                <div class="input-group w-100 p-2">
                    <input type="text" class="form-control " placeholder="Search....">
                    <div class=" ">
                        <button type="button" class="btn btn-primary ">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div><!-- SEARCH -->
        <div class="dropdown d-md-flex">
            <a class="nav-link icon full-screen-link nav-link-bg">
                <i class="fe fe-maximize fullscreen-button"></i>
            </a>
        </div><!-- FULL-SCREEN -->
        <div class="dropdown d-md-flex notifications">
            <a class="nav-link icon" data-bs-toggle="dropdown">
                <i class="fe fe-bell"></i>
                <span class="nav-unread badge bg-success rounded-pill">0</span>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <div class="notifications-menu">
                    <a class="dropdown-item d-flex pb-3" href="#">
                        <div class="fs-16 text-success me-3">
                            <i class="fa fa-thumbs-o-up"></i>
                        </div>
                        <div class="">
                            <strong>Someone likes our posts.</strong>
                        </div>
                    </a>
                </div>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item text-center">View all Notification</a>
            </div>
        </div><!-- NOTIFICATIONS -->
        <div class="dropdown d-md-flex message">
            <a class="nav-link icon text-center" data-bs-toggle="dropdown">
                <i class="fe fe-mail"></i>
                <span class="nav-unread badge bg-danger rounded-pill">0</span>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <div class="message-menu">
                    <a class="dropdown-item d-flex pb-3" href="#">
                        <span class="avatar avatar-md brround me-3 align-self-center cover-image" data-image-src="../../assets/images/users/1.jpg"></span>
                        <div>
                            <strong>Madeleine</strong> Hey! there I' am available....
                            <div class="small text-muted">
                                3 hours ago
                            </div>
                        </div>
                    </a>
                </div>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item text-center">See all Messages</a>
            </div>
        </div><!-- MESSAGE-BOX -->
        <div class="dropdown profile-1">
            <a href="#" data-bs-toggle="dropdown" class="nav-link pe-2 leading-none d-flex">
                <span>
                    <img src="../../assets/images/profile.png" alt="profile-user" class="avatar  profile-user brround cover-image">
                </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <a class="dropdown-item" href="#">
                    <i class="dropdown-icon mdi mdi-account-outline"></i> Profile
                </a>
                <a class="dropdown-item" href="#">
                    <i class="dropdown-icon  mdi mdi-settings"></i> Settings
                </a>
                <a class="dropdown-item" href="#">
                    <i class="dropdown-icon mdi mdi-comment-check-outline"></i> Réclamations
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"  href="{{ url('/logout') }}">
                    <i class="dropdown-icon mdi  mdi-logout-variant"></i> Déconnexion
                </a>
            </div>
        </div>
        <div class="dropdown d-md-flex header-settings">
            <a href="#" class="nav-link icon " data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
                <i class="fe fe-align-right"></i>
            </a>
        </div><!-- SIDE-MENU -->
    </div>
</div>