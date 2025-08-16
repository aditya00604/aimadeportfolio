import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error('Contact form error:', error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" />,
      title: "Email",
      value: "akm998800hj@gmail.com",
      gradient: "from-electric-blue to-tech-purple"
    },
    {
      icon: <Phone className="text-white" />,
      title: "Phone",
      value: "+91 8959901321",
      gradient: "from-neon-green to-electric-blue"
    },
    {
      icon: <Linkedin className="text-white" />,
      title: "LinkedIn",
      value: "aditya-mishra-692791240",
      gradient: "from-tech-purple to-neon-green"
    },
    {
      icon: <Github className="text-white" />,
      title: "GitHub",
      value: "aditya998800",
      gradient: "from-electric-blue to-neon-green"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-space-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-electric-blue">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
          <p className="text-xl text-slate-300 mt-6">Let's discuss opportunities and collaborations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{info.title}</h3>
                  <p className="text-slate-300" data-testid={`contact-${info.title.toLowerCase()}`}>
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="bg-dark-bg/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  className="w-full px-4 py-3 bg-space-blue/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-electric-blue focus:outline-none"
                  placeholder="Your Name"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  className="w-full px-4 py-3 bg-space-blue/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-electric-blue focus:outline-none"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange('subject')}
                  className="w-full px-4 py-3 bg-space-blue/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-electric-blue focus:outline-none"
                  placeholder="Subject"
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  className="w-full px-4 py-3 bg-space-blue/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-electric-blue focus:outline-none resize-none"
                  placeholder="Your message..."
                  data-testid="input-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={submitContactForm.isPending}
                className="w-full bg-gradient-to-r from-electric-blue to-tech-purple px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-send-message"
              >
                <Send className="w-4 h-4 mr-2" />
                {submitContactForm.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
