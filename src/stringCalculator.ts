export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter: string | null = null;
    let numsSection = numbers;

    // Handle custom delimiter at beginning: //{delimiter}\n
    if (numbers.startsWith("//")) {
      const headerEnd = numbers.indexOf("\n");
      if (headerEnd === -1) {
        throw new Error("Invalid input: missing newline after delimiter declaration");
      }
      delimiter = numbers.substring(2, headerEnd);
      numsSection = numbers.substring(headerEnd + 1);
    }

    let tokens: string[];
    if (delimiter) {
      tokens = numsSection.split(delimiter);
    } else {
      // Default delimiters: comma or newline
      tokens = numsSection.split(/,|\n/);
    }

    const negatives: number[] = [];
    const nums: number[] = [];

    for (const token of tokens.map(t => t.trim()).filter(t => t.length > 0)) {
      const n = parseInt(token, 10);
      if (isNaN(n)) {
        throw new Error(`Invalid number: '${token}'`);
      }
      if (n < 0) {
        negatives.push(n);
      }
      nums.push(n);
    }

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return nums.reduce((sum, n) => sum + n, 0);
  }
}

