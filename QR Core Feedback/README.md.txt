
# QR Letter Feedback System

A simple web-based system that allows you to get delivery confirmation for physical letters using QR codes.

## How It Works

1. **Create a QR code** with a URL containing your email and letter details
2. **Include the QR code** in your physical letter
3. **Recipient scans** the QR code with their phone
4. **Automatic email** is sent to you confirming they received the letter

## Setup Instructions

### 1. Host the Website
Upload all files to any web hosting service:
- GitHub Pages (free)
- Netlify (free)
- Your own web server

### 2. Create QR Code URLs
Format your URLs like this:
```
https://yourwebsite.com/?sender=your-email@example.com&id=LETTER001&name=John&subject=Important%20Letter
```

### 3. Generate QR Codes
Use any QR code generator (Google "QR code generator") to create QR codes from your URLs.

### 4. Print and Include
Print the QR code and include it in your letters with text like:
"Scan this QR code to confirm you received this letter"

## URL Parameters

- `sender`: Your email address (where confirmation will be sent)
- `id`: Unique letter identifier for tracking
- `name`: Recipient's name (optional)
- `subject`: Letter subject/description (optional)

## Example QR Code URLs

See `examples/example-qr-urls.txt` for ready-to-use examples.

## Files Structure

- `index.html`: Main feedback page
- `css/style.css`: Styling
- `js/script.js`: Functionality
- `examples/`: Example URLs and sample letter
- `assets/`: Icons and images

## Customization

You can easily customize:
- Colors and styling in `css/style.css`
- Email templates in `js/script.js`
- Page content in `index.html`

## Features

- ✅ Mobile-friendly responsive design
- ✅ Professional appearance
- ✅ Auto-opens default email client
- ✅ Customizable email templates
- ✅ Letter tracking with unique IDs
- ✅ Optional auto-send functionality
- ✅ Manual email option

## Browser Support

Works on all modern browsers and mobile devices.

## License

Free to use and modify for personal and commercial purposes.


