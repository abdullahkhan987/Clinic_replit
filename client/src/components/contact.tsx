import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import { fadeInVariants, slideInLeftVariants, slideInRightVariants } from "@/lib/animations";
import { z } from "zod";

const formSchema = insertContactSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: ""
    }
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: FormData) => {
    submitContactMutation.mutate(data);
  };

  const services = [
    "Advanced Facials",
    "Laser Treatments", 
    "Aesthetic Injectables",
    "Chemical Peels",
    "Skin Analysis",
    "Wellness Therapy"
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-8">
            <span className="text-primary font-semibold text-sm">✨ Get In Touch</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 gradient-text" data-testid="contact-title">
            Contact Us
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Ready to start your skin transformation journey? Get in touch with us today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-foreground" data-testid="contact-info-title">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1" data-testid="contact-address-title">Address</h4>
                  <p className="text-muted-foreground" data-testid="contact-address">
                    123 Beauty Boulevard<br />
                    Medical District, City 12345<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1" data-testid="contact-phone-title">Phone</h4>
                  <p className="text-muted-foreground" data-testid="contact-phone">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1" data-testid="contact-email-title">Email</h4>
                  <p className="text-muted-foreground" data-testid="contact-email">info@ukaashclinic.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1" data-testid="contact-hours-title">Hours</h4>
                  <p className="text-muted-foreground" data-testid="contact-hours">
                    Mon - Fri: 9:00 AM - 7:00 PM<br />
                    Sat: 9:00 AM - 5:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4" data-testid="social-media-title">Follow Us</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                  data-testid="social-facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 bg-accent/10 border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground"
                  data-testid="social-instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                  data-testid="social-twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 bg-accent/10 border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border border-white/20 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-8 gradient-text" data-testid="contact-form-title">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        placeholder="John"
                        data-testid="input-first-name"
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1" data-testid="error-first-name">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        placeholder="Doe"
                        data-testid="input-last-name"
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1" data-testid="error-last-name">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1" data-testid="error-email">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="(555) 123-4567"
                      data-testid="input-phone"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1" data-testid="error-phone">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-card-foreground mb-2">
                      Service Interest
                    </Label>
                    <Select 
                      onValueChange={(value) => setValue("serviceInterest", value)}
                      value={watch("serviceInterest")}
                    >
                      <SelectTrigger data-testid="select-service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.serviceInterest && (
                      <p className="text-sm text-destructive mt-1" data-testid="error-service">
                        {errors.serviceInterest.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      placeholder="Tell us about your skin concerns and goals..."
                      data-testid="textarea-message"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1" data-testid="error-message">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={submitContactMutation.isPending}
                    className="w-full gradient-bg text-white py-4 font-bold hover:opacity-90 hover:scale-105 transition-all duration-300 neon-glow text-lg"
                    data-testid="button-send-message"
                  >
                    {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
