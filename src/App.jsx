import React, { useState, useEffect } from "react";
import Controls from "./components/Controls";
import QRCodeCanvas from "./components/QRCodeCanvas";
import Header from "./components/Header";
import QRPalletes from "./components/QRPalletes";

function App() {
  const [url, setUrl] = useState("https://example.com");
  const [dotColor, setDotColor] = useState("#000000");
  const [margin, setMargin] = useState(10);
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

  const [options, setOptions] = useState({
    width: 250,
    height: 250,
    margin: 10,
    type: "canvas",
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
  };

  return (
    <>
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-[1fr,auto] lg:h-[calc(100vh-50px)] w-full ">
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
            setBackgroundImage={setBackgroundImage}
            setCornerDotType={setCornerDotType}
            setMargin={setMargin}
            seterrorCorrectionLevel={seterrorCorrectionLevel}
            setImageSize={setImageSize}
            setImageMargin={setImageMargin}
            setCornerDotTypeColor={setCornerDotTypeColor}
            cornerDotTypeColor={cornerDotTypeColor}
          />
          <h1 className="font-semibold py-2">Styles</h1>

          <div className="flex">
            <QRPalletes applyStyle={applyStyle} />
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
