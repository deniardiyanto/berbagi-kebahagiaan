import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import confetti from "canvas-confetti";

export const RevealScreen = () => {
  const [revealed, setRevealed] = useState(false);
  const [gender] = useState<"boy" | "girl">("girl"); // Changed to girl

  const handleReveal = () => {
    setRevealed(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFB6C1', '#FFC0CB', '#FF69B4'] // Pink confetti colors
    });
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Gender Reveal",
        text: `It's a ${gender}! 🎉`,
        url: window.location.href
      });
    } catch (err) {
      console.log("Error sharing:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-reveal-pink to-reveal-blue">
      <AnimatePresence>
        {!revealed ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-800">Sudah Siap?</h2>
            <Button
              onClick={handleReveal}
              className="bg-white text-gray-800 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 rounded-full text-lg"
            >
              Click Now
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-accent-pink">It's a</h2>
              <p className="text-6xl font-bold text-accent-pink">
                {gender.toUpperCase()}!
              </p>
            </motion.div>
            
            <Button
              onClick={handleShare}
              className="bg-white text-gray-800 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-4 rounded-full"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Umumkan ke Dunia
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};