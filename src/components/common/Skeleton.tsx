export const FeatureSkeleton = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="h-10 w-72 mx-auto rounded-lg bg-slate-200 animate-pulse mb-4" />
        <div className="h-5 w-96 max-w-full mx-auto rounded bg-slate-200 animate-pulse mb-14" />

        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-3xl border border-slate-100 p-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-200 animate-pulse mb-5" />
              <div className="h-6 w-40 rounded bg-slate-200 animate-pulse mb-3" />
              <div className="h-4 w-full rounded bg-slate-200 animate-pulse mb-2" />
              <div className="h-4 w-5/6 rounded bg-slate-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SignUpAdSkeleton = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="rounded-[32px] p-10 md:p-16 bg-slate-100">
          <div className="h-12 w-80 max-w-full mx-auto rounded-lg bg-slate-200 animate-pulse mb-6" />

          <div className="h-5 w-[500px] max-w-full mx-auto rounded bg-slate-200 animate-pulse mb-10" />

          <div className="flex justify-center">
            <div className="h-14 w-44 rounded-xl bg-slate-200 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const FAQSkeleton = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="h-10 w-56 mx-auto rounded-lg bg-slate-200 animate-pulse mb-12" />

        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-100 p-6">
              <div className="h-6 w-3/4 rounded bg-slate-200 animate-pulse mb-4" />
              <div className="h-4 w-full rounded bg-slate-200 animate-pulse mb-2" />
              <div className="h-4 w-5/6 rounded bg-slate-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
