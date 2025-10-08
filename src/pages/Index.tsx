import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [selectedShow, setSelectedShow] = useState<any>(null);
  const [selectedCollection, setSelectedCollection] = useState<any>(null);

  const brands = [
    {
      name: 'Rick Owens',
      description: 'Темная эстетика и авангардные силуэты, которые взорвали индустрию в 2024-2025',
      trend: 'DARK LUXE',
      year: '2024-2025',
      founder: 'Рик Оуэнс',
      founded: '1994',
      story: 'Американский дизайнер, создавший культовый бренд темной роскоши. Его коллекции отличаются драматическими силуэтами, монохромной палитрой и авангардным подходом к streetwear.',
      signature: 'Массивная обувь, длинные драпировки, готическая эстетика',
      collections: ['EDFU FW24', 'TECUATL SS25', 'GETHSEMANE'],
      keyPieces: ['Ramones Sneakers', 'DRKSHDW Denim', 'Длинные пальто с капюшонами']
    },
    {
      name: 'Maison Margiela',
      description: 'Деконструкция классики и артистичный подход к дизайну',
      trend: 'DECONSTRUCTED',
      year: '2024-2025',
      founder: 'Мартин Марджела',
      founded: '1988',
      story: 'Легендарный бельгийский дизайнер-концептуалист, который всегда оставался в тени. Бренд известен деконструкцией одежды и артистичным подходом к fashion.',
      signature: 'Белые маски, Tabi boots, деконструированные силуэты',
      collections: ['Artisanal Collection', 'Co-Ed Collection', 'Replica'],
      keyPieces: ['Tabi Boots', 'Replica Sneakers', 'Деконструированные пиджаки']
    },
    {
      name: 'Balenciaga',
      description: 'Футуристичный стиль и инновационный подход к streetwear',
      trend: 'FUTURE NOW',
      year: '2024-2025',
      founder: 'Кристобаль Баленсиага (сейчас Демна Гвасалия)',
      founded: '1919',
      story: 'Исторический модный дом, который под руководством Демны Гвасалии стал символом футуристического luxury streetwear и вирусных трендов.',
      signature: 'Экстремальные пропорции, футуристичные аксессуары, логотипы',
      collections: ['Le Cagole', 'Triple S Era', 'Couture Collection'],
      keyPieces: ['Triple S Sneakers', 'Le Cagole Bag', 'Oversized Hoodies']
    },
    {
      name: 'The Row',
      description: 'Минималистичная роскошь от сестер Олсен',
      trend: 'QUIET LUXURY',
      year: '2024-2025',
      founder: 'Мэри-Кейт и Эшли Олсен',
      founded: '2006',
      story: 'Бренд премиум-минимализма от легендарных сестер Олсен. The Row представляет концепцию "quiet luxury" - роскоши без логотипов и лишних деталей.',
      signature: 'Безупречный крой, качественные материалы, минимализм',
      collections: ['Essentials', 'Timeless Wardrobe', 'Capsule Collection'],
      keyPieces: ['Margaux Bag', 'Cashmere Coats', 'Строгие брюки']
    }
  ];

  const shows = [
    {
      designer: 'Rick Owens',
      season: 'FW 2024',
      location: 'Paris Fashion Week',
      highlight: 'Драматические силуэты с элементами готики и футуризма',
      date: 'Январь 2024',
      venue: 'Palais de Tokyo',
      details: 'Шоу проходило в атмосфере индустриальной готики. Модели шли по подиуму в длинных черных пальто с капюшонами, массивной обуви и драпированных платьях. Центральной темой стала игра света и тени.',
      looks: 42,
      music: 'Ambient Industrial',
      keyLooks: ['Look 1: Черное драпированное пальто', 'Look 15: Массивные Ramones', 'Look 28: Готический вечерний наряд']
    },
    {
      designer: 'Maison Margiela',
      season: 'SS 2025',
      location: 'Paris Haute Couture',
      highlight: 'Артхаус деконструкция с белыми масками',
      date: 'Июль 2024',
      venue: 'Théâtre des Bouffes du Nord',
      details: 'Легендарное шоу с культовыми белыми масками. Модели представили деконструированные пиджаки, асимметричные платья и переосмысленную классику. Зал был в полной темноте с точечным освещением.',
      looks: 38,
      music: 'Experimental Classical',
      keyLooks: ['Look 5: Деконструированный костюм', 'Look 12: Белая маска с драпировкой', 'Look 22: Асимметричное платье']
    },
    {
      designer: 'Balenciaga',
      season: 'FW 2024',
      location: 'Paris Fashion Week',
      highlight: 'Экстремальные пропорции и футуристичные аксессуары',
      date: 'Март 2024',
      venue: 'Parc des Expositions',
      details: 'Футуристичное шоу с гипертрофированными силуэтами и инновационными материалами. Модели представили oversized худи, массивные сумки и обувь платформе. Демна Гвасалия вновь удивил модный мир.',
      looks: 51,
      music: 'Electronic Techno',
      keyLooks: ['Look 7: Triple S в новой расцветке', 'Look 19: Гигантская Le Cagole', 'Look 34: Футуристичное пальто']
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
      appeal: 'Для тех, кто ценит темную эстетику',
      season: 'FW 2024',
      priceRange: '$500 - $5,000',
      fullDescription: 'Коллекция EDFU вдохновлена египетской архитектурой и готическими соборами. Массивные силуэты сочетаются с тонкими драпировками, создавая контраст между весом и легкостью.',
      items: [
        { name: 'Черное пальто с капюшоном', price: '$2,890' },
        { name: 'Ramones Sneakers', price: '$790' },
        { name: 'Драпированное платье', price: '$1,450' },
        { name: 'DRKSHDW Denim', price: '$540' }
      ],
      targetAudience: 'Для смелых личностей, ценящих авангард и темную эстетику'
    },
    {
      brand: 'Maison Margiela',
      name: 'Artisanal Collection',
      pieces: 'Деконструированные пиджаки, Tabi boots, белые маски',
      appeal: 'Искусство в каждой детали',
      season: 'SS 2025',
      priceRange: '$800 - $8,000',
      fullDescription: 'Artisanal Collection - это вершина деконструктивизма в моде. Каждая вещь создана вручную, переосмысляя классические формы и разрушая границы между одеждой и искусством.',
      items: [
        { name: 'Tabi Boots', price: '$1,290' },
        { name: 'Деконструированный пиджак', price: '$3,450' },
        { name: 'Replica Sneakers', price: '$590' },
        { name: 'Асимметричное платье', price: '$2,890' }
      ],
      targetAudience: 'Для ценителей искусства и концептуальной моды'
    },
    {
      brand: 'The Row',
      name: 'Minimalist Essentials',
      pieces: 'Безупречные пальто, строгие брюки, качественный кашемир',
      appeal: 'Вечная элегантность без возраста',
      season: 'FW 2024',
      priceRange: '$1,200 - $15,000',
      fullDescription: 'Коллекция Minimalist Essentials воплощает философию "quiet luxury". Безупречный крой, роскошные материалы и вневременной дизайн делают каждую вещь инвестицией на десятилетия.',
      items: [
        { name: 'Cashmere пальто', price: '$5,990' },
        { name: 'Margaux Bag', price: '$6,500' },
        { name: 'Шелковая блуза', price: '$1,890' },
        { name: 'Строгие брюки', price: '$1,250' }
      ],
      targetAudience: 'Для всех, кто ценит качество и вечную элегантность'
    }
  ];

  const lookbooks = [
    {
      title: 'Rick Owens Dark Avant-Garde',
      brand: 'Rick Owens',
      season: 'FW 2024',
      description: 'Драматические черные силуэты с готическими элементами',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80'
    },
    {
      title: 'Maison Margiela Deconstructed',
      brand: 'Maison Margiela',
      season: 'SS 2025',
      description: 'Артистичная деконструкция классических форм',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80'
    },
    {
      title: 'Balenciaga Future Tech',
      brand: 'Balenciaga',
      season: 'FW 2024',
      description: 'Футуристичные формы и инновационные материалы',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80'
    },
    {
      title: 'The Row Quiet Luxury',
      brand: 'The Row',
      season: 'SS 2025',
      description: 'Минималистичная элегантность без излишеств',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80'
    },
    {
      title: 'Streetwear Meets Haute Couture',
      brand: 'Off-White',
      season: 'FW 2024',
      description: 'Уличная культура на подиуме высокой моды',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea1f1c3c?w=800&q=80'
    },
    {
      title: 'Minimalist Monochrome',
      brand: 'Jil Sander',
      season: 'SS 2025',
      description: 'Чистые линии и монохромная палитра',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80'
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
              {['Главная', 'Бренды', 'Показы', 'Тренды', 'Коллекции', 'Лукбуки'].map((item) => (
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
                    onClick={() => setSelectedBrand(brand)}
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
                  <p className="text-black/80 leading-relaxed mb-4">
                    {show.highlight}
                  </p>
                  <Button 
                    className="w-full bg-black text-white hover:bg-pink transition-all"
                    onClick={() => setSelectedShow(show)}
                  >
                    Подробнее о показе
                  </Button>
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
                      onClick={() => setSelectedCollection(collection)}
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

      <section id="лукбуки" className="py-24 bg-gradient-to-br from-black via-pink/10 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gold text-black">ЛУКБУКИ</Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Галерея Образов
            </h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Лучшие образы коллекций 2024-2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lookbooks.map((lookbook, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-gold/30 overflow-hidden group hover:border-pink transition-all duration-500 hover:scale-105"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img 
                    src={lookbook.image} 
                    alt={lookbook.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-3 bg-gold text-black text-xs">{lookbook.season}</Badge>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {lookbook.brand}
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {lookbook.description}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button 
                    className="w-full bg-white/10 text-white border border-gold hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    <Icon name="Eye" size={18} className="mr-2" />
                    Смотреть полностью
                  </Button>
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

      <Dialog open={!!selectedBrand} onOpenChange={() => setSelectedBrand(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black border-gold">
          {selectedBrand && (
            <>
              <DialogHeader>
                <DialogTitle className="text-4xl font-bold text-gold mb-2">
                  {selectedBrand.name}
                </DialogTitle>
                <p className="text-white/70 text-lg">
                  Основан: {selectedBrand.founded} | {selectedBrand.founder}
                </p>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div>
                  <Badge className="mb-3 bg-pink text-white">{selectedBrand.trend}</Badge>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {selectedBrand.story}
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-gold/30">
                  <h4 className="text-xl font-bold text-gold mb-3 flex items-center gap-2">
                    <Icon name="Crown" size={20} />
                    Фирменный стиль
                  </h4>
                  <p className="text-white/80">
                    {selectedBrand.signature}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Ключевые коллекции</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedBrand.collections.map((coll: string, idx: number) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4 border border-gold/20">
                        <p className="text-white font-medium">{coll}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Культовые вещи</h4>
                  <ul className="space-y-2">
                    {selectedBrand.keyPieces.map((piece: string, idx: number) => (
                      <li key={idx} className="text-white/80 flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-gold" />
                        {piece}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedShow} onOpenChange={() => setSelectedShow(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedShow && (
            <>
              <DialogHeader>
                <DialogTitle className="text-4xl font-bold text-black mb-2">
                  {selectedShow.designer} {selectedShow.season}
                </DialogTitle>
                <p className="text-black/70 text-lg">
                  {selectedShow.location} • {selectedShow.date}
                </p>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div className="bg-gradient-to-r from-gold/20 to-pink/20 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                    <Icon name="Sparkles" size={20} />
                    Главная особенность
                  </h4>
                  <p className="text-black/80 text-lg">
                    {selectedShow.highlight}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black mb-3">О показе</h4>
                  <p className="text-black/70 leading-relaxed">
                    {selectedShow.details}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-black/5 rounded-lg p-4">
                    <p className="text-sm text-black/60 mb-1">Место проведения</p>
                    <p className="text-black font-semibold">{selectedShow.venue}</p>
                  </div>
                  <div className="bg-black/5 rounded-lg p-4">
                    <p className="text-sm text-black/60 mb-1">Образов показано</p>
                    <p className="text-black font-semibold">{selectedShow.looks} looks</p>
                  </div>
                  <div className="bg-black/5 rounded-lg p-4">
                    <p className="text-sm text-black/60 mb-1">Музыка</p>
                    <p className="text-black font-semibold">{selectedShow.music}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black mb-4">Ключевые образы</h4>
                  <ul className="space-y-3">
                    {selectedShow.keyLooks.map((look: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 p-3 bg-gold/10 rounded-lg">
                        <Icon name="Star" size={18} className="text-pink mt-1" />
                        <span className="text-black/80">{look}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedCollection} onOpenChange={() => setSelectedCollection(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedCollection && (
            <>
              <DialogHeader>
                <DialogTitle className="text-4xl font-bold text-black mb-2">
                  {selectedCollection.name}
                </DialogTitle>
                <p className="text-black/70 text-lg">
                  {selectedCollection.brand} • {selectedCollection.season}
                </p>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div className="bg-gradient-to-r from-gold/20 to-pink/20 rounded-lg p-6">
                  <Badge className="mb-3 bg-black text-white">{selectedCollection.priceRange}</Badge>
                  <p className="text-black/80 text-lg leading-relaxed">
                    {selectedCollection.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                    <Icon name="ShoppingBag" size={20} />
                    Вещи из коллекции
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCollection.items.map((item: any, idx: number) => (
                      <div key={idx} className="bg-black/5 rounded-lg p-5 hover:bg-gold/10 transition-all">
                        <div className="flex justify-between items-start">
                          <p className="text-black font-medium">{item.name}</p>
                          <Badge className="bg-pink text-white text-sm">{item.price}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black text-white rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gold mb-3 flex items-center gap-2">
                    <Icon name="Users" size={20} />
                    Для кого эта коллекция
                  </h4>
                  <p className="text-white/90">
                    {selectedCollection.targetAudience}
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-black text-white hover:bg-pink">
                    <Icon name="Heart" size={18} className="mr-2" />
                    Добавить в избранное
                  </Button>
                  <Button className="flex-1 bg-gold text-black hover:bg-pink hover:text-white">
                    <Icon name="Share2" size={18} className="mr-2" />
                    Поделиться
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;