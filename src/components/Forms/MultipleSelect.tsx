"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "md" | "sm";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  required?: boolean;
};

const FormMultiSelectField = ({
  name,
  size,
  placeholder = "Select",
  options,
  label,
  required,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      <label className="label">
        <span className="label-text">
          {required ? <span className="text-red-500 inline">*</span> : null}
          {label ? label : null}
        </span>
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            options={options}
            value={value}
            placeholder={placeholder}
            key={value?.label}
            allowClear
            mode="multiple"
            className={`input w-full ${
              size == "md" ? "max-w-md" : "max-w-xs"
            } m-0 p-0`}
          />
        )}
      />
    </>
  );
};

export default FormMultiSelectField;
