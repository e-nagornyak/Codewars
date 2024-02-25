function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  const charMap = {};

  for (let start = 0, end = 0; end < s.length; end++) {
    const currentChar = s[end];
    if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    }
    charMap[currentChar] = end;
    length = Math.max(length, end - start + 1);
  }

  return length;
}
