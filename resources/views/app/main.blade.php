<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <!-- X-CSRF-TOKEN -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>Document</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css" />
</head>
<body>
    <div id="app">
        <app></app>
    </div>
    
    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>