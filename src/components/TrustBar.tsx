"use client";

import { useEffect, useRef, useState } from "react";
import { Users, MapPin, Award, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years in Business",
    description: "Serving Gauteng since 2009",
  },
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "Happy Clients",
    description: "Homes, offices & venues",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: "+",
    label: "Areas Covered",
    description: "Across all of Gauteng",
  },
  {
    icon: ThumbsUp,
    value: 100,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Guaranteed clean, every time",
  },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  description,
  animate,
}: (typeof stats)[0] & { animate: boolean }) {
  const count = useCountUp(value, 2000, animate);

  return (
    <div className="flex flex-col items-center text-center p-6 lg:p-8">
      <div className="w-14 h-14 rounded-full bg-[#1D8FD8]/10 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-[#1D8FD8]" />
      </div>
      <div className="text-4xl lg:text-5xl font-extrabold text-[#0D2137] mb-1">
        {animate ? count : 0}
        <span className="text-[#7DC242]">{suffix}</span>
      </div>
      <div className="text-base font-bold text-[#2D3748] mb-1">{label}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  );
}

export default function TrustBar() {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white py-16 border-b border-gray-100"
      aria-label="Company statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
