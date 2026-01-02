import BlurText from "./blurText"

export default function Title({children, className=""}){
    const handleAnimationComplete = () => {
};
    return(
        <h2 className={`flex items-center gap-3 text-2xl sm:text-3xl font-bold ${className}`}>
          <span className="inline-block w-[5px] h-5 sm:h-6 lg:h-7 bg-orange-400"/>
          <BlurText
            text={children}
            delay={100}
            animateBy="chars"
            direction="top"
            onAnimationComplete={handleAnimationComplete}>
          {children}</BlurText>
          </h2>
    )
}