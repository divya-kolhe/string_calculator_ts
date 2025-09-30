export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    // Determine if we have a custom delimiter
    let numsSection = numbers;
    let parts: string[];
    
    
    if (numbers.startsWith('//')) {
    const headerEnd = numbers.indexOf('\n');

    if (headerEnd === -1) throw new Error('Invalid input: missing newline after delimiter declaration');
    const delim = numbers.substring(2, headerEnd);
    numsSection = numbers.substring(headerEnd + 1);
    parts = numsSection.split(delim);
    } else {
    parts = numbers.split(/,|\n/);
    }
    
    
    parts = parts.map(p => p.trim()).filter(p => p.length > 0);
    
    
    const negatives: number[] = [];
    const nums: number[] = [];
    
    
    for (const p of parts) {
      const n = parseInt(p, 10);
      if (isNaN(n)) throw new Error(`Invalid number: '${p}'`);
      if (n < 0) negatives.push(n);
        nums.push(n);
    }
    
    if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    
    
    return nums.reduce((s, v) => s + v, 0);
  }
}
