#!/bin/bash

# mkdir -p $2;

echo "Received input movie: $1";

output="public/screencaps/$2"
outputmov="$output.mp4"
outputimg="$output.jpg"

echo "Creating output movie: $outputmov"
echo "Creating output image: $outputimg"

# from https://www.shellhacks.com/yes-no-bash-script-prompt-confirmation/
read -p "Would you like to proceed [y/n]? " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

mkdir -p "$(dirname "$output")"

# Run conversions
echo "Compressing movie"
ffmpeg -i "$1" -strict 2 -c:v libx264 -crf 19 -level 3.1 -preset slow -tune stillimage -an "$outputmov"

echo "Creating still frame"
ffmpeg -i "$outputmov" -vframes 1 -f image2 "$outputimg"

echo "Done!"