import { BookOpen, Heart, Music, Star, Users, Calendar, MapPin, Plus, Minus, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Кто может участвовать в фестивале?",
      answer:
        "Фестиваль открыт для всех желающих — поэтов, любителей поэзии, ветеранов, школьников и всех, кто чтит память защитников Отечества. Участие бесплатное.",
    },
    {
      question: "Как подать заявку на участие?",
      answer:
        "Заявки принимаются через контактную форму на сайте или по электронной почте. Укажите ваше имя, населённый пункт, возраст и произведения, которые планируете представить.",
    },
    {
      question: "Где проходит фестиваль?",
      answer:
        "Фестиваль проводится в деревне Борки Великолукского района Псковской области — на земле, хранящей память о Великой Отечественной войне.",
    },
    {
      question: "Есть ли возрастные ограничения?",
      answer:
        "Нет. Мы рады участникам всех возрастов — от школьников до ветеранов. Фронтовая поэзия живёт в каждом поколении.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/9e05ba0e-d727-4f3f-85be-4d3b8622c368/bucket/b97cdd54-740a-4a4e-807d-75727cd7c883.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <img src="https://cdn.poehali.dev/projects/9e05ba0e-d727-4f3f-85be-4d3b8622c368/bucket/ce371f78-cb47-4c2f-9c09-c18840d0cebb.png" alt="Логотип фестиваля" className="w-8 h-8 object-contain" />
            <span className="font-medium text-balance">А музы не молчат!</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["О фестивале", "Программа", "История", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-[#8B3A2A] text-white hover:bg-[#A0432F] rounded-full px-6">Участвовать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <img
            src="https://cdn.poehali.dev/projects/9e05ba0e-d727-4f3f-85be-4d3b8622c368/bucket/ce371f78-cb47-4c2f-9c09-c18840d0cebb.png"
            alt="Логотип фестиваля"
            className="w-40 h-40 md:w-56 md:h-56 object-contain mb-6 drop-shadow-2xl"
          />

          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">2–3 мая 2026 · Борки, Псковская область</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            А музы не молчат!
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Фестиваль фронтовой поэзии в деревне Борки Великолукского района — место, где живёт память, звучат стихи и не угасает благодарность защитникам Отечества.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-[#8B3A2A] text-white hover:bg-[#A0432F] rounded-full px-8 py-4 text-lg">
              Подать заявку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать программу
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="MapPin" size={16} />
            <span className="text-sm font-medium">д. Борки, Великолукский район, Псковская область</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="BookOpen" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Живое слово</h3>
              <p className="text-white/80 leading-relaxed">Стихи фронтовых поэтов и современных авторов о войне, памяти и подвиге.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Heart" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Живая память</h3>
              <p className="text-white/80 leading-relaxed">Фестиваль проходит на псковской земле, хранящей память о защитниках Отечества.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Users" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Открыто для всех</h3>
              <p className="text-white/80 leading-relaxed">Участие бесплатное. Приглашаем поэтов, ветеранов, школьников и всех неравнодушных.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Music" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Культурная программа</h3>
              <p className="text-white/80 leading-relaxed">Выступления, концерты, встречи с авторами и мастер-классы по поэтическому слову.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Программа фестиваля</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                2–3 мая 2026 года — два дня поэзии, памяти и живого общения на псковской земле.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Открытие</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Торжественная церемония открытия, возложение цветов к мемориалу, приветственное слово организаторов и почётных гостей.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Чтения</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Поэтические чтения участников фестиваля — фронтовая лирика, стихи о Великой Отечественной войне и современная военная поэзия.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Концерт</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Музыкально-поэтический концерт: романсы на стихи военных поэтов, авторская песня, выступления творческих коллективов района.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Закрытие</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Награждение участников, слово ветеранов, общая фотография и тёплые проводы до следующего фестиваля.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#8B3A2A] text-white hover:bg-[#A0432F] rounded-full px-12 py-4 text-lg font-semibold"
              >
                Подать заявку на участие
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать об участии в фестивале фронтовой поэзии «А музы не молчат!»
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Подать заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя и фамилия
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="Ваше полное имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Расскажите о себе и вашем участии
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                      placeholder="Откуда вы, какие произведения планируете представить..."
                    />
                  </div>
                  <Button className="w-full bg-[#8B3A2A] text-white hover:bg-[#A0432F] rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Мы ждём поэтов, чтецов, музыкантов и всех, кто хочет сохранить живую память о фронтовой поэзии. Напишите нам — ответим в течение нескольких дней.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <Icon name="BookOpen" size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Светлана Размыслович</h4>
                      <p className="text-gray-600 text-sm">АНО «Центр творчества и досуга "Радуга"»</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Icon name="MapPin" size={14} />
                    <span>д. Борки, Великолукский район, Псковская обл.</span>
                  </div>
                  <a href="tel:+79113714786" className="flex items-center gap-2 text-sm text-gray-600 mb-4 hover:text-black transition-colors">
                    <Icon name="Phone" size={14} />
                    <span>8-911-371-47-86</span>
                  </a>
                  <Button className="w-full bg-[#8B3A2A] text-white hover:bg-[#A0432F] rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать организаторам
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img src="https://cdn.poehali.dev/projects/9e05ba0e-d727-4f3f-85be-4d3b8622c368/bucket/ce371f78-cb47-4c2f-9c09-c18840d0cebb.png" alt="Логотип фестиваля" className="w-12 h-12 object-contain" />
                  <span className="text-xl font-semibold">А музы не молчат!</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Ежегодный фестиваль фронтовой поэзии в деревне Борки Великолукского района Псковской области. Память живёт в слове.
                </p>
                <p className="text-white/50 text-sm mt-3">Организатор: АНО «Центр творчества и досуга "Радуга"»</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ФЕСТИВАЛЬ</h3>
                <ul className="space-y-3">
                  {["О фестивале", "Программа", "Участники", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ИСТОРИЯ</h3>
                <ul className="space-y-3">
                  {["О фронтовой поэзии", "Известные авторы", "Борки и память", "Архив лет"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">УЧАСТИЕ</h3>
                <ul className="space-y-3">
                  {["Как подать заявку", "Контакты", "Вопросы и ответы", "Партнёры"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости фестиваля</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-[#8B3A2A] text-white hover:bg-[#A0432F] rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Фестиваль «А музы не молчат!» · 2–3 мая · д. Борки, Псковская область</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index