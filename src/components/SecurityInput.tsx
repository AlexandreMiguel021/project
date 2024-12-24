import { useState } from "react";
import { Lock } from "lucide-react";

interface SecurityInputProps {
  onValidate: (isValid: boolean) => void;
}

export function SecurityInput({ onValidate }: SecurityInputProps) {
  const [code, setCode] = useState("");
  const SECURITY_CODE = "2023"; // In a real app, this should be in a secure backend

  const handleCodeChange = (value: string) => {
    setCode(value);
    onValidate(value === SECURITY_CODE);
  };

  return (
    <div className="flex items-center gap-2">
      <Lock size={18} className="text-gray-500" />
      <input
        type="password"
        maxLength={4}
        value={code}
        onChange={(e) => handleCodeChange(e.target.value)}
        className="w-24 px-3 py-2 border rounded-md text-center"
        placeholder="****"
      />
    </div>
  );
}
