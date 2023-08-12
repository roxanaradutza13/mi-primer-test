export const add = (a, b) => {
  return a + b;
}

export const sub = (a, b) => {
  return a - b;
}

export const mul = (a, b) => {
  return a * b;
}

export const div = (a, b) => {
  if(a === 0 || b === 0) return 0;
  return a / b;
}

export const mod = (a, b) => {
  if(a === 0 || b === 0) return 0;
  return a % b ;
}