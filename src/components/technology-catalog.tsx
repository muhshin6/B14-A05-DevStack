import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import { type Technology, categoryStyles, badgeStyles } from "./types";

const TechnologyCatalog = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data as Technology[]);
      });
  }, []);

  const addTechnology = (technology: Technology) => {
    if (
      selectedTechnologies.some((selected) => selected.id === technology.id)
    ) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((current) => [...current, technology]);
    toast.success(`Added ${technology.name} to your stack`);
  };

  const removeTechnology = (technologyId: string) => {
    const tech = selectedTechnologies.find((t) => t.id === technologyId);
    setSelectedTechnologies((current) =>
      current.filter((technology) => technology.id !== technologyId),
    );
    if (tech) {
      toast.info(`Removed ${tech.name} from your stack`);
    }
  };

  const removeAllTechnologies = () => {
    setSelectedTechnologies([]);
    toast.info("Cleared your stack");
  };

  return (
    <section
      className="container mx-auto max-w-350 px-4 pb-16 sm:px-8 justify-items-center lg:justify-items-start"
      id="technologies"
    >
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 ">
            Explore the{" "}
            <span className="lg:text-pink-500 bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 md:grid-cols-1">
        <div className="grid gap-5 col-span-9 lg:grid-cols-3 md:grid-cols-2">
          {technologies.map((technology) => {
            const isAdded = selectedTechnologies.some(
              (selected) => selected.id === technology.id,
            );

            return (
              <article
                key={technology.id}
                className="group flex min-h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100 transition duration-300 group-hover:bg-pink-50 group-hover:ring-pink-100">
                    <img
                      className="h-full w-full object-contain"
                      src={technology.icon}
                      alt={`${technology.name} icon`}
                      loading="lazy"
                    />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${badgeStyles[technology.badge] ?? "bg-slate-50 text-slate-700 ring-slate-200"}`}
                  >
                    {technology.badge}
                  </span>
                </div>

                <div className="mt-5 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900">
                    {technology.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {technology.description}
                  </p>
                </div>

                <div className="mt-5 flex justify-between gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${categoryStyles[technology.category]}`}
                  >
                    {technology.category}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {technology.difficulty}
                  </span>

                  <span className="flex shrink-0 items-center gap-1 text-sm font-bold">
                    <span aria-hidden="true" className="text-yellow-500">
                      ★
                    </span>
                    {technology.rating.toFixed(1)}
                  </span>
                </div>

                <button
                  type="button"
                  className={`mt-5 w-full rounded-xl px-4 py-2.5 text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isAdded
                      ? "cursor-default bg-slate-100 text-slate-500 focus:ring-slate-300"
                      : "bg-linear-to-r from-pink-600 to-orange-500 text-white shadow-sm hover:from-pink-700 hover:to-orange-600 focus:ring-pink-300"
                  }`}
                  disabled={isAdded}
                  aria-pressed={isAdded}
                  onClick={() => addTechnology(technology)}
                >
                  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
              </article>
            );
          })}
        </div>

        <aside className="grid col-span-3 self-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-600">
                Your Stack
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {selectedTechnologies.length} Technology Selected
              </h3>
            </div>
            {selectedTechnologies.length > 0 && (
              <button
                type="button"
                className="rounded-lg px-3 py-2 text-xs font-bold text-pink-700 transition hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-300"
                onClick={removeAllTechnologies}
              >
                Remove All
              </button>
            )}
          </div>

          {selectedTechnologies.length === 0 ? (
            <div className="mt-6 flex min-h-30 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 px-5 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-bold text-pink-600 shadow-sm">
                +
              </div>
              <p className="mt-4 text-xl text-gray-400">Your stack is empty</p>
            </div>
          ) : (
            <ul className="mt-6 flex flex-col gap-3">
              {selectedTechnologies.map((technology) => (
                <li
                  key={technology.id}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-pink-200"
                >
                  <img
                    className="h-10 w-10 rounded-lg bg-slate-50 object-contain p-1.5 ring-1 ring-slate-100"
                    src={technology.icon}
                    alt=""
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-900">
                      {technology.name}
                    </p>
                    <p className="truncate text-xs font-medium text-slate-500">
                      {technology.category}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300"
                    aria-label={`Remove ${technology.name} from stack`}
                    onClick={() => removeTechnology(technology.id)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default TechnologyCatalog;
