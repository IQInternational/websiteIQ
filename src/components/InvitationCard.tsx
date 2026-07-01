import { Calendar, Clock, MapPin, Sparkles, Info, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Vines from './Vines';
import schoolLogo from '../logo.png';
import moeyLogo from '../moey.png';

interface InvitationCardProps {
  grow: boolean;
  onRSVP: () => void;
  rsvpCount: number;
  hasRSVP: boolean;
  leftPhotoUrl?: string;
  rightPhotoUrl?: string;
}

export default function InvitationCard({
  grow,
  onRSVP,
  rsvpCount,
  hasRSVP,
  leftPhotoUrl = schoolLogo,
  rightPhotoUrl = moeyLogo
}: InvitationCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const sequence = ['A', 'B', 'C', 'D', 'E'];

  useEffect(() => {
    if (!grow) return;
    const loopInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sequence.length);
    }, 1800);
    return () => clearInterval(loopInterval);
  }, [grow]);

  const getMorphStyle = (index: number) => {
    let baseStyles = "inline-block font-sans font-black italic text-center transition-all duration-500 drop-shadow-[0_2px_10px_rgba(212,163,89,0.3)]";
    switch (index) {
      case 0: baseStyles += " text-rose-400"; break;
      case 1: baseStyles += " text-pink-400"; break;
      case 2: baseStyles += " text-sky-400"; break;
      case 3: baseStyles += " text-emerald-400"; break;
      case 4: baseStyles += " text-amber-400"; break;
    }
    if (index !== currentIndex) {
      switch (index) {
        case 0: return `${baseStyles} opacity-0 scale-75 blur-md -translate-y-2`;
        case 1: return `${baseStyles} opacity-0 scale-50 -rotate-12`;
        case 2: return `${baseStyles} opacity-0 w-0 overflow-hidden`;
        case 3: return `${baseStyles} opacity-0 translate-x-2 rotate-12`;
        case 4: return `${baseStyles} opacity-0 scale-110 filter brightness-200`;
        default: return baseStyles;
      }
    } else {
      switch (index) {
        case 0: return `${baseStyles} opacity-100 scale-100 blur-0 translate-y-0 ease-out`;
        case 1: return `${baseStyles} opacity-100 scale-110 rotate-0 cubic-bezier(0.34,1.56,0.64,1)`;
        case 2: return `${baseStyles} opacity-100 w-auto animate-[typing_0.4s_steps(4)_forwards]`;
        case 3: return `${baseStyles} opacity-100 translate-x-0 rotate-0 cubic-bezier(0.16,1,0.3,1)`;
        case 4: return `${baseStyles} opacity-100 scale-100 filter brightness-100 duration-300`;
        default: return baseStyles;
      }
    }
  };

  return (
    <>
    <div
      className="relative w-full max-w-[360px] md:max-w-[400px] aspect-[210/297] animate-card-rise block box-border"
      style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
    >
      {/* Premium Metallic Gold Ambient Glow behind the card - reduced intensity */}
      <div
        className="absolute -inset-2 rounded-ios-lg pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(223, 190, 140, 0.08) 0%, transparent 70%)',
          filter: 'blur(20px)',
          zIndex: -1,
        }}
      />

      {/* MAIN INVITE CARD: Clean White Plate with Gold Frame */}
      <div className="bg-white rounded-ios-lg relative w-full h-full overflow-hidden flex flex-col justify-between box-border shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
        {/* Gold frame border */}
        <div className="absolute inset-0 rounded-ios-lg pointer-events-none">
          <div className="absolute inset-0 rounded-ios-lg border-[6px]" style={{ borderImage: 'linear-gradient(135deg, #d4a853 0%, #c9953a 30%, #b8860b 50%, #c9953a 70%, #d4a853 100%) 1' }} />
          <div className="absolute inset-[5px] rounded-[7px] bg-white" />
        </div>
        <div className="absolute inset-[6px] rounded-[6px] border-2 border-[#d4a853]/60 pointer-events-none" />

        {/* Symmetrical glowing vines flanking the content sides */}
        <Vines grow={grow} />

        {/* Content Container with proper padding */}
        <div className="relative text-center w-full h-full flex flex-col justify-between items-center z-10 select-none py-6 px-5">

          {/* TOP SECTION: Photo Slots + National Motto */}
          <div className="w-full relative flex flex-col items-center shrink-0">

            {/* Top Most-Left Polaroid-style Frame - Logo */}
            <div
              className="absolute left-0 top-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#f8f5f0] p-1.5 rounded shadow-2xl border-2 border-[#d4a853]/40 -rotate-6 transition-all duration-700 overflow-hidden"
              style={{ opacity: grow ? 1 : 0, transform: grow ? 'rotate(-6deg) translateY(0)' : 'rotate(-6deg) translateY(-10px)' }}
            >
              <div className="w-full h-full bg-white rounded overflow-hidden flex items-center justify-center border border-[#d4a853]/20">
                <img src={leftPhotoUrl} alt="School Logo" className="w-full h-full object-contain p-1" />
              </div>
            </div>

            {/* Top Most-Right Polaroid-style Frame - MoEYS */}
            <div
              className="absolute right-0 top-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#f8f5f0] p-1.5 rounded shadow-2xl border-2 border-[#d4a853]/40 rotate-6 transition-all duration-700 overflow-hidden"
              style={{ opacity: grow ? 1 : 0, transform: grow ? 'rotate(6deg) translateY(0)' : 'rotate(6deg) translateY(-10px)', transitionDelay: '0.1s' }}
            >
              <div className="w-full h-full bg-white rounded overflow-hidden flex items-center justify-center border border-[#d4a853]/20">
                <img src={rightPhotoUrl} alt="MoEYS Logo" className="w-full h-full object-contain p-1" />
              </div>
            </div>

            {/* Gold Accent Sparkle Separator */}
            <div
              className="flex items-center justify-center gap-3 mb-2 transition-all duration-700 mt-12"
              style={{ opacity: grow ? 1 : 0, transitionDelay: '0.4s' }}
            >
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#dfbe8c]/50" />
              <Sparkles className="w-4 h-4 text-[#dfbe8c] opacity-80 drop-shadow-[0_2px_4px_rgba(223,190,140,0.3)]" />
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#dfbe8c]/50" />
            </div>

            {/* Kingdom Typography Header */}
            <div
              className="font-display font-bold text-[#5a4a3a] space-y-1 text-center transition-all duration-700 text-[13px] md:text-[14px] tracking-wide antialiased"
              style={{ opacity: grow ? 1 : 0, transform: grow ? 'translateY(0)' : 'translateY(4px)', transitionDelay: '0.6s' }}
            >
              <p className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] block">ព្រះរាជាណាចក្រកម្ពុជា</p>
              <p className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] block text-[#8a7a6a] font-medium">ជាតិ សាសនា ព្រះមហាក្សត្រ</p>
            </div>
          </div>

          {/* MIDDLE SECTION: Elegant Khmer Invitation Typography */}
          <div className="w-full flex flex-col gap-4 px-2 my-auto justify-center items-center">
            <div
              className="font-display font-bold text-[#4a3a2a] transition-all duration-700 leading-[1.6] flex flex-col gap-1 items-center w-full text-[17px] md:text-[19px] tracking-wide"
              style={{ opacity: grow ? 1 : 0, transform: grow ? 'translateY(0)' : 'translateY(4px)', transitionDelay: '0.8s' }}
            >
              <p className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
                សូមគោរពអញ្ចើញលោកគ្រូ
              </p>
              <p className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
                អ្នកគ្រូដើម្បីចូលរួមប្រារព្ធ
              </p>
            </div>

            <h1
              className="font-display font-black text-[#8b6914] transition-all duration-700 leading-tight text-[26px] md:text-[32px] block text-center tracking-wide drop-shadow-[0_2px_8px_rgba(139,105,20,0.3)]"
              style={{ opacity: grow ? 1 : 0, transform: grow ? 'translateY(0)' : 'translateY(4px)', transitionDelay: '1s' }}
            >
              ពិធីរំលឹកគុណគ្រូ
            </h1>

            <h2
              className="font-display font-bold text-[#9a7b4f] transition-all duration-700 leading-none text-[19px] md:text-[22px] block text-center tracking-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
              style={{ opacity: grow ? 1 : 0, transform: grow ? 'translateY(0)' : 'translateY(4px)', transitionDelay: '1.15s' }}
            >
              <span className="inline-flex items-baseline justify-center gap-2">
                <span>ថ្នាក់ទី ១២</span>
                <span className="relative inline-block w-[1ch] h-[1em] overflow-visible font-sans font-black italic text-left align-baseline">
                  {sequence.map((letter, idx) => (
                    <span
                      key={letter}
                      className={getMorphStyle(idx)}
                      style={{
                        position: 'absolute',
                        left: 0,
                        bottom: '-0.05em',
                        width: '100%',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </span>
            </h2>
          </div>

          {/* LOWER SECTION: Event Information Blocks & RSVP Button */}
          <div className="w-full flex flex-col items-center shrink-0">
            <div
              className="flex items-center justify-center gap-2.5 mb-3 transition-all duration-700 w-full"
              style={{ opacity: grow ? 1 : 0, transitionDelay: '1.3s' }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#dfbe8c]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#dfbe8c]/40" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#dfbe8c]/30" />
            </div>

            {/* Event Details */}
            <div
              className="flex flex-row justify-between items-start w-full mb-4 transition-all duration-700 px-1 gap-2"
              style={{ opacity: grow ? 1 : 0, transform: grow ? 'translateY(0)' : 'translateY(6px)', transitionDelay: '1.5s' }}
            >
              <DetailItem icon={<Calendar className="w-4 h-4" />} label="ថ្ងៃ" value="4 កក្កដា ២០២៦" />
              <DetailItem icon={<Clock className="w-4 h-4" />} label="ម៉ោង" value="2:00 PM" />
              <DetailItem icon={<MapPin className="w-4 h-4" />} label="ទីតាំង" value="សាលប្រជុំ" />
            </div>

            {/* RSVP Button Row */}
            <div
              className="transition-all duration-700 w-full flex flex-col items-center"
              style={{ opacity: grow ? 1 : 0, transform: grow ? 'translateY(0)' : 'translateY(4px)', transitionDelay: '1.8s' }}
            >
              <div className="flex items-center gap-2 w-full max-w-[280px]">
                <button
                  onClick={onRSVP}
                  disabled={hasRSVP}
                  className={`relative overflow-hidden rounded-full flex-1 py-2.5 font-ios font-semibold text-white text-sm tracking-wide shadow-[0_4px_24px_rgba(184,144,83,0.35)] transition-all active:scale-[0.97] ${
                    hasRSVP
                      ? 'bg-gradient-to-r from-[#b8860b] via-[#d4a853] to-[#b8860b] opacity-60 cursor-default shadow-none'
                      : 'bg-gradient-to-r from-[#c9953a] via-[#d4a853] to-[#b8860b] hover:from-[#d4a853] hover:via-[#e4b863] hover:to-[#c9953a]'
                  }`}
                >
                  {hasRSVP && (
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[sweep_2s_ease-in-out_infinite]" />
                    </span>
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {hasRSVP ? (
                      <>
                        <Sparkles className="w-4 h-4" />
                        ត្រូវបានទទួល - សូមអរគុណ
                      </>
                    ) : (
                      'ទទួលការអញ្ចើញ'
                    )}
                  </span>
                </button>

                {/* Info Button */}
                <button
                  onClick={() => setShowInfo(true)}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#c9953a] to-[#d4a853] flex items-center justify-center shadow-[0_4px_16px_rgba(184,144,83,0.3)] transition-all hover:from-[#d4a853] hover:to-[#e4b863] active:scale-95"
                >
                  <Info className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="mt-2 text-xs text-[#8a7a6a] font-ios text-center font-medium tracking-normal">
                {rsvpCount > 0
                  ? `ចំនួនអ្នកចូលរួម : ${rsvpCount}`
                  : 'រង់ចាំការអញ្ជើញ...'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Info Modal */}
    {showInfo && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={() => setShowInfo(false)}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />

        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-[popIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowInfo(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          <div className="mb-4">
            <h2 className="text-xl font-bold text-[#5a4a3a] mb-1 font-display">បដិសណ្ឋារកិច្ច</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#c9953a] to-[#d4a853] rounded-full" />
          </div>

          <div className="space-y-4 text-[#6a5a4a] font-display">
            <p className="leading-relaxed text-sm">
              សូមគោរពអញ្ចើញ គណៈគ្រប់គ្រងសាលាអន្តរជាតិអាយឃ្យូ លោកគ្រូ អ្នកគ្រូ និង សិស្សានុសិស្ស គ្រប់បណ្ដាថ្នាក់ទី១២ ឆ្នាំសិក្សា២០២៥-២០២៦ ក្នុងការចូលរួមកម្មវិធីរំលឹកគុណគ្រូ
            </p>

            <div className="bg-[#f8f5f0] rounded-lg p-4 border border-[#d4a853]/20">
              <p className="text-sm text-[#8a7a6a]">
                <strong className="text-[#5a4a3a]"></strong> សូមមេត្តាអធ្យាស្រ័យចំពោះការខ្វះខាត ឬកំហុសឆ្គងដោយអចេតនាមួយចំនួនដែលបានកើតឡើង។
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={() => setShowInfo(false)}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#c9953a] to-[#d4a853] text-white font-semibold shadow-md hover:from-[#d4a853] hover:to-[#e4b863] transition-all active:scale-[0.98]"
            >
              យល់ព្រម
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center flex-1 min-w-0">
      <div className="w-8 h-8 rounded-full bg-[#f5f0e8] border border-[#dec4a1]/30 flex items-center justify-center text-[#9a7b4f] flex-shrink-0 shadow-inner">
        {icon}
      </div>
      <p className="text-[11px] text-[#8a7a6a] font-display font-bold leading-none mt-1">
        {label}
      </p>
      <p className="text-xs font-semibold text-[#4a3a2a] font-display leading-tight max-w-full truncate mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
        {value}
      </p>
    </div>
  );
}
