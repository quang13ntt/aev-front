// Grid: 13 columns (1-13) x 10 rows (1-10)
// Each seat object can have: type, booked (true/false), mergeWith (for sweetbox spanning)
// null represents empty cells
// mergeWith: 'next' means this seat merges with the next one (sweetbox left part)
// mergeWith: 'prev' means this seat is merged with previous one (sweetbox right part)

export const seatLayout = [
  // Row 1
  [null, null, { type: 'regular' }, { type: 'regular' }, null, null, { type: 'wheelchair' }, { type: 'wheelchair' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }],
  // Row 2
  [null, null, { type: 'regular' }, { type: 'regular' }, null, null, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }],
  // Row 3
  [null, null, { type: 'regular' }, { type: 'regular' }, null, null, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }, { type: 'regular' }],
  // Row 4
  [null, null, { type: 'vip' }, { type: 'vip' }, null, null, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }],
  // Row 5
  [null, null, { type: 'vip' }, { type: 'vip' }, null, null, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip' }, { type: 'vip' }],
  // Row 6
  [null, null, { type: 'vip' }, { type: 'vip' }, null, null, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip' }, { type: 'vip' }],
  // Row 7
  [null, null, { type: 'vip' }, { type: 'vip' }, null, null, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip' }, { type: 'vip' }],
  // Row 8
  [{ type: 'vip' }, { type: 'vip' }, { type: 'vip' }, { type: 'vip' }, null, null, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip', booked: true }, { type: 'vip' }, { type: 'vip' }, { type: 'vip' }, { type: 'vip' }],
  // Row 9
  [{ type: 'supreme' }, { type: 'supreme' }, { type: 'supreme' }, { type: 'supreme' }, null, null, { type: 'supreme' }, { type: 'supreme' }, { type: 'supreme' }, { type: 'supreme' }, { type: 'supreme' }, null, null],
  // Row 10 - Sweet Box seats span 2 columns each (mergeWith marks the pairing)
  [
    { type: 'sweetbox', mergeWith: 'next' },
    { type: 'sweetbox', mergeWith: 'prev' },
    { type: 'sweetbox', mergeWith: 'next' },
    { type: 'sweetbox', mergeWith: 'prev' },
    { type: 'sweetbox', mergeWith: 'next' },
    { type: 'sweetbox', mergeWith: 'prev' },
    { type: 'sweetbox', mergeWith: 'next' },
    { type: 'sweetbox', mergeWith: 'prev' },
    { type: 'sweetbox', mergeWith: 'next' },
    { type: 'sweetbox', mergeWith: 'prev' },
    { type: 'sweetbox', mergeWith: 'next', booked: true },
    { type: 'sweetbox', mergeWith: 'prev', booked: true },
    null
  ]
];
