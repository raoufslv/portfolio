import icons from "../settings/skillsIcons.js";
import { motion, AnimatePresence } from "framer-motion";

export default function Listicons({ selected }) {
  const selectedIcons = icons[selected] || [];

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex flex-wrap gap-10"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
            hidden: {
              transition: { staggerChildren: 0.1, staggerDirection: -1 },
            },
          }}
        >
          {selectedIcons.map((icon, index) => (
            <motion.img
              key={`${selected}-${index}`}
              src={icon}
              className="w-20 cursor-pointer"
              alt="icon"
              initial={{ scale: 0.2, opacity: 0.2 }}
              whileInView={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.2, opacity: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
