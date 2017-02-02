module.exports = (app) => {
  app.locals.company = 'HawaiiMIL'
  app.locals.email = 'shannon@shannonsmithrealtor.com'
  app.locals.phone = '8082253736'
  app.locals.prettify_phone = '(808) 225-3736'
  app.locals.nav = {
    'Home': '',
    'VA Home Loans': 'loans',
    'VA Resources': 'resources',
    'Buy vs. Rent?': 'buy-vs-rent',
    'News': 'news'
  }
  app.locals.social = {
    'facebook': 'https://facebook.com/HawaiiMIL',
    'houzz': 'https://houzz.com/HawaiiMIL'
  }
}

