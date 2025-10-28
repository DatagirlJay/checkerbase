

class BaseChecker {
    static isBinary(str: string): boolean {
      return /^[01]+$/.test(str);
    }
  
    static isOctal(str: string): boolean {
      return /^[0-7]+$/.test(str);
    }
  
    static isDecimal(str: string): boolean {
      return /^\d+$/.test(str);
    }
  
    static isHexadecimal(str: string): boolean {
      return /^[0-9A-Fa-f]+$/.test(str);
    }
  
    static detectBase(str: string): string {
      if (this.isBinary(str)) return "Binary";
      if (this.isOctal(str)) return "Octal";
      if (this.isDecimal(str)) return "Decimal";
      if (this.isHexadecimal(str)) return "Hexadecimal";
      return "Invalid";
    }
  }
  
  // Example usage:
  const inputs = ["1010", "77", "12345", "1A3F", "89G"];
  
  for (const input of inputs) {
    console.log(`${input} → ${BaseChecker.detectBase(input)}`);
  }
  