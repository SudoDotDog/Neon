# Paths
tsconfig_build_path := typescript/tsconfig.build.json
storybook_config_path := .storybook

# Variables
storybook_port := 8081

# NPX functions
ifeq ($(OS), Windows_NT)
	tsc := .\node_modules\.bin\tsc
	mocha := .\node_modules\.bin\mocha

	build_storybook := .\node_modules\.bin\build-storybook
	start_storybook := .\node_modules\.bin\start-storybook
else
	tsc := node_modules/.bin/tsc
	mocha := node_modules/.bin/mocha

	build_storybook := node_modules/.bin/build-storybook
	start_storybook := node_modules/.bin/start-storybook
endif

main: run

run:
	@echo "[INFO] Starting storybook"
	@$(start_storybook) -p $(storybook_port) -c $(storybook_config_path)

build:
	@echo "[INFO] Building for release"
	@$(tsc) --p $(tsconfig_build_path)

storybook:
	@echo "[INFO] Building storybook"
	@$(build_storybook)

publish: install tests clean build
	@echo "[INFO] Publishing package"
	@cd app && npm publish --access=public

tests:
	@echo "[INFO] Testing with Mocha"
ifeq ($(OS), Windows_NT)
	@-setx NODE_ENV test
else
	@-export NODE_ENV=test
endif
	@$(mocha)

cov:
	@echo "[INFO] Testing with Nyc and Mocha"
ifeq ($(OS), Windows_NT)
	@-setx NODE_ENV test
else
	@-export NODE_ENV=test
endif
	@nyc $(mocha)

install:
	@echo "[INFO] Installing dev Dependencies"
	@yarn install --production=false

install-prod:
	@echo "[INFO] Installing Dependencies"
	@yarn install --production=true

clean:
ifeq ($(OS), Windows_NT)
	@echo "[INFO] Skipping"
else
	@echo "[INFO] Cleaning dist files"
	@rm -rf dist
	@rm -rf build
	@rm -rf .nyc_output
	@rm -rf coverage
	@rm -rf storybook-static
endif
