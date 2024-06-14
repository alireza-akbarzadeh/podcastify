import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components//ui/form";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

type InputController<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  label: string;
  name: TName;
  control: Control<TFieldValues>;
  placeholder?: string;
  description?: string;
  components?: "textArea" | "text";
};

export function InputController<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: InputController<TFieldValues, TName>) {
  const {
    control,
    name,
    description,
    label,
    placeholder = "Enter something...",
    components = "text",
  } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white-1 font-bold text-[16px]">
            {label}
          </FormLabel>
          <FormControl>
            {components === "text" ? (
              <Input
                className="input-class"
                placeholder={placeholder}
                {...field}
              />
            ) : (
              <Textarea
                className="input-class"
                placeholder={placeholder}
                {...field}
              />
            )}
          </FormControl>
          {description && <FormDescription>description</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
