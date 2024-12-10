import {
  FiscalAccount,
  FiscalAccountSearchOptions,
} from "@/routes/fiscal_accounts/types";
import { endpoints } from "./endpoints";

export const networthHttp = {
  import: {
    create: (file: File, secret: string) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("secret", secret);

      return fetch(endpoints.import.file, {
        method: "POST",
        body: formData,
      });
    },
  },
  fiscal_accounts: {
    list: async (
      options: FiscalAccountSearchOptions
    ): Promise<FiscalAccount[]> => {
      return fetch(endpoints.fiscal_accounts.list, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
      }).then((response) => response.json());
    },
  },
};
