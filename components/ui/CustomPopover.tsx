// // components/ui/CustomPopover.tsx
// import React from 'react';
// import { motion } from 'framer-motion';

// interface PopoverProps {
//   title: string;
//   content: string;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const CustomPopover: React.FC<PopoverProps> = ({ title, content, isOpen, onClose },points:String[]) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <motion.div
//         className="absolute inset-0 bg-black opacity-50"
//         onClick={onClose}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ duration: 0.3 }}
//       />
//       <motion.div
//         className="relative bg-white text-black p-6 rounded-lg shadow-lg z-10"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         <h2 className="text-xl font-semibold mb-4">{title}</h2>
//         {/* <p>{content}</p> */}
//         <ul>
//           {points.map((point,index)=>(
//             <li key={index}>{point}</li>
//           ))}
//         </ul>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default CustomPopover;
// components/ui/CustomPopover.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface PopoverProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  points: string[]; // Define the points here
}

const CustomPopover: React.FC<PopoverProps> = ({ title, isOpen, onClose, points }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative z-10 rounded-lg bg-white p-6 text-black shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="mb-4 text-xl font-semibold">{title}</h2>
        {/* Show the bullet points */}
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <button
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default CustomPopover;
