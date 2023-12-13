
// import React, { useState, useRef } from 'react';
// import Draggable from 'react-draggable';
// import html2canvas from 'html2canvas';
// // import domtoimage from 'dom-to-image';
// import { SketchPicker } from 'react-color';
// import Select from 'react-select';
// import { FaStickerMule, FaEye, FaEyeSlash } from 'react-icons/fa';

// import '../App.css';

// const textAlignmentOptions = [
//   { label: 'Left', value: 'left' },
//   { label: 'Center', value: 'center' },
//   { label: 'Right', value: 'right' },
// ];

// const memeTemplates = [
//     { label: 'Sher Meme', value: 'meme2.jpg', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0pZqailoW-lWqYcLUhyUdDnnB3eq1zstIQ&usqp=CAU" },
//     { label: 'AKshay Kumar', value: 'meme2.jpg', src: "https://static.toiimg.com/thumb/msid-99138978,width-1280,resizemode-4/99138978.jpg" },
// ];

// function App() {
//   const [topText, setTopText] = useState('');
//   const [bottomText, setBottomText] = useState('');
//   const [memeTemplate, setMemeTemplate] = useState('');
//   const [textColor, setTextColor] = useState('#ffffff');
//   const [fontSize, setFontSize] = useState(20);
//   const [textAlign, setTextAlign] = useState('center');
//   const [showTopCaption, setShowTopCaption] = useState(true);
//   const [showBottomCaption, setShowBottomCaption] = useState(true);
//   const [sticker, setSticker] = useState(null);
//   const memeContainerRef = useRef(null);
//   const fileInputRef = useRef(null);



// const handleDownload = () => {
//   if (!memeTemplate) {
//     alert('Please select or upload an image before downloading.');
//     return;
//   }

//   const container = memeContainerRef.current;
//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');

//   const image = new Image();
//   image.crossOrigin = 'Anonymous';
//   image.src = memeTemplate;

//   image.onload = () => {
//     // Set canvas dimensions to match image dimensions
//     canvas.width = image.width;
//     canvas.height = image.height;

//     // Draw the memeTemplate image onto the canvas
//     ctx.drawImage(image, 0, 0, image.width, image.height);

//     // Draw captions and stickers on the canvas
//     // Note: Adjust the positioning based on your requirements
//     if (showTopCaption) {
//       ctx.fillStyle = textColor;
//       ctx.font = `${fontSize}px Arial`;
//       ctx.textAlign = textAlign;
//       ctx.fillText(topText, canvas.width / 2, 30); // Adjust the vertical position
//     }

//     if (showBottomCaption) {
//       ctx.fillStyle = textColor;
//       ctx.font = `${fontSize}px Arial`;
//       ctx.textAlign = textAlign;
//       ctx.fillText(bottomText, canvas.width / 2, canvas.height - 10); // Adjust the vertical position
//     }

//     if (sticker) {
//       // Draw the sticker on the canvas
//       // Note: Adjust the positioning based on your requirements
//       ctx.drawImage(sticker, 10, 10); // Adjust the coordinates
//     }

//     // Convert the canvas to data URL and trigger download
//     const link = document.createElement('a');
//     link.href = canvas.toDataURL();
//     link.download = 'meme.png';
//     link.click();
//   };
// };





//   const handleTemplateChange = (selectedTemplate) => {
//     setMemeTemplate(selectedTemplate.src);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setMemeTemplate(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleTextChange = (type, newText) => {
//     if (type === 'top') {
//       setTopText(newText);
//     } else if (type === 'bottom') {
//       setBottomText(newText);
//     }
//   };

//   const handleColorChange = (color) => {
//     setTextColor(color.hex);
//   };

//   const handleFontSizeChange = (e) => {
//     setFontSize(parseInt(e.target.value, 10));
//   };

//   const handleTextAlignChange = (selectedOption) => {
//     setTextAlign(selectedOption.value);
//   };

//   const handleToggleCaption = (type) => {
//     if (type === 'top') {
//       setShowTopCaption(!showTopCaption);
//     } else if (type === 'bottom') {
//       setShowBottomCaption(!showBottomCaption);
//     }
//   };

//   const handleStickerChange = (stickerType) => {
//     setSticker(stickerType);
//   };

//   const handleReset = () => {
//     setTopText('');
//     setBottomText('');
//     setMemeTemplate('');
//     setTextColor('#ffffff');
//     setFontSize(20);
//     setTextAlign('center');
//     setShowTopCaption(true);
//     setShowBottomCaption(true);
//     setSticker(null);
//   };

