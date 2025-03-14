import React from "react";
import { PathTypes, Tile, TileTypes } from "../types/TileLayout";

interface TileProperties {
  tile: Tile;
  key: number;
}

function tileToColor(tile: Tile): string {
  switch (tile.tileType) {
    case TileTypes.Empty:
      return "bg-white";
    case TileTypes.Qubit:
      return "bg-blue-200";
    case TileTypes.Magic:
      return "bg-yellow-700";
    case TileTypes.CX:
      return "bg-green-600";
    case TileTypes.T:
      return "bg-yellow-500";
    case TileTypes.TDG:
      return "bg-yellow-200";
    default:
      return "bg-white";
  }
}

function tileToName(tile: Tile): React.JSX.Element {
  switch (tile.tileType) {
    case TileTypes.Empty:
      return <></>;
    case TileTypes.Qubit:
      return (
        <>
          Q<sub>{tile.id ?? ""}</sub>
        </>
      );
    case TileTypes.Magic:
      return (
        <>
          M<sub>{tile.id ?? ""}</sub>
        </>
      );
    case TileTypes.CX:
      if (tile.pathType === PathTypes.control)
        return (
          <>
            C<sub>{tile.id}</sub>
          </>
        );
      if (tile.pathType === PathTypes.target)
        return (
          <>
            T<sub>{tile.id}</sub>
          </>
        );
      return <>{tile.id}</>;
    case TileTypes.T:
      if (tile.pathType === PathTypes.control)
        return (
          <>
            C<sub>{tile.id}</sub>
          </>
        );
      return <>{tile.id}</>;
    case TileTypes.TDG:
      if (tile.pathType === PathTypes.control)
        return (
          <>
            C<sub>{tile.id}</sub>
          </>
        );
      return <>{tile.id}</>;
    default:
      return <></>;
  }
}

const TileElement: React.FC<TileProperties> = ({ tile, key }) => {
  return (
    <>
      <div
        key={key}
        className={`flex items-center justify-center w-full aspect-square 
                ${tileToColor(tile)} 
                text-black text-lg font-bold shadow-md border-2 border-black`}
      >
        {tileToName(tile)}
      </div>
    </>
  );
};

export default TileElement;
