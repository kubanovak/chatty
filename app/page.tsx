import { CloudIcon, GlobeIcon, MessageCircle, MessageCircleQuestionMarkIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: 'Uložte si veškeré své PDF dokumenty',
    description: 'Uchovávejte všechny své důležité PDF soubory bezpečně uložené a snadno dostupné kdykoli a kdekoli.',
    icon: GlobeIcon,
  },
  {
    name: 'Chatujte se svými dokumenty',
    description: 'Nahrajte PDF a ptejte se chatbota na obsah. Získejte okamžité odpovědi bez nutnosti pročítat celý dokument.',
    icon: MessageCircleQuestionMarkIcon,
  },
  {
    name: 'Rychlé vyhledávání',
    description: 'Najděte přesně to, co hledáte – během okamžiku vyhledáte konkrétní pasáže nebo témata v uložených PDF.',
    icon: SearchIcon,
  },
  {
    name: 'Přístup odkudkoli',
    description: 'Vaše PDF dokumenty i chat s nimi máte vždy po ruce – v práci, doma nebo na cestách.',
    icon: CloudIcon,
  },
];


export default function Home() {
  return (
      <main className="overflow-scroll p-2 lg: p-5 bg-gradient-to-bl from-white to-sky-600 flex-1">
        <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl ">
          <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg: px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-sky-800">Tvůj chytrý dokumentový pomocník.</h2>
              <h1 className="mt-2 text-3xl font-bold tracking-light text-gray-900 sm: text-6xl">Proměňte své PDF soubory v konverzace pomocí AI</h1>

              <p>
                Představujeme {""}<span className="font-bold text-sky-800"> chatty.</span>
                <br>
                </br>
                Nahrajte svůj dokument, a nechte našheho chatbota zodpovědět vaše otázky nebo třeba shrnout obsah. Ideální pro každého, <span className="text-sky-800"> chatty </span> vám umožní pomocí <span className="text-sky-800"> dynamických konverzací</span> zjišťovat informace efektivněji, než kdy dříve.
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}
