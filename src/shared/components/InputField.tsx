import { React,cn } from "@/shared/libs";
import { Label, Input } from "@/shared/components";

type InputFieldProps = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
};

const InputField = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  error,
  className = '',
}: InputFieldProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        <Input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            error && "border-destructive focus:ring-destructive"
          )}
        />
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    </div>
  );
};

export default InputField;
