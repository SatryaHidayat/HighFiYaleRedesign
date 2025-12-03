import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import svgPaths from "./imports/svg-yvigjun7vr";
import { EventCarousel } from "./components/EventCarousel";
import imgPngtreeAWhiteDavidSculpture45327921 from "figma:asset/309726b621b041a2e48571052e7d1a8901e3206f.png";
import imgPngwingCom1 from "figma:asset/8ae9cc521829a23d093b135891c5f9223c375bfe.png";
import imgPngegg11 from "figma:asset/5eb99e5cd0937bee0a9ae0fa2c9223cf2d3783e6.png";
import imgImage6 from "figma:asset/d8a51a5391f4fba903f06de1535210d011101521.png";
import imgImage7 from "figma:asset/a5a314624c6cac277e21cbac195d504a4427e4a5.png";
import imgLocation from "figma:asset/e22c5a88ea067dab95af058d97809fc9f998c58b.png";
import imgImage9 from "figma:asset/408812cf88b3a526eb98fdcd311daac89cb7e8d4.png";
import imgImage10 from "figma:asset/a02082464e34c5742731fef5417dc4e3136e619a.png";

function MdiMapMarkerAccount({ className }: { className?: string }) {
  return (
    <div className={className} data-name="mdi:map-marker-account">
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 19">
          <path d={svgPaths.p12abe900} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function RiMapFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ri:map-fill">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <path d={svgPaths.p6a16f00} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function MdiYoutube({ className }: { className?: string }) {
  return (
    <div className={className} data-name="mdi:youtube">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
          <path d={svgPaths.p13f90f00} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function BiTelephoneFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="bi:telephone-fill">
      <div className="absolute bottom-0 left-0 right-0 top-[0.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path clipRule="evenodd" d={svgPaths.p11966bf0} fill="var(--fill-0, #F5F5F5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function RiFacebookFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ri:facebook-fill">
      <div className="absolute inset-[8.33%_27.08%_8.33%_29.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 22">
          <path d={svgPaths.pa20d700} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function MingcuteInstagramFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="mingcute:instagram-fill">
      <div className="absolute inset-[12.5%_12.5%_0.78%_12.5%]" data-name="Group">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 31">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p22b8e80} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Fa6SolidMapLocation({ className }: { className?: string }) {
  return (
    <div className={className} data-name="fa6-solid:map-location">
      <div className="absolute bottom-[1.48%] left-0 right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 20">
          <path d={svgPaths.p31a7fd00} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function MingcuteSchoolFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="mingcute:school-fill">
      <div className="absolute inset-[8.92%_8.33%_0.78%_8.33%]" data-name="Group">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="Group">
            <g id="Vector"></g>
            <path clipRule="evenodd" d={svgPaths.p31269840} fill="var(--fill-0, #F5F5F5)" fillRule="evenodd" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame11({ activeIndex, onSelect }: { activeIndex: number; onSelect: (index: number) => void }) {
  return (
    <motion.div 
      className="absolute h-[24px] left-[230.5px] top-[685px] w-[144px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 24">
        <g id="Frame 19">
          <motion.circle 
            cx="12" cy="12" fill={activeIndex === 0 ? "var(--fill-0, #B0C7D7)" : "var(--fill-0, #F5F5F5)"} id="Ellipse 11" r="12"
            onClick={() => onSelect(0)}
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            animate={activeIndex === 0 ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: activeIndex === 0 ? Infinity : 0, repeatDelay: 1 }}
          />
          <motion.circle 
            cx="52" cy="12" fill={activeIndex === 1 ? "var(--fill-0, #B0C7D7)" : "var(--fill-0, #F5F5F5)"} id="Ellipse 12" r="12"
            onClick={() => onSelect(1)}
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            animate={activeIndex === 1 ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: activeIndex === 1 ? Infinity : 0, repeatDelay: 1 }}
          />
          <motion.circle 
            cx="92" cy="12" fill={activeIndex === 2 ? "var(--fill-0, #B0C7D7)" : "var(--fill-0, #F5F5F5)"} id="Ellipse 13" r="12"
            onClick={() => onSelect(2)}
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            animate={activeIndex === 2 ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: activeIndex === 2 ? Infinity : 0, repeatDelay: 1 }}
          />
          <motion.circle 
            cx="132" cy="12" fill={activeIndex === 3 ? "var(--fill-0, #B0C7D7)" : "var(--fill-0, #F5F5F5)"} id="Ellipse 14" r="12"
            onClick={() => onSelect(3)}
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            animate={activeIndex === 3 ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: activeIndex === 3 ? Infinity : 0, repeatDelay: 1 }}
          />
        </g>
      </svg>
    </motion.div>
  );
}

function Frame45({ activeIndex, onSelectIndex }: { activeIndex: number; onSelectIndex: (index: number) => void }) {
  const images = [
    imgPngtreeAWhiteDavidSculpture45327921,
    imgPngwingCom1,
    imgPngegg11,
    imgImage6
  ];

  return (
    <motion.div 
      className="absolute h-[709px] left-[calc(25%+111px)] top-[2158px] w-[605px] z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="absolute left-[-21px] size-[692px] top-[-22px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-[-7.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 792 792">
            <g filter="url(#filter0_f_1_324)" id="Ellipse 10">
              <circle cx="396" cy="396" fill="var(--fill-0, #B0C7D7)" r="346" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="792" id="filter0_f_1_324" width="792" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_324" stdDeviation="25" />
              </filter>
            </defs>
          </svg>
        </div>
      </motion.div>
      <motion.div 
        className="absolute left-0 size-[605px] top-0" 
        data-name="—Pngtree—a white david sculpture_4532792 1"
        animate={{ 
          y: [0, -15, 0],
          rotateZ: [0, 2, 0, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 15,
          transition: { duration: 0.5 }
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full brightness-200 saturate-0" src={imgPngtreeAWhiteDavidSculpture45327921} />
      </motion.div>
      <Frame11 activeIndex={activeIndex} onSelect={onSelectIndex} />
    </motion.div>
  );
}

function Frame31() {
  return (
    <motion.div 
      className="basis-0 content-stretch flex flex-col gap-[31px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-neutral-100"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className="font-['Jomolhari:Regular',sans-serif] leading-[150px] min-w-full relative shrink-0 text-[150px] w-[min-content]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Yale School Of Art
      </motion.p>
      <motion.p 
        className="font-['Poppins:Regular',sans-serif] h-[144px] leading-[32px] relative shrink-0 text-[24px] w-[845px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {`The School of Art is one of Yale's Graduate & Professional Schools conferring MFA degrees in Graphic Design, Painting/Printmaking, Photography, and Sculpture; and offers undergraduate-level art courses to Yale College students.`}
      </motion.p>
    </motion.div>
  );
}

function Group() {
  return (
    <motion.div 
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="[grid-area:1_/_1] ml-0 mt-[15px] relative size-[616px]" 
        data-name="pngwing.com 1"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPngwingCom1} />
      </motion.div>
      <motion.div 
        className="[grid-area:1_/_1] h-[534px] ml-[258px] mt-0 relative w-[400px]" 
        data-name="pngegg (1) 1"
        whileHover={{ scale: 1.05, rotate: -2 }}
        transition={{ duration: 0.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPngegg11} />
      </motion.div>
    </motion.div>
  );
}

function Frame48() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[50px] top-[304px] w-[1622px]">
      <Frame31 />
      <Group />
    </div>
  );
}

function Frame32() {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-neutral-100 w-[247px]"
      whileHover={{ x: 10 }}
      transition={{ duration: 0.3 }}
    >
      <p className="font-['Jomolhari:Regular',sans-serif] h-[104px] leading-[150px] relative shrink-0 text-[48px] w-full">{`Fall 2025 `}</p>
      <motion.p 
        className="font-['Poppins:Regular',sans-serif] h-[36px] leading-[32px] relative shrink-0 text-[24px] w-full"
        whileHover={{ x: 5 }}
      >
        {`See more >`}
      </motion.p>
    </motion.div>
  );
}

function Frame33() {
  return (
    <motion.div 
      className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-neutral-100 w-[274px]"
      whileHover={{ x: 10 }}
      transition={{ duration: 0.3 }}
    >
      <p className="font-['Jomolhari:Regular',sans-serif] h-[104px] leading-[150px] relative shrink-0 text-[48px] w-full">{`Spring 2026 `}</p>
      <motion.p 
        className="font-['Poppins:Regular',sans-serif] h-[36px] leading-[32px] relative shrink-0 text-[24px] w-full"
        whileHover={{ x: 5 }}
      >
        {`See more >`}
      </motion.p>
    </motion.div>
  );
}

function Frame46() {
  return (
    <motion.div 
      className="basis-0 content-stretch flex flex-col gap-[23px] grow items-start min-h-px min-w-px relative shrink-0"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className="font-['Jomolhari:Regular',sans-serif] leading-[150px] min-w-full not-italic relative shrink-0 text-[96px] text-neutral-100 w-[min-content]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Schedule
      </motion.p>
      <Frame32 />
      <Frame33 />
    </motion.div>
  );
}

function Group1() {
  return (
    <motion.div 
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div 
        className="[grid-area:1_/_1] h-[473px] ml-[56px] mt-[38px] relative w-[841px]" 
        data-name="image 6"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </motion.div>
      <div 
        className="[grid-area:1_/_1] h-[157px] ml-0 mt-0 relative w-[142px]" 
        data-name="image 7"
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </motion.div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex gap-[97px] items-center left-[50px] top-[1116px] w-[1491px]">
      <Frame46 />
      <Group1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-0 top-0 w-[1728px]">
      <div className="bg-[#080808] h-[151px] shrink-0 w-full" />
    </div>
  );
}

function Frame29() {
  return (
    <motion.div 
      className="content-stretch flex gap-[16px] items-center relative shrink-0"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="h-[57px] relative shrink-0 w-[52px]" 
        data-name="image 8"
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="font-['Jomolhari:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00497e] text-[64px] text-nowrap whitespace-pre">Yale</p>
    </motion.div>
  );
}

function Frame6() {
  const items = ["Home", "Admission", "Exhibitions", "News", "Publications"];
  
  return (
    <div className="flex flex-wrap gap-[107px] items-start relative shrink-0 w-[961px] mt-[28px]">
      <div className="flex flex-col gap-[8px]">
        <motion.p 
          key={items[0]}
          className="font-['Poppins:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-neutral-100 text-nowrap whitespace-pre"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          whileHover={{ scale: 1.1, color: "#00497e" }}
        >
          {items[0]}
        </motion.p>
        <motion.div 
          className="h-0 relative shrink-0 w-[72.5px]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 4">
              <line id="Line 1" stroke="var(--stroke-0, #00497E)" strokeLinecap="round" strokeWidth="4" x1="2" x2="70.5" y1="2" y2="2" />
            </svg>
          </div>
        </motion.div>
      </div>
      {items.slice(1).map((item, index) => (
        <motion.p 
          key={item}
          className="font-['Poppins:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-neutral-100 text-nowrap whitespace-pre"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
          whileHover={{ scale: 1.1, color: "#00497e" }}
        >
          {item}
        </motion.p>
      ))}
    </div>
  );
}

function Frame() {
  return (
    <motion.div 
      className="h-[47px] relative shrink-0 w-[49px]"
      whileHover={{ rotate: 90 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute bottom-[-0.71%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 48">
          <g id="Frame 7">
            <ellipse cx="6.5" cy="7" fill="var(--fill-0, #F5F5F5)" id="Ellipse 1" rx="6.5" ry="7" />
            <ellipse cx="24.5" cy="7" fill="var(--fill-0, #F5F5F5)" id="Ellipse 2" rx="6.5" ry="7" />
            <ellipse cx="42.5" cy="7" fill="var(--fill-0, #F5F5F5)" id="Ellipse 3" rx="6.5" ry="7" />
            <circle cx="6.5" cy="23.1667" fill="var(--fill-0, #F5F5F5)" id="Ellipse 4" r="6.5" />
            <circle cx="24.5" cy="23.1667" fill="var(--fill-0, #F5F5F5)" id="Ellipse 5" r="6.5" />
            <circle cx="42.5" cy="23.1667" fill="var(--fill-0, #F5F5F5)" id="Ellipse 6" r="6.5" />
            <ellipse cx="6.5" cy="40.3333" fill="var(--fill-0, #F5F5F5)" id="Ellipse 7" rx="6.5" ry="7" />
            <ellipse cx="24.5" cy="40.3333" fill="var(--fill-0, #F5F5F5)" id="Ellipse 8" rx="6.5" ry="7" />
            <ellipse cx="42.5" cy="40.3333" fill="var(--fill-0, #F5F5F5)" id="Ellipse 9" rx="6.5" ry="7" />
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

function Frame30() {
  return (
    <motion.div 
      className="absolute box-border flex h-[153px] items-center justify-between left-0 px-[50px] py-[20px] top-0 w-[1728px]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Frame28 />
      <Frame29 />
      <div className="flex-1 flex items-center justify-center">
        <Frame6 />
      </div>
      <Frame />
    </motion.div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[13px]" data-name="Location">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">36 Edgewood Ave., New Haven</p>
    </div>
  );
}

function MdiClock() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:clock">
          <path d={svgPaths.p3f98c600} fill="var(--fill-0, #080808)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <MdiClock />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">12:00 PM - 3:30 PM EST</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[62px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
      <p className="font-['Jomolhari:Regular',sans-serif] h-[30px] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">MFA Crits in Sculpture</p>
      <Frame20 />
    </div>
  );
}

function Frame19() {
  return (
    <motion.div 
      className="absolute bg-[#65558f] box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
        <p className="leading-[44px] mb-0 text-[36px]">{`18 `}</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">Nov</p>
      </div>
    </motion.div>
  );
}

function Frame22({ activeIndex }: { activeIndex: number }) {
  const eventData = [
    { title: "MFA Crits in Sculpture", date: "18", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "12:00 PM - 3:30 PM EST", color: "#65558f" },
    { title: "Advanced Graphic Design Workshop", date: "22", month: "Nov", location: "32 Edgewood Ave., New Haven", time: "10:00 AM - 4:00 PM EST", color: "#7e4900" },
    { title: "Sculpture Studio Open House", date: "27", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "1:00 PM - 6:00 PM EST", color: "#7e0049" },
    { title: "Winter Break Studio Access", date: "05", month: "Dec", location: "36 Edgewood Ave., New Haven", time: "9:00 AM - 10:00 PM EST", color: "#5f007e" }
  ];
  
  const current = eventData[activeIndex] || eventData[0];
  
  return (
    <motion.div 
      className="absolute h-[150px] left-[66.67%] top-[2407px] w-[478px] z-20"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="size-full"
        >
          <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[62px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
            <p className="font-['Jomolhari:Regular',sans-serif] h-[30px] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">{current.title}</p>
            <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[13px]" data-name="Location">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">{current.location}</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <MdiClock />
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">{current.time}</p>
              </div>
            </div>
          </div>
          <motion.div 
            className="absolute box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
            style={{ backgroundColor: current.color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
              <p className="leading-[44px] mb-0 text-[36px]">{current.date}</p>
              <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">{current.month}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[13px]" data-name="Location">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">36 Edgewood Ave., New Haven</p>
    </div>
  );
}

function MdiClock1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:clock">
          <path d={svgPaths.p3f98c600} fill="var(--fill-0, #080808)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <MdiClock1 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">12:00 PM - 3:30 PM EST</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[62px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
      <p className="font-['Jomolhari:Regular',sans-serif] h-[30px] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">MFA Crits in Sculpture</p>
      <Frame51 />
    </div>
  );
}

function Frame53() {
  return (
    <motion.div 
      className="absolute bg-[#65558f] box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
        <p className="leading-[44px] mb-0 text-[36px]">{`18 `}</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">Nov</p>
      </div>
    </motion.div>
  );
}

function Frame25({ activeIndex }: { activeIndex: number }) {
  const eventData = [
    { title: "MFA Crits in Sculpture", date: "18", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "12:00 PM - 3:30 PM EST", color: "#65558f" },
    { title: "Photography Exhibition Opening", date: "23", month: "Nov", location: "1156 Chapel Street", time: "6:00 PM - 9:00 PM EST", color: "#7e4900" },
    { title: "Contemporary Art Lecture Series", date: "28", month: "Nov", location: "1156 Chapel Street", time: "3:00 PM - 5:00 PM EST", color: "#7e0049" },
    { title: "Guest Curator Workshop", date: "06", month: "Dec", location: "1156 Chapel Street", time: "2:00 PM - 6:00 PM EST", color: "#5f007e" }
  ];
  
  const current = eventData[activeIndex] || eventData[0];
  
  return (
    <motion.div 
      className="absolute h-[150px] left-[101px] top-[2407px] w-[478px] z-20"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="size-full"
        >
          <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[62px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
            <p className="font-['Jomolhari:Regular',sans-serif] h-[30px] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">{current.title}</p>
            <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[13px]" data-name="Location">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">{current.location}</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <MdiClock1 />
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">{current.time}</p>
              </div>
            </div>
          </div>
          <motion.div 
            className="absolute box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
            style={{ backgroundColor: current.color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
              <p className="leading-[44px] mb-0 text-[36px]">{current.date}</p>
              <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">{current.month}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[13px]" data-name="Location">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">353 Crown Street, the Pit</p>
    </div>
  );
}

function MdiClock2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:clock">
          <path d={svgPaths.p3f98c600} fill="var(--fill-0, #080808)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <MdiClock2 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">1:00 PM - 9:00 PM EST</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
      <Frame5 />
      <Frame8 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[7px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
      <p className="font-['Jomolhari:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">Presentation of MFA Crit Work in Painting/Printmaking</p>
      <Frame54 />
    </div>
  );
}

function Frame56() {
  return (
    <motion.div 
      className="absolute bg-[#00497e] box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
        <p className="font-['Poppins:Bold',sans-serif] mb-0 text-[36px]">
          <span className="leading-[44px]">18</span>
          <span className="leading-[30px]"> </span>
        </p>
        <p className="leading-[32px] text-[24px]">Nov</p>
      </div>
    </motion.div>
  );
}

function Frame23({ activeIndex }: { activeIndex: number }) {
  const eventData = [
    { title: "Presentation of MFA Crit Work in Painting/Printmaking", date: "18", month: "Nov", location: "353 Crown Street, the Pit", time: "1:00 PM - 9:00 PM EST", color: "#00497e" },
    { title: "Advanced Graphic Design Workshop", date: "22", month: "Nov", location: "32 Edgewood Ave., New Haven", time: "10:00 AM - 4:00 PM EST", color: "#7e4900" },
    { title: "Sculpture Studio Open House", date: "27", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "1:00 PM - 6:00 PM EST", color: "#7e0049" },
    { title: "Winter Break Studio Access", date: "05", month: "Dec", location: "36 Edgewood Ave., New Haven", time: "9:00 AM - 10:00 PM EST", color: "#5f007e" }
  ];
  
  const current = eventData[activeIndex] || eventData[0];
  
  return (
    <motion.div 
      className="absolute h-[150px] left-[calc(58.33%+53px)] top-[2614px] w-[478px] z-20"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="size-full"
        >
          <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[7px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
            <p className="font-['Jomolhari:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">{current.title}</p>
            <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[13px]" data-name="Location">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">{current.location}</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <MdiClock2 />
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">{current.time}</p>
              </div>
            </div>
          </div>
          <motion.div 
            className="absolute box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
            style={{ backgroundColor: current.color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
              <p className="font-['Poppins:Bold',sans-serif] mb-0 text-[36px]">
                <span className="leading-[44px]">{current.date}</span>
                <span className="leading-[30px]"> </span>
              </p>
              <p className="leading-[32px] text-[24px]">{current.month}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[13px]" data-name="Location">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">353 Crown Street, the Pit</p>
    </div>
  );
}

function MdiClock3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:clock">
          <path d={svgPaths.p3f98c600} fill="var(--fill-0, #080808)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <MdiClock3 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">1:00 PM - 9:00 PM EST</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[7px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
      <p className="font-['Jomolhari:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">Presentation of MFA Crit Work in Painting/Printmaking</p>
      <Frame57 />
    </div>
  );
}

function Frame59() {
  return (
    <motion.div 
      className="absolute bg-[#00497e] box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
        <p className="leading-[44px] mb-0 text-[36px]">{`18 `}</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">Nov</p>
      </div>
    </motion.div>
  );
}

function Frame26({ activeIndex }: { activeIndex: number }) {
  const eventData = [
    { title: "Presentation of MFA Crit Work in Painting/Printmaking", date: "18", month: "Nov", location: "353 Crown Street, the Pit", time: "1:00 PM - 9:00 PM EST", color: "#00497e" },
    { title: "Photography Exhibition Opening", date: "23", month: "Nov", location: "1156 Chapel Street", time: "6:00 PM - 9:00 PM EST", color: "#7e4900" },
    { title: "Contemporary Art Lecture Series", date: "28", month: "Nov", location: "1156 Chapel Street", time: "3:00 PM - 5:00 PM EST", color: "#7e0049" },
    { title: "Guest Curator Workshop", date: "06", month: "Dec", location: "1156 Chapel Street", time: "2:00 PM - 6:00 PM EST", color: "#5f007e" }
  ];
  
  const current = eventData[activeIndex] || eventData[0];
  
  return (
    <motion.div 
      className="absolute h-[150px] left-[calc(8.33%+44px)] top-[2614px] w-[478px] z-20"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="size-full"
        >
          <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[7px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
            <p className="font-['Jomolhari:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">{current.title}</p>
            <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[13px]" data-name="Location">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">{current.location}</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <MdiClock3 />
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">{current.time}</p>
              </div>
            </div>
          </div>
          <motion.div 
            className="absolute box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
            style={{ backgroundColor: current.color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
              <p className="leading-[44px] mb-0 text-[36px]">{current.date} </p>
              <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">{current.month}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[13px]" data-name="Location">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">1156 Chapel Street</p>
    </div>
  );
}

function MdiClock4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:clock">
          <path d={svgPaths.p3f98c600} fill="var(--fill-0, #080808)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <MdiClock4 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">Nov 8th 12:00 PM - 25th Nov 6:00 PM</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[340px]">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[7px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
      <div className="font-['Jomolhari:Regular',sans-serif] h-[90px] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">
        <p className="mb-0">{`"Kitchen Sink" — `}</p>
        <p>1st-Year MFA Exhibition</p>
      </div>
      <Frame60 />
    </div>
  );
}

function Frame62() {
  return (
    <motion.div 
      className="absolute bg-[#00497e] box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
        <p className="leading-[44px] mb-0 text-[36px]">{`08 `}</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">Nov</p>
      </div>
    </motion.div>
  );
}

function Frame24({ activeIndex }: { activeIndex: number }) {
  const eventData = [
    { title: "\"Kitchen Sink\" — 1st-Year MFA Exhibition", date: "08", month: "Nov", location: "1156 Chapel Street", time: "Nov 8th 12:00 PM - 25th Nov 6:00 PM", color: "#00497e" },
    { title: "Printmaking Studio Session", date: "24", month: "Nov", location: "353 Crown Street, the Pit", time: "2:00 PM - 8:00 PM EST", color: "#4a7e00" },
    { title: "Artist Talk: International Perspectives", date: "29", month: "Nov", location: "353 Crown Street, the Pit", time: "4:00 PM - 7:00 PM EST", color: "#007e7e" },
    { title: "Installation Art Critique", date: "07", month: "Dec", location: "353 Crown Street, the Pit", time: "3:00 PM - 8:00 PM EST", color: "#7e3400" }
  ];
  
  const current = eventData[activeIndex] || eventData[0];
  
  return (
    <motion.div 
      className="absolute h-[150px] left-[calc(58.33%+53px)] top-[2200px] w-[81px] z-20"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="size-full"
        >
          <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[7px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
            <div className="font-['Jomolhari:Regular',sans-serif] h-[90px] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">
              {current.title}
            </div>
            <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[340px]">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[13px]" data-name="Location">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">{current.location}</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <MdiClock4 />
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">{current.time}</p>
              </div>
            </div>
          </div>
          <motion.div 
            className="absolute box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
            style={{ backgroundColor: current.color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
              <p className="leading-[44px] mb-0 text-[36px]">{current.date} </p>
              <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">{current.month}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[13px]" data-name="Location">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">1156 Chapel Street</p>
    </div>
  );
}

function MdiClock5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mdi:clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mdi:clock">
          <path d={svgPaths.p3f98c600} fill="var(--fill-0, #080808)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <MdiClock5 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">Nov 8th 12:00 PM - 25th Nov 6:00 PM</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[7px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
      <div className="font-['Jomolhari:Regular',sans-serif] h-[90px] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">
        <p className="mb-0">{`"Kitchen Sink" — `}</p>
        <p>1st-Year MFA Exhibition</p>
      </div>
      <Frame63 />
    </div>
  );
}

function Frame65() {
  return (
    <motion.div 
      className="absolute bg-[#00497e] box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
        <p className="leading-[44px] mb-0 text-[36px]">{`08 `}</p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">Nov</p>
      </div>
    </motion.div>
  );
}

function Frame27({ activeIndex }: { activeIndex: number }) {
  const eventData = [
    { title: "\"Kitchen Sink\" — 1st-Year MFA Exhibition", date: "08", month: "Nov", location: "1156 Chapel Street", time: "Nov 8th 12:00 PM - 25th Nov 6:00 PM", color: "#00497e" },
    { title: "Graduate Student Symposium", date: "25", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "9:00 AM - 5:00 PM EST", color: "#4a7e00" },
    { title: "Mixed Media Workshop", date: "30", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "11:00 AM - 4:00 PM EST", color: "#007e7e" },
    { title: "Year-End Celebration", date: "08", month: "Dec", location: "36 Edgewood Ave., New Haven", time: "7:00 PM - 11:00 PM EST", color: "#7e3400" }
  ];
  
  const current = eventData[activeIndex] || eventData[0];
  
  return (
    <motion.div 
      className="absolute h-[150px] left-[calc(8.33%+44px)] top-[2200px] w-[81px] z-20"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="size-full"
        >
          <div className="absolute bg-neutral-100 box-border content-stretch flex flex-col gap-[7px] h-[150px] items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0 w-[478px]">
            <div className="font-['Jomolhari:Regular',sans-serif] h-[90px] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px] w-[340px]">
              {current.title}
            </div>
            <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[13px]" data-name="Location">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">{current.location}</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <MdiClock5 />
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">{current.time}</p>
              </div>
            </div>
          </div>
          <motion.div 
            className="absolute box-border content-stretch flex flex-col gap-[10px] h-[150px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
            style={{ backgroundColor: current.color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
              <p className="leading-[44px] mb-0 text-[36px]">{current.date} </p>
              <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">{current.month}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function Frame7() {
  return (
    <motion.div 
      className="h-[599px] overflow-clip relative rounded-[25px] shrink-0 w-[492px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <motion.div 
        className="absolute h-[278px] left-0 rounded-[25px] top-0 w-[492px]" 
        data-name="image 9"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[25px] size-full" src={imgImage9} />
      </motion.div>
      <div className="absolute bg-[rgba(0,0,0,0.6)] h-[278px] left-0 rounded-[25px] top-0 w-[492px]" />
      <p className="absolute font-['Jomolhari:Regular',sans-serif] leading-[30px] left-0 not-italic text-[28px] text-neutral-100 top-[294px] w-[492px]">From our friends at the Yale Center for Environmental Justice</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-100 top-[374px] w-[492px]">The Yale Center for Environmental Justice is in the process of planning our fourth annual Global Environmental Justice Conference, with this year focusing on the theme of "Environmental Joy." The conference aims to explore the ways in which environmental and climate justice and the communities engaged in that work generate joy. Guided by the notion that the ultimate goal of most environmental and climate work is to alleviate suffering and increase wellbeing, Environmental Joy will explore and celebrate the diverse ways that environmental justice achieves this goal.</p>
      <motion.p 
        className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[386px] not-italic text-[14px] text-neutral-100 top-[568px] w-[87px]"
        whileHover={{ x: 5 }}
      >
        {`Read More>`}
      </motion.p>
    </motion.div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[20px] items-start px-[47px] py-0 relative w-full">
          {[...Array(6).keys()].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Frame7 />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col gap-[75px] items-start left-[50px] top-[2982px] w-[1610px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className="font-['Jomolhari:Regular',sans-serif] leading-[150px] not-italic relative shrink-0 text-[96px] text-neutral-100 w-full"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Community Bulletin Board
      </motion.p>
      <Frame17 />
    </motion.div>
  );
}

function Frame16() {
  return (
    <motion.div 
      className="h-[599px] overflow-clip relative rounded-[25px] shrink-0 w-[492px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <motion.div 
        className="absolute h-[278px] left-0 rounded-[25px] top-0 w-[492px]" 
        data-name="image 9"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[25px] size-full" src={imgImage10} />
      </motion.div>
      <div className="absolute bg-[rgba(0,0,0,0.6)] h-[278px] left-0 rounded-[25px] top-0 w-[492px]" />
      <p className="absolute font-['Jomolhari:Regular',sans-serif] leading-[30px] left-0 not-italic text-[28px] text-neutral-100 top-[294px] w-[492px]">News From New Haven</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-100 top-[374px] w-[492px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
      <motion.p 
        className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[386px] not-italic text-[14px] text-neutral-100 top-[568px] w-[87px]"
        whileHover={{ x: 5 }}
      >
        {`Read More>`}
      </motion.p>
    </motion.div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[20px] items-start px-[47px] py-0 relative w-full">
          {[...Array(6).keys()].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Frame16 />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col gap-[75px] items-start left-[50px] top-[4516px] w-[1610px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className="font-['Jomolhari:Regular',sans-serif] leading-[150px] not-italic relative shrink-0 text-[96px] text-neutral-100 w-full"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Newsletter
      </motion.p>
      <Frame18 />
    </motion.div>
  );
}

function Frame41() {
  return (
    <motion.div 
      className="content-stretch flex gap-[12px] items-end relative shrink-0"
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <MingcuteSchoolFill className="relative shrink-0 size-[24px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-100 text-nowrap whitespace-pre">Support The School</p>
    </motion.div>
  );
}

function Frame40() {
  return (
    <motion.div 
      className="content-stretch flex gap-[13px] items-start relative shrink-0"
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <Fa6SolidMapLocation className="h-[20px] relative shrink-0 w-[23px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-100 text-nowrap whitespace-pre">Visiting</p>
    </motion.div>
  );
}

function Frame39() {
  return (
    <motion.div 
      className="content-stretch flex gap-[7px] items-center relative shrink-0"
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <MingcuteInstagramFill className="relative shrink-0 size-[35px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-100 text-nowrap whitespace-pre">Instagram</p>
    </motion.div>
  );
}

function Frame38() {
  return (
    <motion.div 
      className="content-stretch flex gap-[12px] items-center relative shrink-0"
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <RiFacebookFill className="relative shrink-0 size-[26px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-100 text-nowrap whitespace-pre">Facebook</p>
    </motion.div>
  );
}

function Frame37() {
  return (
    <motion.div 
      className="content-stretch flex gap-[18px] items-start relative shrink-0"
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <BiTelephoneFill className="relative shrink-0 size-[18px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-100 text-nowrap whitespace-pre">Contact</p>
    </motion.div>
  );
}

function Frame36() {
  return (
    <motion.div 
      className="content-stretch flex gap-[13px] items-center relative shrink-0"
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <MdiYoutube className="relative shrink-0 size-[23px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-100 text-nowrap whitespace-pre">YouTube</p>
    </motion.div>
  );
}

function Frame35() {
  return (
    <motion.div 
      className="content-stretch flex gap-[12px] items-center relative shrink-0"
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <RiMapFill className="relative shrink-0 size-[27px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-100 text-nowrap whitespace-pre">Sitemap</p>
    </motion.div>
  );
}

function Frame34() {
  return (
    <motion.div 
      className="content-stretch flex gap-[16px] items-end relative shrink-0"
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <MdiMapMarkerAccount className="relative shrink-0 size-[22px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-100 text-nowrap whitespace-pre">Accessibility At Yale</p>
    </motion.div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[92px] items-center relative shrink-0 w-full">
      <Frame41 />
      <Frame40 />
      <Frame39 />
      <Frame38 />
      <Frame37 />
      <Frame36 />
      <Frame35 />
      <Frame34 />
    </div>
  );
}

function Frame43() {
  return (
    <motion.div 
      className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[480px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-100 text-nowrap w-full whitespace-pre"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="relative shrink-0">{`Yale School of Art © 2025 `}</p>
      <p className="relative shrink-0">1156 Chapel Street, POB 208339</p>
      <p className="relative shrink-0">New Haven, Connecticut, 06520-8339</p>
    </motion.div>
  );
}

function Frame44() {
  return (
    <motion.div 
      className="absolute bg-[#080808] box-border content-stretch flex flex-col gap-[199px] items-start left-0 px-[50px] py-[47px] top-[6185px] w-[1728px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <Frame42 />
      <Frame43 />
    </motion.div>
  );
}

export default function MacBookPro() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-start justify-center min-h-screen bg-[#0a0a0a] overflow-x-auto">
      <div className="bg-[#181818] relative w-[1728px] h-[6542px]" data-name="MacBook Pro 16' - 1">
        <div className="absolute bg-[#181818] h-[6542px] left-0 top-0 w-[1728px]" />
        <Frame45 activeIndex={activeIndex} onSelectIndex={setActiveIndex} />
        <Frame48 />
        <motion.p 
          className="absolute font-['Jomolhari:Regular',sans-serif] leading-[150px] left-[50px] not-italic text-[96px] text-neutral-100 top-[1947px] w-[772px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          On The Calender
        </motion.p>
        <Frame47 />
        <Frame30 />
        <Frame22 activeIndex={activeIndex} />
        <Frame25 activeIndex={activeIndex} />
        <Frame23 activeIndex={activeIndex} />
        <Frame26 activeIndex={activeIndex} />
        <Frame24 activeIndex={activeIndex} />
        <Frame27 activeIndex={activeIndex} />
        <Frame49 />
        <Frame50 />
        <Frame44 />
      </div>
    </div>
  );
}
