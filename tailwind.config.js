module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'lavender-purple': '#957DAD'
            },
            fontFamily: {
                'pacifico': ['Pacifico', 'cursive']
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
