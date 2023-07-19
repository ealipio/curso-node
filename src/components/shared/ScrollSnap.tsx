export function ScrollSnapX() {
  return (
    <div className="mx-auto flex h-screen w-96 snap-x snap-mandatory overflow-scroll">
      <div className="flex h-screen w-96 flex-shrink-0 snap-start items-center justify-center bg-amber-400 text-8xl">
        1
      </div>
      <div className="flex h-screen w-96 flex-shrink-0 snap-start items-center justify-center bg-cyan-400 text-8xl">
        2
      </div>
      <div className="flex h-screen w-96 flex-shrink-0 snap-start items-center justify-center bg-lime-400 text-8xl">
        3
      </div>
      <div className="flex h-screen w-96 flex-shrink-0 snap-start items-center justify-center bg-indigo-400 text-8xl">
        4
      </div>
    </div>
  );
}

export function ScrollSnapY() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll">
      <div className="flex h-screen w-screen snap-start items-center justify-center bg-amber-400 text-8xl">1</div>
      <div className="flex h-screen w-screen snap-start items-center justify-center bg-cyan-400 text-8xl">2</div>
      <div className="flex h-screen w-screen snap-start items-center justify-center bg-lime-400 text-8xl">3</div>
      <div className="flex h-screen w-screen snap-start items-center justify-center bg-indigo-400 text-8xl">4</div>
    </div>
  );
}
