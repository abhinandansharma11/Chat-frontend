const AuthVisualHero = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center relative overflow-hidden bg-base-100 border-l border-base-300 p-12">
      
      {/* Layered Background Elements */}
      {/* These create that 'calm' startup depth without using images */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-base-300/30 rounded-full blur-[100px]" />

      <div className="max-w-md w-full relative z-10 space-y-12">
        
        {/* Modern Mock Chat - Polished & Minimal */}
        <div className="space-y-6">
          {/* Message 1 */}
          <div className="flex items-start gap-4 transform -rotate-1 translate-x-[-10px]">
            <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-base-300 flex items-center justify-center font-bold text-primary text-sm flex-shrink-0">
              AS
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-base-300 p-4 rounded-2xl rounded-tl-none shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <p className="text-sm text-base-content/80 font-medium">
                Hey! Wassup Broo?.
              </p>
            </div>
          </div>

          {/* Message 2 */}
          <div className="flex items-end justify-end gap-4 transform rotate-1 translate-x-[10px]">
            <div className="bg-primary shadow-[0_8px_20px_rgba(var(--p),0.3)] p-4 rounded-2xl rounded-tr-none text-primary-content">
              <p className="text-sm font-medium">
                Nothing , YOU say man?. ✨
              </p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center font-bold text-primary-content text-sm flex-shrink-0 shadow-lg">
              ME
            </div>
          </div>

         
        </div>

        {/* Headline & Subtext */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-base-content">
            {title}
          </h2>
          <p className="text-lg text-base-content/60 leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthVisualHero;