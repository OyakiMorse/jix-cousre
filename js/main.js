//HOME
const screenHome = document.querySelector('#screenHome')
const linkHome = document.querySelector('#linkHome')

function scrollToHome() {
  screenHome.scrollIntoView({ block: 'center', behavior: 'smooth' })
}
linkHome.addEventListener('click', scrollToHome)

//ABOUT
const screenAbout = document.querySelector('#screenAbout')
const linkAbout = document.querySelector('#linkAbout')

function scrollToAbout() {
  screenAbout.scrollIntoView({ block: 'center', behavior: 'smooth' })
}
linkAbout.addEventListener('click', scrollToAbout)

// CONTACT
const screenContact = document.querySelector('#screenContact')
const linkContact = document.querySelector('#linkContact')

function scrollToContact() {
  screenContact.scrollIntoView({ block: 'center', behavior: 'smooth' })
}
linkContact.addEventListener('click', scrollToContact)
// INTRO_TITLE
