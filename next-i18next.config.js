module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
  },

  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('././public/locales')
      : '/locales',

  detection: {
    order: ['path', 'cookie', 'header'],
    caches: ['cookie'],
    excludeCacheFor: ['cimode'], // Виключити автоматичне визначення для цієї мови
    cookieKey: 'next-i18next', // Назва cookie, яка використовується для зберігання вибору мови
    use: ['en'], // Використовувати англійську мову за замовчуванням
  },
};
