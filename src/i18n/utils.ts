import { ui, defaultLang } from './ui'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in ui) return lang as keyof typeof ui
	return defaultLang
}

export function getRouteWithoutLocale(url: URL) {
	const segments = url.pathname.split('/').filter(Boolean)
	const [maybeLang, ...rest] = segments

	if (maybeLang in ui) {
		return rest.join('/')
	}

	return segments.join('/')
}

export function getLocalizedPath(lang: keyof typeof ui, route = '') {
	const normalizedRoute = route.replace(/^\/+|\/+$/g, '')

	if (lang === defaultLang) {
		return normalizedRoute ? `/${normalizedRoute}` : '/'
	}

	return normalizedRoute ? `/${lang}/${normalizedRoute}` : `/${lang}/`
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key]
	}
}