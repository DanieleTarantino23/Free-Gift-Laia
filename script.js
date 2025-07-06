<script>
// Get parameters from URL (these would be encoded in the QR code)
const urlParams = new URLSearchParams(window.location.search);
const senderEmail = urlParams.get('sender') || 'sender@example.com';
const letterID = urlParams.get('id') || 'LETTER-' + Date.now();
const recipientName = urlParams.get('name') || 'Recipient';
const letterSubject = urlParams.get('subject') || 'Letter Confirmation';

const loading = document.getElementById('loading');
const status = document.getElementById('status');
const sendBtn = document.getElementById('sendConfirmation');
const manualBtn = document.getElementById('manualEmail');

function showStatus(message, type) {
    status.textContent = message;
    status.className = `status ${type}`;
    status.style.display = 'block';
    
    setTimeout(() => {
        status.style.display = 'none';
    }, 5000);
}

function sendConfirmationEmail() {
    loading.classList.add('active');
    sendBtn.disabled = true;
    
    // Simulate sending email (in real implementation, this would call your backend)
    setTimeout(() => {
        loading.classList.remove('active');
        
        // Create the confirmation email content
        const currentDate = new Date().toLocaleString();
        const confirmationSubject = `Letter Received Confirmation - ${letterSubject}`;
        const confirmationBody = `Hello,

This is an automated confirmation that your letter has been received and read.

Details:
- Letter ID: ${letterID}
- Recipient: ${recipientName}
- Confirmed at: ${currentDate}
- User Agent: ${navigator.userAgent}

The QR code in your letter was scanned successfully, confirming delivery.

This is an automated message from the Letter Feedback System.`;
        
        // Open email client with pre-filled content
        const mailtoLink = `mailto:${senderEmail}?subject=${encodeURIComponent(confirmationSubject)}&body=${encodeURIComponent(confirmationBody)}`;
        window.location.href = mailtoLink;
        
        showStatus('Confirmation email opened in your default email client!', 'success');
        sendBtn.textContent = '✅ Confirmation Sent';
        sendBtn.disabled = false;
    }, 2000);
}

function sendManualEmail() {
    const subject = `Manual Letter Confirmation - ${letterSubject}`;
    const body = `Hello,

I'm writing to confirm that I received your letter (ID: ${letterID}).

Thank you for including the QR code feedback system - it's a great way to confirm delivery!

Best regards,
${recipientName}`;
    
    const mailtoLink = `mailto:${senderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    showStatus('Manual email opened in your default email client!', 'success');
}

// Auto-send confirmation after a short delay (optional - uncomment to enable)
// setTimeout(() => {
//     if (senderEmail && senderEmail !== 'sender@example.com') {
//         sendConfirmationEmail();
//     }
// }, 3000);

// Event listeners
sendBtn.addEventListener('click', sendConfirmationEmail);
manualBtn.addEventListener('click', sendManualEmail);

// Update page content based on URL parameters
if (recipientName && recipientName !== 'Recipient') {
    document.querySelector('.header p').textContent = `Thank you ${recipientName} for scanning the QR code. This confirms you've received the letter.`;
}

// Log analytics (optional)
console.log('Letter feedback page loaded', {
    letterID: letterID,
    senderEmail: senderEmail,
    recipientName: recipientName,
    timestamp: new Date().toISOString()
});
</script>
