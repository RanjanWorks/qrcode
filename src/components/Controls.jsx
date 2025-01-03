import React, { useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import ColorPicker from "./ColorPicker";

const Controls = ({
  url,
  setUrl,
  dotColor,
  setDotColor,
  cornerColor,
  setCornerColor,
  backgroundColor,
  setBackgroundColor,
  dotType,
  setDotType,
  cornerType,
  setCornerType,
  setImage,
  cornerDotType,
  image,
  setCornerDotType,
  setCornerDotTypeColor,
  Margin,
  setMargin,
  seterrorCorrectionLevel,
  setImageMargin,
  setImageSize,
  cornerDotTypeColor,
  setGradientType,
  setRender,
  render,
}) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleSetDotColor = (color) => {
    setDotColor(color);
    setGradientType("none"); // Set gradient to false whenever dotColor is updated
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setImage(imageUrl);
    }
  };
  const handleCancelImage = () => {
    setUploadedImage(null);
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="text-slate-50 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold">Content</h1>
        <input
          className="bg-slate-900 border border-slate-800 p-3 rounded-lg outline-none"
          type="text"
          value={url}
          placeholder="Enter URL"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold">Design</h1>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Main Options</AccordionTrigger>
            <AccordionContent className="border-t py-3">
              <div className="  grid grid-cols-[auto,1fr] items-center gap-5">
                <label htmlFor="">Margin</label>
                <Slider
                  className="w-full lg:w-1/3"
                  onValueChange={(value) => setMargin(value)}
                  defaultValue={[5]}
                  max={50}
                  step={1}
                />
                <label htmlFor="">Error Correction</label>
                <Select
                  onValueChange={(value) => seterrorCorrectionLevel(value)}
                >
                  <SelectTrigger className="w-full lg:w-1/4">
                    <SelectValue placeholder="Q" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Q">Q</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="H">H</SelectItem>
                  </SelectContent>
                </Select>
                <label htmlFor="">Render</label>
                <Select value={render} onValueChange={(value) => setRender(value)}>
                  <SelectTrigger className="w-full lg:w-1/4">
                    <SelectValue placeholder="Canvas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canvas">Canvas</SelectItem>
                    <SelectItem value="svg">Svg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Body</AccordionTrigger>
            <AccordionContent className="border-t py-3">
              <div className="grid grid-cols-[auto,1fr] items-center gap-5">
                <label htmlFor="">Dot Style</label>
                <Select
                  value={dotType}
                  onValueChange={(value) => setDotType(value)}
                >
                  <SelectTrigger className="w-1/2 lg:w-1/4">
                    <SelectValue placeholder="Square" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="square">Square</SelectItem>
                    <SelectItem value="dots">Dots</SelectItem>
                    <SelectItem value="rounded">Rounded</SelectItem>
                    <SelectItem value="extra-rounded">Extra-Rounded</SelectItem>
                    <SelectItem value="classy">Classy</SelectItem>
                    <SelectItem value="classy-rounded">
                      Classy-Rounded
                    </SelectItem>
                  </SelectContent>
                </Select>
                <label htmlFor="">Color</label>
                <ColorPicker setDotColor={handleSetDotColor} />
                <label htmlFor="">Custom</label>
                <input
                  type="color"
                  className="bg-transparent"
                  value={dotColor}
                  onChange={(e) => handleSetDotColor(e.target.value)}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Eye Frame</AccordionTrigger>
            <AccordionContent className="border-t py-3">
              <div className="grid grid-cols-[auto,1fr] items-center gap-5">
                <label htmlFor="">Corner Style</label>
                <Select
                  value={cornerType}
                  onValueChange={(value) => setCornerType(value)}
                >
                  <SelectTrigger className="w-1/2 lg:w-1/4">
                    <SelectValue placeholder="Square" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={null}>None</SelectItem>
                    <SelectItem value="square">Square</SelectItem>
                    <SelectItem value="dots">Dot</SelectItem>
                    <SelectItem value="extra-rounded">Extra-Rounded</SelectItem>
                  </SelectContent>
                </Select>
                <label htmlFor="">Color</label>
                <ColorPicker setDotColor={setCornerColor} />
                <label htmlFor="">Custom</label>
                <input
                  type="color"
                  className="bg-transparent"
                  value={cornerColor}
                  onChange={(e) => setCornerColor(e.target.value)}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Eye Ball</AccordionTrigger>
            <AccordionContent className="border-t py-3">
              <div className="grid grid-cols-[auto,1fr] items-center gap-5">
                <label htmlFor="">Corner Style</label>
                <Select
                  value={cornerDotType}
                  onValueChange={(value) => setCornerDotType(value)}
                >
                  <SelectTrigger className="w-1/2 lg:w-1/4">
                    <SelectValue placeholder="Square" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={null}>None</SelectItem>
                    <SelectItem value="square">Square</SelectItem>
                    <SelectItem value="dots">Dot</SelectItem>
                  </SelectContent>
                </Select>
                <label htmlFor="">Color</label>
                <ColorPicker setDotColor={setCornerDotTypeColor} />
                <label htmlFor="">Custom</label>
                <input
                  type="color"
                  className="bg-transparent"
                  value={cornerDotTypeColor}
                  onChange={(e) => setCornerDotTypeColor(e.target.value)}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Upload Logo</AccordionTrigger>
            <AccordionContent className="border-t py-3">
              <div className="grid grid-cols-[auto,1fr] items-center gap-5">
                <label htmlFor="">Upload</label>
                <div className="flex items-center gap-2">
                  <input
                    ref={fileInputRef}
                    accept="image/*"
                    type="file"
                    onChange={handleImageUpload}
                    className=" file:border-none file:bg-slate-800 file:text-slate-50 file:rounded-md file:px-4 file:py-2 file:cursor-pointer hover:file:bg-slate-600"
                  />
                  {uploadedImage && (
                    <button
                      className="bg-slate-800 rounded-md py-1 px-3"
                      onClick={handleCancelImage}
                    >
                      Cancel
                    </button>
                  )}
                </div>
                <label htmlFor="">Url</label>
                <input
                  type="url"
                  value={image}
                  className="bg-slate-800 outline-none p-2 rounded-md w-full lg:w-1/3"
                  onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="">Size</label>
                <Slider
                  className="w-full lg:w-1/3"
                  onValueChange={(value) => setImageSize(value)}
                  defaultValue={[0.4]}
                  min={0}
                  max={0.5}
                  step={0.1}
                />
                <label htmlFor="">Margin</label>
                <Slider
                  className=" w-full lg:w-1/3"
                  onValueChange={(value) => setImageMargin(value)}
                  defaultValue={[0]}
                  max={10}
                  step={1}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Background</AccordionTrigger>
            <AccordionContent className="border-t py-3">
              <div className="grid grid-cols-[auto,1fr] items-center gap-5">
                <label htmlFor="">Color</label>
                <ColorPicker setDotColor={setBackgroundColor} />
                <label htmlFor="">Custom</label>
                <input
                  type="color"
                  className="bg-transparent"
                  value={backgroundColor}
                  onInput={(e) => setBackgroundColor(e.target.value)}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Controls;
