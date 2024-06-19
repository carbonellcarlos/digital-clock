import React from 'react'
import ClockPiece from './ClockPiece'

const numbersAngles = [
  [
    [
      [90, 180],
      [90, 270],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 180],
      [90, 180],
      [180, 270],
      [0, 180],
    ],
    [
      [0, 180],
      [0, 180],
      [0, 180],
      [0, 180],
    ],
    [
      [0, 180],
      [0, 180],
      [0, 180],
      [0, 180],
    ],
    [
      [0, 180],
      [0, 90],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 90],
      [90, 270],
      [90, 270],
      [0, 270],
    ],
  ],
  [
    [
      [90, 180],
      [90, 270],
      [180, 270],
      [225, 225],
    ],
    [
      [0, 90],
      [180, 270],
      [0, 180],
      [225, 225],
    ],
    [
      [225, 225],
      [0, 180],
      [0, 180],
      [225, 225],
    ],
    [
      [225, 225],
      [0, 180],
      [0, 180],
      [225, 225],
    ],
    [
      [90, 180],
      [0, 270],
      [0, 90],
      [180, 270],
    ],
    [
      [0, 90],
      [90, 270],
      [90, 270],
      [0, 270],
    ],
  ],
  [
    [
      [90, 180],
      [90, 270],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 90],
      [90, 270],
      [180, 270],
      [0, 180],
    ],
    [
      [90, 180],
      [90, 270],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 180],
      [90, 180],
      [90, 270],
      [0, 270],
    ],
    [
      [0, 180],
      [0, 90],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 90],
      [90, 270],
      [90, 270],
      [0, 270],
    ],
  ],
  [
    [
      [90, 180],
      [90, 270],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 90],
      [90, 270],
      [180, 270],
      [0, 180],
    ],
    [
      [90, 180],
      [90, 270],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 90],
      [90, 270],
      [180, 270],
      [0, 180],
    ],
    [
      [90, 180],
      [90, 270],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 90],
      [90, 270],
      [90, 270],
      [0, 270],
    ],
  ],
  [
    [
      [90, 180],
      [180, 270],
      [90, 180],
      [180, 270],
    ],
    [
      [0, 180],
      [0, 180],
      [0, 180],
      [0, 180],
    ],
    [
      [0, 180],
      [0, 90],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 90],
      [90, 270],
      [180, 270],
      [0, 180],
    ],
    [
      [225, 225],
      [225, 225],
      [0, 180],
      [0, 180],
    ],
    [
      [225, 225],
      [225, 225],
      [0, 90],
      [0, 270],
    ],
  ],
  [
    [
      [90, 180],
      [90, 270],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 180],
      [90, 180],
      [90, 270],
      [0, 270],
    ],
    [
      [0, 180],
      [0, 90],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 90],
      [90, 270],
      [180, 270],
      [0, 180],
    ],
    [
      [90, 180],
      [90, 270],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 90],
      [90, 270],
      [90, 270],
      [0, 270],
    ],
  ],
  [
    [
      [90, 180],
      [90, 270],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 180],
      [90, 180],
      [90, 270],
      [0, 270],
    ],
    [
      [0, 180],
      [0, 90],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 180],
      [90, 180],
      [180, 270],
      [0, 180],
    ],
    [
      [0, 180],
      [0, 90],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 90],
      [90, 270],
      [90, 270],
      [0, 270],
    ],
  ],
  [
    [
      [90, 180],
      [90, 270],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 90],
      [90, 270],
      [180, 270],
      [0, 180],
    ],
    [
      [225, 225],
      [225, 225],
      [0, 225],
      [0, 225],
    ],
    [
      [225, 225],
      [45, 180],
      [45, 180],
      [225, 225],
    ],
    [
      [225, 225],
      [0, 180],
      [0, 180],
      [225, 225],
    ],
    [
      [225, 225],
      [0, 90],
      [0, 270],
      [225, 225],
    ],
  ],
  [
    [
      [90, 180],
      [90, 270],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 180],
      [90, 180],
      [180, 270],
      [0, 180],
    ],
    [
      [0, 135],
      [0, 90],
      [0, 270],
      [0, 225],
    ],
    [
      [45, 180],
      [90, 180],
      [180, 270],
      [180, 315],
    ],
    [
      [0, 180],
      [0, 90],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 90],
      [90, 270],
      [90, 270],
      [0, 270],
    ],
  ],
  [
    [
      [90, 180],
      [90, 270],
      [90, 270],
      [180, 270],
    ],
    [
      [0, 180],
      [90, 180],
      [180, 270],
      [0, 180],
    ],
    [
      [0, 180],
      [0, 90],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 90],
      [90, 270],
      [180, 270],
      [0, 180],
    ],
    [
      [90, 180],
      [90, 270],
      [0, 270],
      [0, 180],
    ],
    [
      [0, 90],
      [90, 270],
      [90, 270],
      [0, 270],
    ],
  ],
]

export default function ({ number }) {
  return (
    <div className="digit">
      {numbersAngles[number].flatMap((rowAngles, i) =>
        rowAngles.map(([angle1, angle2], j) => (
          <ClockPiece
            className="grid-item"
            key={i * rowAngles.length + j}
            angle1={angle1}
            angle2={angle2}
          />
        ))
      )}
    </div>
  )
}
