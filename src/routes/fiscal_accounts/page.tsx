import { FC, useState, useEffect } from "react";
import { FiscalAccount } from "./types";
import { AccountCard } from "./AccountCard";
import { networthHttp } from "@/utils/api/requests";
import { PageLoader } from "@/components/Loader/PageLoader";
import { ToggleButton } from "../../components/Button/ToggleButton";
import { PageTitle } from "@/components/Title/PageTitle";
import { ButtonLoader } from "@/components/Loader/ButtonLoader";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { ToggleIconButton } from "@/components/Button/ToggleIconButton";
import { FiPlus } from "react-icons/fi";
import { ActionIconButton } from "@/components/Button/ActionIconButton";

const ITEMS_PER_PAGE = 20;

export const FiscalAccountsPage: FC = () => {
  const [accounts, setAccounts] = useState<FiscalAccount[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [allFetched, setAllFetched] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    setIsLoading(true);
    try {
      const accounts = await networthHttp.fiscal_accounts.list({
        offset: currentPage * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE,
      });

      setAccounts((prevAccounts) => {
        const uniqueAccounts = accounts.filter(
          (account) =>
            !prevAccounts.some((knownAccount) => knownAccount.id === account.id)
        );

        if (accounts.length === 0) {
          setAllFetched(true);
        }

        return [...prevAccounts, ...uniqueAccounts];
      });

      if (accounts.length > 0) {
        setCurrentPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Failed to fetch accounts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageTitle
        title="Fiscal Accounts"
        buttons={[
          <ToggleIconButton
            key="show-account-details"
            variant="thin"
            toggle={showAccountDetails}
            onClick={() => setShowAccountDetails(!showAccountDetails)}
            toggleOn={{
              icon: <IoIosEyeOff />,
              text: "Hide",
            }}
            toggleOff={{
              icon: <IoIosEye />,
              text: "Show",
            }}
          />,
          <ActionIconButton
            key="create-account"
            variant="thin"
            actionText="Create Account"
            actionIcon={<FiPlus />}
            onClick={() => alert("TODO: Not implemented yet")}
          />,
        ]}
      />

      {isLoading && accounts.length === 0 ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <PageLoader />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {accounts.map((account) => (
              <AccountCard
                key={account.id}
                account={account}
                showDetails={showAccountDetails}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            {allFetched ? (
              <p className="text-center pt-4 text-gray-600 font-serif text-xl italic">
                {accounts.length > 0
                  ? "That's all folks!"
                  : "No accounts found!"}
              </p>
            ) : (
              <ToggleButton
                disabled={isLoading}
                title={isLoading ? "Loading..." : "Load More"}
                onClick={() => fetchAccounts()}
                toggle={isLoading}
                toggleOn={<ButtonLoader />}
                toggleOff={"Load More"}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
