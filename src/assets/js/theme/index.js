import themeClump from './theme'

export default function setTheme(theme) {
	Object.keys(themeClump[theme]).forEach((key) => {
		document.documentElement.style.setProperty(key, themeClump[theme][key])
	})
}