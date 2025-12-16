const SponsorsSection = () => {
  const goldSponsors = ["ABC Corp", "XYZ Pvt Ltd"];
  const associateSponsors = ["Foo Industries", "Bar Tech"];
  const communityPartners = ["Baz Club"];

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto glass-panel rounded-3xl p-8 md:p-10 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
        <div className="mb-6 relative">
          <span className="relative z-10 text-[10px] uppercase tracking-[0.35em] text-cyan-200">
            Our Sponsors
          </span>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-6 bg-cyan-400/30 blur-xl rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground/70 text-center">
                Gold Sponsors
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {goldSponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl px-6 py-4 backdrop-blur-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-foreground/90 text-sm font-medium">
                      {sponsor}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground/70 text-center">
                Associate Sponsors
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {associateSponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl px-6 py-4 backdrop-blur-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-foreground/90 text-sm font-medium">
                      {sponsor}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-foreground/70 text-center">
                Community Partners
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {communityPartners.map((sponsor, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl px-6 py-4 backdrop-blur-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-foreground/90 text-sm font-medium">
                      {sponsor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
