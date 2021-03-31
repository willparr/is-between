# is-between

Created: Mar 31, 2021 11:35 AM

# is-num-between

- Package for determining whether a number is between `min` and `max` with an `inclusive` flag for extra clarity.

# Installation

Install with npm:
```bash
$ npm install is-num-between
```

```bash

```

# Usage

```tsx

import {isBetween} from 'is-num-between'

isBetween(1, 1, 3, true) //true

isBetween(1, 1, 3) //false

isBetween(2, 1, 3) //true

```

# API Reference

`isBetween(value, min, max, inclusive): boolean`

Returns if the value is between the min and max. 

| Argument  | Type    | Description                                             |
|-----------|---------|---------------------------------------------------------|
| value     | number  | Value to be tested if it falls within the range.        |
| min       | number  | The minimum of the range.                               |
| max       | number  | The maximum of the range                                |
| inclusive | boolean | Determines if the value can be equal to the min or max. |

