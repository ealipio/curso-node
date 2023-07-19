import { useElementOnScreen } from "../hooks/useElementOnScreen";

// https://johnckealy.medium.com/how-to-create-slide-in-on-scroll-animations-in-a-react-app-127eae92ee16

type Props = {
  children: React.ReactNode;
  reappear?: boolean;
  threshold?: number;
};

const AnimateOnScroll = ({ children, reappear, threshold = 0.5 }: Props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  return (
    <>
      <div
        ref={containerRef}
        className={`transition duration-1000 ${
          isVisible ? "translate-x-0 opacity-100 blur-none" : "-translate-x-20 opacity-0 blur-lg"
        }  motion-reduce:transition-none motion-reduce:hover:transform-none`}
      >
        {children}
      </div>
    </>
  );
};

export default AnimateOnScroll;
