"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import en from "../translations/en";
import fr from "../translations/fr";
import ar from "../translations/ar";

type Language = "en" | "fr" | "ar";

const translations = {
  en,
  fr,
  ar,
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];
  const isArabic = language === "ar";
  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
      className="min-h-screen bg-[#f4f1eb] text-[#1c1c1a]"
    >
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=90')",
            }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
        </div>

        {/* Navigation */}
        <header className="relative z-20 flex items-center justify-between px-6 py-6 text-white md:px-12">
          <Link href="/" className="block transition hover:opacity-70">
            <p className="text-xs tracking-[0.35em] uppercase">
              Maison
            </p>
            <p className="font-serif text-2xl tracking-wide">
              Élysée
            </p>
          </Link>

          <nav className="hidden items-center gap-10 text-sm md:flex">
            <a href="#rooms" className="transition hover:opacity-60">
              {t.nav.rooms}
            </a>

            <a href="#experience" className="transition hover:opacity-60">
              {t.nav.experiences}
            </a>

            <a href="#gallery" className="transition hover:opacity-60">
              {t.nav.gallery}
            </a>

            <a href="#contact" className="transition hover:opacity-60">
              {t.nav.contact}
            </a>
          </nav>

          <a
            href="#availability"
            className="hidden border border-white/60 px-6 py-3 text-xs tracking-[0.2em] uppercase transition hover:bg-white hover:text-black md:block"
          >
            {t.nav.book}
          </a>

          <div className="hidden items-center gap-2 text-xs tracking-[0.15em] md:flex">
            {(["en", "fr", "ar"] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 uppercase transition ${
                  language === lang
                    ? "text-white"
                    : "text-white/45 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Mobile menu */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-sm md:hidden"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1/2 h-px w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-px w-5 bg-white transition-all duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-px w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </header>
        {menuOpen && (
          <div className="absolute left-4 right-4 top-24 z-50 rounded-2xl border border-white/20 bg-black/35 p-6 text-white shadow-2xl backdrop-blur-xl md:hidden">
            <nav className="flex flex-col">
              <a
                href="#rooms"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 text-lg transition-opacity hover:opacity-60"
              >
                {t.nav.rooms}
              </a>

              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 text-lg transition-opacity hover:opacity-60"
              >
                {t.nav.experiences}
              </a>

              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 text-lg transition-opacity hover:opacity-60"
              >
                {t.nav.gallery}
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="py-4 text-lg transition-opacity hover:opacity-60"
              >
                {t.nav.contact}
              </a>
            </nav>
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
              {(["en", "fr", "ar"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition ${
                    language === lang
                      ? "border-white bg-white text-black"
                      : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <a
              href="#availability"
              onClick={() => setMenuOpen(false)}
              className="mt-5 block w-full rounded-full bg-white px-6 py-4 text-center text-xs font-medium tracking-[0.2em] text-black uppercase transition hover:bg-white/90"
            >
              {t.nav.book}
            </a>
          </div>
        )}

        {/* Hero */}
        <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-end px-6 pb-32 text-white md:px-12 md:pb-36">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs tracking-[0.45em] uppercase text-white/80">
              {t.hero.eyebrow}
            </p>

            <h1 className="font-serif text-6xl leading-[0.9] tracking-tight sm:text-7xl md:text-9xl">
              {t.hero.title}
            </h1>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#about"
                className="border border-white/60 bg-transparent px-8 py-4 text-center text-sm tracking-wide text-white transition duration-300 hover:bg-white hover:text-black"
              >
                {t.hero.discover}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-4 text-white md:flex md:right-12">
          <span className="text-[10px] tracking-[0.3em] uppercase">
            {t.hero.scroll}
          </span>
          <div className="h-px w-16 bg-white/60" />
        </div>
      </section>

      {/* Intro */}
      <section id="about" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] uppercase text-black/50">
              {t.maison.eyebrow}
            </p>

            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              {t.maison.title}
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-lg leading-8 text-black/65">
              {t.maison.text}
            </p>

            <a
              href="#about"
              className="mt-8 inline-block border-b border-black pb-2 text-sm tracking-wide"
            >
              {t.maison.link}
            </a>
          </div>
        </div>
      </section>

      {/* Rooms & Suites */}
      <section id="rooms" className="bg-[#e9e5dc] px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] uppercase text-black/50">
                {t.rooms.eyebrow}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                {t.rooms.title}
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/60">
              {t.rooms.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Deluxe Room */}
            <article className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=85"
                  alt={t.rooms.deluxe}
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 bg-white/90 px-4 py-2 text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                  {t.rooms.priceFrom} €120
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-3xl">{t.rooms.deluxe}</h3>

                  <p className="mt-3 text-sm text-black/55">
                    {t.rooms.specs.deluxe}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-2 shrink-0 border-b border-black pb-1 text-xs tracking-[0.15em] uppercase"
                >
                  {t.rooms.explore}
                </a>
              </div>
            </article>

            {/* Executive Room */}
            <article className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85"
                  alt={t.rooms.executive}
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 bg-white/90 px-4 py-2 text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                  {t.rooms.priceFrom} €145
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-3xl">{t.rooms.executive}</h3>

                  <p className="mt-3 text-sm text-black/55">
                    {t.rooms.specs.executive}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-2 shrink-0 border-b border-black pb-1 text-xs tracking-[0.15em] uppercase"
                >
                  {t.rooms.explore}
                </a>
              </div>
            </article>

            {/* Junior Suite */}
            <article className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=85"
                  alt={t.rooms.junior}
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 bg-white/90 px-4 py-2 text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                  {t.rooms.priceFrom} €185
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-3xl">{t.rooms.junior}</h3>

                  <p className="mt-3 text-sm text-black/55">
                    {t.rooms.specs.junior}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-2 shrink-0 border-b border-black pb-1 text-xs tracking-[0.15em] uppercase"
                >
                  {t.rooms.explore}
                </a>
              </div>
            </article>

            {/* Presidential Suite */}
            <article className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85"
                  alt={t.rooms.presidential}
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 bg-white/90 px-4 py-2 text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                  {t.rooms.priceFrom} €240
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-3xl">
                    {t.rooms.presidential}
                  </h3>

                  <p className="mt-3 text-sm text-black/55">
                    {t.rooms.specs.presidential}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-2 shrink-0 border-b border-black pb-1 text-xs tracking-[0.15em] uppercase"
                >
                  {t.rooms.explore}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-[#1c1c1a] px-6 py-24 text-[#f4f1eb] md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
            {/* Introduction */}
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] uppercase text-white/40">
                {t.amenities.eyebrow}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                {t.amenities.title}
              </h2>

              <p className="mt-8 max-w-sm text-base leading-7 text-white/50">
                {t.amenities.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 border-t border-white/15">
              {(
                ["01", "02", "03", "04", "05", "06", "07", "08"] as const
              ).map((num, idx) => {
                const isLeftCol = idx % 2 === 0;
                const isLastRow = idx >= 6;
                return (
                  <div
                    key={num}
                    className={`py-8 md:py-10 ${
                      isLeftCol ? "pr-6" : "pl-6"
                    } ${
                      isLeftCol && !isLastRow
                        ? "border-b border-r border-white/15"
                        : ""
                    } ${
                      !isLeftCol && !isLastRow
                        ? "border-b border-white/15"
                        : ""
                    } ${
                      isLeftCol && isLastRow
                        ? "border-b border-r border-white/15 md:border-b-0"
                        : ""
                    } ${
                      !isLeftCol && isLastRow
                        ? "border-b border-white/15 md:border-b-0"
                        : ""
                    }`}
                  >
                    <span className="text-xs text-white/30">{num}</span>

                    <h3 className="mt-5 font-serif text-2xl">
                      {t.amenities.items[num].title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      {t.amenities.items[num].description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#f4f1eb] px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] uppercase text-black/50">
                {t.gallery.eyebrow}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                {t.gallery.title}
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/60">
              {t.gallery.description}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-5 md:grid-cols-12">
            {/* Large Image */}
            <div className="group relative overflow-hidden md:col-span-7">
              <div className="aspect-[4/3] md:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
                  alt="Luxury hotel interior"
                  width={1800}
                  height={2250}
                  className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20 text-white">
                <p className="text-xs tracking-[0.25em] uppercase text-white/70">
                  {t.gallery.lobbyLabel}
                </p>

                <p className="mt-2 font-serif text-2xl">
                  {t.gallery.lobbyCaption}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="grid gap-5 md:col-span-5">
              {/* Image 2 */}
              <div className="group relative overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
                    alt="Boutique hotel lounge"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16 text-white">
                  <p className="text-xs tracking-[0.25em] uppercase text-white/70">
                    {t.gallery.loungeLabel}
                  </p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="group relative overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
                    alt="Elegant hotel bedroom"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16 text-white">
                  <p className="text-xs tracking-[0.25em] uppercase text-white/70">
                    {t.gallery.interiorsLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Wide Bottom Image */}
            <div className="group relative overflow-hidden md:col-span-12">
              <div className="aspect-[16/7]">
                <Image
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=90"
                  alt="Luxury hotel terrace"
                  width={2400}
                  height={1050}
                  className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20 text-white">
                <p className="text-xs tracking-[0.25em] uppercase text-white/70">
                  {t.gallery.terraceLabel}
                </p>

                <p className="mt-2 font-serif text-2xl md:text-3xl">
                  {t.gallery.terraceCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section
        id="experience"
        className="bg-[#e9e5dc] px-6 py-24 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] uppercase text-black/50">
                {t.experiences.eyebrow}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                {t.experiences.title}
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/60">
              {t.experiences.description}
            </p>
          </div>

          {/* Main Experience */}
          <div className="mt-16 grid gap-8 md:grid-cols-12 md:items-center">
            {/* Image */}
            <div className="group relative overflow-hidden md:col-span-7">
              <div className="aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=90"
                  alt="Mountain landscape near Sétif"
                  width={1800}
                  height={1350}
                  className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-5 md:pl-10">
              <p className="text-xs tracking-[0.25em] uppercase text-black/40">
                01
              </p>

              <h3 className="mt-5 font-serif text-4xl md:text-5xl">
                {t.experiences.mainTitle}
              </h3>

              <p className="mt-6 max-w-md text-base leading-7 text-black/60">
                {t.experiences.mainText}
              </p>

              <div className="mt-8 flex items-center gap-4 text-xs tracking-[0.2em] uppercase">
                <span className="h-px w-10 bg-black/30" />
                <span>{t.experiences.mainTag}</span>
              </div>
            </div>
          </div>

          {/* Experience List */}
          <div className="mt-20 border-t border-black/15">
            {(["02", "03", "04", "05"] as const).map((num) => (
              <div
                key={num}
                className="group grid gap-5 border-b border-black/15 py-8 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-10"
              >
                <span className="text-xs text-black/35">{num}</span>

                <div>
                  <h3 className="font-serif text-3xl">
                    {t.experiences.items[num].title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                    {t.experiences.items[num].text}
                  </p>
                </div>

                <span className="text-xs tracking-[0.15em] uppercase text-black/40">
                  {t.experiences.items[num].tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="bg-[#1c1c1a] px-6 py-24 text-[#f4f1eb] md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] uppercase text-white/40">
                {t.reviews.eyebrow}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                {t.reviews.title}
              </h2>
            </div>

            <div className="md:text-right">
              <p className="font-serif text-5xl">4.9</p>

              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-white/40">
                {t.reviews.rating}
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-16 grid border-t border-white/15 md:grid-cols-3">
            {(["01", "02", "03"] as const).map((num, idx) => (
              <article
                key={num}
                className={`border-white/15 py-10 ${
                  idx < 2
                    ? "border-b md:border-b-0 md:border-r"
                    : ""
                } ${
                  idx === 0
                    ? "md:pr-10"
                    : idx === 1
                    ? "md:px-10"
                    : "md:pl-10"
                }`}
              >
                <div className="text-sm tracking-[0.2em] text-white/50">
                  ★★★★★
                </div>

                <blockquote className="mt-8 font-serif text-2xl leading-relaxed">
                  “{t.reviews.items[num].quote}”
                </blockquote>

                <div className="mt-10">
                  <p className="text-sm">{t.reviews.items[num].name}</p>

                  <p className="mt-1 text-xs text-white/40">
                    {t.reviews.items[num].location}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/15 pt-8 text-xs tracking-[0.15em] uppercase text-white/35 md:flex-row">
            <span>{t.reviews.note1}</span>
            <span>{t.reviews.note2}</span>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section
        id="availability"
        className="bg-[#f4f1eb] px-6 py-24 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] uppercase text-black/50">
                {t.availability.eyebrow}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                {t.availability.title}
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-black/60">
              {t.availability.description}
            </p>
          </div>

          {/* Form */}
          <form className="mt-16 border-t border-black/15">
            {/* Dates */}
            <div className="grid md:grid-cols-2">
              <div className="border-b border-black/15 py-8 md:border-r md:pr-10">
                <label
                  htmlFor="checkin"
                  className="text-xs tracking-[0.2em] uppercase text-black/45"
                >
                  {t.availability.checkIn}
                </label>

                <input
                  id="checkin"
                  type="date"
                  className="mt-4 block w-full bg-transparent text-lg outline-none"
                />
              </div>

              <div className="border-b border-black/15 py-8 md:pl-10">
                <label
                  htmlFor="checkout"
                  className="text-xs tracking-[0.2em] uppercase text-black/45"
                >
                  {t.availability.checkOut}
                </label>

                <input
                  id="checkout"
                  type="date"
                  className="mt-4 block w-full bg-transparent text-lg outline-none"
                />
              </div>
            </div>

            {/* Guests / Room */}
            <div className="grid md:grid-cols-2">
              <div className="border-b border-black/15 py-8 md:border-r md:pr-10">
                <label
                  htmlFor="guests"
                  className="text-xs tracking-[0.2em] uppercase text-black/45"
                >
                  {t.availability.guestsLabel}
                </label>

                <select
                  id="guests"
                  defaultValue="2"
                  className="mt-4 block w-full bg-transparent text-lg outline-none"
                >
                  <option value="1">{t.availability.guestOption1}</option>
                  <option value="2">{t.availability.guestOption2}</option>
                  <option value="3">{t.availability.guestOption3}</option>
                  <option value="4">{t.availability.guestOption4}</option>
                </select>
              </div>

              <div className="border-b border-black/15 py-8 md:pl-10">
                <label
                  htmlFor="room"
                  className="text-xs tracking-[0.2em] uppercase text-black/45"
                >
                  {t.availability.roomTypeLabel}
                </label>

                <select
                  id="room"
                  defaultValue="any"
                  className="mt-4 block w-full bg-transparent text-lg outline-none"
                >
                  <option value="any">{t.availability.roomAny}</option>
                  <option value="deluxe">{t.rooms.deluxe}</option>
                  <option value="executive">{t.rooms.executive}</option>
                  <option value="junior">{t.rooms.junior}</option>
                  <option value="presidential">
                    {t.rooms.presidential}
                  </option>
                </select>
              </div>
            </div>

            {/* Personal details */}
            <div className="grid md:grid-cols-2">
              <div className="border-b border-black/15 py-8 md:border-r md:pr-10">
                <label
                  htmlFor="name"
                  className="text-xs tracking-[0.2em] uppercase text-black/45"
                >
                  {t.availability.fullName}
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder={t.availability.fullNamePlaceholder}
                  className="mt-4 block w-full bg-transparent text-lg placeholder:text-black/25 outline-none"
                />
              </div>

              <div className="border-b border-black/15 py-8 md:pl-10">
                <label
                  htmlFor="email"
                  className="text-xs tracking-[0.2em] uppercase text-black/45"
                >
                  {t.availability.email}
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder={t.availability.emailPlaceholder}
                  className="mt-4 block w-full bg-transparent text-lg placeholder:text-black/25 outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="border-b border-black/15 py-8">
              <label
                htmlFor="phone"
                className="text-xs tracking-[0.2em] uppercase text-black/45"
              >
                {t.availability.phone}
              </label>

              <input
                id="phone"
                type="tel"
                placeholder={t.availability.phonePlaceholder}
                className="mt-4 block w-full bg-transparent text-lg placeholder:text-black/25 outline-none"
              />
            </div>

            {/* Message */}
            <div className="border-b border-black/15 py-8">
              <label
                htmlFor="message"
                className="text-xs tracking-[0.2em] uppercase text-black/45"
              >
                {t.availability.message}
              </label>

              <textarea
                id="message"
                rows={4}
                placeholder={t.availability.messagePlaceholder}
                className="mt-4 block w-full resize-none bg-transparent text-lg placeholder:text-black/25 outline-none"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-center">
              <p className="max-w-md text-xs leading-5 text-black/40">
                {t.availability.disclaimer}
              </p>

              <button
                type="submit"
                className="w-full bg-[#1c1c1a] px-10 py-5 text-xs tracking-[0.2em] text-white uppercase transition hover:bg-black sm:w-auto"
              >
                {t.availability.button}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Location */}
      <section
        id="location"
        className="bg-[#e9e5dc] px-6 py-24 md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            {/* Left */}
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] uppercase text-black/50">
                {t.location.eyebrow}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                {t.location.title}
              </h2>

              <p className="mt-8 max-w-lg text-base leading-7 text-black/60">
                {t.location.description}
              </p>

              <div className="mt-10 space-y-6 border-t border-black/15 pt-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-black/40">
                    {t.location.address}
                  </p>

                  <p className="mt-2 text-sm">{t.location.addressValue}</p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-black/40">
                    {t.location.airport}
                  </p>

                  <p className="mt-2 text-sm">{t.location.airportTime}</p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-black/40">
                    {t.location.centre}
                  </p>

                  <p className="mt-2 text-sm">{t.location.centreTime}</p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-10 inline-block border-b border-black pb-2 text-xs tracking-[0.15em] uppercase"
              >
                {t.location.directions}
              </a>
            </div>

            {/* Map-style visual */}
            <div className="relative min-h-[420px] overflow-hidden bg-[#d7d1c5] md:min-h-[560px]">
              {/* Decorative map grid */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute left-[15%] top-0 h-full w-px rotate-[12deg] bg-black/20" />
                <div className="absolute left-[42%] top-0 h-full w-px -rotate-[18deg] bg-black/20" />
                <div className="absolute left-[70%] top-0 h-full w-px rotate-[25deg] bg-black/20" />

                <div className="absolute left-0 top-[25%] h-px w-full rotate-[5deg] bg-black/20" />
                <div className="absolute left-0 top-[55%] h-px w-full -rotate-[8deg] bg-black/20" />
                <div className="absolute left-0 top-[78%] h-px w-full rotate-[3deg] bg-black/20" />
              </div>

              {/* Roads */}
              <div className="absolute left-[-10%] top-[48%] h-10 w-[120%] rotate-[12deg] border-y border-black/10 bg-[#e9e5dc]/40" />
              <div className="absolute left-[35%] top-[-10%] h-[120%] w-8 rotate-[22deg] border-x border-black/10 bg-[#e9e5dc]/40" />

              {/* Location marker */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1c1c1a] text-white shadow-xl">
                  <span className="text-lg">M</span>
                </div>

                <div className="mt-4 bg-[#f4f1eb] px-5 py-3 text-center shadow-lg">
                  <p className="text-xs tracking-[0.2em] uppercase">
                    {t.location.markerLabel}
                  </p>

                  <p className="mt-1 text-[10px] text-black/45">
                    {t.location.markerLocation}
                  </p>
                </div>
              </div>

              {/* Coordinates */}
              <div className="absolute bottom-5 left-5 text-[10px] tracking-[0.15em] uppercase text-black/35">
                {t.location.markerLocation}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#1c1c1a] px-6 py-24 text-[#f4f1eb] md:px-12 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Heading */}
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] uppercase text-white/40">
                {t.contact.eyebrow}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                {t.contact.title}
              </h2>

              <p className="mt-8 max-w-md text-base leading-7 text-white/55">
                {t.contact.description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="border-t border-white/15">
              <a
                href="tel:+213000000000"
                className="block border-b border-white/15 py-7 transition-opacity hover:opacity-60"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-white/35">
                  {t.contact.phone}
                </p>

                <p className="mt-3 text-lg">+213 000 000 000</p>
              </a>

              <a
                href="mailto:hello@maisonelysee.com"
                className="block border-b border-white/15 py-7 transition-opacity hover:opacity-60"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-white/35">
                  {t.contact.email}
                </p>

                <p className="mt-3 text-lg">hello@maisonelysee.com</p>
              </a>

              <div className="border-b border-white/15 py-7">
                <p className="text-xs tracking-[0.2em] uppercase text-white/35">
                  {t.contact.address}
                </p>

                <p className="mt-3 text-lg">{t.contact.addressValue}</p>
              </div>

              <div className="py-7">
                <p className="text-xs tracking-[0.2em] uppercase text-white/35">
                  {t.contact.reception}
                </p>

                <p className="mt-3 text-lg">{t.contact.receptionValue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1c1a] px-6 pb-8 text-[#f4f1eb] md:px-12">
        <div className="mx-auto max-w-7xl border-t border-white/15 pt-12">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <p className="text-xs tracking-[0.35em] uppercase text-white/40">
                Maison
              </p>

              <p className="mt-1 font-serif text-4xl">Élysée</p>

              <p className="mt-6 max-w-sm text-sm leading-6 text-white/40">
                {t.footer.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="mb-5 text-xs tracking-[0.2em] uppercase text-white/35">
                {t.footer.explore}
              </p>

              <nav className="flex flex-col gap-3 text-sm text-white/65">
                <a href="#rooms" className="transition hover:text-white">
                  {t.rooms.title}
                </a>

                <a href="#experience" className="transition hover:text-white">
                  {t.nav.experiences}
                </a>

                <a href="#gallery" className="transition hover:text-white">
                  {t.nav.gallery}
                </a>

                <a href="#reviews" className="transition hover:text-white">
                  {t.footer.reviewsLink}
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-5 text-xs tracking-[0.2em] uppercase text-white/35">
                {t.footer.contact}
              </p>

              <nav className="flex flex-col gap-3 text-sm text-white/65">
                <a
                  href="#availability"
                  className="transition hover:text-white"
                >
                  {t.footer.stay}
                </a>

                <a href="#location" className="transition hover:text-white">
                  {t.footer.location}
                </a>

                <a href="#contact" className="transition hover:text-white">
                  {t.footer.contactUs}
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] tracking-[0.15em] uppercase text-white/30 md:flex-row">
            <span>© 2026 Maison Élysée</span>
            <span>{t.location.markerLocation}</span>
            <span>{t.footer.hospitality}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
