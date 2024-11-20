tailwind.config = {
    theme: {
        extend: {
            colors: {
                'aqua-green': {
                    '500': 'rgba(64,216,180, .5)',
                    '600': 'rgba(64,216,180, .6)',
                    '700': 'rgba(64,216,180, .7)',
                    '800': 'rgba(64,216,180, .8)',
                    'DEFAULT': 'rgb(64,216,180)'
                },
                'myRed': {
                    '800': 'rgba(235, 82, 82, .8)',
                    'DEFAULT': 'rgb(235, 82, 82)'
                },
                'input':'rgba(64,216,180,.27)',
                'toDo-green':'rgba(79,243,115,.36)',
                'done-yellow':'rgba(213,243,79,.36)',
                'cream':'#FFF7EA',
                'text': '#454545'
            },
            backgroundImage: {
                'add':"url('/img/agregar.png')",
                'delete':"url('/img/eliminar.png')"
            }
             
        }
    }
}