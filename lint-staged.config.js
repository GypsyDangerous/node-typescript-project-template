

module.exports = {
    "*.{json,yml,md}": ["prettier --no-config --write"],
    "**/*.ts": ["prettier --no-config --write", () => "npx tsc -p tsconfig.json --noEmit"]
}