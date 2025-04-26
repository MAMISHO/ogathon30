import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello OGathon ;)';
  }

  virusPropagation(distance: number): string[] {
    let result: string[] = [];
    function helper(a: number, b: number, pattern: string) {
      if (a + b === distance && a <= distance && b <= distance) {
        // If the sum of A and B steps equals to the given distance
        // And both are not more than the distance, add this combination to result array
        result.push(pattern);
        return;
      } else if (a + b > distance || a > distance || b > distance) {
        // If sum is over the distance or A and B are over the distance, stop recursion
        return;
      }
      // Recursive calls for next step by adding either 'A' or 'B' to pattern string
      helper(a + 1, b, pattern + 'A');
      helper(a, b + 2, pattern + 'B');
    }
    helper(0, 0, ''); // Start the recursion from A and B steps = 0
    return result;
  }

  countVirusPropagation(distance: number): number {
    let memo = new Array(distance + 1).fill(0);
    memo[0] = 1; // 1 forma de llegar a 0
    for (let i = 1; i <= distance; i++) {
      memo[i] += memo[i - 1] || 0; // paso A
      memo[i] += memo[i - 2] || 0; // paso B
    }
    return memo[distance];
  }
}
