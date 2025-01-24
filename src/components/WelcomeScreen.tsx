import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-reveal-pink to-reveal-blue"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center space-y-6"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">GENDER REVEAL</h1>
          <p className="text-lg text-gray-600">Share the joy of your special moment</p>
        </div>
        
        <Button 
          onClick={() => navigate("/reveal")}
          className="bg-white text-gray-800 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 rounded-full text-lg"
        >
          Start Your Reveal
        </Button>
      </motion.div>
    </motion.div>
  );
};