import { describe, expect, it } from 'vitest';

import { resolveOidcPrompt } from './oidc';

describe('resolveOidcPrompt', () => {
  it('omits the prompt for an explicitly empty value', () => {
    expect(resolveOidcPrompt('', 'login')).toBeUndefined();
  });

  it('uses the fallback when the environment is unset', () => {
    expect(resolveOidcPrompt(undefined, 'login')).toBe('login');
  });

  it('uses a supported configured prompt', () => {
    expect(resolveOidcPrompt('none', 'login')).toBe('none');
  });

  it('uses the supplied fallback for an unsupported value', () => {
    expect(resolveOidcPrompt('unsupported', 'select_account')).toBe('select_account');
  });
});
