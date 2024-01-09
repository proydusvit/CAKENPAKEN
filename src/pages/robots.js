// Для англійської мови (en)
function robotsEn() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://cakenpaken-6n28-git-main-proydusvit.vercel.app/en', // змініть шлях відповідно до англійської версії вашого сайту
    sitemap:
      'https://cakenpaken-6n28-git-main-proydusvit.vercel.app/sitemap.xml',
  };
}

// Для української мови (uk)
function robotsUk() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://cakenpaken-6n28-git-main-proydusvit.vercel.app/uk', // змініть шлях відповідно до української версії вашого сайту
    sitemap:
      'https://cakenpaken-6n28-git-main-proydusvit.vercel.app/uk/sitemap.xml',
  };
}
export { robotsUk, robotsEn };
