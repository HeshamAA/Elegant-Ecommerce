import {
  Button,
  Input,
  Textarea,
  Label,
  Mail,
  Phone,
  MapPin,
  useContact,
} from "@/features/Contact";

const Contact = () => {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useContact();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Have questions or need assistance? Our team is here to help. Fill out
          the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-card shadow-lg rounded-lg overflow-hidden">
          <div className="bg-muted py-6 px-8">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="mt-2">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <p className="text-destructive text-xs mt-1">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="bg-card shadow-lg rounded-lg p-6 flex items-start space-x-4 h-min">
            <div className="p-3 bg-muted rounded-full">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Our Location</h3>
              <p className="text-muted-foreground mt-1">
                123 Fashion Street, New York, NY 10001, United States
              </p>
            </div>
          </div>

          <div className="bg-card shadow-lg rounded-lg p-6 flex items-start space-x-4 h-min">
            <div className="p-3 bg-muted rounded-full">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Email Us</h3>
              <p className="text-muted-foreground mt-1">
                support@elegent.com
                <br />
                info@elegent.com
              </p>
            </div>
          </div>

          <div className="bg-card shadow-lg rounded-lg p-6 flex items-start space-x-4 h-min">
            <div className="p-3 bg-muted rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Call Us</h3>
              <p className="text-muted-foreground mt-1">
                +1 (555) 123-4567
                <br />
                Mon-Fri 9am-6pm ET
              </p>
            </div>
          </div>

          <div className="bg-card shadow-lg rounded-lg overflow-hidden h-full">
            <div className="aspect-video w-full">
              <iframe
                title="Store Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343006!2d-74.00425933818556!3d40.741915901566125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1669180023085!5m2!1sen!2sus"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
