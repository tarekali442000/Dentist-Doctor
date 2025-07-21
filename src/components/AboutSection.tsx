import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Star,
} from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "دكتوراه في طب الأسنان",
      description: "جامعة الأزهر - 2009",
    },
    {
      icon: Award,
      title: "ماجستير في تقويم الأسنان",
      description: "جامعة الأزهر - 2012",
    },
    {
      icon: Users,
      title: "+1000 مريض راضي",
      description: "خبرة 10 سنة في الممارسة",
    },
    {
      icon: Calendar,
      title: "عضو الجمعية المصرية",
      description: "لأطباء الأسنان منذ 2010",
    },
  ];

  const specialties = [
    "تقويم الأسنان للكبار والأطفال",
    "زراعة الأسنان الفورية",
    "تجميل وتبييض الأسنان",
    "علاج الجذور المتقدم",
    "جراحة الفم والأسنان",
    "طب أسنان الأطفال",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center bg-accent/20 text-accent-strong px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 ml-2 fill-current" />
              د. طارق علي
            </div>

            <h2 className="heading-xl text-foreground mb-6">
              طبيب أسنان متخصص مع
              <span className="text-primary"> خبرة واسعة</span>
            </h2>

            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              د. طارق علي طبيب أسنان متخصص في تقويم وتجميل الأسنان مع أكثر من 10
              سنوات من الخبرة في تقديم أفضل الحلول العلاجية والتجميلية للأسنان.
              يؤمن د. هشام بأن كل مريض يستحق ابتسامة صحية وجميلة، ولذلك يسعى
              دائماً لتقديم أعلى مستويات الرعاية الطبية باستخدام أحدث التقنيات
              والمعدات الطبية.
            </p>

            {/* Specialties */}
            <div className="mb-8">
              <h3 className="heading-md text-foreground mb-4">التخصصات:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 space-x-reverse"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {specialty}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="medical" size="lg">
              <Calendar className="w-5 h-5 ml-2" />
              احجز موعد مع الدكتور
            </Button>
          </div>

          {/* Achievements */}
          <div className="animate-scale-in">
            {/* Doctor Image Placeholder */}
            <div className="medical-card mb-8 text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-4xl font-bold">
                    د.ه
                  </span>
                </div>
              </div>
              <h3 className="heading-md text-card-foreground mb-2">
                د. طارق علي
              </h3>
              <p className="text-muted-foreground">استشاري طب وتقويم الأسنان</p>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="medical-card text-center hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2 text-sm">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="medical-card mt-6 bg-gradient-to-r from-accent/10 to-primary/5 text-center">
              <div className="flex items-center justify-center space-x-2 space-x-reverse mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-card-foreground mb-1">
                تقييم 5 نجوم
              </p>
              <p className="text-xs text-muted-foreground">
                من أكثر من 500 مريض
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
