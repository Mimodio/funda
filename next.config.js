/** @type {import('next').NextConfig} */
module.exports = {
reactStrictMode: true,
redirects: async () => {
return [
{
source: '/about',
destination: '/',
permanent: false,
},
{
source: '/old-blog/id',
destination: '/new-blog/:id',
Permanent: true,
}
]
},
}
