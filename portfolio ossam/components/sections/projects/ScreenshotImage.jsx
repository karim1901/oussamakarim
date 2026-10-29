import Image from "next/image";

const FRAME_RATIO = 16 / 10;

// Address-bar text for a project frame; only the mockup fallback is labelled illustrative.
export function frameLabel(project) {
  if (project.liveUrl) return new URL(project.liveUrl).host;
  return project.images.length > 0 ? "Screenshots" : "Illustrative preview";
}

// Screenshots close to the 16:10 frame fill it; tall (mobile) or wide ones are shown whole,
// never cropped, over a blurred copy of themselves.
export default function ScreenshotImage({ image, sizes }) {
  const ratio = image.width && image.height ? image.width / image.height : FRAME_RATIO;
  const fitsFrame = Math.abs(ratio - FRAME_RATIO) / FRAME_RATIO < 0.12;

  if (fitsFrame) {
    return <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover object-top" />;
  }

  return (
    <>
      <Image
        src={image.src}
        alt=""
        aria-hidden="true"
        fill
        sizes={sizes}
        className="scale-110 object-cover opacity-50 blur-xl"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-bg/30" />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-contain drop-shadow-[0_10px_24px_rgb(0_0_0/0.35)]"
      />
    </>
  );
}
