import React, { useState, useEffect } from "react";
import Controls from "./components/Controls";
import QRCodeCanvas from "./components/QRCodeCanvas";
import Header from "./components/Header";
import QRPalletes from "./components/QRPalletes";

function App() {
  const [url, setUrl] = useState("Write Text here");
  const [dotColor, setDotColor] = useState("#000000");
  const [margin, setMargin] = useState(5);
  const [cornerColor, setCornerColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [dotType, setDotType] = useState("rounded");
  const [cornerType, setCornerType] = useState("extra-rounded");
  const [cornerDotType, setCornerDotType] = useState("square");
  const [cornerDotTypeColor, setCornerDotTypeColor] = useState("#000");
  const [image, setImage] = useState("");
  const [gradientColor1, setGradientColor1] = useState("#ff0000");
  const [gradientColor2, setGradientColor2] = useState("#0000ff");
  const [gradientType, setGradientType] = useState("none");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [errorCorrectionLevel, seterrorCorrectionLevel] = useState("Q");
  const [imageSize, setImageSize] = useState(1);
  const [imageMargin, setImageMargin] = useState(0);
  const [render, setRender] = useState("canvas");

  const [options, setOptions] = useState({
    width: 250,
    height: 250,
    margin: 10,
    type: render,
    data: url,
    image: image,
    dotsOptions: { color: dotColor, type: dotType },
    cornersSquareOptions: { color: cornerColor, type: cornerType },
    backgroundOptions: { color: backgroundColor },
    imageOptions: { crossOrigin: "anonymous" },
    cornersDotOptions: { color: cornerDotTypeColor, type: cornerDotType },
  });

  useEffect(() => {
    setOptions({
      ...options,
      data: url,
      image: image,
      type: render,
      dotsOptions: {
        color: dotColor,
        type: dotType,
        gradient:
          gradientType === "none"
            ? null
            : {
                type: gradientType,
                colorStops: [
                  { offset: 0, color: gradientColor1 },
                  { offset: 1, color: gradientColor2 },
                ],
              },
      },
      cornersSquareOptions: { color: cornerColor, type: cornerType },
      backgroundOptions: { color: backgroundColor, image: backgroundImage },
      cornersDotOptions: { color: cornerDotTypeColor, type: cornerDotType },
      qrOptions: { errorCorrectionLevel: errorCorrectionLevel },
      imageOptions: { imageSize: imageSize, margin: imageMargin },
      margin: margin,
    });
  }, [
    url,
    dotColor,
    cornerColor,
    backgroundColor,
    dotType,
    cornerType,
    image,
    gradientColor1,
    gradientColor2,
    gradientType,
    backgroundImage,
    cornerDotType,
    cornerDotTypeColor,
    errorCorrectionLevel,
    imageSize,
    imageMargin,
    margin,
    render,
  ]);

  const applyStyle = (style) => {
    setDotColor(style.dotColor || dotColor);
    setCornerColor(style.cornerColor || cornerColor);
    setBackgroundColor(style.backgroundColor || backgroundColor);
    setDotType(style.dotType || dotType);
    setCornerType(style.cornerType || cornerType);
    setGradientColor1(style.gradientColor1 || gradientColor1);
    setGradientColor2(style.gradientColor2 || gradientColor2);
    setGradientType(style.gradientType || gradientType);
    setCornerDotType(style.cornerDotType || cornerDotType);
    setCornerDotTypeColor(style.cornerDotTypeColor || cornerDotTypeColor);
    setImage(style.image || "");
    setImageMargin(4);
    setImageSize(0.2);
  };

  return (
    <>
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-[1fr,auto] lg:h-[calc(100vh-50px)] w-full ">
      <div className="absolute -z-10 h-full lg:h-[calc(100vh-50px)] w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
        <section className="flex flex-col p-6 border-r border-r-zinc-800 overflow-y-auto">
       
          <Controls
            url={url}
            setUrl={setUrl}
            dotColor={dotColor}
            setDotColor={setDotColor}
            cornerColor={cornerColor}
            setCornerColor={setCornerColor}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            dotType={dotType}
            setDotType={setDotType}
            cornerType={cornerType}
            setCornerType={setCornerType}
            setImage={setImage}
            image={image}
            setBackgroundImage={setBackgroundImage}
            setCornerDotType={setCornerDotType}
            setMargin={setMargin}
            seterrorCorrectionLevel={seterrorCorrectionLevel}
            setImageSize={setImageSize}
            setImageMargin={setImageMargin}
            setCornerDotTypeColor={setCornerDotTypeColor}
            cornerDotTypeColor={cornerDotTypeColor}
            setGradientType={setGradientType}
            setRender={setRender}
          />
          <h1 className="font-semibold py-2 mt-2">Styles</h1>
          <div className="flex">
            <QRPalletes data={url} applyStyle={applyStyle} />
          </div>
        </section>
        <section className=" flex items-start py-6 justify-center ">
          <QRCodeCanvas options={options} />
        </section>
      </main>
    </>
  );
}

export default App;
