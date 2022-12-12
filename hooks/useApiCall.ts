import { useState, useCallback } from "react";

export type Query<TData> = (...args: any[]) => Promise<TData>;

type UseApiCallType<TData> = [
  boolean,
  TData | null,
  (...args: any[]) => Promise<any>
];

function useApiCall<TData>(
  query: Query<TData>,
  resolveResponse?: (response: any, prevData: TData | null) => TData
): UseApiCallType<TData> {
  const [pending, setPending] = useState<boolean>(false);
  const [data, setData] = useState<TData | null>(null);

  const call = useCallback(
    async (...args: any[]) => {
      setPending(true);
      const result = await query(...args);
      setPending(false);
      setData((prev) =>
        resolveResponse ? resolveResponse(result, prev) : result
      );
      return result;
    },
    [query, resolveResponse]
  );
  return [pending, data, call];
}

export default useApiCall;
