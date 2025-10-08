import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const brands = [
    {
      name: 'Rick Owens',
      description: 'Темная эстетика и авангардные силуэты, которые взорвали индустрию в 2024-2025',
      trend: 'DARK LUXE',
      year: '2024-2025'
    },
    {
      name: 'Maison Margiela',
      description: 'Деконструкция классики и артистичный подход к дизайну',
      trend: 'DECONSTRUCTED',
      year: '2024-2025'
    },
    {
      name: 'Balenciaga',
      description: 'Футуристичный стиль и инновационный подход к streetwear',
      trend: 'FUTURE NOW',
      year: '2024-2025'
    },
    {
      name: 'The Row',
      description: 'Минималистичная роскошь от сестер Олсен',
      trend: 'QUIET LUXURY',
      year: '2024-2025'
    }
  ];

  const shows = [
    {
      designer: 'Rick Owens',
      season: 'FW 2024',
      location: 'Paris Fashion Week',
      highlight: 'Драматические силуэты с элементами готики и футуризма'
    },
    {
      designer: 'Maison Margiela',
      season: 'SS 2025',
      location: 'Paris Haute Couture',
      highlight: 'Артхаус деконструкция с белыми масками'
    },
    {
      designer: 'Balenciaga',
      season: 'FW 2024',
      location: 'Paris Fashion Week',
      highlight: 'Экстремальные пропорции и футуристичные аксессуары'
    }
  ];

  const trends = [
    {
      name: 'Oversized Silhouettes',
      description: 'Гипертрофированные формы остаются главным трендом 2024-2025',
      popularity: '95%'
    },
    {
      name: 'Deconstructed Fashion',
      description: 'Разобранные и пересобранные элементы одежды',
      popularity: '88%'
    },
    {
      name: 'Dark Academia',
      description: 'Академический стиль с готическими нотками',
      popularity: '92%'
    },
    {
      name: 'Quiet Luxury',
      description: 'Скромная роскошь без логотипов',
      popularity: '90%'
    }
  ];

  const collections = [
    {
      brand: 'Rick Owens',
      name: 'EDFU Collection',
      pieces: 'Длинные пальто, драпировки, массивная обувь',
      appeal: 'Для тех, кто ценит темную эстетику'
    },
    {
      brand: 'Maison Margiela',
      name: 'Artisanal Collection',
      pieces: 'Деконструированные пиджаки, Tabi boots, белые маски',
      appeal: 'Искусство в каждой детали'
    },
    {
      brand: 'The Row',
      name: 'Minimalist Essentials',
      pieces: 'Безупречные пальто, строгие брюки, качественный кашемир',
      appeal: 'Вечная элегантность без возраста'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gold">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gold tracking-wider">
              FASHION PORTAL
            </h1>
            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'Бренды', 'Показы', 'Тренды', 'Коллекции'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'Главная' ? 'home' : item.toLowerCase())}
                  className="text-white hover:text-gold transition-colors duration-300 text-sm tracking-widest"
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #8B4513 50%, #FF1493 100%)'
        }}
      >
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <Badge className="mb-6 bg-gold text-black text-xs tracking-widest px-4 py-2">
            СЕЗОН 2024-2025
          </Badge>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            ВЫСОКАЯ МОДА
            <br />
            <span className="text-gold">БЕЗ ГРАНИЦ</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            Откройте мир авангардных брендов и легендарных показов мод. 
            Rick Owens, Maison Margiela и другие иконы стиля.
          </p>
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gold hover:text-black transition-all duration-300 text-lg px-8 py-6 tracking-wider"
            onClick={() => scrollToSection('бренды')}
          >
            ИССЛЕДОВАТЬ
          </Button>
        </div>
      </section>

      <section id="бренды" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-pink text-white">БРЕНДЫ</Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Иконы Современной Моды
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Бренды, которые задают тренды и вдохновляют миллионы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-black via-brown/20 to-black border-gold hover:border-pink transition-all duration-500 group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-gold text-black text-xs">{brand.trend}</Badge>
                    <span className="text-white/50 text-sm">{brand.year}</span>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    {brand.name}
                  </h4>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {brand.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 border-gold text-gold hover:bg-gold hover:text-black"
                  >
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="показы" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black text-white">ПОКАЗЫ</Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Легендарные Показы
            </h3>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Самые запоминающиеся моменты Fashion Week
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {shows.map((show, index) => (
              <Card 
                key={index}
                className="border-2 border-black hover:border-pink transition-all duration-300 group hover:shadow-2xl"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon name="Sparkles" className="text-pink" size={24} />
                    <Badge className="bg-gold text-black">{show.season}</Badge>
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-3 group-hover:text-pink transition-colors">
                    {show.designer}
                  </h4>
                  <p className="text-sm text-black/60 mb-4 flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    {show.location}
                  </p>
                  <p className="text-black/80 leading-relaxed">
                    {show.highlight}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="тренды" className="py-24 bg-gradient-to-br from-black via-brown to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink text-white">ТРЕНДЫ</Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Что Носят Сейчас
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Актуальные тренды сезона 2024-2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trends.map((trend, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-gold/30 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {trend.name}
                  </h4>
                  <Badge className="bg-pink text-white text-sm">
                    {trend.popularity}
                  </Badge>
                </div>
                <p className="text-white/70 leading-relaxed">
                  {trend.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="коллекции" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black text-white">КОЛЛЕКЦИИ</Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Must-Have Коллекции
            </h3>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Образы, которые понравятся всем поколениям
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {collections.map((collection, index) => (
              <Card 
                key={index}
                className="border-2 border-black/10 hover:border-pink transition-all duration-500 overflow-hidden group"
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="flex-1">
                      <Badge className="mb-3 bg-gold text-black">{collection.brand}</Badge>
                      <h4 className="text-3xl font-bold text-black mb-4 group-hover:text-pink transition-colors">
                        {collection.name}
                      </h4>
                      <p className="text-black/70 text-lg mb-4 leading-relaxed">
                        {collection.pieces}
                      </p>
                      <p className="text-black/60 italic flex items-center gap-2">
                        <Icon name="Heart" size={18} className="text-pink" />
                        {collection.appeal}
                      </p>
                    </div>
                    <Button 
                      size="lg"
                      className="bg-black text-white hover:bg-pink transition-all duration-300"
                    >
                      СМОТРЕТЬ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 border-t border-gold">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-gold mb-4 tracking-wider">
              FASHION PORTAL
            </h4>
            <p className="text-white/70 mb-8 text-lg">
              Ваш гид в мире высокой моды
            </p>
            <div className="flex justify-center gap-6">
              <Icon name="Instagram" className="text-white hover:text-pink cursor-pointer transition-colors" size={24} />
              <Icon name="Twitter" className="text-white hover:text-pink cursor-pointer transition-colors" size={24} />
              <Icon name="Facebook" className="text-white hover:text-pink cursor-pointer transition-colors" size={24} />
            </div>
            <p className="text-white/40 mt-8 text-sm">
              © 2025 Fashion Portal. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
