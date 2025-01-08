import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import FinancialProjections from "./FinancialProjections";

export const FinancialProjectionsDialog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="bg-custom-purple hover:bg-custom-purple/90 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M12 3v18" />
              <path d="M3 12h18" />
            </svg>
            View Financial Projections
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto">
          <FinancialProjections />
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};