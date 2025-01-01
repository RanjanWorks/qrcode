import React, { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

// You can modify this array to include different styles
const qrStyles = [
  {
    label: "Style 4",
    style: {
      dotColor: "#ff4500",
      cornerColor: "#008080",
      backgroundColor: "#f0f8ff",
      dotType: "circle",
      cornerType: "rounded",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      gradientType: "linear",
      cornerDotType: "square",
      cornerDotTypeColor: "#ff4500",
      logo: "logo_placeholder_1.png", // Use your logo here
    },
  },
  {
    label: "Style 5",
    style: {
      dotColor: "#7fff00",
      cornerColor: "#ff6347",
      backgroundColor: "#ffffff",
      dotType: "square",
      cornerType: "rounded",
      gradientColor1: "#32cd32",
      gradientColor2: "#8b0000",
      gradientType: "radial",
      cornerDotType: "circle",
      cornerDotTypeColor: "#7fff00",
      logo: "logo_placeholder_2.png", // Use your logo here
    },
  },
  {
    label: "Style 6",
    style: {
      dotColor: "#8a2be2",
      cornerColor: "#ffff00",
      backgroundColor: "#dcdcdc",
      dotType: "rounded",
      cornerType: "extra-rounded",
      gradientColor1: "#dda0dd",
      gradientColor2: "#ff1493",
      gradientType: "none",
      cornerDotType: "circle",
      cornerDotTypeColor: "#8a2be2",
      logo: "logo_placeholder_3.png", // Use your logo here
    },
  },
  {
    label: "Style 7",
    style: {
      dotColor: "#00bfff",
      cornerColor: "#ff1493",
      backgroundColor: "#f8f8ff",
      dotType: "circle",
      cornerType: "rounded",
      gradientColor1: "#add8e6",
      gradientColor2: "#ff1493",
      gradientType: "linear",
      cornerDotType: "square",
      cornerDotTypeColor: "#ff1493",
      logo: "logo_placeholder_4.png", // Use your logo here
    },
  },
  {
    label: "Style 8",
    style: {
      dotColor: "#2e8b57",
      cornerColor: "#000000",
      backgroundColor: "#fafad2",
      dotType: "square",
      cornerType: "rounded",
      gradientColor1: "#228b22",
      gradientColor2: "#32cd32",
      gradientType: "radial",
      cornerDotType: "circle",
      cornerDotTypeColor: "#2e8b57",
      logo: "logo_placeholder_5.png", // Use your logo here
    },
  },

  {
    label: "Style 18",
    style: {
      dotColor: "#8b008b",
      cornerColor: "#ffff00",
      backgroundColor: "#fafad2",
      dotType: "circle",
      cornerType: "rounded",
      gradientColor1: "#ff4500",
      gradientColor2: "#ff6347",
      gradientType: "linear",
      cornerDotType: "square",
      cornerDotTypeColor: "#8b008b",
      logo: "logo_placeholder_15.png", // Use your logo here
    },
  },
  {
    label: "Style 19",
    style: {
      dotColor: "#ff6347",
      cornerColor: "#ff69b4",
      backgroundColor: "#f0f0f0",
      dotType: "rounded",
      cornerType: "extra-rounded",
      gradientColor1: "#ff1493",
      gradientColor2: "#ff6347",
      gradientType: "none",
      cornerDotType: "circle",
      cornerDotTypeColor: "#ff6347",
      logo: "logo_placeholder_16.png", // Use your logo here
    },
  },
  {
    label: "Style 20",
    style: {
      dotColor: "#00ff00",
      cornerColor: "#ff0000",
      backgroundColor: "#ffffff",
      dotType: "square",
      cornerType: "rounded",
      gradientColor1: "#00bfff",
      gradientColor2: "#ff1493",
      gradientType: "radial",
      cornerDotType: "circle",
      cornerDotTypeColor: "#00ff00",
      logo: "logo_placeholder_17.png", // Use your logo here
    },
  },
];

const QRPalletes = ({ applyStyle }) => {
  const qrPreviewRefs = useRef([]);

  useEffect(() => {
    qrStyles.forEach((styleObj, index) => {
      const qrRef = qrPreviewRefs.current[index];
      if (qrRef && !qrRef.qrCodeInstance) {
        const qrCodeInstance = new QRCodeStyling({
          width: 100,
          height: 100,
          margin: 1,
          type: "svg",
          data: "https://example.com", // Your desired data
          dotsOptions: {
            color: styleObj.style.dotColor,
            type: styleObj.style.dotType,
          },
          cornersSquareOptions: {
            color: styleObj.style.cornerColor,
            type: styleObj.style.cornerType,
          },
          backgroundOptions: {
            color: styleObj.style.backgroundColor,
          },
          cornersDotOptions: {
            color: styleObj.style.cornerDotTypeColor,
            type: styleObj.style.cornerDotType,
          },
          gradient:
            styleObj.style.gradientType !== "none"
              ? {
                  type: styleObj.style.gradientType,
                  colorStops: [
                    { offset: 0, color: styleObj.style.gradientColor1 },
                    { offset: 1, color: styleObj.style.gradientColor2 },
                  ],
                }
              : null,
        });

        qrRef.qrCodeInstance = qrCodeInstance;
        qrCodeInstance.append(qrRef); // Append QR code to div
      }
    });
  }, []);

  return (
    <div className="flex flex-nowrap gap-2 py-2 overflow-x-auto">
      {qrStyles.map((styleObj, index) => (
        <div key={index}>
          <div
            ref={(el) => (qrPreviewRefs.current[index] = el)}
            className="cursor-pointer"
            onClick={() => applyStyle(styleObj.style)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default QRPalletes;
