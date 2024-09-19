frontend-install:
	@{ \
		pushd ./spa ;\
		npm install ;\
		popd ;\
	}

frontend-build:
	@{ \
		pushd ./spa ;\
		npm run build ;\
		popd ;\
	}

frontend-start: frontend-install
	cd spa && npm run start &

# Backend commands
backend-start:
	@{ \
		pushd ./backend ;\
		poetry install ;\
		poetry run uvicorn main:app --reload ;\
		popd ;\
	}
	
# Combined commands
start: frontend-install frontend-build backend-start