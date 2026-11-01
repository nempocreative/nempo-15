import background from '@/assets/nempo-feed-slide-31-background.png.asset.json';

export function SlideThirtyOneBackground() {
  return (
    <section
      role="group"
      aria-label="Latar MusiComedy Night"
      className="absolute inset-0 z-[3] overflow-hidden"
    >
      <img
        src={background.url}
        alt="MusiComedy Night dengan ilustrasi alat musik tradisional dan latar biru"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
    </section>
  );
}