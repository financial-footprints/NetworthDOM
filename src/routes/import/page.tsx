import React, { FC } from "react";

import { FormInput } from "@/components/Input/FormInput";
import { SimpleButton } from "@/components/Button/SimpleButton";
import { SimpleLoader } from "@/components/Loader/SimpleLoader";
import { apiEndpoints } from "@/utils/api";

import "./styles.css";

const ImportPage: FC = (): JSX.Element => {
  const [file, setFile] = React.useState<File | null>(null);
  const [secret, setSecret] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!file) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("secret", secret);

    try {
      const response = await fetch(apiEndpoints.import.file, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-4">
        <form className="w-full" onSubmit={handleSubmit}>
          <FormInput
            type="file"
            id="file"
            label="Choose File:"
            accept=".pdf,.xls,.xlsx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            disabled={isLoading}
          />
          <FormInput
            type="password"
            id="secret"
            label="File Password:"
            placeholder="Enter file password (if required)"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            disabled={isLoading}
          />
          <SimpleButton
            type="submit"
            fullWidth
            disabled={isLoading || !file}
            title={
              !file
                ? "Please select a file"
                : isLoading
                ? "Upload in progress..."
                : "Upload File"
            }
          >
            {isLoading ? <SimpleLoader /> : "Upload File"}
          </SimpleButton>
        </form>
      </div>
    </div>
  );
};

export default ImportPage;
