import { useState } from "react";

interface useMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type useMutationResult = [(data: any) => void, useMutationState];
export default function useMutation(url: string): useMutationResult {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then((res) => setData(res))
      .catch((res) => setError(res))
      .finally(() => setLoading(false));
  }
  return [mutation, { loading, data, error }];
}
