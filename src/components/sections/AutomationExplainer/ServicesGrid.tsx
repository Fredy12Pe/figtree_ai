import React from 'react';
import ServiceCard from './ServiceCard';

interface ServicesGridProps {
  className?: string;
}

export default function ServicesGrid({ className = '' }: ServicesGridProps) {
  const services = [
    {
      title: "Smart Lead\nFollow-ups:",
      description: "Auto-reply to leads via email/SMS, qualify, tag, and book.",
      icon: "/Assets/AutomationExplainer/Leads.png"
    },
    {
      title: "AI-Powered\nScheduling:",
      description: "Auto-book showings and sync to calendar.",
      icon: "/Assets/AutomationExplainer/Ai_scheduling.png"
    },
    {
      title: "Contract &\nForm Automation:",
      description: "Auto-fill and deliver common forms and agreements.",
      icon: "/Assets/AutomationExplainer/Contract_automation.png"
    },
    {
      title: "Website AI\nChatbot:",
      description: "GPT-powered agent answers questions and captures leads 24/7.",
      icon: "/Assets/AutomationExplainer/Ai_chatbot.png"
    },
    {
      title: "CRM\nIntegration:",
      description: "Auto-update stages, tags, notes, and pipelines.",
      icon: "/Assets/AutomationExplainer/CRM_integration.png"
    },
    {
      title: "AI Reports &\nNotifications:",
      description: "Get summaries of lead activity and progress.",
      icon: "/Assets/AutomationExplainer/Notifications.png"
    }
  ];

  return (
    <div className={`grid grid-cols-2 gap-[20px] ${className}`}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
} 