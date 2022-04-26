#!/bin/bash

docker run --rm -it \
	-v $(pwd)/src:/map-app/src \
	-p 8080:8080 \
	myapp node src/backend.js
