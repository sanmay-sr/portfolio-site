import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email",
      value: "itssanmay@gmail.com",
      link: "mailto:itssanmay@gmail.com",
    },
    {
      icon: <Linkedin className="h-10 w-10 text-primary" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sanmay-sr",
      link: "https://www.linkedin.com/in/sanmay-sr",
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "Phone",
      value: "Available on request",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-container bg-muted/50">
      <SectionHeading
        title="Get In Touch"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6 lg:col-span-1">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdAIehQiDcSU0ENVSzGXpQ90DSa7Z59ivUw0bFMFe3jcjkFSA/viewform?embedded=true"
              width="100%"
              height="600"
              style={{ border: 'none' }}
              title="Contact Form"
            >
              Loading…
            </iframe>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
