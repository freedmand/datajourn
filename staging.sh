#!/bin/bash

vue build
echo '/*    /index.html   200' > dist/_redirects
netlifyctl deploy -C staging.toml -b dist