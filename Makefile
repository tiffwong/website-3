
all: out.js

main.compiled.js: main.js
	node_modules/.bin/babel -o $@ $^

out.external.js: main.compiled.js
	node_modules/.bin/browserify -x react -x react-dom -o $@ $^

out.js: main.compiled.js
	node_modules/.bin/browserify -o $@ $^

