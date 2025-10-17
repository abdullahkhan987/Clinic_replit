import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail } from "lucide-react";
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
import { z } from "zod";

const formSchema = insertContactSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
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
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message.",
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
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900" data-testid="contact-title">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600" data-testid="contact-subtitle">
            We're here to help. Reach out to us for any inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold" data-testid="contact-address-title">Our Location</h3>
                <p className="text-gray-600" data-testid="contact-address">
                  123 Health St, Wellness City, 45678
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold" data-testid="contact-phone-title">Call Us</h3>
                <p className="text-gray-600" data-testid="contact-phone">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold" data-testid="contact-email-title">Email Us</h3>
                <p className="text-gray-600" data-testid="contact-email">contact@ukaash.com</p>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6" data-testid="contact-form-title">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" {...register("firstName")} />
                    {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" {...register("lastName")} />
                    {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" {...register("message")} />
                  {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                </div>
                <Button type="submit" disabled={submitContactMutation.isPending} className="w-full">
                  {submitContactMutation.isPending ? "Sending..." : "Send"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
