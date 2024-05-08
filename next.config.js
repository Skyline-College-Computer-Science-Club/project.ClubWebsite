/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/p5js',
                destination:
                    'https://www.canva.com/design/DAGCbZ2TaH4/ZSVhmMFmn8pSIa-GyE5nBQ/view?utm_content=DAGCbZ2TaH4&utm_campaign=designshare&utm_medium=link&utm_source=editor',
                permanent: false,
                basePath: false,
            },
        ]
    },
}

module.exports = nextConfig
