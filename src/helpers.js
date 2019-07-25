function isSame(prev, next) {
  const comp = Object.keys(prev).map(prop => {
    const pp = prev[prop]
    const np = next[prop]

    return [prop, pp, np, pp === np]
  })
  console.table(comp)
  return comp.every(arr => arr[arr.length - 1])
}

export { isSame }
