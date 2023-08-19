<!doctype html>
<html lang="fr" dir="ltr">
	
    <head>

		<!-- META DATA -->
		<meta charset="UTF-8">
		<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		
		<!-- X-CSRF-TOKEN -->
		<meta name="csrf-token" content="{{ csrf_token() }}">

		<!-- FAVICON -->
		<link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/images/brand/favicon.ico') }}" />

		<!-- TITLE -->
		<title> {{config('app.name')}} - @yield('title')</title>

		<!-- BOOTSTRAP CSS -->
		<link href="{{ asset('assets/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet" />

		<!-- STYLE CSS -->
		<link href="{{ asset('assets/css/style.css') }}" rel="stylesheet"/>
		{{-- <link href="{{ asset('assets/css/skin-modes.css') }}" rel="stylesheet"/> --}}

		<!-- SIDE-MENU CSS -->
		<link href="{{ asset('assets/css/sidemenu.css') }}" rel="stylesheet" id="sidemenu">

		<!-- DATA TABLE CSS -->
		{{-- <link href="{{ asset('assets/plugins/datatable/css/dataTables.bootstrap5.min.css') }}" rel="stylesheet"/> --}}

		<!--MORRIS CSS -->
		{{-- <link href="{{ asset('assets/plugins/morris/morris.css') }}" rel="stylesheet"/> --}}

		<!-- P-scroll bar css-->
		<link href="{{ asset('assets/plugins/p-scroll/perfect-scrollbar.css') }}" rel="stylesheet" />

		<!--- FONT-ICONS CSS -->
		<link href="{{ asset('assets/css/icons.css') }}" rel="stylesheet"/>

		<!-- SIDEBAR CSS -->
		<link href="{{ asset('assets/plugins/sidebar/sidebar.css') }}" rel="stylesheet">

		<!-- COLOR SKIN CSS -->
		<link id="theme" rel="stylesheet" type="text/css" media="all" href="{{ asset('assets/colors/color1.css') }}" />

		<!-- SWITCHER SKIN CSS -->
		{{-- <link href="{{ asset('assets/switcher/css/switcher.css') }}" rel="stylesheet"> --}}
		{{-- <link href="{{ asset('assets/switcher/demo.css') }}" rel="stylesheet"> --}}

	</head>

	<body class="app sidebar-mini">
        
		<!-- PAGE -->
		<div class="page">
			<div class="page-main">

				<!--APP-SIDEBAR-->
				@include('inc.auth.sidebar')
				<!--/APP-SIDEBAR-->

				<!-- APP-CONTENT -->
				<div class="app-content">
					<div class="side-app">

						<!-- PAGE-HEADER -->
						@include('inc.auth.page-header')
						<!-- PAGE-HEADER END -->

						<!-- APP -->
						<div class="row" id="app">
							<app></app>
						</div>
						<!-- /APP -->
					</div>
				</div>
				<!-- /APP-CONTENT -->

			</div>
		</div>
		<!-- /PAGE -->

		<!-- SIDE-BAR -->
		@include('inc.auth.sidebar-right')
		<!-- /SIDE-BAR -->

        <!-- FOOTER -->
        <footer class="footer">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-md-12 col-sm-12 text-center">
                        Copyright © {{now()->format(config('custom.date'))}} <a href="#">{{config('custom.company')}}</a>. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
        <!-- FOOTER END -->

        <!-- BACK-TO-TOP -->
	    <a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>
		
		<!-- JQUERY JS -->
		<script src="{{ asset('assets/js/jquery-3.4.1.min.js') }}"></script>

		<!-- BOOTSTRAP JS -->
		<script src="{{ asset('assets/plugins/bootstrap/js/popper.min.js') }}"></script>
		<script src="{{ asset('assets/plugins/bootstrap/js/bootstrap.min.js') }}"></script>

		<!-- SPARKLINE JS-->
		{{-- <script src="{{ asset('assets/js/jquery.sparkline.min.js') }}"></script> --}}


		<!-- SIDE-MENU JS -->
		<script src="{{ asset('assets/plugins/sidemenu/sidemenu.js') }}"></script>

		<!-- SWITCHER JS -->
		{{-- <script src="{{ asset('assets/switcher/js/switcher.js') }}"></script> --}}

		<!-- SIDEBAR JS -->
		<script src="{{ asset('assets/plugins/sidebar/sidebar.js') }}"></script>

		<!-- Perfect SCROLLBAR JS-->
		<script src="{{ asset('assets/plugins/p-scroll/perfect-scrollbar.js') }}"></script>
		<script src="{{ asset('assets/plugins/p-scroll/pscroll.js') }}"></script>
		{{-- <script src="{{ asset('assets/plugins/p-scroll/pscroll-1.js') }}"></script> --}}

		<!-- DATA TABLE JS-->
		{{-- <script src="{{ asset('assets/plugins/datatable/js/jquery.dataTables.min.js') }}"></script>
		<script src="{{ asset('assets/plugins/datatable/js/dataTables.bootstrap5.min.js') }}"></script>
		<script src="{{ asset('assets/plugins/datatable/datatable.js') }}"></script>
		<script src="{{ asset('assets/plugins/datatable/datatable-2.js') }}"></script>
		<script src="{{ asset('assets/plugins/datatable/dataTables.responsive.min.js') }}"></script> --}}

		<!-- INDEX JS -->
        {{-- <script src="{{ asset('assets/js/index3.js') }}"></script> --}}

		<!--CUSTOM JS -->
		{{-- <script src="{{ asset('assets/js/custom.js') }}"></script> --}}

	    <!-- Color Change JS -->
        {{-- <script src="{{ asset('assets/js/color-change.js') }}"></script> --}}
		
		<!-- Scripts -->
		<script src="{{ mix('js/app.js') }}" defer></script>
    </body>

</html>