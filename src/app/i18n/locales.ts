export const supportedLocales = ['pt-BR', 'en'] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale: SupportedLocale = 'pt-BR';
