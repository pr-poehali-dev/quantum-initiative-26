import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"

const years = [
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
]

const History = () => {
  const [openYear, setOpenYear] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-white">
      {/* Header */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/9e05ba0e-d727-4f3f-85be-4d3b8622c368/bucket/b97cdd54-740a-4a4e-807d-75727cd7c883.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#1A0F0A]" />
        </div>

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-3">
          <div className="relative z-10 flex justify-start px-0 pt-4">
            <img
              src="https://cdn.poehali.dev/projects/9e05ba0e-d727-4f3f-85be-4d3b8622c368/bucket/ce371f78-cb47-4c2f-9c09-c18840d0cebb.png"
              alt="Логотип фестиваля"
              className="w-20 h-20 object-contain drop-shadow-2xl"
            />
          </div>
          <div className="hidden md:flex items-center gap-1">
            <Link to="/about" className="px-4 py-2 bg-[#C4855A]/80 ring-1 ring-[#C4855A] backdrop-blur rounded-full hover:bg-[#C4855A] transition-colors text-sm">
              О фестивале
            </Link>
            <Link to="/history" className="px-4 py-2 bg-[#C4855A] ring-1 ring-[#C4855A] backdrop-blur rounded-full text-sm font-semibold">
              История
            </Link>
            {["Программа", "Вопросы", "Контакты"].map((item) => (
              <a key={item} href="#" className="px-4 py-2 bg-[#C4855A]/80 ring-1 ring-[#C4855A] backdrop-blur rounded-full hover:bg-[#C4855A] transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
          <Link to="/">
            <Button className="bg-[#8B3A2A] text-white hover:bg-[#A0432F] rounded-full px-6">На главную</Button>
          </Link>
        </nav>

        <div className="relative z-10 px-6 pb-24 pt-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">История фестиваля</h1>
          <p className="text-xl text-white/70">«А музы не молчат» · 2008–2025</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto px-6 py-16">
        {/* Vertical line */}
        <div className="absolute left-[2.35rem] md:left-1/2 top-16 bottom-16 w-px bg-[#C4855A]/30" />

        <div className="space-y-6">
          {years.map((year, index) => (
            <div
              key={year}
              className={`relative flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Dot */}
              <div className="absolute left-[1.85rem] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C4855A] ring-4 ring-[#1A0F0A] z-10 mt-5" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <button
                  onClick={() => setOpenYear(openYear === year ? null : year)}
                  className="w-full text-left rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-[#C4855A]/50 hover:bg-white/8 transition-all p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#C4855A]">{year}</span>
                    <Icon
                      name={openYear === year ? "ChevronUp" : "ChevronDown"}
                      size={18}
                      className="text-white/40"
                    />
                  </div>
                  <p className="text-white/50 text-sm mt-1">Фестиваль фронтовой поэзии · Борки</p>

                  {openYear === year && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-white/60 text-sm leading-relaxed italic">
                        Описание фестиваля {year} года будет добавлено. Вы можете прислать фотографии и материалы организаторам.
                      </p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-20 px-6">
        <p className="text-white/50 mb-6 text-sm">Есть фотографии или воспоминания о фестивале? Поделитесь с нами!</p>
        <Link to="/">
          <Button size="lg" className="bg-[#8B3A2A] text-white hover:bg-[#A0432F] rounded-full px-12 py-4 text-lg font-semibold">
            Написать организаторам
          </Button>
        </Link>
      </div>

      <footer className="py-8 px-6 text-center text-white/40 text-sm border-t border-white/10">
        © 2026 Фестиваль «А музы не молчат!» · 2–3 мая · д. Борки, Псковская область
      </footer>
    </div>
  )
}

export default History
