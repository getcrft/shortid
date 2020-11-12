const { customAlphabet } = require('nanoid');
const fn = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 14);

// We add "a" to every id to make sure its js prop compat
const shortid = () => `a${fn()}`;

module.exports = shortid;
