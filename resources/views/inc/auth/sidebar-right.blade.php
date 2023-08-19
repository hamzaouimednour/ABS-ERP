<div class="sidebar sidebar-right sidebar-animate">
    <div class="p-2 pr-3 mb-2 sidebar-icon"> <a href="#" class="text-right float-right" data-toggle="sidebar-right" data-target=".sidebar-right"><i class="fe fe-x"></i></a> </div>
       <div class="card-body p-0">
        <div class="header-user text-center mt-4 pb-4">
            <div class="user-pic">
                <img src="../../assets/images/profile.png" alt="user-img" class="avatar-xl rounded-circle">
            </div>
            <div class="user-info">
                <h5 class="mb-0 text-dark">{{ auth()->check() ? auth()->user()->getFullName() : 'Guest' }}</h5>
                <span class="text-muted app-sidebar__user-name text-sm">{{ auth()->check() ? auth()->user()->getAuthority() : 'Guest' }}</span>
            </div>
            <div class="card-body">
                <div class="form-group ">
                    <label class="form-label text-left">Offline/Online</label>
                    <select class="form-control select2 " data-placeholder="Choose one">
                        <option label="Choose one">
                        </option>
                        <option value="1">Online</option>
                        <option value="2">Offline</option>
                    </select>
                </div>
                <div class="form-group ">
                    <label class="form-label text-left">Website</label>
                    <select class="form-control select2 " data-placeholder="Choose one">
                        <option label="Choose one">
                        </option>
                        <option value="1">Spruko.com</option>
                        <option value="2">sprukosoft.com</option>
                        <option value="3">sprukotechnologies.com</option>
                        <option value="4">sprukoinfo.com</option>
                        <option value="5">sprukotech.com</option>
                    </select>
                </div>
            </div>
        </div>
        <a class="dropdown-item  border-top" href="#">
            <i class="dropdown-icon mdi mdi-account-outline "></i> Spruko technologies
        </a>
        <a class="dropdown-item border-top" href="#">
            <i class="dropdown-icon  mdi mdi-account-plus"></i> Add another Account
        </a>
        <div class="card-body border-top">
            <div class="row">
                <div class="col-4 text-center">
                    <a class="" href=""><i class="dropdown-icon mdi  mdi-message-outline fs-30 m-0 leading-tight"></i></a>
                    <div>Inbox</div>
                </div>
                <div class="col-4 text-center">
                    <a class="" href=""><i class="dropdown-icon mdi mdi-tune fs-30 m-0 leading-tight"></i></a>
                    <div>Settings</div>
                </div>
                <div class="col-4 text-center">
                    <a class="" href=""><i class="dropdown-icon mdi mdi-logout-variant fs-30 m-0 leading-tight"></i></a>
                    <div>Sign out</div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- SIDE-BAR CLOSED -->