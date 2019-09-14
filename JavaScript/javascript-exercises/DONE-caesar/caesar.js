function caesar(string, shift) {
	return string.split("").map(char => shiftChar(char, shift)).join("")
}

const codeSet = asciiCode => (asciiCode < 97 ? 65 : 97)

function mod(n,m) {
	return (n % m + m) % m
}

function shiftChar(char, shift) {
	const asciiCode = char.charCodeAt()

	if((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)) {
		return String.fromCharCode(mod(asciiCode + shift - codeSet(asciiCode), 26) + codeSet(asciiCode))
	}

	return char
}
module.exports = caesar
