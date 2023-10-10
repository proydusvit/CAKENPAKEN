module.exports = {

    i18n:{
      defaultLocale:"en",
        locales:["en", "uk"]
      
      },
      localePath:
      typeof window === 'undefined'
        ? require('path').resolve('././public/locales')
        : '/locales',

  
}

