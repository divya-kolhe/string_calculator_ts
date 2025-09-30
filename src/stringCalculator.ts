export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    // default separators: comma or newline
    const parts = numbers.split(/,|\n/).map(p => p.trim()).filter(p => p.length > 0);
    
    
    const nums = parts.map(p => {
    const n = parseInt(p, 10);
    if (isNaN(n)) throw new Error(`Invalid number: '${p}'`);
    return n;
    });
    
    
    return nums.reduce((s, v) => s + v, 0);
  }
}
