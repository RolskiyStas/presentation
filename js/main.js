/* Aside */

const nav = document.querySelector('.nav'),
	navList = nav.querySelectorAll('li'),
	totalNavList = navList.length,
	allSection = document.querySelectorAll('.section'),
	totalSection = allSection.length

for (let i = 0; i < totalNavList; i++) {
	const a = navList[i].querySelector('a')
	a.addEventListener('click', function () {
		removeBackSection()
		for(let j = 0; j < totalNavList; j++) {
			if (navList[j].querySelector('a').classList.contains('active')) {
				addBackSection(j)
			}
			navList[j].querySelector('a').classList.remove('active')
		}
		this.classList.add('active')
		showSection(this)
		if (window.innerWidth < 1200) {
			asideSectionToggleBtn()
		}
	})
}

function removeBackSection() {
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.remove('back-section')
	}
}

function addBackSection(num) {
	allSection[num].classList.add('back-section')
}

function showSection(element) {
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classList.remove('active')
	}
	const target = element.getAttribute('href').split('#')[1]
	document.querySelector('#' + target).classList.add('active')
}

function updateNav(element) {
	for (let i = 0; i < totalNavList; i++) {
		navList[i].querySelector('a').classList.remove('active')
		const target = element.getAttribute('href').split('#')[1]
		if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
			navList[i].querySelector('a').classList.add('active')
		}
	}
}

document.querySelector('.hire-me').addEventListener('click', function () {
	const sectionIndex = this.getAttribute('data-section-index')
	showSection(this)
	updateNav(this)
	removeBackSection()
	addBackSection(sectionIndex)
})

const navToggleBtn = document.querySelector('.nav__toggle'),
	aside = document.querySelector('.aside')
navToggleBtn.addEventListener('click', () => {
	asideSectionToggleBtn()
})

function asideSectionToggleBtn() {
	aside.classList.toggle('open')
	navToggleBtn.classList.toggle('open')
	for(let i = 0; i < totalSection; i++) {
		allSection[i].classList.toggle('open')
	}
}

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