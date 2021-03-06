<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Tabtracker</title>
    </head>
    <body>
        <div id="app">
            <v-app>
                <router-view></router-view>
            </v-app>
        </div>
    </body>

<script src="{{ mix('js/app.js') }}"></script>
</html>
