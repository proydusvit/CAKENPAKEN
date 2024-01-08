export default function sitemap() {
  return [
    {
      url: 'https://cakenpaken-6n28-git-main-proydusvit.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://cakenpaken-6n28-git-main-proydusvit.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://cakenpaken-6n28-git-main-proydusvit.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
