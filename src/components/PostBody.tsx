/*
 * PostBody — renders Field Notes post blocks in the editorial reader style.
 * Serif body, drop cap on the opening paragraph, section headings, lead close.
 */
import type { Block } from "@/lib/thoughts";

export default function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p-first":
            return (
              <p
                key={i}
                className="font-heading text-[18px] sm:text-[19px] leading-[1.78] text-[#0A0A0A] mb-6 first-letter:font-heading first-letter:text-7xl first-letter:font-medium first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0A0A0A]"
              >
                {block.text}
              </p>
            );
          case "p":
            return (
              <p
                key={i}
                className="font-heading text-[18px] sm:text-[19px] leading-[1.78] text-[#0A0A0A] mb-6"
              >
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="font-heading text-[1.7rem] sm:text-[1.9rem] font-semibold text-[#0A0A0A] mt-14 mb-5 leading-tight"
              >
                {block.text}
              </h2>
            );
          case "lead":
            return (
              <p
                key={i}
                className="font-heading italic text-[1.35rem] sm:text-[1.5rem] leading-snug text-[#0A0A0A] border-l-4 border-[#FFC500] pl-6 py-1 my-10"
              >
                {block.text}
              </p>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
