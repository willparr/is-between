export function isBetween(value: number, min: number, max: number, inclusive?: boolean): boolean {
  if(inclusive){
    return min <= value && value <= max
  }
  return min < value && value < max
}