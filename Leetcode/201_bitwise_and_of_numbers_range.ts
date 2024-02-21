function rangeBitwiseAnd(left: number, right: number): number {
  let shifts = 0;

  while (left < right) {
    left >>= 1;
    right >>= 1;
    shifts++;
  }

  return left << shifts;
}
