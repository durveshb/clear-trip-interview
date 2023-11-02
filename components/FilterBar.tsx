import React, { useCallback } from "react";

const FilterBar = ({
  query,
  onQueryChange,
  showFavorited,
  toggleShowFavorited,
}: {
  query: string;
  onQueryChange: (s: string) => void;
  showFavorited: boolean;
  toggleShowFavorited: () => void;
}) => {
  const onInputChange = useCallback((e) => {
    onQueryChange(e.target.value);
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-3 ">
      <input
        value={query}
        placeholder="search hotels"
        onChange={onInputChange}
        className="rounded-xl p-1 h-10"
        style={{
          border: "1px solid #888888",
        }}
      />
      <button
        onClick={() => toggleShowFavorited()}
        className="p-2 rounded-2xl"
        style={{
          border: "1px solid #888888",
          background: showFavorited ? "blue" : "white",
          color: showFavorited ? "white" : "",
        }}
      >
        {" "}
        Favorites
      </button>
    </div>
  );
};

export default FilterBar;
