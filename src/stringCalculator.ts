export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    // If there's no comma or newline, try parse as single number
    if (!numbers.includes(',') && !numbers.includes('\n')) {
      const n = parseInt(numbers, 10);
      if (isNaN(n)) throw new Error(`Invalid number: '${numbers}'`);
      return n;
    }
    
    // Split by comma for now
    const parts = numbers.split(',').map(p => p.trim()).filter(p => p.length > 0);
    const nums = parts.map(p => {
    const n = parseInt(p, 10);
    if (isNaN(n)) throw new Error(`Invalid number: '${p}'`);
    return n;
    });
    
    return nums.reduce((s, v) => s + v, 0);
  }
}
