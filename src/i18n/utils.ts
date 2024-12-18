import { ui, defaultLang, showDefaultLang,routes } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}


export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const cleanPath = path.replace(/^\/+|\/+$/g, ''); // Elimina slashes iniciales y finales

    // Verifica si existe una traducción para el path limpio
    const hasTranslation = 
      defaultLang !== l &&
      routes[l] !== undefined &&
      routes[l][cleanPath] !== undefined;

    // Obtén la ruta traducida si existe
    const translatedPath = hasTranslation 
      ? `/${routes[l][cleanPath]}` 
      : `/${cleanPath}`;

    // Devuelve la ruta final con el lenguaje, si es necesario
    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}


export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== undefined ? route[path] : undefined;
  }

  const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined  => {
      return Object.keys(obj).find((key) => obj[key] === value);
  }

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}