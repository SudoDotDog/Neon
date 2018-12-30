# Paths
webpack_build := webpack/webpack.config.js
webpack_dev := webpack/webpack.dev.js

# NPX functions
ifeq ($(OS), Windows_NT)
	tsc := .\node_modules\.bin\tsc
	mocha := .\node_modules\.bin\mocha
	webpack := .\node_modules\.bin\webpack
	webpack_dev_server := .\node_modules\.bin\webpack-dev-server

	start_storybook := .\node_modules\.bin\start-storybook
else
	tsc := node_modules/.bin/tsc
	mocha := node_modules/.bin/mocha
	webpack := node_modules/.bin/webpack
	webpack_dev_server := node_modules/.bin/webpack-dev-server

	start_storybook := node_modules/.bin/start-storybook
endif

main: run

run:
	@echo "[INFO] Starting development"
	@$(webpack_dev_server) --config $(webpack_dev)

build:
	@echo "[INFO] Starting build"
	@$(webpack) --config $(webpack_build)

sb:
	@echo "[INFO] Starting storybook"
	@$(start_storybook) -p 9001 -c storybook

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
	@rm -rf .nyc_output
	@rm -rf coverage
endif
