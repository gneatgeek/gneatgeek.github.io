js = javascript/*.js javascript/plugins/*.js

all: clean build

clean:
	@rm -f js/* css/*

compile-css:
	@sass styles/main.scss:css/gg.css --style expanded

compile-js:
	@cat $(js) > js/gg.js

compile: compile-css compile-js

build:
	@jshint $(js) --config .jshintrc
	@cat $(js) | uglifyjs -nc -o js/gg.js
	@sass styles/main.scss:css/gg.css --style compressed

.PHONY: clean compile compile-css compile-js build
