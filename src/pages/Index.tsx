import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Index = () => {
  const comparisonData = [
    { feature: 'KillAura', minced: true, pouch: true, pouchBetter: 'Улучшенный алгоритм атаки' },
    { feature: 'Velocity', minced: true, pouch: true, pouchBetter: 'Более гибкие настройки' },
    { feature: 'Fly', minced: true, pouch: true, pouchBetter: 'Обход современных античитов' },
    { feature: 'Speed', minced: true, pouch: true, pouchBetter: 'Оптимизированная скорость' },
    { feature: 'NoFall', minced: true, pouch: true, pouchBetter: '' },
    { feature: 'AutoArmor', minced: false, pouch: true, pouchBetter: 'Эксклюзивная функция' },
    { feature: 'ChestStealer', minced: true, pouch: true, pouchBetter: 'Быстрее на 30%' },
    { feature: 'ESP', minced: true, pouch: true, pouchBetter: 'Больше визуальных опций' },
    { feature: 'Scaffold', minced: true, pouch: true, pouchBetter: 'Улучшенная стабильность' },
    { feature: 'AutoPot', minced: false, pouch: true, pouchBetter: 'Только в Pouch' },
    { feature: 'AntiBot', minced: true, pouch: true, pouchBetter: 'Лучшее распознавание' },
    { feature: 'ClickGUI', minced: 'Базовый', pouch: 'Продвинутый', pouchBetter: 'Современный интерфейс' },
  ];

  const pouchAdvantages = [
    {
      icon: 'Zap',
      title: 'Оптимизация',
      description: 'Pouch использует меньше ресурсов и работает быстрее на 40%'
    },
    {
      icon: 'Shield',
      title: 'Лучший обход античитов',
      description: 'Регулярные обновления для обхода новейших защитных систем'
    },
    {
      icon: 'Palette',
      title: 'Современный интерфейс',
      description: 'Интуитивный ClickGUI с темной темой и кастомизацией'
    },
    {
      icon: 'Users',
      title: 'Активное комьюнити',
      description: 'Быстрая поддержка и регулярные обновления функций'
    },
    {
      icon: 'Settings',
      title: 'Больше настроек',
      description: 'Тонкая настройка каждой функции под ваш стиль игры'
    },
    {
      icon: 'TrendingUp',
      title: 'Эксклюзивные модули',
      description: 'AutoArmor, AutoPot и другие уникальные возможности'
    }
  ];

  const reviews = [
    {
      name: 'xXDimaXx',
      rating: 5,
      text: 'Перешел с Minced на Pouch - разница огромная! Fly работает идеально, KillAura намного точнее.'
    },
    {
      name: 'ProGamer2024',
      rating: 5,
      text: 'AutoArmor в Pouch просто спасение. В Minced его вообще нет, а тут работает как часы.'
    },
    {
      name: 'MinecraftPro',
      rating: 5,
      text: 'ClickGUI в Pouch выглядит современно, все понятно. В Minced интерфейс устаревший.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black">
              Minced vs <span className="text-green">Pouch</span>
            </h1>
            <div className="flex items-center gap-6">
              <Button className="bg-green hover:bg-green/90 text-white">
                Скачать Pouch
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-light-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green text-white">Честное сравнение</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Почему <span className="text-green">Pouch</span> лучше Minced?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Подробное сравнение двух популярных Minecraft читов. 
              Факты, цифры и реальные преимущества Pouch клиента.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green hover:bg-green/90 text-white text-lg px-8">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать Pouch
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Смотреть сравнение
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black text-white">Сравнение функций</Badge>
            <h3 className="text-4xl font-bold text-black mb-4">
              Функция за функцией
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Детальное сравнение всех возможностей
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-light-gray">
                      <TableHead className="font-bold text-black w-1/4">Функция</TableHead>
                      <TableHead className="font-bold text-black text-center w-1/6">Minced</TableHead>
                      <TableHead className="font-bold text-green text-center w-1/6">Pouch</TableHead>
                      <TableHead className="font-bold text-black w-5/12">Преимущество Pouch</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((item, index) => (
                      <TableRow key={index} className="hover:bg-light-gray/50 transition-colors">
                        <TableCell className="font-medium">{item.feature}</TableCell>
                        <TableCell className="text-center">
                          {typeof item.minced === 'boolean' ? (
                            item.minced ? (
                              <Icon name="Check" className="text-gray-400 mx-auto" size={20} />
                            ) : (
                              <Icon name="X" className="text-red-500 mx-auto" size={20} />
                            )
                          ) : (
                            <span className="text-sm text-gray-600">{item.minced}</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {typeof item.pouch === 'boolean' ? (
                            item.pouch ? (
                              <Icon name="Check" className="text-green mx-auto" size={20} />
                            ) : (
                              <Icon name="X" className="text-red-500 mx-auto" size={20} />
                            )
                          ) : (
                            <span className="text-sm font-medium text-green">{item.pouch}</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {item.pouchBetter && (
                            <span className="text-sm text-gray-700">{item.pouchBetter}</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green text-white">Преимущества</Badge>
            <h3 className="text-4xl font-bold text-black mb-4">
              Почему выбирают Pouch
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              6 ключевых причин перейти на Pouch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pouchAdvantages.map((advantage, index) => (
              <Card 
                key={index}
                className="border-2 border-gray-200 hover:border-green transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} className="text-green" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black text-white">Отзывы</Badge>
            <h3 className="text-4xl font-bold text-black mb-4">
              Что говорят игроки
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реальные отзывы тех, кто переключился на Pouch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-green fill-green" size={18} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="text-sm font-medium text-black">
                    — {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">
              Готовы попробовать Pouch?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Присоединяйтесь к тысячам игроков, которые уже сделали выбор в пользу лучшего клиента
            </p>
            <Button size="lg" className="bg-white text-green hover:bg-gray-100 text-lg px-10">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать Pouch бесплатно
            </Button>
            <p className="text-sm mt-4 text-white/70">
              Совместим с Minecraft 1.8 - 1.20 | Регулярные обновления
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-white/70 mb-4">
              Minced vs Pouch — честное сравнение читов для Minecraft
            </p>
            <p className="text-white/40 text-sm">
              © 2025 Все права защищены. Используйте читы ответственно.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
