import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { VoiceType } from "@/types";

type SelectControllerProps = {
  items: { title: string; value: string }[];
  label: string;
  placeholder?: string;
  onChange?: (value: VoiceType) => void;
};

export function SelectController(props: SelectControllerProps) {
  const {
    items = [],
    label,
    placeholder = "Select Something",
    onChange,
  } = props;

  return (
    <div className="flex flex-col gap-2.5">
      <Label className="text-[16px] font-bold text-white-1">{label}</Label>
      <Select onValueChange={onChange}>
        <SelectTrigger
          className={cn(
            "text-[16px] border-none w-full bg-black-1 text-gray-1"
          )}
        >
          <SelectValue
            className="placeholder:text-gray-1"
            placeholder={placeholder}
          />
        </SelectTrigger>
        <SelectContent className="text-[16px] border-none font-bold text-white-1 bg-black-1 focus:ring-orange-1">
          {items.map((item) => (
            <SelectItem
              key={item.value}
              className="capitalize focus:bg-orange-1"
              value={item.value}
            >
              {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
