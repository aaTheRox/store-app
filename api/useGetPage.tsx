"use client";
import { useEffect, useState } from "react";

export function useGetPage(pageId: string) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${pageId}?&populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
        setError(json.data);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}

export default useGetPage;
