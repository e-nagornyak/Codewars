type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

export function argumentsLength(...args: JSONValue[]): number {
  return args?.length
}
