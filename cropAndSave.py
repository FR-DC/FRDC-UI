from PIL import Image
import pandas as pd 

# Load the image
image_path = 'backend_temp/raw_18Dec2020_result.tif'  # Replace with your image path
image = Image.open(image_path)

# Bounding box coordinates (x, y, width, height)
bbox_data = pd.read_csv('/Users/nicoleyap/Documents/GitHub/FRDC/backend_temp/bb_data/18Dec2020_filtered_bounds.csv')


# Crop the image based on the bounding box
for i, row in bbox_data.iterrows():
	bbox = (row['minc'], row['minr'], row['maxc'], row['maxr'])
	cropped_image = image.crop(bbox)
# Save the cropped image
	cropped_image.save(f'/Users/nicoleyap/Documents/GitHub/FRDC/backend_temp/dec_images_casuarina/{row["uuid"]}.png')  # Replace with desired output path