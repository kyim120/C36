
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

const StepIndicator = ({ currentStep, totalSteps, steps }: StepIndicatorProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-700">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
        
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={step} className="flex flex-col items-center relative z-10">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                  {
                    "bg-gradient-to-r from-blue-500 to-purple-500 text-white animate-glow": isActive,
                    "bg-gradient-to-r from-green-500 to-blue-500 text-white": isCompleted,
                    "bg-gray-700 text-gray-400": !isActive && !isCompleted,
                  }
                )}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>
              <span className={cn(
                "mt-2 text-xs font-medium transition-colors duration-300",
                {
                  "text-blue-400": isActive,
                  "text-green-400": isCompleted,
                  "text-gray-500": !isActive && !isCompleted,
                }
              )}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;