import { useEffect, useState } from "react";

export function useGetCarouselBannerText() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/banner-texts`;
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
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading };
}