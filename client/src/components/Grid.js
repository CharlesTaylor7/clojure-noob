import React, { useState } from "react"
import "./Grid.css"
import { Cell } from "./Cell"

export const Grid = () => {
  return (
    <div className="grid">
      {Array(81)
        .fill()
        .map((_, i) => {
          return (
            <Cell
              key={`cell-${i}`}
            />
          )
        })
      }
    </div>
  )
};
