"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { locations, timelineEvents, branchesInfo } from "./data/locations";

const MigrationMap = dynamic(() => import("./components/MigrationMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[550px] bg-ivory-dark rounded-xl flex items-center justify-center border border-slate-200/50">
      <div className="text-center font-sans">
        <div className="w-8 h-8 border-2 border-crimson border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
        <p className="text-xs text-slate-500 font-medium">Loading Cartographic Archive...</p>
      </div>
    </div>
  ),
});
import { 
  BookOpen, 
  Compass, 
  Shield, 
  History, 
  MapPin, 
  Landmark, 
  ArrowRight, 
  Award,
  BookOpenText,
  Anchor,
  Globe
} from "lucide-react";

export default function Home() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);

  const handleSelectLocation = (id: string | null) => {
    setSelectedLocationId(id);
    if (id) {
      const element = document.getElementById(`location-card-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-ivory font-sans text-slate-800 antialiased selection:bg-crimson/10 selection:text-crimson">
      
      {/* ----------------- TOP ARCHIVAL HEADER ----------------- */}
      <header className="border-b border-crimson/10 bg-ivory/80 backdrop-blur-md sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-crimson/30 flex items-center justify-center bg-ivory-dark">
              <Compass className="w-5 h-5 text-crimson animate-[spin_40s_linear_infinite]" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-black tracking-wider text-slate-900 uppercase">
                The Bayat Chronicle
              </h1>
              <p className="text-[10px] text-slate-500 font-sans tracking-widest uppercase">
                Geographical & Historical Archive of the Oghuz Clan
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <a href="#interactive-map" className="hover:text-crimson transition-colors">Migration Map</a>
            <a href="#clan-branches" className="hover:text-crimson transition-colors">Tribal Branches</a>
            <a href="#historical-timeline" className="hover:text-crimson transition-colors">Timeline</a>
          </nav>
        </div>
      </header>

      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/20 via-ivory to-ivory border-b border-crimson/5 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold text-crimson bg-crimson/5 border border-crimson/10 rounded-full uppercase tracking-wider mb-6">
              <History className="w-3.5 h-3.5" />
              Oghuz Turkic Heritage
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              The Journey of the Bayat Clan
            </h2>
            <div className="vintage-divider w-32 mx-auto mb-6" />
            <p className="text-base text-slate-650 leading-relaxed font-sans font-light mb-8">
              The <strong>Bayat</strong> (also known as <strong>Bhayat</strong>) tribe stands as one of the original 
              twenty-two Oghuz Turkic clans, first documented in the 10th century by Mahmud al-Kashgari. Translated historically 
              as <em>&ldquo;wealthy&rdquo;</em> or <em>&ldquo;rich in horses,&rdquo;</em> the clan embarked on a centuries-long westward migration 
              that shaped the demographics and military power of medieval empires, leaving an enduring legacy from the steppes of 
              Northern China to the ports of the Indian Subcontinent.
            </p>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 bg-ivory-dark/45 border border-crimson/5 rounded-xl shadow-sm">
                <div className="text-crimson font-serif text-lg font-bold">Oghuz Turkic</div>
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mt-1">Origins</div>
              </div>
              <div className="p-4 bg-ivory-dark/45 border border-crimson/5 rounded-xl shadow-sm">
                <div className="text-crimson font-serif text-lg font-bold">&ldquo;Wealthy&rdquo;</div>
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mt-1">Etymological Meaning</div>
              </div>
              <div className="p-4 bg-ivory-dark/45 border border-crimson/5 rounded-xl shadow-sm">
                <div className="text-crimson font-serif text-lg font-bold">3 Continents</div>
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mt-1">Migration Reach</div>
              </div>
              <div className="p-4 bg-ivory-dark/45 border border-crimson/5 rounded-xl shadow-sm">
                <div className="text-crimson font-serif text-lg font-bold">4 Major Dynasties</div>
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mt-1">Safavids to Ottomans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- INTERACTIVE MAP & DIRECTORY SECTION ----------------- */}
      <section id="interactive-map" className="py-12 bg-ivory border-b border-crimson/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-6 h-6 text-crimson" />
              Chronicle Atlas
            </h3>
            <p className="text-xs text-slate-500 font-sans tracking-wide mt-1">
              Select markers on the map or browse the directory below to trace regional chronicles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Left Column: Geographic Settlements Directory */}
            <div className="lg:col-span-1 flex flex-col h-[550px]">
              <div className="bg-ivory-dark border border-slate-200/50 px-4 py-3 rounded-t-xl border-b-0 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Settlement Directory</span>
                <span className="text-[10px] bg-slate-200 text-slate-650 px-2 py-0.5 rounded-full font-bold">{locations.length} Stations</span>
              </div>
              
              <div className="flex-1 bg-ivory-dark/45 border border-slate-200/50 rounded-b-xl overflow-y-auto p-4 space-y-3">
                {locations.map((loc) => {
                  const isSelected = selectedLocationId === loc.id;
                  return (
                    <div
                      key={loc.id}
                      id={`location-card-${loc.id}`}
                      onClick={() => handleSelectLocation(loc.id)}
                      className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? "bg-ivory border-crimson shadow-md ring-1 ring-crimson/20" 
                          : "bg-ivory/60 border-slate-200/60 hover:bg-ivory hover:border-slate-350 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2 mb-1.5">
                        <span className="text-[9px] uppercase font-bold text-gold tracking-wide">
                          {loc.historicalPeriod}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400">
                          <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-crimson" : ""}`} />
                        </div>
                      </div>
                      <h4 className="text-sm font-serif font-black text-slate-900 leading-tight">
                        {loc.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 italic mt-0.5">
                        {loc.subtitle}
                      </p>
                      <p className="text-xs text-slate-650 font-sans mt-2 line-clamp-2 leading-relaxed">
                        {loc.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1">
                        {loc.branches.slice(0, 2).map((b) => (
                          <span key={b} className="text-[8px] bg-crimson/5 text-crimson px-1.5 py-0.25 rounded font-sans font-medium">
                            {b}
                          </span>
                        ))}
                        {loc.empires.slice(0, 1).map((e) => (
                          <span key={e} className="text-[8px] bg-slate-100 text-slate-600 px-1.5 py-0.25 rounded font-sans font-medium border border-slate-200/30">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Google Map / Vintage SVG Map Component */}
            <div className="lg:col-span-2">
              <MigrationMap 
                selectedLocationId={selectedLocationId}
                onSelectLocation={handleSelectLocation}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- TRIBAL BRANCHES SECTION ----------------- */}
      <section id="clan-branches" className="py-16 bg-ivory-dark/40 border-b border-crimson/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold text-gold bg-gold/5 border border-gold/15 rounded-full uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              Clan Sub-tribes
            </span>
            <h3 className="text-3xl font-serif font-extrabold text-slate-900">
              The Major Bayat Branches
            </h3>
            <div className="vintage-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-xs text-slate-650">
              Throughout history, the Bayats organized into regional branches, becoming pillars of imperial dynasties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branchesInfo.map((branch) => {
              // Check if any marker corresponds to this branch to show active highlights
              const hasSelectedMatch = locations.find(l => l.id === selectedLocationId)?.branches.includes(branch.name);
              return (
                <div
                  key={branch.id}
                  className={`bg-ivory p-6 rounded-xl border shadow-sm transition-all duration-300 flex flex-col justify-between ${
                    hasSelectedMatch 
                      ? "border-crimson shadow-md ring-1 ring-crimson/10 scale-[1.02]" 
                      : "border-slate-200/80 hover:border-slate-350 hover:shadow-md hover:scale-[1.01]"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold uppercase text-gold tracking-widest bg-gold/5 border border-gold/10 px-2 py-0.5 rounded">
                        {branch.translation}
                      </span>
                    </div>
                    <h4 className="text-lg font-serif font-black text-slate-900 mb-1">
                      {branch.name}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {branch.regions.map((reg) => (
                        <span key={reg} className="text-[9px] text-slate-500 font-sans font-medium flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-crimson" />
                          {reg}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-650 font-sans leading-relaxed mb-4">
                      {branch.history}
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <h5 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1.5">
                      Imperial Footprint
                    </h5>
                    <p className="text-xs text-slate-800 font-sans font-medium italic">
                      {branch.significance}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- CHRONOLOGICAL TIMELINE SECTION ----------------- */}
      <section id="historical-timeline" className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold text-crimson bg-crimson/5 border border-crimson/15 rounded-full uppercase tracking-wider mb-4">
              <BookOpenText className="w-3.5 h-3.5" />
              Chronicle Timeline
            </span>
            <h3 className="text-3xl font-serif font-extrabold text-slate-900">
              Historical Milestones
            </h3>
            <div className="vintage-divider w-24 mx-auto mt-4 mb-4" />
            <p className="text-xs text-slate-650">
              A chronology of the migrations, warfare, and cultural integration of the Bayat clan over a millennium.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l border-crimson/20 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-10 py-4">
            {timelineEvents.map((evt) => {
              const isLocationActive = selectedLocationId === evt.locationId;
              return (
                <div
                  key={evt.id}
                  onClick={() => evt.locationId && handleSelectLocation(evt.locationId)}
                  className={`relative group transition-all duration-300 cursor-pointer ${
                    isLocationActive ? "scale-[1.01]" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <span className={`absolute -left-[31px] sm:-left-[39px] w-4 h-4 rounded-full border-2 transition-all duration-300 top-1.5 flex items-center justify-center ${
                    isLocationActive 
                      ? "bg-gold border-gold scale-125 ring-4 ring-gold/20" 
                      : "bg-ivory border-crimson group-hover:bg-crimson group-hover:scale-110"
                  }`} />

                  {/* Timeline Content Block */}
                  <div className={`p-5 rounded-xl border transition-all duration-300 bg-ivory ${
                    isLocationActive 
                      ? "border-gold shadow-md bg-amber-50/5 ring-1 ring-gold/10" 
                      : "border-slate-200/80 hover:border-slate-350 hover:shadow-sm"
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="font-serif font-black text-crimson text-sm md:text-base">
                          {evt.year}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <h4 className="font-serif font-bold text-slate-900 text-sm md:text-base leading-tight">
                          {evt.title}
                        </h4>
                      </div>
                      <span className="text-[10px] text-slate-400 font-sans tracking-wide sm:text-right uppercase">
                        {evt.empire}
                      </span>
                    </div>
                    
                    <p className="text-[10px] font-bold text-gold uppercase tracking-wider mb-2">
                      {evt.subtitle}
                    </p>
                    
                    <p className="text-xs text-slate-650 font-sans leading-relaxed">
                      {evt.description}
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100/80 pt-3 text-[10px] text-slate-500 font-sans">
                      <span>Branch: <strong className="text-slate-800">{evt.branch}</strong></span>
                      {evt.locationId && (
                        <span className="flex items-center gap-1 text-crimson font-medium group-hover:underline">
                          Locate on Map
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- HISTORICAL EMPIRES FOCUS ----------------- */}
      <section className="py-16 bg-ivory-dark/25 border-t border-crimson/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-ivory border border-slate-200/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Landmark className="w-8 h-8 text-crimson mb-4" />
              <h4 className="text-lg font-serif font-bold text-slate-900 mb-2">Imperial Alliance</h4>
              <p className="text-xs text-slate-650 leading-relaxed font-sans">
                The Bayats were central to the Seljuk Empire's conquests. Under the Seljuks, they migrated extensively into Anatolia. 
                In Persia, they served the Safavid Empire, defending its northern borders and integrating into the elite 
                military administrative coalitions.
              </p>
            </div>
            
            <div className="p-6 bg-ivory border border-slate-200/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 text-crimson mb-4" />
              <h4 className="text-lg font-serif font-bold text-slate-900 mb-2">Frontier Defense</h4>
              <p className="text-xs text-slate-650 leading-relaxed font-sans">
                From the Dulkadirids of northern Syria and Anatolia to the Safavid border controls in Khorasan, Bayat branches 
                established themselves as highly capable guardians of international trade borders and pilgrimage lanes, ensuring 
                regional stability.
              </p>
            </div>

            <div className="p-6 bg-ivory border border-slate-200/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Anchor className="w-8 h-8 text-crimson mb-4" />
              <h4 className="text-lg font-serif font-bold text-slate-900 mb-2">Subcontinental Trade</h4>
              <p className="text-xs text-slate-650 leading-relaxed font-sans">
                As the Bhayat branch, they pivoted towards maritime commerce in Sindh and Gujarat, settling in Rander and Surat. 
                Integrating into the local Sunni Vohra communities, they became a prominent mercantile force in the Arabian Sea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- ARCHIVAL FOOTER ----------------- */}
      <footer className="border-t border-crimson/15 bg-slate-900 text-ivory-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-8">
            <div className="flex items-center gap-3">
              <Compass className="w-6 h-6 text-gold animate-[spin_60s_linear_infinite]" />
              <div>
                <h4 className="text-base font-serif font-bold uppercase tracking-wider text-ivory">
                  The Bayat Chronicle
                </h4>
                <p className="text-[9px] uppercase tracking-widest text-slate-500">
                  Tracing a millennium of Turkic migration & legacy
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-400">
              <a href="#interactive-map" className="hover:text-gold transition-colors">Atlas Map</a>
              <a href="#clan-branches" className="hover:text-gold transition-colors">Branches</a>
              <a href="#historical-timeline" className="hover:text-gold transition-colors">Chronicles</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
            <p>
              &copy; {new Date().getFullYear()} The Bayat Chronicle. Built as a dedicated historical research archive.
            </p>
            <p className="italic">
              Sources: Mahmud al-Kashgari&apos;s Dīwān Lughāt al-Turk (1072), Safavid and Ottoman Imperial Archives.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
