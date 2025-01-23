/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/index.html',
            permanent: true, // Set to true for a 308 permanent redirect
          },
        ];
      },
};

export default nextConfig;
