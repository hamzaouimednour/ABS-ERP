<!DOCTYPE html>
<html lang="en">
<head>
    <!-- META DATA -->
    <meta charset="UTF-8">
    <meta http-equiv="imagetoolbar" content="no" />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
    <!-- FAVICON -->
    <link rel="icon" href="{{asset('assets/img/brand/favicon.ico')}}" type="image/x-icon" /> 
    <!-- X-CSRF-TOKEN -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- TITLE -->
    <title>ABS - ERP Authentification</title>
    <!-- BOOTSTRAP CSS -->
    <link href="{{asset('assets/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet" />
    <!-- STYLE CSS -->
    <link href="{{asset('assets/css/style.css')}}" rel="stylesheet" /> <!-- Dark css -->
    <link href="{{asset('assets/css/style-auth.css')}}" rel="stylesheet" />
    <!-- SKINS CSS -->
    <link href="{{asset('assets/css/skin-modes.css')}}" rel="stylesheet" />
    <!-- ICONS CSS -->
    <link href="{{asset('assets/css/icons.css')}}" rel="stylesheet" />
    <!-- COLOR SKIN CSS -->
    <link id="theme" rel="stylesheet" type="text/css" media="all" href="{{asset('assets/colors/color1.css')}}" />
    <!-- SINGLE-PAGE CSS -->
    <link href="{{asset('assets/plugins/single-page/css/main.css')}}" rel="stylesheet" type="text/css">
    <!-- SWITCHER CSS -->
    <link href="{{asset('assets/switcher/css/switcher.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/switcher/css/demo.css')}}" rel="stylesheet" type="text/css" />
</head>

<body class="h-100vh page-style1">

    <div id="global-loader" style="display: none;"> 
        <img src="{{asset('assets/images/loader-4.svg')}}" alt="loader">
    </div>

    <div class="page" id="app">
        <div class="page-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 d-block mx-auto">
                        <div class="row">
                            <div class="col-md-5 p-md-0">
                                <div class="card mb-0" style="border-radius: 8px 0px 0px 8px;">
                                    <div class="card-body page-single-content">
                                        <app></app>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 p-0">
                                <div class="card text-white custom-content page-content mt-0">
                                    <div class="card-body text-center justify-content-center">
                                        <div class="custom-body">
                                            <h2 class="mb-1">Bienvenue sur ABS ERP!</h2>
                                            <p class="text-white-50">Connectez-vous à votre compte.</p>
                                        </div>
                                        <div class="custom-logo1">
                                            <a href="{{ asset('/') }}">
                                                <img src="" class="header-brand-img dark-logo" alt="logo">
                                            </a>
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
    
    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>
</body>

</html>