import { SortDirection } from "@/utils/types";

import AxisImage from "@/assets/images/logo/fiscal_institutions/axis.png";
import BankOfBarodaImage from "@/assets/images/logo/fiscal_institutions/bank_of_baroda.png";
import CitiImage from "@/assets/images/logo/fiscal_institutions/citi.png";
import HdfcImage from "@/assets/images/logo/fiscal_institutions/hdfc.png";
import IciciImage from "@/assets/images/logo/fiscal_institutions/icici.png";
import IdfcImage from "@/assets/images/logo/fiscal_institutions/idfc.svg";
import IndusIndImage from "@/assets/images/logo/fiscal_institutions/indusind.png";
import JupiterImage from "@/assets/images/logo/fiscal_institutions/jupiter.png";
import OneCardImage from "@/assets/images/logo/fiscal_institutions/onecard.jpg";
import OtherImage from "@/assets/images/logo/fiscal_institutions/other.svg";
import PunjabNationalBankImage from "@/assets/images/logo/fiscal_institutions/punjab_national_bank.png";
import SbiImage from "@/assets/images/logo/fiscal_institutions/sbi.png";
import YesImage from "@/assets/images/logo/fiscal_institutions/yes.png";

export interface FiscalAccount {
  id: string;
  account_number: string;
  max_sequence_number: number;
  transaction_count: number;
  balance: number;
  institution_name: keyof typeof FiscalInstitution;
  type: keyof typeof FiscalAccountType;
  updated_at: string;
}

export type FiscalAccountSearchOptions = {
  filter?: FiscalAccountFilterOptions;
  sort?: FiscalAccountSortOptions;
  limit?: number;
  offset?: number;
};

export type FiscalAccountSortOptions = {
  column?: FiscalAccountColumn;
  direction?: SortDirection;
};

export type FiscalAccountFilterOptions = {
  id?: string;
  account_number?: string;
  type?: FiscalAccountType;
};

export type FiscalAccountColumn = keyof FiscalAccount;

export enum FiscalInstitution {
  Hdfc = "Hdfc",
  StateBankOfIndia = "StateBankOfIndia",
  Icici = "Icici",
  Axis = "Axis",
  OneCard = "OneCard",
  Citi = "Citi",
  IndusInd = "IndusInd",
  Jupiter = "Jupiter",
  BankOfBaroda = "BankOfBaroda",
  Idfc = "Idfc",
  PunjabNationalBank = "PunjabNationalBank",
  Yes = "Yes",
  Other = "Other",
}

export function getFiscalInstitutionDetails(institution: FiscalInstitution): {
  name: string;
  icon: string;
} {
  switch (institution) {
    case FiscalInstitution.Hdfc:
      return {
        name: "Hdfc Bank",
        icon: HdfcImage,
      };
    case FiscalInstitution.StateBankOfIndia:
      return {
        name: "State Bank of India",
        icon: SbiImage,
      };
    case FiscalInstitution.Icici:
      return {
        name: "Icici Bank",
        icon: IciciImage,
      };
    case FiscalInstitution.Axis:
      return {
        name: "Axis Bank",
        icon: AxisImage,
      };
    case FiscalInstitution.OneCard:
      return {
        name: "One Card",
        icon: OneCardImage,
      };
    case FiscalInstitution.Citi:
      return {
        name: "Citi Bank",
        icon: CitiImage,
      };
    case FiscalInstitution.IndusInd:
      return {
        name: "IndusInd Bank",
        icon: IndusIndImage,
      };
    case FiscalInstitution.Jupiter:
      return {
        name: "Jupiter Bank",
        icon: JupiterImage,
      };
    case FiscalInstitution.BankOfBaroda:
      return {
        name: "Bank of Baroda",
        icon: BankOfBarodaImage,
      };
    case FiscalInstitution.Idfc:
      return {
        name: "Idfc Bank",
        icon: IdfcImage,
      };
    case FiscalInstitution.PunjabNationalBank:
      return {
        name: "Punjab National Bank",
        icon: PunjabNationalBankImage,
      };
    case FiscalInstitution.Yes:
      return {
        name: "Yes Bank",
        icon: YesImage,
      };
    case FiscalInstitution.Other:
      return {
        name: "Other",
        icon: OtherImage,
      };
  }
}

export enum FiscalAccountType {
  CheckingAccount = "Checking Account",
  SavingsAccount = "Savings Account",
  CreditCard = "Credit Card",
  FixedDeposit = "Fixed Deposit",
  Unknown = "Unknown",
}
