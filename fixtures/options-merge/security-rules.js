// rule disabled in eslint.config.js
// security/detect-bidi-characters
const accessLevel = 'user'
if (accessLevel !== 'user‮') {
  console.log('You are an admin.')
}

// error on security/detect-disable-mustache-escape
Object.escapeMarkup = false
