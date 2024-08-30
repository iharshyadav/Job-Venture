import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ success: false, message: 'No image provided' }, { status: 400 });
    }

    // Create the tmp directory if it doesn't exist
    const tempDir = path.join(__dirname, 'tmp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    // Save the base64 image to a temporary file
    const imageBuffer = Buffer.from(image.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
    const tempImagePath = path.join(tempDir, 'input_image.jpg');
    fs.writeFileSync(tempImagePath, imageBuffer);

    // Call the Python script to process the image
    const pythonScriptPath = path.join(process.cwd(), 'scripts', 'detect_focus.py');
    if (!fs.existsSync(pythonScriptPath)) {
      throw new Error(`Python script not found at ${pythonScriptPath}`);
    }
    const result = execSync(`python "${pythonScriptPath}" "${tempImagePath}"`).toString();

    // Delete the temporary image file
    fs.unlinkSync(tempImagePath);

    // Parse the result from the Python script
    const isFocused = result.trim() === 'focused';

    return NextResponse.json({ success: true, message: 'Image processed successfully', focused: isFocused });
  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}