
import { MetadataRoute } from 'next';

export default function AppRobots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://clinch-app.vercel.app/sitemap.xml',
    };
}
