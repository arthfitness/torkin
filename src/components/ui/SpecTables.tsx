"use client";

import { useState } from "react";
import type { SpecTable } from "@/lib/data/spec-tables";

export default function SpecTables({ tables }: { tables: SpecTable[] }) {
  const [activeId, setActiveId] = useState(tables[0]?.id);
  const active = tables.find((t) => t.id === activeId) ?? tables[0];

  if (!tables.length) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-black/10">
        {tables.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveId(t.id)}
            className={`relative -mb-px px-1 pb-3 font-accent text-sm font-semibold transition-colors ${
              t.id === active.id
                ? "border-b-2 border-ink-900 text-ink-900"
                : "text-brand hover:text-ink-900"
            }`}
          >
            {t.tabLabel}
          </button>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded ring-1 ring-black/10">
        <h5 className="bg-ink-950 px-4 py-2.5 font-accent text-sm font-bold text-white">
          {active.heading}
        </h5>
        <div className="max-h-96 overflow-y-auto custom-scroll">
          <table className="w-full border-collapse text-center text-sm">
            <thead className="sticky top-0 bg-muted-light/40">
              <tr>
                <th className="border border-black/10 bg-surface-muted px-4 py-2.5 font-accent font-bold text-ink-900">
                  Item Code
                </th>
                <th className="border border-black/10 bg-surface-muted px-4 py-2.5 font-accent font-bold text-ink-900">
                  Item Name
                </th>
              </tr>
            </thead>
            <tbody>
              {active.rows.map((row) => (
                <tr key={row.itemCode} className="odd:bg-white even:bg-surface-alt">
                  <td className="border border-black/10 px-4 py-2 text-ink-900">{row.itemCode}</td>
                  <td className="border border-black/10 px-4 py-2 text-ink-900">{row.itemName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
