'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
import { WriteStream, createWriteStream } from "fs";

const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    
    let cont_a = 0
    let cont_o = 0
    
    // Write your code here
    const apples_d = apples.map((apple: number) => {
        return a + apple;
    })
    const oranges_d = oranges.map((orange: number) => {
        return b + orange;
    })

    const inTheRange = (fruit_range: number) => {
        return fruit_range >= s && fruit_range <= t
    }
    
    apples_d.map(a => {
        if(inTheRange(a)) cont_a++;
    })
    
    oranges_d.map(o => {
        if(inTheRange(o)) cont_o++;
    })
    
    ws.write(cont_a + "\n" + cont_o);

    ws.end();
}

function main() {
    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const s: number = parseInt(firstMultipleInput[0], 10);

    const t: number = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const a: number = parseInt(secondMultipleInput[0], 10);

    const b: number = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const m: number = parseInt(thirdMultipleInput[0], 10);

    const n: number = parseInt(thirdMultipleInput[1], 10);

    const apples: number[] = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges: number[] = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
