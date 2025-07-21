import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Shield,
  Zap,
  Heart,
  Smile,
  RefreshCw,
  ArrowLeft,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "تنظيف وتبييض الأسنان",
      description:
        "خدمات تنظيف احترافية وتبييض آمن للحصول على ابتسامة ناصعة البياض",
      price: "50 - 150 دولار",
      popular: true,
    },
    {
      icon: Shield,
      title: "حشوات تجميلية",
      description: "حشوات عالية الجودة بألوان طبيعية تحافظ على جمال ابتسامتك",
      price: "30 - 80 دولار",
      popular: false,
    },
    // {
    //   icon: Smile,
    //   title: "تقويم الأسنان",
    //   description: "تقويم تقليدي وشفاف لتحسين شكل الأسنان ووظائفها",
    //   price: "800 - 2000 دولار",
    //   popular: true,
    // },
    {
      icon: Heart,
      title: "علاج الجذور",
      description: "علاج متخصص لحفظ الأسنان وتجنب القلع باستخدام أحدث التقنيات",
      price: "80 - 200 دولار",
      popular: false,
    },
    // {
    //   icon: Zap,
    //   title: "زراعة الأسنان",
    //   description: "زراعة فورية ومتقدمة لتعويض الأسنان المفقودة بحلول دائمة",
    //   price: "400 - 800 دولار",
    //   popular: true,
    // },
    {
      icon: RefreshCw,
      title: "تجميل الأسنان",
      description: "فينير، تلبيسات، وحلول تجميلية متقدمة لابتسامة هوليود",
      price: "200 - 500 دولار",
      popular: true,
    },
    {
      icon: RefreshCw,
      title: "حشو عادة",
      description: "فينير، تلبيسات، وحلول تجميلية متقدمة لابتسامة هوليود",
      price: "100 - 200 دولار",
      popular: true,
    },
    {
      icon: RefreshCw,
      title: "حشو عصب",
      description: "فينير، تلبيسات، وحلول تجميلية متقدمة لابتسامة هوليود",
      price: "300 - 500 دولار",
      popular: true,
    },
    {
      icon: RefreshCw,
      title: "تركيب طربوش",
      description: "فينير، تلبيسات، وحلول تجميلية متقدمة لابتسامة هوليود",
      price: "500 - 700 دولار",
      popular: true,
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 ml-2" />
            خدماتنا الطبية
          </div>

          <h2 className="heading-xl text-foreground mb-6">
            خدمات شاملة لرعاية
            <span className="text-primary"> أسنانك</span>
          </h2>

          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة واسعة من الخدمات الطبية المتخصصة باستخدام أحدث التقنيات
            والمعدات الطبية المتطورة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`medical-card relative animate-scale-in hover:scale-105 transition-all duration-300 ${
                service.popular ? "ring-2 ring-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-primary to-primary-light text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  الأكثر طلباً
                </div>
              )}

              <div className="flex items-start space-x-4 space-x-reverse mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-right">
                  <h3 className="heading-md text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 ml-2" />
                  تفاصيل أكثر
                </Button>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">
                    {service.price}
                  </p>
                  <p className="text-xs text-muted-foreground">حسب الحالة</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="medical-card max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5">
            <h3 className="heading-md text-foreground mb-4">
              هل تحتاج استشارة مجانية؟
            </h3>
            <p className="text-body text-muted-foreground mb-6">
              احجز موعداً لاستشارة مجانية مع د. طارق علي لتحديد الخطة العلاجية
              المناسبة لك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="medical" size="lg">
                احجز استشارة مجانية
              </Button>
              <Button variant="outline" size="lg">
                اتصل بنا الآن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
