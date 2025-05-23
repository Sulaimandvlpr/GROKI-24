import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Waterproof Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1539989177/375037467.gif"
            alt="Waterproof collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="rains-container">
            <h1 className="rains-hero-text mb-6">Waterproof</h1>
            <p className="text-white text-xl mb-8">Rainwear to thrive in all elements.</p>
            <div className="flex gap-4">
              <Link href="/collections/rainwear" className="bg-white px-6 py-3 text-sm uppercase">
                Explore the collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Out There Travel Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1539989177/375037467.gif"
            alt="Travel collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="rains-container">
            <h1 className="rains-hero-text mb-6">Out there.</h1>
            <p className="text-white text-xl mb-8">Travel by Rains.</p>
            <div className="flex gap-4">
              <Link href="/collections/travel-bags" className="bg-white px-6 py-3 text-sm uppercase">
                Explore the collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Edit Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1539989177/375037467.gif"
            alt="Festival collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="rains-container">
            <h1 className="rains-hero-text mb-6">Festival Edit.</h1>
            <p className="text-white text-xl mb-8">Engineered for movement.</p>
            <div className="flex gap-4">
              <Link href="/collections/festival" className="bg-white px-6 py-3 text-sm uppercase">
                Explore the collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suva Hardshell Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1539989177/375037467.gif"
            alt="Suva Hardshell collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="rains-container">
            <h1 className="rains-hero-text mb-6">Suva Hardshell</h1>
            <p className="text-white text-xl mb-8">Tested. Proven. Ready for daily repetition.</p>
            <div className="flex gap-4">
              <Link href="/pages/suva" className="bg-white px-6 py-3 text-sm uppercase">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Veneda for Valera Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1539989177/375037467.gif"
            alt="Veneda collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="rains-container">
            <h1 className="rains-hero-text mb-6">Veneda for Valera</h1>
            <p className="text-white text-xl mb-8">Introducing the Valera Bag.</p>
            <div className="flex gap-4">
              <Link href="/pages/valera" className="bg-white px-6 py-3 text-sm uppercase">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Forever Collection Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1539989177/375037467.gif"
            alt="Forever collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="rains-container">
            <h1 className="rains-hero-text mb-6">FOREVER</h1>
            <p className="text-white text-xl mb-8">The AutumnWinter 2025 runway.</p>
            <div className="flex gap-4">
              <Link href="/pages/forever" className="bg-white px-6 py-3 text-sm uppercase">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Outsiders Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1539989177/375037467.gif"
            alt="The Outsiders collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="rains-container">
            <h1 className="text-[48px] md:text-[72px] font-bold text-white uppercase leading-none mb-6">The Outsiders</h1>
            <p className="text-white text-xl mb-8">SpringSummer 2025.</p>
            <div className="flex gap-4">
              <Link href="/pages/collection-the-outsiders" className="bg-white px-6 py-3 text-sm uppercase">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outerwear Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1539989177/375037467.gif"
            alt="Outerwear collection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="rains-container">
            <h1 className="rains-hero-text mb-6">Outerwear</h1>
            <p className="text-white text-xl mb-8">Transitional styles engineered for everyday adventure.</p>
            <div className="flex gap-4">
              <Link href="/collections/winter" className="bg-white px-6 py-3 text-sm uppercase">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Men & Women Links */}
      <section className="py-16">
        <div className="rains-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/collections/women" className="block group relative h-[500px] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1539989177/286459257.svg"
                alt="Women's collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white uppercase">Women</span>
              </div>
            </Link>
            <Link href="/collections/men" className="block group relative h-[500px] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1539989177/2895575613.svg"
                alt="Men's collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white uppercase">Men</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1539989177/375037467.gif"
            alt="Rains stores"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center">
          <div className="rains-container">
            <h1 className="rains-hero-text mb-6">Rains Stores</h1>
            <div className="flex gap-4">
              <Link href="/pages/stores" className="bg-white px-6 py-3 text-sm uppercase">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
