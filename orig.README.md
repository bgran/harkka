# natlibfi developer test
1. This package exports a function in index.js which takes a [MarcRecord](https://www.npmjs.com/package/@natlibfi/marc-record) object as a parameter and optional second object parameter for options
  - The function returns an array of strings generated from subfields of each data field. The strings have the following format: `code:separator:value`. Here code is a subfield code, value is a subfield value and separator is a string which defaults to `:`.
2. Implement the function & the second test case. Test fixtures for the second case are already included.
3. Feel free to make modifications to existing code as you see fit.

BONUS: (optional)
1. Push this to your github
2. Do git pushes to update as you go
3. Add github action workflow that:
  a. Audits npm packages
  b. Runs unit tests
  c. Builds code