//   return (
//     <div className="App">
//       <div className="meme-container" ref={memeContainerRef}>
//         {memeTemplate && (
//           <>
//             <img src={memeTemplate} alt="Meme Template" className="meme-img" />

//             {showTopCaption && (
//               <Draggable bounds="parent">
//                 <div
//                   className="top-caption"
//                   contentEditable
//                   style={{ color: textColor, fontSize: `${fontSize}px`, textAlign }}
//                   onInput={(e) => handleTextChange('top', e.currentTarget.textContent)}
//                 >
//                   {topText}
//                 </div>
//               </Draggable>
//             )}

//             {showBottomCaption && (
//               <Draggable bounds="parent">
//                 <div
//                   className="bottom-caption"
//                   contentEditable
//                   style={{ color: textColor, fontSize: `${fontSize}px`, textAlign }}
//                   onInput={(e) => handleTextChange('bottom', e.currentTarget.textContent)}
//                 >
//                   {bottomText}
//                 </div>
//               </Draggable>
//             )}

//             {sticker && (
//               <Draggable bounds="parent">
//                 <div className="sticker">{sticker}</div>
//               </Draggable>
//             )}
//           </>
//         )}
//       </div>

//       <div className="text-inputs">
//         <input
//           type="text"
//           placeholder="Top Text"
//           value={topText}
//           onChange={(e) => setTopText(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Bottom Text"
//           value={bottomText}
//           onChange={(e) => setBottomText(e.target.value)}
//         />
//       </div>

//       <div className="text-options">
//         <label>
//           Font Size:
//           <input type="number" value={fontSize} onChange={handleFontSizeChange} />
//         </label>

//         <label>
//           Text Color:
//           <SketchPicker color={textColor} onChange={handleColorChange} />
//         </label>

//         <label>
//           Text Alignment:
//           <Select
//             options={textAlignmentOptions}
//             value={textAlignmentOptions.find((option) => option.value === textAlign)}
//             onChange={handleTextAlignChange}
//           />
//         </label>
//       </div>

//       <div className="caption-toggle">
//         <button onClick={() => handleToggleCaption('top')}>
//           {showTopCaption ? <FaEye /> : <FaEyeSlash />} Top Caption
//         </button>
//         <button onClick={() => handleToggleCaption('bottom')}>
//           {showBottomCaption ? <FaEye /> : <FaEyeSlash />} Bottom Caption
//         </button>
//       </div>

//       <div className="sticker-options">
//         <button onClick={() => handleStickerChange(<FaStickerMule />)}>
//           <FaStickerMule /> Sticker 1
//         </button>
//         {/* Add more stickers as needed */}
//       </div>

//       <div className="file-input">
//         <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
//         <button onClick={() => fileInputRef.current.click()}>Upload Image</button>
//       </div>

//       <div className="template-options">
//         <label>Select a Meme Template:</label>
//         <Select
//           options={memeTemplates}
//           onChange={(selectedOption) => handleTemplateChange(selectedOption)}
//           value={memeTemplates.find((template) => template.src === memeTemplate)}
//         />
//       </div>

//       <button onClick={handleDownload} disabled={!memeTemplate}>
//         Download Meme
//       </button>

//       <button onClick={handleReset}>Reset</button>

//       <div className="instructions">
//         <h2>Instructions:</h2>
//         <p>
//           1. Select a meme template or upload your own image.
//           <br />
//           2. Enter text for the top and bottom captions.
//           <br />
//           3. Customize text style and alignment.
//           <br />
//           4. Toggle visibility of captions.
//           <br />
//           5. Add stickers to your meme.
//           <br />
//           6. Drag elements to the desired position.
//           <br />
//           7. Click "Download Meme" to save your creation.
//           <br />
//           8. Click "Reset" to start over.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;   



import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import { SketchPicker } from 'react-color';
import Select from 'react-select';
import { FaStickerMule, FaEye, FaEyeSlash } from 'react-icons/fa';

import '../App.css';

const textAlignmentOptions = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
];


const pickerStyles = {
  default: {
    picker: {
      boxShadow: 'none',
      // marginLeft: '1000px',
      
    },
    saturation: {
      borderRadius: '3px 3px 0 0',
    },
    hue: {
      borderRadius: '0 0 3px 3px',
    },
  },
};

