import { FC } from "react";
import {
  FiscalAccount,
  FiscalAccountType,
  FiscalInstitution,
  getFiscalInstitutionDetails,
} from "./types";
import { format } from "date-fns";
import { SimpleImage } from "@/components/Image/SimpleImage";
import { FaMoneyBillWave } from "react-icons/fa";

export const AccountCard: FC<{
  account: FiscalAccount;
  showDetails: boolean;
}> = ({ account, showDetails }) => {
  const institutionDetails = getFiscalInstitutionDetails(
    FiscalInstitution[account.institution_name] || FiscalInstitution.Other
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow space-y-2">
      <div className="flex justify-between mb-4">
        <SimpleImage
          isLazy
          src={institutionDetails.icon}
          alt={`${account.institution_name} logo`}
          onError={<FaMoneyBillWave className="w-6 h-6" />}
        />
      </div>

      <div className="flex justify-between">
        <p className="text-sm text-gray-500">Bank</p>
        <p className="font-semibold">{institutionDetails.name}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-sm text-gray-500">Account Type</p>
        <p className="font-semibold">{FiscalAccountType[account.type]}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Account Number</p>
        <p className="font-mono">
          {showDetails ? (
            <span>{account.account_number}</span>
          ) : (
            <span>•••• {account.account_number.slice(-4)}</span>
          )}
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-sm text-gray-500">Balance </p>
        <p
          className={`${
            showDetails
              ? account.balance < 0
                ? "font-semibold text-red-600"
                : "font-semibold text-green-600"
              : "font-mono"
          }`}
        >
          {showDetails ? `₹${account.balance.toLocaleString()}` : "••••"}
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-sm text-gray-500">Transactions</p>
        <p className="font-semibold">
          {account.transaction_count.toLocaleString()}
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-sm text-gray-500">Last Updated</p>
        <p className="text-sm">{format(new Date(account.updated_at), "PPp")}</p>
      </div>
    </div>
  );
};
