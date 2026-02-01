<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>KOMEK | Kinetic Editorial</title>

    @vite([
        'resources/css/app.css',
        'resources/js/app.js',
        'resources/css/sections/header.css',
        'resources/css/sections/contact.css',
        'resources/css/sections/card-list.css',
        'resources/css/sections/footer.css',
        'resources/js/sections/card-list.js',
        'resources/js/sections/header.js'
    ])
</head>

<body class="antialiased">
    <div class="container">
        @include('sections.reklama')
        @include('sections.contact')
        @include('sections.header')

        <main>
            @include('sections.card-list')
        </main>

        @include('sections.footer')
    </div>
</body>

</html>