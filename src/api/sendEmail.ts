// Define the interface for email data
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

/**
 * Frontend email sending function - in a production environment, 
 * this would send the data to a backend API endpoint.
 * For now, we'll simulate a successful send.
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  const { name, email, phone, company, service, message } = data;
  
  // Format service name
  const serviceName = serviceMap[service] || 'Not specified';
  
  // Log the email data for demonstration purposes
  console.log('Email would be sent with:', {
    name,
    email,
    phone: phone || 'Not provided',
    company: company || 'Not provided',
    service: serviceName,
    message
  });
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real implementation, we would make an API call to a server endpoint:
  // const response = await fetch('/api/send-email', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // });
  // 
  // if (!response.ok) {
  //   throw new Error('Failed to send message');
  // }
  
  // For demonstration, we'll just simulate a successful send
  return;
}; 