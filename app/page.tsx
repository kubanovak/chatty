import { Button } from "@/components/ui/button";
import { CloudIcon, GlobeIcon, MessageCircle, MessageCircleQuestionMarkIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    description: 'Najděte přesně to, co hledáte - během okamžiku vyhledáte konkrétní pasáže nebo témata v uložených PDF.',
    icon: SearchIcon,
  },
  {
    name: 'Přístup odkudkoli',
    description: 'Vaše PDF dokumenty i chaty s nimi máte vždy po ruce - v práci, doma nebo na cestách.',
    icon: CloudIcon,
  },
];


export default function Home() {
  return (
      <main className="overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-sky-600 flex-1">
        <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl ">
          <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-sky-800">Tvůj chytrý dokumentový pomocník.</h2>
              <h1 className="mt-2 text-3xl font-bold tracking-light text-gray-900 sm:text-6xl">Proměňte své PDF soubory v konverzace pomocí AI</h1>

              <p className="mt-6 text-lg leading-8 text-gray-700">
                Představujeme {""}<span className="font-bold text-sky-800"> chatty.</span>
                <br/>
                Nahrajte svůj dokument, a nechte našeho chatbota zodpovědět vaše otázky nebo třeba shrnout obsah. Ideální pro každého, <span className="text-sky-800"> chatty </span> vám umožní pomocí <span className="text-sky-800"> dynamických konverzací</span> zjišťovat informace efektivněji, než kdy dříve.
              </p>
            </div>
            <Button asChild className="mt-10">
              <Link href='/dashboard'>Vyzkoušejte chatty.</Link>
            </Button>
          </div>
            <div className="realtive overflow-hidden pt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Image
                  alt="App screenshot"
                  src="https://i.imgur.com/VciRSTI.jpeg"
                  width={2432}
                  height={1442}
                  className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                />
                  <div aria-hidden='true' className="relative">
                    <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/90 pt-[5%]"/>
                  </div>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
              <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-700 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                {features.map(feature => (
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 ">
                      <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-s ky-700"/>

                    </dt>
                    <dd>
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
        </div>
      </main>
  );
}
