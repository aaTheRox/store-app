"use client";
import { useEffect, useState } from "react";

export function useGetCategories() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?&populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
        setError(false);
      } catch (error: any) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}

export default useGetCategories;
