const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const sitePath = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;
