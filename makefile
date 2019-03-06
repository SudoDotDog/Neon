# Paths
tsconfig_build_path := typescript/tsconfig.build.json
storybook_config_path := .storybook

# Variables
storybook_port := 8081

# NPX functions
tsc := node_modules/.bin/tsc
ts_node := node_modules/.bin/ts-node

build_storybook := node_modules/.bin/build-storybook
start_storybook := node_modules/.bin/start-storybook
mocha := node_modules/.bin/mocha


.IGNORE: clean-linux

main: run

b: build
c: clean
i: install
p: publish
r: run
s: storybook
t: tests

run:
	@echo "[INFO] Starting storybook"
	@NODE_ENV=development $(start_storybook) -p $(storybook_port) -c $(storybook_config_path)

build:
	@echo "[INFO] Building for release"
	@NODE_ENV=production $(tsc) --p $(tsconfig_build_path)

storybook:
	@echo "[INFO] Building storybook"
	@NODE_ENV=production $(build_storybook)

publish: install tests license build
	@echo "[INFO] Publishing package"
	@cd app && npm publish --access=public

tests:
	@echo "[INFO] Testing with Mocha"
	@NODE_ENV=test $(mocha)

cov:
	@echo "[INFO] Testing with Nyc and Mocha"
	@NODE_ENV=test \
	nyc $(mocha)

install:
	@echo "[INFO] Installing dev Dependencies"
	@yarn install --production=false

install-prod:
	@echo "[INFO] Installing Dependencies"
	@yarn install --production=true

license: clean
	@echo "[INFO] Sign files"
	@NODE_ENV=development $(ts_node) script/license.ts

clean: clean-linux
	@echo "[INFO] Cleaning release files"
	@NODE_ENV=development $(ts_node) script/clean-app.ts

clean-linux:
	@echo "[INFO] Cleaning dist files"
	@rm -rf dist
	@rm -rf build
	@rm -rf .nyc_output
	@rm -rf coverage
	@rm -rf storybook-static