const memeTemplates = [
  { label: 'Sher Meme', value: 'meme2.jpg', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0pZqailoW-lWqYcLUhyUdDnnB3eq1zstIQ&usqp=CAU' },
  { label: 'AKshay Kumar', value: 'meme2.jpg', src: 'https://static.toiimg.com/thumb/msid-99138978,width-1280,resizemode-4/99138978.jpg' },
  { label: 'Bhupendra Jogi', value: 'meme3.jpg', src: 'https://memeheist.com/wp-content/uploads/2023/11/Bhupendra-Jogi-Meme-Template-1.jpg' },
  { label: 'Lalu Yadav', value: 'meme4.jpg', src: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/202202/lalu-prasad-yadav-convicted-sixteen_nine.jpg?size=948:533' },
  { label: 'Rahul Gandhi', value: 'meme5.jpg', src: 'https://indianmemetemplates.com/wp-content/uploads/maza-aaya-aur-ye-mazaa-mein-poore-desh-ko-dena-chahta-hun.jpg' },
  { label: 'Jethalal', value: 'meme6.jpg', src: 'https://1.bp.blogspot.com/-o5HiwZcOvNg/YGwbMFAfKEI/AAAAAAAAA_I/TDGN43MLGoc5wQ-U5E1YUG4Cv2xkbIkjwCLcBGAsYHQ/w700/Screenshot_2021-04-06-13-55-28-67.jpg' },
  { label: 'Mr Bean', value: 'meme7.jpg', src: 'https://memestemplates.in/uploads/1640209265.jpeg' },
  { label: 'Khaby', value: 'meme8.jpg', src: 'https://memes.co.in/memes/update/uploads/2021/05/2c171cf-01.jpeg' },
  { label: 'Sigma', value: 'meme9.jpg', src: 'https://us-tuna-sounds-images.voicemod.net/4e055c82-9d12-4e84-9fb1-deb282a87689-1680412949409.jpg' },
  { label: 'GigaChad', value: 'meme10.jpg', src: 'https://e0.pxfuel.com/wallpapers/136/619/desktop-wallpaper-giga-chad-ideas-chad-memes-muscle-men-thumbnail.jpg' },

];

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(20);
  const [textAlign, setTextAlign] = useState('center');
  const [showTopCaption, setShowTopCaption] = useState(true);
  const [showBottomCaption, setShowBottomCaption] = useState(true);
  const [sticker, setSticker] = useState(null);
  const memeContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  // const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorPickerPosition, setColorPickerPosition] = useState({ top: 460, left: 590 });

  const handleDownload = () => {
    if (!memeTemplate) {
      alert('Please select or upload an image before downloading.');
      return;
    }
    const handleColorTextClick = (e) => {
      // Get the position of the clicked element
      const rect = e.target.getBoundingClientRect();
      
      // Calculate the position for the color picker
      const top = rect.top - 120; // Adjust the value based on your layout
      const left = rect.left - 150; // Adjust the value based on your layout
  
      // Set the position and show the color picker
      setColorPickerPosition({ top, left });
      // setShowColorPicker(!showColorPicker);
    };


    const container = memeContainerRef.current;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = memeTemplate;

    image.onload = () => {
      // Set canvas dimensions to match image dimensions
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the memeTemplate image onto the canvas
      ctx.drawImage(image, 0, 0, image.width, image.height);

      // Draw captions and stickers on the canvas
      if (showTopCaption) {
        ctx.fillStyle = textColor;
        ctx.font = `${fontSize}px Arial`;
        ctx.textAlign = textAlign;
        ctx.fillText(topText, canvas.width / 2, 30);
      }

      if (showBottomCaption) {
        ctx.fillStyle = textColor;
        ctx.font = `${fontSize}px Arial`;
        ctx.textAlign = textAlign;
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 10);
      }

      if (sticker) {
        ctx.drawImage(sticker, 10, 10);
      }

      // Convert the canvas to data URL and trigger download
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'meme.png';
      link.click();
    };
  };

  const handleTemplateChange = (selectedTemplate) => {
    setMemeTemplate(selectedTemplate.src);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMemeTemplate(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (type, newText) => {
    if (type === 'top') {
      setTopText(newText);
    } else if (type === 'bottom') {
      setBottomText(newText);
    }
  };

  const handleColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value, 10));
  };

  const handleTextAlignChange = (selectedOption) => {
    setTextAlign(selectedOption.value);
  };

  const handleToggleCaption = (type) => {
    if (type === 'top') {
      setShowTopCaption(!showTopCaption);
    } else if (type === 'bottom') {
      setShowBottomCaption(!showBottomCaption);
    }
  };

  const handleStickerChange = (stickerType) => {
    setSticker(stickerType);
  };

  const handleReset = () => {
    setTopText('');
    setBottomText('');
    setMemeTemplate('');
    setTextColor('#ffffff');
    setFontSize(20);
    setTextAlign('center');
    setShowTopCaption(true);
    setShowBottomCaption(true);
    setSticker(null);
  };

  const handleColorTextClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const noImageText = 'No Images to Preview. Please select an image.';

  return (
    <div className="App">
   
      <div className="meme-container" ref={memeContainerRef}>
        {memeTemplate ? (
          <>
            <img src={memeTemplate} alt="Meme Template" className="meme-img" />

            {showTopCaption && (
              <Draggable bounds="parent">
                <div
                  className="top-caption"
                  contentEditable
                  style={{ color: textColor, fontSize: `${fontSize}px`, textAlign }}
                  onInput={(e) => handleTextChange('top', e.currentTarget.textContent)}
                >
                  {topText}
                </div>
              </Draggable>
            )}

            {showBottomCaption && (
              <Draggable bounds="parent">
                <div
                  className="bottom-caption"
                  contentEditable
                  style={{ color: textColor, fontSize: `${fontSize}px`, textAlign }}
                  onInput={(e) => handleTextChange('bottom', e.currentTarget.textContent)}
                >
                  {bottomText}
                </div>
              </Draggable>
            )}

            {sticker && (
              <Draggable bounds="parent">
                <div className="sticker">{sticker}</div>
              </Draggable>
            )}
          </>
        ) : (
          <>
          <div className="no-image-message">
          <p className="no-image-text">{noImageText}</p>
            <div className="file-input">
              <input type="file" className='hidden' accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
              <button className='upload-btn' onClick={() => fileInputRef.current.click()}>Upload Image</button>
            </div>
          </div>

           
          </>
        )}
      </div>

      <div className="text-inputs">
        <input className='input'
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input className='input'
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>

      <div className="text-options">
        <label>
          Font Size:
          <input className='font-input' type="number" value={fontSize} onChange={handleFontSizeChange} />
        </label>
{/* <div className="text-color">
<label>
         <p> Text Color:</p>
          <SketchPicker color={textColor} onChange={handleColorChange} styles={pickerStyles}/>

          {showColorPicker && (
              <SketchPicker color={textColor} onChange={handleColorChange} styles={pickerStyles} />
            )}

        </label>
</div> */}

<div className="text-color" style={{ position: 'absolute', top: colorPickerPosition.top, left: colorPickerPosition.left }}>
          <label>
            <p onClick={handleColorTextClick}> Pick Text color:🤹🏿‍♂️ </p>
            {showColorPicker && (
              <SketchPicker color={textColor} onChange={handleColorChange} styles={pickerStyles} />
            )}
          </label>
        </div>
       

<div className="alignment">
<label>
        Text Alignment:
          <Select
            options={textAlignmentOptions}
            value={textAlignmentOptions.find((option) => option.value === textAlign)}
            onChange={handleTextAlignChange}
          />
        </label>
</div>
       
      </div>

      <div className="caption-toggle">
        <button onClick={() => handleToggleCaption('top')}>
          {showTopCaption ? <FaEye /> : <FaEyeSlash />} Top Caption
        </button>
        <button onClick={() => handleToggleCaption('bottom')}>
          {showBottomCaption ? <FaEye /> : <FaEyeSlash />} Bottom Caption
        </button>
      </div>

      <div className="sticker-options">
        <button onClick={() => handleStickerChange(<FaStickerMule />)}>
          <FaStickerMule /> Sticker 1
        </button>
        {/* Add more stickers as needed */}
      </div>

      <div className="template-options">
        <label>  Select a Meme Template:</label>
        <Select
          options={memeTemplates}
          onChange={(selectedOption) => handleTemplateChange(selectedOption)}
          value={memeTemplates.find((template) => template.src === memeTemplate)}
        />
      </div>

      <button onClick={handleDownload} disabled={!memeTemplate}>
        Download Meme
      </button>

      <button onClick={handleReset}>Reset</button>

      <div className="instructions">
        <h2>Instructions:</h2>
        <p>
          1. Select a meme template or upload your own image.
          <br />
          2. Enter text for the top and bottom captions.
          <br />
          3. Customize text style and alignment.
          <br />
          4. Toggle visibility of captions.
          <br />
          5. Add stickers to your meme.
          <br />
          6. Drag elements to the desired position.
          <br />
          7. Click "Download Meme" to save your creation.
          <br />
          8. Click "Reset" to start over.
        </p>
      </div>
    </div>
  );
}

export default App;
