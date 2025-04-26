import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello OGathon ;)';
  }

  /**
   * Generamos todas las combinaciones posibles de A y B para llegar a la distancia deseada.
   * Solo es de prueba, puede desboradar la momoria con valores grandes.
   * @param distance
   * @returns
   */
  virusPropagation(distance: number): string[] {
    let result: string[] = [];
    function helper(a: number, b: number, pattern: string) {
      if (a + b === distance && a <= distance && b <= distance) {
        result.push(pattern);
        return;
      } else if (a + b > distance || a > distance || b > distance) {
        return;
      }
      helper(a + 1, b, pattern + 'A');
      helper(a, b + 2, pattern + 'B');
    }
    helper(0, 0, '');
    return result;
  }

  /**
   * Solución solo teniendo en cuenta los patrones
   * @param distance
   * @returns
   */
  countVirusPropagation(distance: number): bigint {
    let memo: bigint[] = new Array(distance + 1).fill(0n); // Nota: 0n es BigInt
    memo[0] = 1n; // 1 forma de llegar a 0
    for (let i = 1; i <= distance; i++) {
      memo[i] += memo[i - 1] || 0n; // paso A
      memo[i] += memo[i - 2] || 0n; // paso B
    }
    return memo[distance];
  }
}
