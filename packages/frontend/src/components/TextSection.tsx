import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

interface ITextSectionProps {
  description?: string,
  label?: string,
  className?: string,
  disabled?: boolean,
  value: string,
  name: string,
  type?: string,
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function TextSection({
  description,
  label,
  disabled = false,
  className = "",
  handleChange,
  value,
  name,
  type,
  ...props }: ITextSectionProps): JSX.Element {
  return (
    <div className="w-full max-w-md px-4">
      <Field disabled={disabled}>
        {label && <Label className="text-sm/6 font-medium text-white">{label}</Label>}
        {description && <Description className="text-sm/6 text-white/50">{description}</Description>}
        <Input
          value={value}
          name={name}
          type={type ?? "text"}
          onChange={handleChange}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            { className }
          )}
          {...props}
        />
      </Field>
    </div>
  )
}