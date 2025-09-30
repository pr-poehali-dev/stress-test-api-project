import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={28} />
              <h1 className="text-xl font-bold">StressLab</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#testing" className="text-sm hover:text-primary transition-colors">
                Тестирование
              </a>
              <a href="#dashboard" className="text-sm hover:text-primary transition-colors">
                Панель управления
              </a>
              <a href="#api" className="text-sm hover:text-primary transition-colors">
                API
              </a>
              <a href="#pricing" className="text-sm hover:text-primary transition-colors">
                Тарифы
              </a>
              <a href="#analytics" className="text-sm hover:text-primary transition-colors">
                Статистика
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Discord
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                StressLab
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Massive Power. Real Results.
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Экстремальная нагрузка на сеть: 200-500 Gbps • Layer 4 защита и 2-3 миллиона RPS на 
                Layer 7. Ежедневные обновления, оптимизированные payload и передовые методы обхода 
                для максимальной эффективности.
              </p>
              <div className="flex items-center justify-center gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow">
                  <Icon name="Send" size={18} className="mr-2" />
                  Начать тестирование
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-primary">350+ Gbps</h3>
                  <p className="text-sm text-muted-foreground">Layer 4 Throughput</p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-primary">2,000,000+ RPS</h3>
                  <p className="text-sm text-muted-foreground">Requests per Second</p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-primary">20+ Mpps</h3>
                  <p className="text-sm text-muted-foreground">Packets per Second</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Born for Power, Built with Precision
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Опыт масштабного нагрузочного тестирования с реальной инфраструктурой
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Network Compatibility</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Непревзойденная L4 мощность с постоянными обновлениями. At L7, умные обходы через 
                    номера портов, реальная мощность, реальное воздействие, непревзойденная цена.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name="Cpu" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Bypass Technology</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Высокоэффективные методы, разработанные для имитации реальных пользователей и обхода 
                    продвинутой фильтрации и уровней защиты.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name="Zap" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Scalable & Future-Ready</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Постоянно обновляется и мгновенно доставляется, наша система масштабируется с 
                    потребностями, обеспечивая точность и отличный сервис.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="testing" className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-card border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Icon name="Target" className="text-primary" size={32} />
                    <h2 className="text-3xl font-bold">Панель тестирования</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Target URL</label>
                      <input 
                        type="text" 
                        placeholder="https://example.com"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Test Duration (seconds)</label>
                        <input 
                          type="number" 
                          placeholder="60"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Target RPS</label>
                        <input 
                          type="number" 
                          placeholder="1000"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Attack Method</label>
                      <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option>HTTP Flood</option>
                        <option>SYN Flood</option>
                        <option>UDP Flood</option>
                        <option>ICMP Flood</option>
                      </select>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                      <Icon name="Play" size={20} className="mr-2" />
                      Запустить тест
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="analytics" className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Статистика в реальном времени
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Отслеживайте производительность и эффективность тестов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card className="p-6 bg-card border-border/50">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Активные тесты</span>
                    <Icon name="Activity" className="text-primary" size={18} />
                  </div>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <Icon name="TrendingUp" size={14} />
                    +3 за последний час
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border/50">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Средний RPS</span>
                    <Icon name="BarChart3" className="text-primary" size={18} />
                  </div>
                  <p className="text-3xl font-bold">1.2M</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <Icon name="TrendingUp" size={14} />
                    Стабильно
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border/50">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <Icon name="CheckCircle" className="text-primary" size={18} />
                  </div>
                  <p className="text-3xl font-bold">98.7%</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <Icon name="TrendingUp" size={14} />
                    Отлично
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border/50">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Bandwidth</span>
                    <Icon name="Wifi" className="text-primary" size={18} />
                  </div>
                  <p className="text-3xl font-bold">420 Gbps</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <Icon name="TrendingUp" size={14} />
                    Пик нагрузки
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Тарифы и цены
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Выберите подходящий план для ваших нужд
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Starter</h3>
                    <p className="text-sm text-muted-foreground">Для небольших проектов</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">$49<span className="text-lg text-muted-foreground">/мес</span></p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      До 100K RPS
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      10 Gbps пропускная способность
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      Базовая аналитика
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      Email поддержка
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Выбрать план
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-card border-primary/50 hover:border-primary transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  Популярный
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Professional</h3>
                    <p className="text-sm text-muted-foreground">Для серьезных проектов</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">$199<span className="text-lg text-muted-foreground">/мес</span></p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      До 1M RPS
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      100 Gbps пропускная способность
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      Продвинутая аналитика
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      Приоритетная поддержка 24/7
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      API доступ
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Выбрать план
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                    <p className="text-sm text-muted-foreground">Максимальная мощность</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">$999<span className="text-lg text-muted-foreground">/мес</span></p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      Безлимитный RPS
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      500+ Gbps пропускная способность
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      Полная аналитика и отчеты
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      Dedicated поддержка
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      Полный API и webhook
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-green-500" size={16} />
                      Кастомная инфраструктура
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Связаться с нами
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="font-bold text-lg">StressLab</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Документация
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                API Reference
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Поддержка
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 StressLab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
