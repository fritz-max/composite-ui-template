docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3001 \
    -e CHOKIDAR_USEPOLLING=true \
    composite_template:dev