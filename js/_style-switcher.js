/* toggle style switcher */
const styleSwitcherToggle = document.querySelector('.switcher__toggler')
styleSwitcherToggle.addEventListener('click', () => {
	document.querySelector('.switcher').classList.toggle('open')
})

window.addEventListener('scroll', () => {
	if (document.querySelector('.switcher').classList.contains('open')) {
		document.querySelector('.switcher').classList.remove('open')
	}
})

/* theme colors */

const alternateStyle = document.querySelectorAll('.alternate-style')
function setActiveStyle(color) {
	alternateStyle.forEach((style) => {
		if (color === style.getAttribute('title')) {
			style.removeAttribute('disabled')
		} else {
			style.setAttribute('disabled','true')
		}
	})
}