import React, { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

// You can modify this array to include different styles
const qrStyles = [
  {
    label: "Classic",
    style: {
      dotColor: "black",
      cornerColor: "black",
      backgroundColor: "white",
      dotType: "square",
      cornerType: "square",
      gradientColor1: "#DA1D49",
      gradientColor2: "#F6CA01",
      gradientType: "none",
      cornerDotType: "square",
      cornerDotTypeColor: "black",
    },
  },
  {
    label: "Instagram",
    style: {
      dotColor: "#0080FF",
      cornerColor: "#DA1D49",
      backgroundColor: "#f0f8ff",
      dotType: "dots",
      cornerType: "",
      gradientColor1: "#DA1D49",
      gradientColor2: "#F6CA01",
      gradientType: "linear",
      cornerDotType: "",
      cornerDotTypeColor: "#DA1D49",
      image:
        "https://static-00.iconduck.com/assets.00/instagram-1-icon-512x512-vtcaw64p.png",
    },
  },
  {
    label: "Linkedin",
    style: {
      dotColor: "black",
      cornerColor: "#1873C8",
      backgroundColor: "#f0f8ff",
      dotType: "dots",
      cornerType: "classy-rounded",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      gradientType: "none",
      cornerDotType: "",
      cornerDotTypeColor: "#1873C8",
      image:
        "https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png", // Use your logo here
    },
  },
  {
    label: "WhatsappCls",
    style: {
      dotColor: "black",
      cornerColor: "black",
      cornerDotTypeColor: "black",
      backgroundColor: "white",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      cornerType: "extra-rounded",
      gradientType: "none",
      dotType: "dots",
      cornerDotType: "extra-rounded",
      image:
        "https://static-00.iconduck.com/assets.00/whatsapp-logo-icon-512x512-7i7ztupy.png", // Use your logo here
    },
  },
  {
    label: "facebook",
    style: {
      dotColor: "black",
      cornerColor: "#1877F2",
      backgroundColor: "white",
      dotType: "classy-rounded",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      gradientType: "none",
      cornerType: "extra-rounded",
      cornerDotType: "",
      cornerDotTypeColor: "#1877F2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png", // Use your logo here
    },
  },
  {
    label: "Github",
    style: {
      dotColor: "black",
      cornerColor: "black",
      cornerDotTypeColor: "black",
      backgroundColor: "white",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      gradientType: "none",
      dotType: "square",
      cornerType: "square",
      cornerDotType: "square",
      image:
        "https://static-00.iconduck.com/assets.00/github-icon-512x512-bunm6n3o.png", // Use your logo here
    },
  },
  {
    label: "Youtube",
    style: {
      dotColor: "#D31C1C",
      cornerColor: "#D31C1C",
      cornerDotTypeColor: "#D31C1C",
      backgroundColor: "white",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      gradientType: "none",
      dotType: "classy",
      cornerType: "dots",
      cornerDotType: "dots",
      image:
        "https://static-00.iconduck.com/assets.00/youtube-icon-512x360-3cmbxj37.png", // Use your logo here
    },
  },
  {
    label: "Whatsapp",
    style: {
      dotColor: "#00DA5F",
      cornerColor: "black",
      cornerDotTypeColor: "black",
      backgroundColor: "white",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      gradientType: "none",
      dotType: "dots",
      cornerType: "",
      cornerDotType: "dots",
      image:
        "https://static-00.iconduck.com/assets.00/whatsapp-icon-512x511-rczuooxy.png", // Use your logo here
    },
  },
  {
    label: "call",
    style: {
      dotColor: "black",
      cornerColor: "black",
      cornerDotTypeColor: "black",
      backgroundColor: "white",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      gradientType: "none",
      dotType: "classy",
      cornerType: "extra-rounded",
      cornerDotType: "dots",
      image:
        "https://static-00.iconduck.com/assets.00/phone-icon-510x512-eje2g18o.png", // Use your logo here
    },
  },
  {
    label: "Gmail",
    style: {
      dotColor: "#31AA52",
      cornerColor: "#EB4132",
      cornerDotTypeColor: "#4086F4",
      backgroundColor: "white",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      gradientType: "none",
      dotType: "rounded",
      cornerType: "extra-rounded",
      cornerDotType: "square",
      image:
        "https://static-00.iconduck.com/assets.00/gmail-icon-512x512-qp7vijfd.png", // Use your logo here
    },
  },
  {
    label: "SnapChat",
    style: {
      dotColor: "black",
      cornerColor: "black",
      cornerDotTypeColor: "black",
      backgroundColor: "white",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      gradientType: "none",
      dotType: "dots",
      cornerType: "",
      cornerDotType: "dot",
      image:
        "https://static-00.iconduck.com/assets.00/logo-snapchat-icon-512x511-rlp671m9.png", // Use your logo here
    },
  },
  {
    label: "Dark",
    style: {
      dotColor: "white",
      cornerColor: "white",
      backgroundColor: "black",
      gradientColor1: "#ff8c00",
      gradientColor2: "#ffd700",
      cornerDotTypeColor: "white",
      gradientType: "none",
      dotType: "classy",
      cornerType: "extra-rounded",
      cornerDotType: "extra-rounded",
    },
  },
  {
    label: "color fancy",
    style: {
      dotColor: "#6528F7",
      cornerColor: "#A076F9",
      cornerDotTypeColor: "#A076F9",
      backgroundColor: "#EDE4FF",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "none",
      dotType: "rounded",
      cornerType: "square",
      cornerDotType: "extra-rounded",
    },
  },
  {
    label: "color fancy",
    style: {
      dotColor: "#F5F5F5",
      cornerColor: "#E2D784",
      cornerDotTypeColor: "#E2D784",
      backgroundColor: "#062C30",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "none",
      dotType: "square",
      cornerType: "circle",
      cornerDotType: "square",
    },
  },
  {
    label: "color fancy",
    style: {
      dotColor: "#6C0345",
      cornerColor: "#DC6B19",
      cornerDotTypeColor: "#DC6B19",
      backgroundColor: "#FFF8DC",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "none",
      dotType: "extra-rounded",
      cornerType: "square",
      cornerDotType: "square",
    },
  },
];

const QRPalletes = ({ applyStyle, data }) => {
  const qrPreviewRefs = useRef([]);

  useEffect(() => {
    qrStyles.forEach((styleObj, index) => {
      const qrRef = qrPreviewRefs.current[index];
      if (qrRef && !qrRef.qrCodeInstance) {
        const qrCodeInstance = new QRCodeStyling({
          width: 200,
          height: 200,
          margin: 2,
          image: styleObj.style.image,
          type: "svg",
          data: data,
          dotsOptions: {
            color: styleObj.style.dotColor,
            type: styleObj.style.dotType,
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
          },
          cornersSquareOptions: {
            color: styleObj.style.cornerColor,
            type: styleObj.style.cornerType,
          },
          imageOptions: {
            crossOrigin: "anonymous",
            margin: 4,
            hideBackgroundDots: true,
          },
          backgroundOptions: {
            color: styleObj.style.backgroundColor,
          },
          cornersDotOptions: {
            color: styleObj.style.cornerDotTypeColor,
            type: styleObj.style.cornerDotType,
          },
        });

        qrRef.qrCodeInstance = qrCodeInstance;
        qrCodeInstance.append(qrRef); // Append QR code to div
      }
    });
  }, []);

  return (
    <div className="flex flex-nowrap gap-2 py-2 overflow-x-auto">
      {qrStyles.map((styleObj, index) => (
        <div
          className="flex flex-col bg-slate-900 rounded-md border "
          key={index}
        >
          <div
            ref={(el) => (qrPreviewRefs.current[index] = el)}
            className="cursor-pointer rounded-md"
            onClick={() => applyStyle(styleObj.style)}
          ></div>
          <p className="text-slate-300 w-full p-3">
            {" "}
            {styleObj.label || `Style ${index + 1}`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QRPalletes;
