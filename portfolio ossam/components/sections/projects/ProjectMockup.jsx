// Flat, abstract wireframes for projects without a public screenshot. Always rendered with an
// "Illustrative preview" label so they are never mistaken for the real product.

function ShopMockup() {
  return (
    <div className="flex h-full flex-col bg-[#f6f6f4] px-[6%] pt-[20%] pb-[5%]">
      <div className="flex items-center justify-between">
        <span className="h-2 w-16 rounded-full bg-[#1d2030]" />
        <span className="flex gap-3">
          <span className="h-1.5 w-8 rounded-full bg-[#c8cad2]" />
          <span className="h-1.5 w-8 rounded-full bg-[#c8cad2]" />
          <span className="h-1.5 w-8 rounded-full bg-[#c8cad2]" />
        </span>
      </div>
      <div className="mt-[5%] flex items-end justify-between">
        <span className="space-y-2">
          <span className="block h-3 w-40 rounded-full bg-[#1d2030]" />
          <span className="block h-3 w-28 rounded-full bg-[#1d2030]" />
        </span>
        <span className="h-6 w-20 rounded-full bg-[#2f55e8]" />
      </div>
      <div className="mt-[5%] grid flex-1 grid-cols-4 gap-3">
        {["#e9e5df", "#e2e6ee", "#e7e3ec", "#e3e9e4"].map((tone) => (
          <div key={tone} className="flex flex-col">
            <span className="flex-1 rounded-md" style={{ background: tone }} />
            <span className="mt-2 h-1.5 w-3/4 rounded-full bg-[#c8cad2]" />
            <span className="mt-1.5 h-1.5 w-1/3 rounded-full bg-[#1d2030]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FoodMockup() {
  return (
    <div className="grid h-full grid-cols-[1.1fr_1fr] bg-[#15110f]">
      <div className="flex flex-col px-[8%] pt-[20%] pb-[7%]">
        <span className="h-2 w-14 rounded-full bg-[#e8c9a6]" />
        <span className="mt-auto space-y-2">
          <span className="block h-3 w-4/5 rounded-full bg-[#f3ece4]" />
          <span className="block h-3 w-3/5 rounded-full bg-[#f3ece4]" />
          <span className="block h-1.5 w-2/3 rounded-full bg-white/25" />
        </span>
        <span className="mt-5 mb-[6%] h-6 w-24 rounded-full bg-[#d9692b]" />
      </div>
      <div className="m-[7%] ml-0 rounded-lg bg-[linear-gradient(160deg,#3a2a20,#211814)]" />
    </div>
  );
}

export default function ProjectMockup({ variant }) {
  return variant === "food" ? <FoodMockup /> : <ShopMockup />;
}
