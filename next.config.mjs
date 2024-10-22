/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: '**', // Zezwala na ładowanie obrazów z dowolnej domeny HTTPS
            },
          ],
        },
};

export default nextConfig;
