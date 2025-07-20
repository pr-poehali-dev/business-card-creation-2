import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-coral-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 to-blue-500/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 text-lg">
            ✨ Современные решения
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-coral-500 to-blue-500 bg-clip-text text-transparent">
            Ваше Имя
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
            Профессиональные услуги
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Создаю современные решения для вашего бизнеса. Качество, скорость и индивидуальный подход к каждому проекту.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-6 text-lg rounded-xl">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-6 text-lg rounded-xl">
              <Icon name="Download" size={20} className="mr-2" />
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Мои услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональные решения для развития вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-coral-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Palette" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Дизайн</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-lg leading-relaxed">
                  Современный веб-дизайн, создание уникальных интерфейсов и брендинг для вашего проекта
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Code" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Разработка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-lg leading-relaxed">
                  Создание современных веб-приложений и сайтов с использованием актуальных технологий
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Rocket" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Оптимизация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-lg leading-relaxed">
                  Повышение производительности сайтов, SEO-оптимизация и улучшение пользовательского опыта
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Контакты
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Готов обсудить ваш проект и предложить лучшее решение
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-coral-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
                <p className="text-gray-300 text-lg mb-6">your@email.com</p>
                <Button className="bg-coral-500 hover:bg-coral-600 text-white">
                  Написать письмо
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Телефон</h3>
                <p className="text-gray-300 text-lg mb-6">+7 (XXX) XXX-XX-XX</p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Позвонить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о работе со мной
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-coral-50 to-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "Отличная работа! Проект выполнен качественно и в срок. Рекомендую!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-coral-400 to-coral-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">А</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Анна Иванова</p>
                    <p className="text-gray-600">Директор компании</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "Профессиональный подход и креативные решения. Очень доволен результатом!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">М</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Михаил Петров</p>
                    <p className="text-gray-600">Предприниматель</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "Быстро, качественно, с пониманием задач. Буду обращаться еще!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">Е</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Елена Сидорова</p>
                    <p className="text-gray-600">Маркетолог</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;