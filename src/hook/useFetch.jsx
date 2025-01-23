import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        setData(response);
      } catch (error) {
        console.error(`HTTPSda Xatolik bormi deymanda ${error.message}`);
      }
    };

    fetchData();
  }, [url]);

  return { data };
}