export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let numsSection = numbers;
    let delimiters: string[] = [",", "\n"]; // default delimiters

    // Handle custom delimiter at beginning
    if (numbers.startsWith("//")) {
      const headerEnd = numbers.indexOf("\n");
      if (headerEnd === -1) {
        throw new Error("Invalid input: missing newline after delimiter declaration");
      }
      const header = numbers.substring(2, headerEnd);
      numsSection = numbers.substring(headerEnd + 1);

      // Check for [delim] format (any-length or multiple)
      const bracketMatches = header.match(/\[(.*?)\]/g);
      if (bracketMatches) {
        delimiters = bracketMatches.map(d => d.slice(1, -1));
      } else {
        // Single-char delimiter case like //;\n
        delimiters = [header];
      }
    }

    // Escape delimiters for regex and build splitter
    const escaped = delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const regex = new RegExp(escaped.join("|"), "g");

    const tokens = numsSection
      .split(regex)
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const negatives: number[] = [];
    const numerals: number[] = [];

    for (const token of tokens) {
      const n = parseInt(token, 10);
      if (isNaN(n)) {
        throw new Error(`Invalid number: '${token}'`);
      }
      if (n < 0) {
        negatives.push(n);
      }
      if (n <= 1000) {
        numerals.push(n);
      }
    }

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return numerals.reduce((sum, n) => sum + n, 0);
  }
}
