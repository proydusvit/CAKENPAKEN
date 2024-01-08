export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap:
      'https://cakenpaken-6n28-git-main-proydusvit.vercel.app/sitemap.xml',
  };
}
