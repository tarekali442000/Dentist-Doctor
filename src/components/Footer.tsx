import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  <img src="/Dentistry.png" alt="Logo" className="w-6 h-6" />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">د. طارق علي</h3>
                <p className="text-sm opacity-80">عيادة طب الأسنان</p>
              </div>
            </div>

            <p className="text-sm opacity-80 leading-relaxed mb-6 max-w-md">
              عيادة متخصصة في طب الأسنان وتقويمها، نقدم أفضل الخدمات الطبية
              باستخدام أحدث التقنيات في بيئة مريحة وآمنة.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-sm opacity-80">تابعنا على:</span>
              <div className="flex space-x-3 space-x-reverse">
                <a
                  href="#"
                  className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="#home"
                  className="hover:opacity-100 transition-opacity"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:opacity-100 transition-opacity"
                >
                  الخدمات
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:opacity-100 transition-opacity"
                >
                  عن الطبيب
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="hover:opacity-100 transition-opacity"
                >
                  حجز موعد
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">معلومات التواصل</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>962-123-456-789+</span>
              </div>

              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@tarek-ali-dental.com</span>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  المنصورة - الدقهلية
                  <br />
                  قرية أويش الحجر
                </span>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  السبت - الخميس: 9:00 - 18:00
                  <br />
                  الجمعة: مغلق
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} د. طارق علي - عيادة طب الأسنان. جميع
            الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
