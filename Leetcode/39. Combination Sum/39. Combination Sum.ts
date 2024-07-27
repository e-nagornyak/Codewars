function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);  // Sort the candidates to optimize
    const result: number[][] = [];

    function backtrack(start: number, target: number, path: number[]): void {
        if (target === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > target) break;

            path.push(candidates[i]);
            backtrack(i, target - candidates[i], path);
            path.pop();
        }
    }

    backtrack(0, target, []);
    return result;
}
