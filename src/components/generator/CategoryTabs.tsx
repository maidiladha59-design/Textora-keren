"use client";

import { FilterTabs } from "@/components/ui/FilterTabs";
import { dictionary } from "@/lib/i18n/id";
import type { CategoryId } from "@/lib/unicode";

export type CategoryTabId = "all" | CategoryId;

export interface CategoryOption {
  id: CategoryTabId;
  label: string;
}

export function CategoryTabs({
  options,
  value,
  onChange,
  panelId = "generator-results",
}: {
  options: readonly CategoryOption[];
  value: CategoryTabId;
  onChange: (value: CategoryTabId) => void;
  panelId?: string;
}) {
  return (
    <FilterTabs
      options={options}
      value={value}
      onChange={onChange}
      panelId={panelId}
      ariaLabel={dictionary.generator.categoryLabel}
      idPrefix="generator-tab"
    />
  );
}
