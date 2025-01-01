import React, { useRef, useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";

import QRCodeStyling from "qr-code-styling";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const QRCodeCanvas = ({ options }) => {
  const qrCodeRef = useRef(null);
  const [format, setFormate] = useState("png")
  const qrCode = useRef(new QRCodeStyling(options));

  useEffect(() => {
    qrCode.current.update(options);
    qrCode.current.append(qrCodeRef.current);
  }, [options]);

  const handleDownload = () => {
    qrCode.current.download({ name: "qr-code", extension: format });
  };

  return (
    <div className="px-6 flex flex-col gap-2 text-gray-50">
      <div>Qr Code Preview</div>
      <div className="rounded-md overflow-hidden"  ref={qrCodeRef} />

      <div className="flex  gap-2 bg-zinc-900 rounded-md overflow-hidden">
       <button onClick={handleDownload} className="w-full bg-white text-black flex items-center gap-2 justify-center"><GoDownload/>Export</button>
        <Select className="py-0" onValueChange={(value) => setFormate(value)}>
          <SelectTrigger  className="w-1/2 bg-transparent">
            <SelectValue placeholder="PNG" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="png">Png</SelectItem>
            <SelectItem value="jpeg">Jpeg</SelectItem>
            <SelectItem value="svg">Svg</SelectItem>
            <SelectItem value="webp">Webp</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default QRCodeCanvas;
