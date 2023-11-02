"use client";

import HotelList from "@/components/HotelList";
import { useFetchHotel } from "@/hooks/useFetchHotel";
import { useCallback, useState } from "react";
import HotelDetailsCard from "@/components/HotelDetailsCard";
import FilterBar from "@/components/FilterBar";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [showFavorited, setShowFavorited] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>();

  console.log(query);

  const toggleShowFavorited = useCallback(() => {
    setShowFavorited((prev) => !prev);
  }, []);

  const { data, isLoading, toggleFavorite } = useFetchHotel({
    query,
    showFavorited,
    selectedId,
  });

  const goBack = useCallback(() => {
    setSelectedId(undefined);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      {selectedId ? (
        <HotelDetailsCard
          hotel={data?.[0]}
          isLoading={isLoading}
          goBack={goBack}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <div className="bg-white p-4 rounded-xl w-full flex flex-col gap-2">
          <FilterBar
            query={query}
            onQueryChange={setQuery}
            showFavorited={showFavorited}
            toggleShowFavorited={toggleShowFavorited}
          />
          <HotelList
            hotels={data}
            isLoading={isLoading}
            viewHotel={setSelectedId}
          />
        </div>
      )}
    </main>
  );
}
