import { defineMiddleware } from 'astro:middleware'

const locales = ['es', 'en'] as const
const defaultLocale = 'es'

export const onRequest = defineMiddleware((context, next) => {
	const { pathname, search } = context.url

	if (
		pathname.startsWith('/_astro/') ||
		pathname.startsWith('/api/') ||
		pathname.startsWith('/favicon') ||
		pathname.startsWith('/robots.txt') ||
		pathname.startsWith('/sitemap') ||
		pathname.startsWith('/manifest') ||
		pathname.includes('.')
	) {
		return next()
	}

	if (pathname === '/') {
		return next()
	}

	const segments = pathname.split('/').filter(Boolean)
	const [maybeLocale, ...rest] = segments

	if (maybeLocale === defaultLocale) {
		const canonicalPath = rest.length > 0 ? `/${rest.join('/')}` : '/'
		return context.redirect(`${canonicalPath}${search}`, 301)
	}

	if (locales.includes(maybeLocale as (typeof locales)[number])) {
		return next()
	}

	return next()
})
