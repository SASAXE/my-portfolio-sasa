import { GradientButton } from "./gradient-button";

function GradientButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4 p-8 justify-center">
      <GradientButton>View my work</GradientButton>
      <GradientButton variant="variant">Get in touch</GradientButton>
    </div>
  );
}

export { GradientButtonDemo };
