import mergedPoster from '@/assets/nempo-feed-slide-31-merged.jpg';

export function SlideThirtyOneBackground() {
  return (
    <section
      role="group"
      aria-label="Poster MusiComedy Night"
      className="absolute inset-0 z-[3] overflow-hidden"
    >
      <img
        src={mergedPoster}
        alt="Poster MusiComedy Night dengan foto grup berbusana adat Sunda dan ilustrasi alat musik tradisional"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
    </section>
  );
}
