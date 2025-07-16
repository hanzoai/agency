// Email notification utility
// In production, this would integrate with an email service like SendGrid, AWS SES, etc.

interface EmailData {
  to: string[];
  subject: string;
  body: string;
  type: 'signup' | 'purchase' | 'redemption' | 'service_start';
}

export const sendEmailNotification = async (data: EmailData) => {
  // Simulate email sending
  console.log('📧 Email Notification Sent:');
  console.log('To:', data.to.join(', '));
  console.log('Subject:', data.subject);
  console.log('Body:', data.body);
  console.log('Type:', data.type);
  console.log('---');
  
  // In production, this would be an API call like:
  // await fetch('/api/send-email', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // });
  
  // Store notification in localStorage for demo purposes
  const notifications = JSON.parse(localStorage.getItem('emailNotifications') || '[]');
  notifications.push({
    ...data,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('emailNotifications', JSON.stringify(notifications));
};

export const notifyAdmins = {
  newSignup: (userEmail: string, userName: string) => {
    sendEmailNotification({
      to: ['a@hanzo.ai', 'z@hanzo.ai'],
      subject: 'New User Signup - Hanzo Agency',
      body: `A new user has signed up:
      
Name: ${userName}
Email: ${userEmail}
Time: ${new Date().toLocaleString()}

Please log in to the admin dashboard to view details.`,
      type: 'signup'
    });
  },
  
  creditsPurchased: (userEmail: string, credits: number, amount: number) => {
    sendEmailNotification({
      to: ['a@hanzo.ai', 'z@hanzo.ai'],
      subject: 'New Credit Purchase - Hanzo Agency',
      body: `A user has purchased credits:
      
User: ${userEmail}
Credits: ${credits}
Amount: $${amount}
Time: ${new Date().toLocaleString()}

Please log in to the admin dashboard to view details.`,
      type: 'purchase'
    });
  },
  
  serviceRedeemed: (userEmail: string, service: string, credits: number) => {
    sendEmailNotification({
      to: ['a@hanzo.ai', 'z@hanzo.ai'],
      subject: 'Service Redeemed - Hanzo Agency',
      body: `A user has redeemed a service:
      
User: ${userEmail}
Service: ${service}
Credits Used: ${credits}
Time: ${new Date().toLocaleString()}

Please log in to the admin dashboard to view details.`,
      type: 'redemption'
    });
  },
  
  serviceStarted: (userEmail: string, service: string) => {
    sendEmailNotification({
      to: ['a@hanzo.ai', 'z@hanzo.ai'],
      subject: 'Service Started - Hanzo Agency',
      body: `A user has started their service:
      
User: ${userEmail}
Service: ${service}
Time: ${new Date().toLocaleString()}
Status: Booking scheduled

Please log in to the admin dashboard to view details.`,
      type: 'service_start'
    });
  }
};