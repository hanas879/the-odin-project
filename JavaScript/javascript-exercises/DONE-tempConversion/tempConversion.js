const ftoc = function(f) {
  let temp = Math.round((f - 32) * (5 / 9) * 10) / 10
  return temp
}

const ctof = function(c) {
  return temp = Math.round((c * 9 / 5 + 32) * 10) / 10
}

module.exports = {
  ftoc,
  ctof
}
