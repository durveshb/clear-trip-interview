import { Hotel } from "@/lib/types";
import { useEffect, useState, useMemo, useCallback } from "react";

export const useFetchHotel = ({
  query,
  showFavorited,
  selectedId,
}: {
  query: string | undefined;
  showFavorited: boolean | undefined;
  selectedId: string | undefined;
}): {
  data: Hotel[] | undefined;
  isLoading: boolean;
  toggleFavorite: (props: { id: string }) => void;
} => {
  const [data, setData] = useState<Hotel[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        "https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c"
      );
      const data = await response.json();

      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const formatedData = useMemo(() => {
    if (!data) {
      return undefined;
    }

    return data.filter((hotel) => {
      if (query) {
        if (
          !hotel.name.toLowerCase().includes(query.toLowerCase()) &&
          !hotel.location.toLowerCase().includes(query.toLowerCase()) &&
          !hotel.id.includes(query.toLowerCase())
        )
          return false;
      }
      if (selectedId && hotel.id !== selectedId) {
        return false;
      }
      if (showFavorited && !hotel.favorite) {
        return false;
      }
      return true;
    });
  }, [data, showFavorited, query, selectedId]);

  const toggleFavorite = useCallback(({ id }: { id: string }) => {
    setData((prev) =>
      prev?.map((hotel) => {
        if (hotel.id === id) {
          return {
            ...hotel,
            favorite: !hotel.favorite,
          };
        }
        return hotel;
      })
    );
  }, []);

  return {
    data: formatedData,
    isLoading,
    toggleFavorite,
  };
};
