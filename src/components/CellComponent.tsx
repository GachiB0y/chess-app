import React from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}
export const CellComponent: React.FC<CellProps> = ({
  cell,
  selected,
  click,
}) => {
  return (
    <div
      onClick={() => click(cell)}
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      style={{ background: cell.avaiilable && cell.figure ? "green" : "" }}
    >
      {cell.avaiilable && !cell.figure && <div className={"available"} />}
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
};
