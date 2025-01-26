module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx}',
    ],
    darkMode: 'selector',
    theme: {
        extend: {},
        colors: {
            'title-box-color': '#A63446', // Boite de titre
            'primary-color': '#476A6F', // Texte Principal & éléments cliquables
            'secondary-color': '#519E8A', // Eléments secondaires
            'light-theme-text-color': '#08090A', // Texte en thème sombre
            'dark-theme-text-color': '#F4F7F5', // Texte en thème clair
            'dark-theme-background-color': '#08090A', // Fond en thème sombre
            'light-theme-background-color': '#F4F7F5', // Fond en thème clair
        }
    },
    plugins: [],
};
