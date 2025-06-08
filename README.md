# humanly-date

A lightweight JavaScript library for converting dates into human-readable relative time strings, such as "2 days ago" or "3 months remaining". It supports various input formats (Date objects or ISO strings) and provides a simple, intuitive API for formatting dates relative to the current time.

## Installation

Install the package via npm:

```bash
npm install humanly-date
```

## Usage

Import and use the `humanlyDate` function in your JavaScript or Node.js project:

```javascript
const humanlyDate = require("humanly-date");

// Current date: 2025-06-08T16:39:00+05:45
console.log(humanlyDate("2025-06-09")); // Output: "1 day remaining"
console.log(humanlyDate("2025-06-07")); // Output: "yesterday"
console.log(humanlyDate(new Date("2025-06-08T16:00:00"))); // Output: "39 minutes ago"
console.log(humanlyDate("2024-06-08")); // Output: "1 year ago"
console.log(humanlyDate("invalid")); // Output: "Invalid date"
```

### Input Formats

- **Date Object**: Pass a JavaScript `Date` object.
- **String**: ISO date strings (e.g., `2025-06-08`, `2025-06-08T14:30:00Z`) or partial ISO strings (e.g., `2025-06-08 14:30:00`).
- If the input is invalid or missing, the function returns `"Invalid date"`.

### Output

The function returns a human-readable string based on the time difference from now:

- Seconds (< 60s): e.g., "just a minute ago" or "in a few seconds"
- Minutes (< 60m): e.g., "5 minutes ago" or "5 minutes remaining"
- Hours (< 24h): e.g., "3 hours ago" or "3 hours remaining"
- Days (< 30d): e.g., "yesterday" or "2 days remaining"
- Months (< 12m): e.g., "2 months ago" or "2 months remaining"
- Years (≥ 12m): e.g., "1 year ago" or "1 year remaining"

## Features

- **Lightweight**: No external dependencies.
- **Flexible Input**: Supports both Date objects and ISO-like strings.
- **Relative Time Formatting**: Uses `Intl.RelativeTimeFormat` for natural language output in English.
- **Future and Past**: Handles both past and future dates with appropriate phrasing.
- **Robust Error Handling**: Returns "Invalid date" for invalid inputs.

## Example

```javascript
const humanlyDate = require("humanly-date");

const now = new Date();
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

console.log(humanlyDate(yesterday)); // Output: "yesterday"
console.log(humanlyDate(tomorrow)); // Output: "1 day remaining"
console.log(humanlyDate("2025-12-25T10:00:00")); // Output: "6 months remaining"
```

## API

### `humanlyDate(inputDate)`

- **inputDate**: A `Date` object or a string representing a date (ISO format or similar).
- **Returns**: A string describing the relative time (e.g., "2 hours ago", "3 days remaining", or "Invalid date").

## Requirements

- Node.js 12 or higher (for `Intl.RelativeTimeFormat` support).
- Works in modern browsers with no additional polyfills.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/username/humanly-date).

## Author

[Your Name]

## Issues

Report bugs or suggest features on the [GitHub Issues page](https://github.com/username/humanly-date/issues).
