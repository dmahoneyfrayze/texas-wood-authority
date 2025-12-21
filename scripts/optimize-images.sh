#!/bin/bash

# Directory containing raw images
SOURCE_DIR="imageholder"
# Directory for optimized output
DEST_DIR="public/images"

mkdir -p "$DEST_DIR"

echo "Starting image optimization..."

for img in "$SOURCE_DIR"/*.png; do
    [ -e "$img" ] || continue
    
    # Get basename without extension
    filename=$(basename -- "$img")
    name="${filename%.*}"
    
    # Slugify the name:
    # 1. Remove "LiveEdgeGuide " prefix to keep names short
    # 2. Lowercase
    # 3. Replace spaces and special chars with hyphens
    # 4. Remove duplicate hyphens
    slug=$(echo "$name" | sed 's/LiveEdgeGuide //g' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-//;s/-$//')
    
    output_path="$DEST_DIR/$slug.webp"
    
    echo "Processing: $filename -> $slug.webp"
    
    # ffmpeg command:
    # -y: overwrite output
    # -i: input file
    # -vf: scale filter (maintaining aspect ratio, max width 1920)
    # -q:v 75: quality 75 (good balance for WebP)
    ffmpeg -y -v error -i "$img" -vf "scale='min(1920,iw)':-1" -q:v 75 "$output_path"
done

echo "Optimization complete!"
