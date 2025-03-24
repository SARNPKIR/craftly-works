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
  
  // Format service name
  const serviceName = serviceMap[service] || 'Not specified';
  
  // Format phone number (or provide a placeholder if empty)
  const phoneDisplay = phone || 'Not provided';
  
  // Format company name (or provide a placeholder if empty)
  const companyDisplay = company || 'Not provided';
  
  // In a production environment, you would send this data to your backend API
  // For now, simulate a successful email send
  console.log('Email would be sent with data:', {
    name,
    email,
    phone: phoneDisplay,
    company: companyDisplay,
    service: serviceName,
    message
  });
  
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}; 