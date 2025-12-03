import { motion, AnimatePresence } from "motion/react";
import imgLocation from "figma:asset/e22c5a88ea067dab95af058d97809fc9f998c58b.png";
import svgPaths from "../imports/svg-yvigjun7vr";

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

interface EventData {
  title: string;
  date: string;
  month: string;
  location: string;
  time: string;
  color: string;
  height?: string;
  width?: string;
  gap?: string;
  textWidth?: string;
}

interface EventCardProps extends EventData {
  position: { left: string; top: string };
  index: number;
  activeIndex: number;
}

function EventCard({ title, date, month, location, time, color, position, height = "150px", width = "478px", gap = "62px", textWidth = "340px", index, activeIndex }: EventCardProps) {
  return (
    <motion.div
      className="absolute z-20"
      style={{ 
        left: position.left, 
        top: position.top,
        height: height,
        width: width
      }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeIndex}-${title}-${date}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="size-full"
        >
          <div 
            className="absolute bg-neutral-100 box-border content-stretch flex flex-col items-end left-0 px-[44px] py-[18px] rounded-[25px] top-0"
            style={{ 
              gap: gap,
              height: height,
              width: width
            }}
          >
            <p 
              className="font-['Jomolhari:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#080808] text-[32px]"
              style={{ width: textWidth }}
            >
              {title}
            </p>
            <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0 w-[333px]">
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[13px]" data-name="Location">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLocation} />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#080808] text-[12px] text-nowrap whitespace-pre">{location}</p>
              </div>
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <MdiClock />
                <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#181818] text-[12px] text-nowrap whitespace-pre">{time}</p>
              </div>
            </div>
          </div>
          <motion.div 
            className="absolute box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-0 px-[17px] py-[42px] rounded-[25px] top-0 w-[81px]"
            style={{ 
              backgroundColor: color,
              height: height
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-center text-neutral-100 text-nowrap whitespace-pre">
              <p className="leading-[44px] mb-0 text-[36px]">{date}</p>
              <p className="font-['Poppins:Regular',sans-serif] leading-[32px] text-[24px]">{month}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

interface EventCarouselProps {
  activeIndex: number;
}

export function EventCarousel({ activeIndex }: EventCarouselProps) {
  const positions = [
    { left: "66.67%", top: "2407px" },        // Frame22
    { left: "101px", top: "2407px" },         // Frame25
    { left: "calc(58.33%+53px)", top: "2614px" }, // Frame23
    { left: "calc(8.33%+44px)", top: "2614px" },  // Frame26
    { left: "calc(58.33%+53px)", top: "2200px" }, // Frame24
    { left: "calc(8.33%+44px)", top: "2200px" }   // Frame27
  ];

  const eventSets: EventData[][] = [
    // Set 1
    [
      { title: "MFA Crits in Sculpture", date: "18", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "12:00 PM - 3:30 PM EST", color: "#65558f" },
      { title: "MFA Crits in Sculpture", date: "18", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "12:00 PM - 3:30 PM EST", color: "#65558f" },
      { title: "Presentation of MFA Crit Work in Painting/Printmaking", date: "18", month: "Nov", location: "353 Crown Street, the Pit", time: "1:00 PM - 9:00 PM EST", color: "#00497e", gap: "7px" },
      { title: "Presentation of MFA Crit Work in Painting/Printmaking", date: "18", month: "Nov", location: "353 Crown Street, the Pit", time: "1:00 PM - 9:00 PM EST", color: "#00497e", gap: "7px" },
      { title: "\"Kitchen Sink\" — 1st-Year MFA Exhibition", date: "08", month: "Nov", location: "1156 Chapel Street", time: "Nov 8th 12:00 PM - 25th Nov 6:00 PM", color: "#00497e", gap: "7px", height: "150px", width: "81px", textWidth: "340px" },
      { title: "\"Kitchen Sink\" — 1st-Year MFA Exhibition", date: "08", month: "Nov", location: "1156 Chapel Street", time: "Nov 8th 12:00 PM - 25th Nov 6:00 PM", color: "#00497e", gap: "7px", height: "150px", width: "81px", textWidth: "340px" }
    ],
    // Set 2
    [
      { title: "Advanced Graphic Design Workshop", date: "22", month: "Nov", location: "32 Edgewood Ave., New Haven", time: "10:00 AM - 4:00 PM EST", color: "#7e4900" },
      { title: "Photography Exhibition Opening", date: "23", month: "Nov", location: "1156 Chapel Street", time: "6:00 PM - 9:00 PM EST", color: "#7e4900" },
      { title: "Advanced Graphic Design Workshop", date: "22", month: "Nov", location: "32 Edgewood Ave., New Haven", time: "10:00 AM - 4:00 PM EST", color: "#7e4900", gap: "7px" },
      { title: "Photography Exhibition Opening", date: "23", month: "Nov", location: "1156 Chapel Street", time: "6:00 PM - 9:00 PM EST", color: "#7e4900", gap: "7px" },
      { title: "Printmaking Studio Session", date: "24", month: "Nov", location: "353 Crown Street, the Pit", time: "2:00 PM - 8:00 PM EST", color: "#4a7e00", gap: "7px", height: "150px", width: "81px", textWidth: "340px" },
      { title: "Graduate Student Symposium", date: "25", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "9:00 AM - 5:00 PM EST", color: "#4a7e00", gap: "7px", height: "150px", width: "81px", textWidth: "340px" }
    ],
    // Set 3
    [
      { title: "Sculpture Studio Open House", date: "27", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "1:00 PM - 6:00 PM EST", color: "#7e0049" },
      { title: "Contemporary Art Lecture Series", date: "28", month: "Nov", location: "1156 Chapel Street", time: "3:00 PM - 5:00 PM EST", color: "#7e0049" },
      { title: "Sculpture Studio Open House", date: "27", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "1:00 PM - 6:00 PM EST", color: "#7e0049", gap: "7px" },
      { title: "Contemporary Art Lecture Series", date: "28", month: "Nov", location: "1156 Chapel Street", time: "3:00 PM - 5:00 PM EST", color: "#7e0049", gap: "7px" },
      { title: "Artist Talk: International Perspectives", date: "29", month: "Nov", location: "353 Crown Street, the Pit", time: "4:00 PM - 7:00 PM EST", color: "#007e7e", gap: "7px", height: "150px", width: "81px", textWidth: "340px" },
      { title: "Mixed Media Workshop", date: "30", month: "Nov", location: "36 Edgewood Ave., New Haven", time: "11:00 AM - 4:00 PM EST", color: "#007e7e", gap: "7px", height: "150px", width: "81px", textWidth: "340px" }
    ],
    // Set 4
    [
      { title: "Winter Break Studio Access", date: "05", month: "Dec", location: "36 Edgewood Ave., New Haven", time: "9:00 AM - 10:00 PM EST", color: "#5f007e" },
      { title: "Guest Curator Workshop", date: "06", month: "Dec", location: "1156 Chapel Street", time: "2:00 PM - 6:00 PM EST", color: "#5f007e" },
      { title: "Winter Break Studio Access", date: "05", month: "Dec", location: "36 Edgewood Ave., New Haven", time: "9:00 AM - 10:00 PM EST", color: "#5f007e", gap: "7px" },
      { title: "Guest Curator Workshop", date: "06", month: "Dec", location: "1156 Chapel Street", time: "2:00 PM - 6:00 PM EST", color: "#5f007e", gap: "7px" },
      { title: "Installation Art Critique", date: "07", month: "Dec", location: "353 Crown Street, the Pit", time: "3:00 PM - 8:00 PM EST", color: "#7e3400", gap: "7px", height: "150px", width: "81px", textWidth: "340px" },
      { title: "Year-End Celebration", date: "08", month: "Dec", location: "36 Edgewood Ave., New Haven", time: "7:00 PM - 11:00 PM EST", color: "#7e3400", gap: "7px", height: "150px", width: "81px", textWidth: "340px" }
    ]
  ];

  const currentEvents = eventSets[activeIndex] || eventSets[0];

  return (
    <>
      {currentEvents.map((event, index) => (
        <EventCard
          key={`${activeIndex}-${index}`}
          {...event}
          position={positions[index]}
          index={index}
          activeIndex={activeIndex}
        />
      ))}
    </>
  );
}
