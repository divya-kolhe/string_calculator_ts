export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    // If there's no comma or newline, try parse as single number
    if (!numbers.includes(',') && !numbers.includes('\n')) {
      const n = parseInt(numbers, 10);
      if (isNaN(n)) throw new Error(`Invalid number: '${numbers}'`);
      return n;
    }
    
    return 0; 
  }
}
