import { useState } from "react";

type MutationOpts<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (err: Error) => void;
};

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function useNetlifyForm<TInput extends Record<string, string>, TData = { success: true }>(
  formName: string,
  opts: MutationOpts<TData> & { resolveData?: (input: TInput) => TData } = {}
) {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (input: TInput) => {
    setIsPending(true);
    setIsError(false);
    setError(null);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": formName, ...input }),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      const data = (opts.resolveData ? opts.resolveData(input) : ({ success: true } as unknown)) as TData;
      opts.onSuccess?.(data);
    } catch (err) {
      const e = err instanceof Error ? err : new Error("Submission failed");
      setIsError(true);
      setError(e);
      opts.onError?.(e);
    } finally {
      setIsPending(false);
    }
  };

  return { mutate, isPending, isError, error };
}
