export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    let numsSection = numbers;
    let delimiterRegex: RegExp | null = null;
    
    
    if (numbers.startsWith('//')) {
    const headerEnd = numbers.indexOf('\n');
    if (headerEnd === -1) throw new Error('Invalid input: missing newline after delimiter declaration');
    const delim = numbers.substring(2, headerEnd);
    numsSection = numbers.substring(headerEnd + 1);
    // If a custom delimiter is provided, split using it literally (escape if needed)
    // We'll use split with a string so multi-character delimiters work.
    const parts = numsSection.split(delim).map(p => p.trim()).filter(p => p.length > 0);
    
    
    const nums = parts.map(p => {
    const n = parseInt(p, 10);
      if (isNaN(n)) throw new Error(`Invalid number: '${p}'`);
        return n;
      });
    
    
      return nums.reduce((s, v) => s + v, 0);
    }
    
    
    // Default behavior (comma or newline)
    const parts = numbers.split(/,|\n/).map(p => p.trim()).filter(p => p.length > 0);
    const nums = parts.map(p => {
    const n = parseInt(p, 10);
    if (isNaN(n)) throw new Error(`Invalid number: '${p}'`);
    return n;
  });


    return nums.reduce((s, v) => s + v, 0);
  }
}
