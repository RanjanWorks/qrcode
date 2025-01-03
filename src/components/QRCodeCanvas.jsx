import React, { useRef, useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import { Slider } from "@/components/ui/slider";

import QRCodeStyling from "qr-code-styling";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const QRCodeCanvas = ({ options, setResolution, resolution }) => {
  const qrCodeRef = useRef(null);
  const [format, setFormate] = useState("png");
  const qrCode = useRef(new QRCodeStyling(options));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    qrCode.current.update(options);
    qrCode.current.append(qrCodeRef.current);
    setIsLoading(false);
  }, [options]);

  const handleDownload = () => {
    qrCode.current.update(options);
    qrCode.current.download({ name: "qr-code", extension: format });
  };

  return (
    <div className="px-6 flex flex-col gap-2 text-gray-50">
      <div>Qr Code Preview</div>
      {isLoading ? (
        <div className="text-center text-gray-100">Loading...</div>
      ) : (
        <div ref={qrCodeRef} />
      )}
      <div className="flex flex-col gap-1 mt-2">
        <label htmlFor="">Resolution</label>
        <div className="flex items-center gap-2">
          <Slider
            className="w-full"
            onValueChange={(value) => setResolution(value)}
            defaultValue={[resolution]}
            max={1000}
            min={200}
            step={50}
          />
          <p className="border rounded-lg py-1 px-2">{resolution}px</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="">Export</label>

        <div className="grid grid-cols-[70%,auto]  bg-slate-900 rounded-md overflow-hidden">
          <button
            onClick={handleDownload}
            className="w-full bg-white text-black flex items-center gap-2 justify-center"
          >
            <GoDownload />
            Export
          </button>
          <Select
            className="py-0 "
            onValueChange={(value) => setFormate(value)}
          >
            <SelectTrigger className="bg-transparent rounded-l-none">
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
    </div>
  );
};

export default QRCodeCanvas;
