<div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
<aside class="app-sidebar">
    <div class="side-header">
        <a class="header-brand1" href="index-2.html">
            <img src="{{ asset('assets/images/brand/logo.png') }}" class="header-brand-img desktop-logo" alt="logo">
            <img src="{{ asset('assets/images/brand/logo-1.png') }}" class="header-brand-img toggle-logo" alt="logo">
            <img src="{{ asset('assets/images/brand/logo-2.png') }}" class="header-brand-img light-logo" alt="logo">
            <img src="{{ asset('assets/images/brand/logo-3.png') }}" class="header-brand-img light-logo1" alt="logo"
                id="change-image">
        </a><!-- LOGO -->
        <a aria-label="Hide Sidebar" class="app-sidebar__toggle ms-auto" data-bs-toggle="sidebar" href="#"></a>
        <!-- sidebar-toggle-->
    </div>
    <div class="app-sidebar__user">
        <div class="dropdown user-pro-body text-center">
            <div class="user-pic">
                <img src="{{ asset('assets/images/profile.png') }}" alt="user-img" class="avatar-xl rounded-circle">
            </div>
            <div class="user-info">
                <h6 class=" mb-0 text-dark">{{ auth()->check() ? auth()->user()->getFullName() : 'Guest' }}</h6>
                <span class="text-muted app-sidebar__user-name text-sm">{{ auth()->check() ? auth()->user()->getAuthority() : 'Guest' }}</span>
            </div>
        </div>
    </div>
    <div class="sidebar-navs">
        <ul class="nav  nav-pills-circle">
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Paramétres">
                <a class="nav-link text-center m-2">
                    <i class="fe fe-settings"></i>
                </a>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Support">
                <a class="nav-link text-center m-2">
                    <i class="fe fe-mail"></i>
                </a>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Profil">
                <a class="nav-link text-center m-2">
                    <i class="fe fe-user"></i>
                </a>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Déconnexion">
                <a class="nav-link text-center m-2" href="{{ url('/logout') }}">
                    <i class="fe fe-power"></i>
                </a>
            </li>
        </ul>
    </div>
    <ul class="side-menu">
        <li>
            <h3>Dashboard</h3>
        </li>
        <li>
            <a class="side-menu__item" href="{{ url('auth/home') }}">
                <i class="side-menu__icon ti-layout-media-overlay"></i>
                <span class="side-menu__label">Acceuil</span>
            </a>
        </li>
        <li>
            <h3>Utilisateurs</h3>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="#">
                <i class="side-menu__icon ti-user"></i><span class="side-menu__label">Utilisateurs</span><i class="angle fa fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
                <li class=""><a href="{{ url('auth/users/add') }}" class="slide-item"> Nouveau</a></li>
                <li class=""><a href="{{ url('auth/users') }}" class="slide-item"> Editer</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="#">
                <i class="side-menu__icon ti-bar-chart-alt"></i><span class="side-menu__label">Entreprises</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu ">
                <li><a href="{{ url('auth/entreprises/add') }}" class="slide-item"> Nouveau</a></li>
                <li><a href="{{ url('auth/entreprises') }}" class="slide-item"> Editer</a></li>
                <li><a href="{{ url('auth/entreprises-licenses/add') }}" class="slide-item"> Nouveau Licence</a></li>
                <li><a href="{{ url('auth/entreprises-licenses') }}" class="slide-item"> Editer Licences</a></li>
            </ul>
        </li>

        <li>
            <h3>ERP</h3>
        <li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="#">
                <i class="side-menu__icon ti-layers"></i><span class="side-menu__label">Applicatifs</span><i class="angle fa fa-angle-right"></i>
            </a>
            <ul class="slide-menu">
                <li><a href="{{ url('auth/components/add') }}" class="slide-item"> Nouveau</a></li>
                <li><a href="{{ url('auth/components') }}" class="slide-item"> Editer</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="#">
                <i class="side-menu__icon ti-layers-alt"></i><span class="side-menu__label">Modules</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu">
                <li><a href="{{ url('auth/modules/add') }}" class="slide-item"> Nouveau</a></li>
                <li><a href="{{ url('auth/modules') }}" class="slide-item"> Editer</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="#">
                <i class="side-menu__icon ti-shield"></i><span class="side-menu__label">Permissions</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu">
                <li><a href="{{ url('auth/permissions/add') }}" class="slide-item"> Nouveau Groupe</a></li>
                <li><a href="{{ url('auth/permissions') }}" class="slide-item"> Groupes de permissions</a></li>
            </ul>
        </li>

        <li>
            <h3>Support</h3>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="#">
                <i class="side-menu__icon ti-settings"></i><span class="side-menu__label">Paramètres</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu">
                <li><a href="#" class="slide-item"> -</a></li>
            </ul>
        </li>
        <li class="slide">
            <a class="side-menu__item" data-bs-toggle="slide" href="#">
                <i class="side-menu__icon ti-info-alt"></i><span class="side-menu__label">Helpdesk</span><i class="angle fa fa-angle-right"></i></a>
            <ul class="slide-menu">
                <li><a href="#" class="slide-item"> -</a></li>
            </ul>
        </li>
    </ul>
</aside>
