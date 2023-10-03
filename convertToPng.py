from PIL import Image

input_tiff_file = r"/Users/nicoleyap/Documents/GitHub/FRDC/backend_temp/raw_18Dec2020_result.tif"
output_png_file = r"/Users/nicoleyap/Documents/GitHub/FRDC/backend_temp/hello.png"

image = Image.open(input_tiff_file)
# out = image.convert("RGB")
image.save(output_png_file, dpi=(300,300), format="PNG")

print(f"TIFF file '{input_tiff_file}' converted to PNG: '{output_png_file}'")
