/*
 * Single source of truth for paths to
 * communicate with the Backend API.
 */

const baseURL = import.meta.env.PUBLIC_API_BASE_URL || "";

export const endpoints = {
  import: {
    file: `${baseURL}/api/v1/statements/import`,
  },
  fiscal_accounts: {
    list: `${baseURL}/api/v1/fiscal_accounts`,
  },
};
