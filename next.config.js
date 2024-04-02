/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/hackathon',
                destination: 'https://docs.google.com/document/d/15pP7UGDzaynIAKgSyr7UfDeE1j1VzpseOmH3kx6Ukv0/edit?usp=sharing',
                permanent: false,
                basePath: false
            },
        ]
    },
};

module.exports = nextConfig