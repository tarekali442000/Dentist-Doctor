import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ في البيانات",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "تم إرسال الرسالة بنجاح!",
      description: "سنتواصل معك قريباً للرد على استفسارك",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center bg-accent/20 text-accent-strong px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 ml-2" />
            تواصل معنا
          </div>

          <h2 className="heading-xl text-foreground mb-6">
            نحن هنا
            <span className="text-primary"> لمساعدتك</span>
          </h2>

          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            هل لديك استفسار أو تحتاج للمزيد من المعلومات؟ تواصل معنا وسنقوم
            بالرد عليك في أسرع وقت ممكن
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="medical-card animate-scale-in">
            <h3 className="heading-md text-card-foreground mb-6">
              أرسل لنا رسالة
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    الاسم *
                  </label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="اسمك الكامل"
                      className="pr-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    رقم الهاتف
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0791234567"
                      className="pr-10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  البريد الإلكتروني *
                </label>
                <div className="relative">
                  <Mail className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  الموضوع
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="موضوع الرسالة"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  الرسالة *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="اكتب رسالتك هنا..."
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="medical"
                size="lg"
                className="w-full"
              >
                <Send className="w-5 h-5 ml-2" />
                إرسال الرسالة
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-up">
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="medical-card hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <h4 className="font-semibold text-card-foreground mb-1">
                      اتصل بنا
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      962-123-456-789+
                    </p>
                    <p className="text-xs text-muted-foreground">
                      متاح 24/7 للطوارئ
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="medical-card hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent/20 to-accent-strong/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-strong" />
                  </div>
                  <div className="text-right">
                    <h4 className="font-semibold text-card-foreground mb-1">
                      راسلنا
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      info@tarek-ali-dental.com
                    </p>
                    <p className="text-xs text-muted-foreground">
                      نرد خلال 24 ساعة
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="medical-card hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-r from-destructive/10 to-destructive/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="text-right">
                    <h4 className="font-semibold text-card-foreground mb-1">
                      زورنا
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      المنصورة - الدقهلية
                    </p>
                    <p className="text-xs text-muted-foreground">
                      قرية أويش الحجر
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="medical-card hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <h4 className="font-semibold text-card-foreground mb-1">
                      ساعات العمل
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      السبت - الخميس: 9:00 - 18:00
                    </p>
                    <p className="text-xs text-muted-foreground">
                      الجمعة: مغلق
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="medical-card">
              <h4 className="font-semibold text-card-foreground mb-4">
                موقع العيادة
              </h4>
              <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">خريطة الموقع</p>
                  <p className="text-xs text-muted-foreground">
                    المنصورة - قرية أويش الحجر
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 text-center">
          <div className="medical-card max-w-2xl mx-auto bg-destructive/5 border-destructive/20">
            <h3 className="heading-md text-destructive mb-4">حالات الطوارئ</h3>
            <p className="text-body text-muted-foreground mb-6">
              في حالة الطوارئ الطبية خارج ساعات العمل، يرجى الاتصال على الرقم
              التالي:
            </p>
            <Button variant="destructive" size="lg">
              <Phone className="w-5 h-5 ml-2" />
              962-987-654-321+ - طوارئ 24/7
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
