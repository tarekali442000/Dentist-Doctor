import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const services = [
    "تنظيف وتبييض الأسنان",
    "حشوات تجميلية",
    "تقويم الأسنان",
    "علاج الجذور",
    "زراعة الأسنان",
    "تجميل الأسنان",
    "استشارة عامة",
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      toast({
        title: "خطأ في البيانات",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "تم حجز الموعد بنجاح!",
      description: `سيتم التواصل معك قريباً لتأكيد موعدك يوم ${formData.date} في ${formData.time}`,
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-secondary/50 to-accent/10"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 ml-2" />
            حجز موعد
          </div>

          <h2 className="heading-xl text-foreground mb-6">
            احجز موعدك
            <span className="text-primary"> الآن</span>
          </h2>

          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            احجز موعدك بسهولة وسرعة. سنتواصل معك خلال 24 ساعة لتأكيد الموعد
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div className="medical-card animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  الاسم الكامل *
                </label>
                <div className="relative">
                  <User className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="أدخل اسمك الكامل"
                    className="pr-10"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  رقم الهاتف *
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
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  البريد الإلكتروني
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
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  نوع الخدمة *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  required
                >
                  <option value="">اختر نوع الخدمة</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    التاريخ *
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    الوقت *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    required
                  >
                    <option value="">اختر الوقت</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  ملاحظات إضافية
                </label>
                <Textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="أي تفاصيل إضافية تود إخبارنا بها..."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                variant="medical"
                size="lg"
                className="w-full"
              >
                <Calendar className="w-5 h-5 ml-2" />
                تأكيد الحجز
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up">
            {/* Clinic Info */}
            <div className="medical-card">
              <h3 className="heading-md text-card-foreground mb-6 flex items-center">
                <MapPin className="w-5 h-5 ml-2 text-primary" />
                معلومات العيادة
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-card-foreground">العنوان:</p>
                    <p className="text-sm text-muted-foreground">
                      المنصورة - الدقهلية
                      <br />
                      قرية أويش الحجر{" "}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-card-foreground">الهاتف:</p>
                    <p className="text-sm text-muted-foreground">
                      962-123-456-789+
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-card-foreground">
                      ساعات العمل:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      السبت - الخميس: 9:00 صباحاً - 10:30 مساءً
                      <br />
                      الجمعة: مغلق
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="medical-card bg-gradient-to-r from-accent/10 to-primary/5">
              <h3 className="heading-md text-card-foreground mb-4">
                لماذا تختارنا؟
              </h3>
              <div className="space-y-3">
                {[
                  "استشارة مجانية",
                  "أحدث التقنيات",
                  "خبرة 15+ سنة",
                  "أسعار منافسة",
                  "رعاية شخصية",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 space-x-reverse"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm text-card-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="medical-card bg-destructive/5 border-destructive/20">
              <h3 className="heading-md text-destructive mb-4">
                طوارئ الأسنان
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                في حالة الطوارئ خارج ساعات العمل، اتصل بنا على:
              </p>
              <Button variant="destructive" size="sm" className="w-full">
                <Phone className="w-4 h-4 ml-2" />
                962-987-654-321+
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
