import { Button } from "@/components/ui/button";
import { Calendar, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/dental-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-secondary"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-fade-up">
            <div className="inline-flex items-center bg-accent/20 text-accent-strong px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 ml-2 fill-current" />
              أفضل عيادة أسنان في المنطقة
            </div>

            <h1 className="heading-hero text-foreground mb-6">
              ابتسامة صحية و<span className="text-primary">جميلة</span>
              <br />
              تبدأ من هنا
            </h1>

            <p className="text-body text-muted-foreground mb-8 max-w-2xl">
              مع د. طارق علي، احصل على أفضل رعاية لأسنانك باستخدام أحدث التقنيات
              والعلاجات المتطورة في بيئة مريحة وآمنة
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 ml-2" />
                احجز موعدك الآن
              </Button>
              <Button variant="outline" size="lg">
                تواصل معنا
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">10+ سنة خبرة</p>
                  <p className="text-sm text-muted-foreground">في طب الأسنان</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent-strong" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">1000+ مريض</p>
                  <p className="text-sm text-muted-foreground">
                    راضي عن خدماتنا
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3 space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">24/7 خدمة</p>
                  <p className="text-sm text-muted-foreground">طوارئ متاحة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-strong)]">
              <img
                src={heroImage}
                alt="عيادة د. طارق علي الحديثة"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-medical)] max-w-xs">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-card-foreground">حجز سريع</p>
                  <p className="text-sm text-muted-foreground">
                    مواعيد متاحة اليوم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
