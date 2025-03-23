import nodemailer from 'nodemailer';

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

// Map service values to display names
const serviceMap: Record<string, string> = {
  ecommerce: 'E-commerce Development',
  healthcare: 'Healthcare Website/App',
  education: 'Educational Course Websites & LMS',
  realestate: 'Real Estate Website/App',
  lawfirm: 'Law Firm Website',
  nonprofit: 'Non-profit Website',
  other: 'Other Services'
};

export const sendEmail = async (data: EmailData): Promise<void> => {
  const { name, email, phone, company, service, message } = data;
  
  // Get SMTP configuration from environment variables
  const host = import.meta.env.VITE_SMTP_HOST;
  const port = import.meta.env.VITE_SMTP_PORT;
  const user = import.meta.env.VITE_SMTP_USER;
  const pass = import.meta.env.VITE_SMTP_PASS;
  const emailTo = import.meta.env.VITE_EMAIL_TO;
  
  // Validate SMTP configuration
  if (!host || !port || !user || !pass || !emailTo) {
    console.error('Missing SMTP configuration');
    throw new Error('Email service is not configured properly. Please contact the administrator.');
  }
  
  // Create email transporter
  const transporter = nodemailer.createTransport({
    host,
    port: parseInt(port),
    secure: false, // true for 465, false for other ports
    auth: {
      user,
      pass
    }
  });
  
  // Format service name
  const serviceName = serviceMap[service] || 'Not specified';
  
  // Format phone number (or provide a placeholder if empty)
  const phoneDisplay = phone || 'Not provided';
  
  // Format company name (or provide a placeholder if empty)
  const companyDisplay = company || 'Not provided';
  
  // Create HTML content for the email
  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phoneDisplay}</p>
    <p><strong>Company:</strong> ${companyDisplay}</p>
    <p><strong>Service:</strong> ${serviceName}</p>
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;
  
  // Create plain text content for email clients that don't support HTML
  const textContent = `
    New Contact Form Submission
    
    Name: ${name}
    Email: ${email}
    Phone: ${phoneDisplay}
    Company: ${companyDisplay}
    Service: ${serviceName}
    
    Message:
    ${message}
  `;
  
  // Set up email details
  const mailOptions = {
    from: `"BMCrafts Website" <${user}>`,
    to: emailTo,
    replyTo: email,
    subject: `New Contact Form: ${serviceName} Inquiry from ${name}`,
    text: textContent,
    html: htmlContent
  };
  
  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send your message. Please try again later.');
  }
}; 