// https://www.hackerrank.com/challenges/grading/submissions/code/264594395

'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function round5(n: number) : number
{
    return Math.ceil(n/5)*5;
}

function gradingStudents(grades: number[]): number[] {
    // Write your code here
    const response = grades.map((n: number) => {
        const r = n % 5;
        const r5 = round5(n);
        return (n < 38 || r === 0) || !((r5 - n) < 3) ? n :r5;
    })
    
    return response;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const gradesCount: number = parseInt(readLine().trim(), 10);

    let grades: number[] = [];

    for (let i: number = 0; i < gradesCount; i++) {
        const gradesItem: number = parseInt(readLine().trim(), 10);

        grades.push(gradesItem);
    }

    const result: number[] = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
