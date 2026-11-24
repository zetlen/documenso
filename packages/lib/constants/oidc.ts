export type OidcPrompt = 'none' | 'login' | 'consent' | 'select_account';

const isOidcPrompt = (value: unknown): value is OidcPrompt => {
  return value === 'none' || value === 'login' || value === 'consent' || value === 'select_account';
};

export const resolveOidcPrompt = (configured: string | undefined, fallback: OidcPrompt): OidcPrompt | undefined => {
  if (configured === '') {
    return undefined;
  }

  if (isOidcPrompt(configured)) {
    return configured;
  }

  return fallback;
};
