"use client";

import React, { ChangeEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";

const FilterAndSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onFilterChange = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    if (!value.trim()) {
      params.delete(name);
    } else {
      params.set(name, value);
    }

    router.replace(`/agents?${params.toString()}`);
    console.log(name, value);
  };

  const onSearchBarChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const { value } = e.target;
      console.log(value);

      if (!value.trim()) {
        params.delete("search");
      } else {
        params.set("search", value.trim());
      }

      router.replace(`/agents?${params.toString()}`);
    },
    600
  );

  const clearFilter = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("status");
    params.delete("category");
    params.delete("pricingMode");

    router.replace(`/agents?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="flex w-full max-w-sm items-center gap-2">
        <Input
          type="text"
          placeholder="Search agent"
          className="rounded-xl text-sm"
          onChange={onSearchBarChange}
        />
        <Button
          type="submit"
          variant="outline"
          size="sm"
          className="rounded-xl "
        >
          Search
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Select
          name="status"
          onValueChange={(value) => onFilterChange("status", value)}
          value={searchParams.get("status") || " "}
        >
          <SelectTrigger className="w-fit rounded-xl">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-black rounded-xl">
            <SelectGroup>
              <SelectItem value=" ">Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Beta">Beta</SelectItem>
              <SelectItem value="Archived">Archived</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          name="category"
          onValueChange={(value) => onFilterChange("category", value)}
          value={searchParams.get("category") || " "}
        >
          <SelectTrigger className="w-fit rounded-xl">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="bg-black rounded-xl">
            <SelectGroup>
              <SelectItem value=" ">Category</SelectItem>
              <SelectItem value="Customer Service">Customer Service</SelectItem>
              <SelectItem value="Operations">Operations</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Data Analysis">Data Analysis</SelectItem>
              <SelectItem value="Development">Development</SelectItem>
              <SelectItem value="Human Resources">Human Resources</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Legal">Legal</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          name="pricingModel"
          onValueChange={(value) => onFilterChange("pricingModel", value)}
          value={searchParams.get("pricingModel") || " "}
        >
          <SelectTrigger className="w-fit rounded-xl">
            <SelectValue placeholder="Price model" />
          </SelectTrigger>
          <SelectContent className="bg-black rounded-xl">
            <SelectGroup>
              <SelectItem value=" ">Pricing model</SelectItem>
              <SelectItem value="Free-Tier">Free-Tier</SelectItem>
              <SelectItem value="Subscription">Subscription</SelectItem>
              <SelectItem value="Per-Use">Per-Use</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          onClick={clearFilter}
          variant="outline"
          className="rounded-xl cursor-pointer"
        >
          Clear <XMarkIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default FilterAndSearch;
